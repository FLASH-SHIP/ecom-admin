"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = generateRandomString;
exports.generateEntityCode = generateEntityCode;
exports.generateCustomerCode = generateCustomerCode;
exports.generateOrderCode = generateOrderCode;
var node_crypto_1 = require("node:crypto");
var ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
/**
 * Generates an unbiased, cryptographically secure random string using a custom 32-character alphabet.
 * Since 32 divides 256 evenly, using modulo arithmetic on random bytes is mathematically 100% unbiased.
 */
function generateRandomString(length) {
    var _a;
    var bytes = node_crypto_1.default.randomBytes(length);
    var alphabetLength = ALPHABET.length;
    var result = "";
    for (var i = 0; i < length; i++) {
        var byte = (_a = bytes[i]) !== null && _a !== void 0 ? _a : 0;
        result += ALPHABET.charAt(byte % alphabetLength);
    }
    return result;
}
/**
 * Generates a unique business entity code.
 * Format: [PREFIX][YYMMDD][8-CHAR-BASE32]
 * Example: EC260708BQHEWXU0
 *
 * @param prefix Configurable prefix for the entity (e.g. "EC", "INV", "TXN")
 * @returns The formatted entity code
 */
function generateEntityCode(prefix) {
    var now = new Date();
    var yy = String(now.getFullYear()).slice(-2);
    var mm = String(now.getMonth() + 1).padStart(2, "0");
    var dd = String(now.getDate()).padStart(2, "0");
    var dateStr = "".concat(yy).concat(mm).concat(dd);
    var suffix = generateRandomString(8);
    return "".concat(prefix).concat(dateStr).concat(suffix);
}
/**
 * Generates a short, human-readable customer code.
 * Format: [PREFIX][6-CHAR-BASE32]
 * Example: KH8F32AQ
 *
 * @param prefix Configurable prefix for customer code (defaults to "KH")
 * @param length Length of random suffix (defaults to 6)
 * @returns The formatted customer code
 */
function generateCustomerCode(prefix, length) {
    if (prefix === void 0) { prefix = "KH"; }
    if (length === void 0) { length = 6; }
    var suffix = generateRandomString(length);
    return "".concat(prefix).concat(suffix);
}
function generateOrderCode(prefix) {
    if (prefix === void 0) { prefix = "EC"; }
    return generateEntityCode(prefix);
}
