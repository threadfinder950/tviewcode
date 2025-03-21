import { logger } from '../utils/logger';
export const errorHandler = (err, req, res, next) => {
    // Set default status code and message
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Server Error';
    // Log the error
    if (statusCode === 500) {
        logger.error(`[${req.method}] ${req.path} >> ${err.stack}`);
    }
    else {
        logger.warn(`[${req.method}] ${req.path} >> ${message}`);
    }
    // Return error response
    res.status(statusCode).json({
        success: false,
        error: message,
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
        errors: err.errors
    });
};
export class ErrorResponse extends Error {
    constructor(message, statusCode, errors) {
        super(message);
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "errors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.statusCode = statusCode;
        this.errors = errors;
        // This captures the proper prototype chain
        Object.setPrototypeOf(this, ErrorResponse.prototype);
    }
}
