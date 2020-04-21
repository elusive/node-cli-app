'use strict';

/**
 * Helper function for validating method arguments.
 * Can be used to validate any boolean condition.
 */
module.exports = function (condition, ...args) {

    if (condition) {
        return;
    }

    if (args.length === 1 &&
        args[0] instanceof Error) {

        throw args[0];
    }

    throw new Error(args);
};