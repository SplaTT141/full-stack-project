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

export function newServiceValidation(data) {
    const schema = Joi.object({
        service: Joi.string()
            .min(5)
            .max(200)
            .pattern(/^[a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ ]+$/)
            .required()
            .messages({
                'string.min': 'Paslaugos pavadinimą turi sudaryti bent 5 simboliai',
                'string.max': 'Paslaugos pavadinimą turi sudaryti ne daugiau 200 simbolių',
                'string.pattern.base': 'Paslaugos pavadinimas gali turėti tik raides ir skaičius',
                'any.required': 'Paslaugos pavadinimas yra privalomas',
            }),
        duration: Joi.number()
            .integer()
            .min(0)
            .max(1000)
            .required()
            .messages({
                'number.integer': 'Trukmė turi būti sveikasis skaičius',
                'number.min': 'Trukmė negali būti neigiamas skaičius',
                'number.max': 'Trukmė negali būti ilgesnė nei 1000 min',
                'any.required': 'Trukmė yra privaloma',
            }),
        price: Joi.number()
            .min(0)
            .max(3000)
            .required()
            .messages({
                'number.min': 'Kaina negali būti neigiamas skaičius',
                'number.max': 'Kaina negali būti didesnė nei 3000€',
                'any.required': 'Kaina yra privaloma',
            })
    });

    return schema.validate(data);
}

export function updateServiceValidation(data) {
    const schema = Joi.object({
        id: Joi.number()
            .min(1)
            .max(5000)
            .required()
            .messages({
                'number.min': 'ID yra per mažas',
                'number.max': 'ID yra per didelis',
                'any.required': 'ID yra privalomas',
            }),
        service: Joi.string()
            .normalize()
            .trim()
            .min(5)
            .max(200)
            .pattern(/^[a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ ]+$/)
            .required()
            .messages({
                'string.min': 'Paslaugos pavadinimą turi sudaryti bent 5 simboliai',
                'string.max': 'Paslaugos pavadinimą turi sudaryti ne daugiau 200 simbolių',
                'string.pattern.base': 'Paslaugos pavadinimas gali turėti tik raides, skaičius ir tarpelius',
                'any.required': 'Paslaugos pavadinimas yra privalomas',
            }),
        duration: Joi.number()
            .integer()
            .min(0)
            .max(1000)
            .required()
            .messages({
                'number.integer': 'Trukmė turi būti sveikasis skaičius',
                'number.min': 'Trukmė negali būti neigiamas skaičius',
                'number.max': 'Trukmė negali būti ilgesnė nei 1000 min',
                'any.required': 'Trukmė yra privaloma',
            }),
        price: Joi.number()
            .min(0)
            .max(3000)
            .required()
            .messages({
                'number.min': 'Kaina negali būti neigiamas skaičius',
                'number.max': 'Kaina negali būti didesnė nei 3000€',
                'any.required': 'Kaina yra privaloma',
            })
    });

    return schema.validate(data);
}

export function updateReservationValidation(data) {
    const schema = Joi.object({
        id: Joi.number()
            .min(1)
            .max(5000)
            .required()
            .messages({
                'number.min': 'ID yra per mažas',
                'number.max': 'ID yra per didelis',
                'any.required': 'ID yra privalomas',
            }),
        name: Joi.string()
            .min(3)
            .max(20)
            .pattern(/^[A-Za-zĄČĘĖĮŠŲŪŽąčęėįšųūž]+$/)
            .required()
            .messages({
                'string.min': 'Vardą turi sudaryti bent 3 simboliai',
                'string.max': 'Vardą turi sudaryti ne daugiau 20 simbolių',
                'string.pattern.base': 'Vardas gali turėti tik raides',
                'any.required': 'Vardas yra privalomas',
            }),
        surname: Joi.string()
            .min(2)
            .max(40)
            .pattern(/^[A-Za-zĄČĘĖĮŠŲŪŽąčęėįšųūž]+$/)
            .required()
            .messages({
                'string.min': 'Pavardę turi sudaryti bent 2 simboliai',
                'string.max': 'Pavardę turi sudaryti ne daugiau 40 simbolių',
                'string.pattern.base': 'Pavardė gali turėti tik raides',
                'any.required': 'Pavardė yra privalomas',
            }),
        phone: Joi.string()
            .min(9)
            .max(12)
            .pattern(/^[0-9+]+$/)
            .required()
            .messages({
                'string.min': 'Telefono numerį turi sudaryti bent 9 simboliai',
                'string.max': 'Telefono numerį turi sudaryti ne daugiau 12 simbolių',
                'string.pattern.base': 'Telefono numeris gali turėti tik raides',
                'any.required': 'Telefono numeris yra privalomas',
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
        service_name: Joi.string()
            .normalize()
            .trim()
            .min(5)
            .max(200)
            .pattern(/^[a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ ]+$/)
            .required()
            .messages({
                'string.min': 'Paslaugos pavadinimą turi sudaryti bent 5 simboliai',
                'string.max': 'Paslaugos pavadinimą turi sudaryti ne daugiau 200 simbolių',
                'string.pattern.base': 'Paslaugos pavadinimas gali turėti tik raides, skaičius ir tarpelius',
                'any.required': 'Paslaugos pavadinimas yra privalomas',
            }),
        date: Joi.date()
            .required()
            .custom((value, helpers) => {
                const todaysDate = new Date();

                if (value <= todaysDate) {
                    return helpers.message('Negalima rinktis praėjusio laiko');
                }

                return value;
            }),
        time: Joi.string()
            .pattern(/^\d{2}:\d{2}$/)
            .required()
            .custom((value, helpers) => {
                const newTime = +value.slice(0, 2);
                const workStartsAt = 8;
                const workEndsAt = 17;

                if (newTime < workStartsAt || newTime >= workEndsAt) {
                    return helpers.message('Darbo laikas yra nuo 08:00 iki 17:00');
                }

                return value;
            })
    });

    return schema.validate(data);
}