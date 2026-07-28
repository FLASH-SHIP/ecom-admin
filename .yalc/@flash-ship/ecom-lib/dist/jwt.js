"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signAccessToken = signAccessToken;
exports.signCustomerAccessToken = signCustomerAccessToken;
exports.signRefreshToken = signRefreshToken;
exports.verifyToken = verifyToken;
exports.verifyRefreshToken = verifyRefreshToken;
exports.decodeToken = decodeToken;
exports.getExpirationDate = getExpirationDate;
exports.signQueueDashboardToken = signQueueDashboardToken;
exports.signQueueDashboardSession = signQueueDashboardSession;
exports.verifyQueueDashboardToken = verifyQueueDashboardToken;
var node_crypto_1 = require("node:crypto");
var jsonwebtoken_1 = require("jsonwebtoken");
var JWT_ISSUER = "ecom";
var JWT_AUDIENCE = "ecom-api";
/**
 * Get JWT secret with production safety guard.
 * Throws in production if JWT_SECRET is not set (SEC-01).
 */
function getJwtSecret() {
    var secret = process.env.JWT_SECRET;
    if (!secret) {
        if (process.env.NODE_ENV === "production") {
            throw new Error("CRITICAL: JWT_SECRET environment variable is required in production");
        }
        return "dev-jwt-secret";
    }
    return secret;
}
/**
 * Get separate secret for refresh tokens (SEC-03).
 * Falls back to JWT_SECRET + suffix if JWT_REFRESH_SECRET is not set.
 */
function getJwtRefreshSecret() {
    var refreshSecret = process.env.JWT_REFRESH_SECRET;
    if (refreshSecret)
        return refreshSecret;
    var baseSecret = getJwtSecret();
    if (process.env.NODE_ENV === "production" && !refreshSecret) {
        return "".concat(baseSecret, ":refresh");
    }
    return "".concat(baseSecret, ":refresh");
}
function getJwtAdminSecret() {
    var secret = process.env.JWT_ADMIN_SECRET || process.env.JWT_SECRET;
    if (!secret) {
        if (process.env.NODE_ENV === "production") {
            throw new Error("CRITICAL: JWT_ADMIN_SECRET environment variable is required in production");
        }
        return "dev-jwt-secret";
    }
    return secret;
}
/** Parse a duration string (e.g. "15m", "30d") into seconds. */
function parseDurationToSeconds(duration) {
    var _a;
    var match = duration.match(/^(\d+)([smhd])$/);
    if (!match)
        throw new Error("Invalid duration: ".concat(duration));
    var value = Number.parseInt((_a = match[1]) !== null && _a !== void 0 ? _a : "0", 10);
    var unit = match[2];
    var multipliers = { s: 1, m: 60, h: 3600, d: 86400 };
    var multiplier = multipliers[unit !== null && unit !== void 0 ? unit : ""];
    if (!multiplier)
        throw new Error("Invalid duration unit: ".concat(unit));
    return value * multiplier;
}
function getAccessTokenTtl() {
    return parseDurationToSeconds(process.env.JWT_ACCESS_TOKEN_EXPIRES_IN || "15m");
}
function getRefreshTokenTtl() {
    return parseDurationToSeconds(process.env.JWT_REFRESH_TOKEN_EXPIRES_IN || "30d");
}
/**
 * Sign a JWT access token (short-lived: 15 minutes default).
 * Includes iss/aud claims for multi-service differentiation (SEC-09).
 */
function signAccessToken(payload) {
    var options = {
        expiresIn: getAccessTokenTtl(),
        issuer: JWT_ISSUER,
        audience: JWT_AUDIENCE,
    };
    return jsonwebtoken_1.default.sign(__assign(__assign({}, payload), { type: "access" }), getJwtSecret(), options);
}
/**
 * Sign a JWT access token for Customer users (audience: "ecom-customer").
 */
function signCustomerAccessToken(payload) {
    var options = {
        expiresIn: getAccessTokenTtl(),
        issuer: JWT_ISSUER,
        audience: "ecom-customer",
    };
    return jsonwebtoken_1.default.sign(__assign(__assign({}, payload), { type: "access" }), getJwtSecret(), options);
}
/**
 * Sign a JWT refresh token (long-lived: 30 days default).
 * Uses separate secret from access token (SEC-03).
 * Includes iss/aud claims for multi-service differentiation (SEC-09).
 */
function signRefreshToken(payload) {
    var options = {
        expiresIn: getRefreshTokenTtl(),
        issuer: JWT_ISSUER,
        audience: JWT_AUDIENCE,
    };
    return jsonwebtoken_1.default.sign(__assign(__assign({}, payload), { type: "refresh" }), getJwtRefreshSecret(), options);
}
/**
 * Verify and decode a JWT access token.
 * Throws if the token is invalid or expired.
 */
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, getJwtSecret(), {
        issuer: JWT_ISSUER,
        audience: JWT_AUDIENCE,
    });
}
/**
 * Verify and decode a JWT refresh token using the separate refresh secret.
 */
function verifyRefreshToken(token) {
    return jsonwebtoken_1.default.verify(token, getJwtRefreshSecret(), {
        issuer: JWT_ISSUER,
        audience: JWT_AUDIENCE,
    });
}
/**
 * Decode a JWT token without verification (useful for expired token inspection).
 */
function decodeToken(token) {
    var decoded = jsonwebtoken_1.default.decode(token);
    if (!decoded || typeof decoded === "string")
        return null;
    return decoded;
}
/**
 * Calculate expiration date from a duration string (e.g., "15m", "30d").
 * Reuses parseDurationToSeconds to avoid duplicate logic (PERF-09).
 */
function getExpirationDate(duration) {
    var seconds = parseDurationToSeconds(duration);
    return new Date(Date.now() + seconds * 1000);
}
/**
 * Sign a short-lived SSO token for the Queue dashboard (expires in 60s).
 */
function signQueueDashboardToken(payload) {
    var options = { expiresIn: 60, jwtid: (0, node_crypto_1.randomUUID)() }; // 60 seconds
    return jsonwebtoken_1.default.sign(__assign(__assign({}, payload), { type: "queue-dashboard-sso" }), getJwtAdminSecret(), options);
}
/**
 * Sign a longer-lived session token for the Queue dashboard (expires in 2h).
 */
function signQueueDashboardSession(payload) {
    var options = { expiresIn: "2h" };
    return jsonwebtoken_1.default.sign(__assign(__assign({}, payload), { type: "queue-dashboard-session" }), getJwtAdminSecret(), options);
}
/**
 * Verify queue dashboard JWT.
 */
function verifyQueueDashboardToken(token) {
    return jsonwebtoken_1.default.verify(token, getJwtAdminSecret());
}
