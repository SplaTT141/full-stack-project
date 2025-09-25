import Joi from 'joi';

export function registerValidation(data) {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(20)
            .alphanum()
            .required()
            .messages({
                'string.min': 'Vartotojo vardą turi sudaryti bent 3 simboliai',
                'string.max': 'Vartotojo vardą turi sudaryti ne daugiau 20 simbolių',
                'string.alphanum': 'Vartotojo vardas gali turėti tik raides ir skaičius',
                'any.required': 'Vartotojo vardas yra privalomas',
            }),
        email: Joi.string()
            .email()
            .max(50)
            .lowercase()
            .trim()
            .required()
            .messages({
                'string.email': 'Netinkamas el. pašto formatas',
                'string.max': 'El. paštą turi sudaryti ne daugiau 50 simbolių',
                'any.required': 'El. paštas yra privalomas',
            }),
        password: Joi.string()
            .min(6)
            .max(40)
            .required()
            .messages({
                'string.min': 'Slaptažodį turi sudaryti ne mažiau 6 simbolių',
                'string.max': 'Slaptažodį negali sudaryti daugiau 40 simbolių',
                'any.required': 'Slaptažodis yra privalomas',
            })
    });

    return schema.validate(data);
}

export function loginValidation(data) {
    const schema = Joi.object({
        usernameOrEmail: Joi.alternatives().try(
            Joi.string()
                .min(3)
                .max(20)
                .alphanum(),
            Joi.string()
                .email()
                .min(6)
                .max(50)
                .lowercase()
                .trim(),
        ).required().messages({
            'any.required': 'Vartotojo vardas arba el. paštas yra privalomas',
            'alternatives.match': 'Vartotojo vardas arba el. paštas netinkamo formato',
        }),
        password: Joi.string()
            .min(6)
            .max(40)
            .required()
            .messages({
                'string.min': 'Slaptažodį turi sudaryti ne mažiau 6 simbolių',
                'string.max': 'Slaptažodį negali sudaryti daugiau 40 simbolių',
                'any.required': 'Slaptažodis yra privalomas',
            }),
    });

    return schema.validate(data);
}