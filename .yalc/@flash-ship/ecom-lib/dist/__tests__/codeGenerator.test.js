"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var codeGenerator_1 = require("../codeGenerator");
(0, vitest_1.describe)("Code Generator Helpers", function () {
    (0, vitest_1.it)("should generate random string of correct length", function () {
        var str = (0, codeGenerator_1.generateRandomString)(8);
        (0, vitest_1.expect)(str).toHaveLength(8);
        (0, vitest_1.expect)(typeof str).toBe("string");
    });
    (0, vitest_1.it)("should only contain letters from the custom alphabet", function () {
        var ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
        var str = (0, codeGenerator_1.generateRandomString)(100);
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var char = str_1[_i];
            (0, vitest_1.expect)(ALPHABET).toContain(char);
        }
    });
    (0, vitest_1.it)("should generate formatted entity codes with prefix and date", function () {
        var code = (0, codeGenerator_1.generateEntityCode)("EC");
        // Format: EC + YYMMDD + 8 characters = 16 characters
        (0, vitest_1.expect)(code).toHaveLength(16);
        (0, vitest_1.expect)(code.startsWith("EC")).toBe(true);
        var now = new Date();
        var yy = String(now.getFullYear()).slice(-2);
        var mm = String(now.getMonth() + 1).padStart(2, "0");
        var dd = String(now.getDate()).padStart(2, "0");
        var dateStr = "".concat(yy).concat(mm).concat(dd);
        (0, vitest_1.expect)(code.slice(2, 8)).toBe(dateStr);
    });
    (0, vitest_1.it)("should not generate duplicate codes", function () {
        var codes = new Set();
        var count = 1000;
        for (var i = 0; i < count; i++) {
            codes.add((0, codeGenerator_1.generateEntityCode)("EC"));
        }
        (0, vitest_1.expect)(codes.size).toBe(count);
    });
    (0, vitest_1.it)("should generate customer code with correct prefix and length", function () {
        var code = (0, codeGenerator_1.generateCustomerCode)("KH", 6);
        (0, vitest_1.expect)(code).toHaveLength(8); // "KH" (2) + 6 chars = 8
        (0, vitest_1.expect)(code.startsWith("KH")).toBe(true);
        var defaultCode = (0, codeGenerator_1.generateCustomerCode)();
        (0, vitest_1.expect)(defaultCode).toHaveLength(8);
        (0, vitest_1.expect)(defaultCode.startsWith("KH")).toBe(true);
    });
});
