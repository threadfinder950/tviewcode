/**
 * Wraps async functions to catch errors and pass to Express error middleware
 * @param fn Async Express handler function
 * @returns Express middleware function
 */
export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
