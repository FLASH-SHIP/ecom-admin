"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevDiagnosticsBypassEnabled = isDevDiagnosticsBypassEnabled;
/**
 * Helper to check if development diagnostics bypass is enabled.
 * Default is `true` unless `ALLOW_DEV_DIAGNOSTICS` is explicitly set to `"0"` or `"false"`.
 */
function isDevDiagnosticsBypassEnabled() {
    var flag = process.env.ALLOW_DEV_DIAGNOSTICS;
    if (flag === "0" || flag === "false") {
        return false;
    }
    return true;
}
