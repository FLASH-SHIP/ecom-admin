"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var sanitize_1 = require("../sanitize");
(0, vitest_1.describe)("stripTags", function () {
    (0, vitest_1.it)("should remove all HTML tags", function () {
        (0, vitest_1.expect)((0, sanitize_1.stripTags)("<b>bold</b>")).toBe("bold");
        (0, vitest_1.expect)((0, sanitize_1.stripTags)('<a href="x">link</a>')).toBe("link");
        (0, vitest_1.expect)((0, sanitize_1.stripTags)("no tags")).toBe("no tags");
    });
    (0, vitest_1.it)("should handle nested tags", function () {
        (0, vitest_1.expect)((0, sanitize_1.stripTags)("<div><p>text</p></div>")).toBe("text");
    });
});
(0, vitest_1.describe)("escapeHtml", function () {
    (0, vitest_1.it)("should escape special characters", function () {
        (0, vitest_1.expect)((0, sanitize_1.escapeHtml)('<script>alert("xss")</script>')).toBe("&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;");
    });
    (0, vitest_1.it)("should escape ampersands", function () {
        (0, vitest_1.expect)((0, sanitize_1.escapeHtml)("a & b")).toBe("a &amp; b");
    });
    (0, vitest_1.it)("should escape single quotes", function () {
        (0, vitest_1.expect)((0, sanitize_1.escapeHtml)("it's")).toBe("it&#39;s");
    });
});
(0, vitest_1.describe)("sanitizeHtml", function () {
    (0, vitest_1.it)("should remove script tags", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeHtml)('<p>safe</p><script>alert("xss")</script>')).toBe("<p>safe</p>");
    });
    (0, vitest_1.it)("should remove event handlers", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeHtml)('<img src="x" onerror="alert(1)">')).toBe('<img src="x">');
    });
    (0, vitest_1.it)("should remove javascript: protocol", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeHtml)('<a href="javascript:alert(1)">click</a>')).toBe('<a href="alert(1)">click</a>');
    });
    (0, vitest_1.it)("should remove style tags", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeHtml)("<style>body{display:none}</style><p>ok</p>")).toBe("<p>ok</p>");
    });
    (0, vitest_1.it)("should remove iframe tags", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeHtml)('<iframe src="evil.com"></iframe><p>ok</p>')).toBe("<p>ok</p>");
    });
});
(0, vitest_1.describe)("sanitizePlainText", function () {
    (0, vitest_1.it)("should strip tags and normalize whitespace", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizePlainText)("  <b>Hello</b>   World  ")).toBe("Hello World");
    });
    (0, vitest_1.it)("should handle empty string", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizePlainText)("")).toBe("");
    });
});
(0, vitest_1.describe)("sanitizeSlug", function () {
    (0, vitest_1.it)("should lowercase and replace invalid chars", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeSlug)("Hello World!")).toBe("hello-world");
    });
    (0, vitest_1.it)("should collapse multiple hyphens", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeSlug)("foo---bar")).toBe("foo-bar");
    });
    (0, vitest_1.it)("should trim hyphens", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeSlug)("-foo-bar-")).toBe("foo-bar");
    });
    (0, vitest_1.it)("should limit length", function () {
        var long = "a".repeat(300);
        (0, vitest_1.expect)((0, sanitize_1.sanitizeSlug)(long).length).toBeLessThanOrEqual(200);
    });
});
(0, vitest_1.describe)("sanitizeEmail", function () {
    (0, vitest_1.it)("should trim and lowercase", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeEmail)("  User@Example.COM  ")).toBe("user@example.com");
    });
});
(0, vitest_1.describe)("sanitizeSearchQuery", function () {
    (0, vitest_1.it)("should strip tags and limit length", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeSearchQuery)('<script>alert("x")</script>hello')).toBe('alert("x")hello');
    });
    (0, vitest_1.it)("should respect max length", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeSearchQuery)("a".repeat(300), 100).length).toBe(100);
    });
});
(0, vitest_1.describe)("sanitizeUrl", function () {
    (0, vitest_1.it)("should accept valid http URLs", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeUrl)("https://example.com/path")).toBe("https://example.com/path");
    });
    (0, vitest_1.it)("should reject javascript: URLs", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeUrl)("javascript:alert(1)")).toBeNull();
    });
    (0, vitest_1.it)("should reject invalid URLs", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeUrl)("not-a-url")).toBeNull();
    });
    (0, vitest_1.it)("should trim whitespace", function () {
        (0, vitest_1.expect)((0, sanitize_1.sanitizeUrl)("  https://example.com  ")).toBe("https://example.com/");
    });
});
