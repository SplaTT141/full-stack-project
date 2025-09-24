import Joi from 'joi';

export function registerValidation(data) {
    const schema = Joi.object({
        username: Joi.string().min(5).max(20).alphanum().required(),
        email: Joi.string().email().max(50).lowercase().trim().required(),
        password: Joi.string().min(6).max(40).required(),
    });

    return schema.validate(data);
}

export function loginValidation(data) {
    const schema = Joi.object({
        usernameOrEmail: Joi.alternatives().try(
            Joi.string().min(5).max(20).alphanum(),
            Joi.string().email().max(50).lowercase().trim()
        ).required(),
        password: Joi.string().min(6).max(40).required(),
    });
}