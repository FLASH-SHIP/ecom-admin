"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var crypto_1 = require("../crypto");
(0, vitest_1.describe)("crypto helpers", function () {
    var secret = "whsec_test_secret_123456";
    var payload = { event: "order.created", orderCode: "EC123456" };
    (0, vitest_1.it)("should generate a valid hex HMAC SHA-256 signature", function () {
        var signature = (0, crypto_1.generateHmacSignature)(payload, secret);
        (0, vitest_1.expect)(signature).toBeDefined();
        (0, vitest_1.expect)(typeof signature).toBe("string");
        (0, vitest_1.expect)(signature.length).toBe(64); // 256 bits = 64 hex characters
    });
    (0, vitest_1.it)("should verify valid HMAC signature", function () {
        var signature = (0, crypto_1.generateHmacSignature)(payload, secret);
        var isValid = (0, crypto_1.verifyHmacSignature)(payload, secret, signature);
        (0, vitest_1.expect)(isValid).toBe(true);
    });
    (0, vitest_1.it)("should verify signature prefixed with sha256=", function () {
        var signature = (0, crypto_1.generateHmacSignature)(payload, secret);
        var isValid = (0, crypto_1.verifyHmacSignature)(payload, secret, "sha256=".concat(signature));
        (0, vitest_1.expect)(isValid).toBe(true);
    });
    (0, vitest_1.it)("should reject invalid HMAC signature", function () {
        var isValid = (0, crypto_1.verifyHmacSignature)(payload, secret, "invalid_signature_hex_1234567890abcdef");
        (0, vitest_1.expect)(isValid).toBe(false);
    });
});
