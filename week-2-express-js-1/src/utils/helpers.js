// src/utils/helpers.js
export const formatResponse = (data, message = 'Success') => {
    return {
        status: 'success',
        message,
        data,
    };
};

export const handleError = (error) => {
    return {
        status: 'error',
        message: error.message || 'An unexpected error occurred',
    };
};