'use strict';

module.exports.hello = async (event) => {
// return "Hello world"
    return {
        statusCode: 200,
        body: "Hello world",
    };
};