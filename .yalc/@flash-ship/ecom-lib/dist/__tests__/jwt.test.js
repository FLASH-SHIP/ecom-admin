"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var jwt_1 = require("../jwt");
(0, vitest_1.describe)("Queue Dashboard JWT Helpers", function () {
    (0, vitest_1.it)("should sign and verify a short-lived SSO token", function () {
        var payload = { userId: "123", email: "admin@example.com" };
        var token = (0, jwt_1.signQueueDashboardToken)(payload);
        (0, vitest_1.expect)(token).toBeDefined();
        (0, vitest_1.expect)(typeof token).toBe("string");
        var decoded = (0, jwt_1.verifyQueueDashboardToken)(token);
        (0, vitest_1.expect)(decoded.userId).toBe("123");
        (0, vitest_1.expect)(decoded.email).toBe("admin@example.com");
        (0, vitest_1.expect)(decoded.type).toBe("queue-dashboard-sso");
        (0, vitest_1.expect)(decoded.jti).toBeDefined();
        (0, vitest_1.expect)(typeof decoded.jti).toBe("string");
    });
    (0, vitest_1.it)("should sign and verify a session token", function () {
        var payload = { userId: "123", email: "admin@example.com" };
        var token = (0, jwt_1.signQueueDashboardSession)(payload);
        (0, vitest_1.expect)(token).toBeDefined();
        (0, vitest_1.expect)(typeof token).toBe("string");
        var decoded = (0, jwt_1.verifyQueueDashboardToken)(token);
        (0, vitest_1.expect)(decoded.userId).toBe("123");
        (0, vitest_1.expect)(decoded.email).toBe("admin@example.com");
        (0, vitest_1.expect)(decoded.type).toBe("queue-dashboard-session");
    });
    (0, vitest_1.it)("should fail validation for malformed token", function () {
        (0, vitest_1.expect)(function () { return (0, jwt_1.verifyQueueDashboardToken)("invalid-token"); }).toThrow();
    });
});
