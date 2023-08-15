const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body
        });
        next();
    } catch (e) {
        return res.status(400).send(e.errors);
    }
}

module.exports = validate;