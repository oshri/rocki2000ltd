const validators = {
    string: (value) => {
        return typeof(value) == 'string'  && value.trim().length > 0 ? value.trim() : false;
    }
};

module.exports = validators;