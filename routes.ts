/**
 * These Routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
   "/",
]

/**
 * These Routes require authentication
 * These routes will redirect logged in users to /admim
 * @type {string[]}
 */
export const authRoutes = [
   "/auth/login",
   "/auth/register",
   "/auth/error"
]

/**
 * The Prefix for API authentication routes
 * Routes that start with this prefix are used for API aithentication
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"


/**
 * The Default Redirect for the login button
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/"