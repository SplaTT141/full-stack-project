import Joi from 'joi';

export function registerValidation(data) {
    const schema = Joi.object({
        username: Joi.string().min(5).max(20).alphanum().required(),
        email: Joi.string().email().max(50).lowercase().trim().required(),
        password: Joi.string().min(128).max(128).required(),
    });

    return schema.validate(data);
}

