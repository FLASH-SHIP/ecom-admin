"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha256 = sha256;
exports.generateApiKey = generateApiKey;
exports.verifyApiKey = verifyApiKey;
exports.isApiKey = isApiKey;
exports.generateSecureToken = generateSecureToken;
exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
exports.encryptSymmetrically = encryptSymmetrically;
exports.decryptSymmetrically = decryptSymmetrically;
exports.generateHmacSignature = generateHmacSignature;
exports.verifyHmacSignature = verifyHmacSignature;
var node_crypto_1 = require("node:crypto");
var API_KEY_PREFIX = "ecom_";
var API_KEY_LENGTH = 32;
/**
 * Generate a SHA256 hash of the input string.
 */
function sha256(input) {
    return (0, node_crypto_1.createHash)("sha256").update(input).digest("hex");
}
/**
 * Generate a new API key with the `ecom_` prefix.
 * Returns both the raw key (shown once to user) and the hash (stored in DB).
 */
function generateApiKey() {
    var randomPart = (0, node_crypto_1.randomBytes)(API_KEY_LENGTH).toString("hex").slice(0, API_KEY_LENGTH);
    var rawKey = "".concat(API_KEY_PREFIX).concat(randomPart);
    var hashedKey = sha256(rawKey);
    return { rawKey: rawKey, hashedKey: hashedKey };
}
/**
 * Verify an API key by comparing its hash against the stored hash.
 * Uses timing-safe comparison to prevent timing side-channel attacks (SEC-02).
 */
function verifyApiKey(rawKey, storedHash) {
    var computedHash = sha256(rawKey);
    try {
        return (0, node_crypto_1.timingSafeEqual)(Buffer.from(computedHash, "hex"), Buffer.from(storedHash, "hex"));
    }
    catch (_a) {
        return false;
    }
}
/**
 * Check if a token is an API key (starts with `ecom_` prefix).
 */
function isApiKey(token) {
    return token.startsWith(API_KEY_PREFIX);
}
/**
 * Generate a cryptographically secure random string.
 */
function generateSecureToken(length) {
    if (length === void 0) { length = 32; }
    return (0, node_crypto_1.randomBytes)(length).toString("hex");
}
/**
 * Hash a password using bcrypt with 12 salt rounds.
 */
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function () {
        var bcrypt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require("bcryptjs"); })];
                case 1:
                    bcrypt = (_a.sent()).default;
                    return [2 /*return*/, bcrypt.hash(password, 12)];
            }
        });
    });
}
/**
 * Verify a password against a bcrypt hash.
 */
function verifyPassword(password, hash) {
    return __awaiter(this, void 0, void 0, function () {
        var bcrypt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require("bcryptjs"); })];
                case 1:
                    bcrypt = (_a.sent()).default;
                    return [2 /*return*/, bcrypt.compare(password, hash)];
            }
        });
    });
}
// ── Symmetric Encryption (AES-256-GCM) for API Credentials ───────────────────
var ALGORITHM = "aes-256-gcm";
var IV_LENGTH = 12;
function getEncryptionKey() {
    var envKey = process.env.ENCRYPTION_KEY;
    if (!envKey) {
        if (process.env.NODE_ENV === "production") {
            throw new Error("ENCRYPTION_KEY environment variable is not defined in production!");
        }
        // Fallback 32-byte key for local development
        return Buffer.from("7f7c7562e84d4365b210cd47f9e8a1d354b38d38867a4219a5840d04c40b8a3e", "hex");
    }
    // Hash the env string to guarantee a 32-byte key
    return (0, node_crypto_1.createHash)("sha256").update(envKey).digest();
}
/**
 * Encrypt a string symmetrically using AES-256-GCM.
 * Returns a colon-separated string: iv:ciphertext:tag
 */
function encryptSymmetrically(text) {
    var key = getEncryptionKey();
    var iv = (0, node_crypto_1.randomBytes)(IV_LENGTH);
    var cipher = (0, node_crypto_1.createCipheriv)(ALGORITHM, key, iv);
    var encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    var tag = cipher.getAuthTag().toString("hex");
    return "".concat(iv.toString("hex"), ":").concat(encrypted, ":").concat(tag);
}
/**
 * Decrypt an AES-256-GCM encrypted string.
 */
function decryptSymmetrically(encryptedText) {
    var parts = encryptedText.split(":");
    if (parts.length !== 3) {
        throw new Error("Invalid encrypted text format (expected iv:ciphertext:tag)");
    }
    var iv = Buffer.from(parts[0], "hex");
    var ciphertext = parts[1];
    var tag = Buffer.from(parts[2], "hex");
    var key = getEncryptionKey();
    var decipher = (0, node_crypto_1.createDecipheriv)(ALGORITHM, key, iv);
    decipher.setAuthTag(tag);
    var decrypted = decipher.update(ciphertext, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}
// ── Webhook HMAC SHA-256 Signature ───────────────────────────────────────────
/**
 * Generate HMAC SHA-256 signature for outgoing webhook payload.
 */
function generateHmacSignature(payload, secret) {
    var data = typeof payload === "string" ? payload : JSON.stringify(payload);
    return (0, node_crypto_1.createHmac)("sha256", secret).update(data, "utf-8").digest("hex");
}
/**
 * Verify HMAC SHA-256 signature from incoming webhook request.
 */
function verifyHmacSignature(payload, secret, expectedSignature) {
    try {
        var actualSignature = generateHmacSignature(payload, secret);
        var expectedBuf = Buffer.from(expectedSignature.replace(/^sha256=/, ""), "hex");
        var actualBuf = Buffer.from(actualSignature, "hex");
        if (expectedBuf.length !== actualBuf.length) {
            return false;
        }
        return (0, node_crypto_1.timingSafeEqual)(expectedBuf, actualBuf);
    }
    catch (_a) {
        return false;
    }
}
