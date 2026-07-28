export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Validate environment variables on startup
    await import("./env");
  }
}
