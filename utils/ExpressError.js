class ExpressError extends Error{
    Error (statusCode ,message){
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;