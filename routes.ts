/**
 * An array of routes that are accessible to the public
 * These routes do not require authantication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification", "/auth/new-password"];

/**
 * An array of routes that are used for authantication
 * These routes redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
];

/**
 * The prefix for API authantication routes
 * Routes that starts with this prefix are used for API authantication purpoes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
