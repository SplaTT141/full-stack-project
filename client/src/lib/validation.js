export function usernameIsInvalid(username) {
    if (!username) {
        return `Vartotojo vardas yra privalomas`
    }

    if (typeof username !== 'string') {
        return `Vartotojo vardas turi būti tekstas`;
    }

    if (username.length < 3) {
        return `Vartotojo vardą turi sudaryti bent 3 simboliai`;
    }

    if (username.length > 20) {
        return `Vartotojo vardą turi sudaryti ne daugiau 20 simbolių`;
    }

    if (username.includes(' ')) {
        return 'Vartotojo vardas neturi turėti tarpų';
    }

    const validSymbols = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789';
    const foundInvalidSymbols = [];

    for (const s of username) {
        if (!validSymbols.includes(s)) {
            foundInvalidSymbols.push(s);
        }
    }

    if (foundInvalidSymbols.length) {
        return `Vartotojo varde yra neleistini simboliai: ${foundInvalidSymbols.join(', ')}`
    }

    return '';
}

export function emailIsInvalid(email) {
    if (!email) {
        return `El. paštas yra privalomas`;
    }

    if (typeof email !== 'string') {
        return `El. paštas turi būti tekstas`;
    }

    if (email.length < 5) {
        return `El. paštą turi sudaryti bent 5 simboliai`;
    }

    if (email.length > 50) {
        return `El. paštą turi sudaryti ne daugiau 50 simbolių`;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return `Netinkamas el. pašto formatas`;
    }

    return '';
}

export function passwordIsInvalid(password) {
    if (!password) {
        return 'Slaptažodis yra privalomas';
    }

    if (typeof password !== 'string') {
        return 'Slaptažodis turi būti teksto tipo';
    }

    if (password.length < 6) {
        return 'Slaptažodį turi sudaryti ne mažiau 6 simbolių';
    }

    if (password.length > 40) {
        return 'Slaptažodį negali sudaryti daugiau 40 simbolių';
    }

    return '';
}

export function passwordRepeatIsInvalid(passwordRepeat, password) {
    if (!passwordRepeat) {
        return 'Pakartokite slaptažodį'
    }

    if (passwordRepeat !== password) {
        return 'Slaptažodžiai yra nevienodi'
    }

    return '';
}

export function usernameOrEmailIsInvalid(usernameOrEmail) {
    if (!usernameOrEmail) {
        return `Vartotojo vardas arba el. paštas yra privalomas`
    }

    if (typeof usernameOrEmail !== 'string') {
        return `Vartotojo vardas arba el. paštas turi būti tekstas`;
    }

    if (usernameOrEmail.length < 3) {
        return `Vartotojo vardą arba el. paštą turi sudaryti bent 3 simboliai`;
    }

    if (usernameOrEmail.length > 50) {
        return `Vartotojo vardą arba el. paštą turi sudaryti ne daugiau 50 simbolių`;
    }

    return '';
}

export function serviceNameIsInvalid(service) {
    if (!service) {
        return `Paslaugos pavadinimas yra privalomas`;
    }

    if (typeof service !== 'string') {
        return `Paslaugos pavadinimas turi būti tekstas`;
    }

    if (service.length < 5) {
        return `Paslaugos pavadinimas turi sudaryti bent 5 simboliai`;
    }

    if (service.length > 200) {
        return `Paslaugos pavadinimas turi sudaryti ne daugiau 200 simbolių`;
    }

    const validSymbols = 'qwertyuiopasdfghjklzxcvbnmąčęėįšųūžĄČĘĖĮŠŲŪŽ9QWERTYUIOPASDFGHJKLZXCVBNM0123456789 ';
    const foundInvalidSymbols = [];

    for (const s of service) {
        if (!validSymbols.includes(s)) {
            foundInvalidSymbols.push(s);
        }
    }

    if (foundInvalidSymbols.length) {
        return `Paslaugos pavadinime yra neleistini simboliai: ${foundInvalidSymbols.join(', ')}`;
    }

    return '';
}

export function serviceDurationIsInvalid(duration) {
    if (duration === undefined || duration === null) {
        return `Privalote nurodyti paslaugos trukmę`;
    }

    const num = +duration;

    if (Number.isNaN(num)) {
        return `Trukmė turi būti skaičiaus tipo`
    }

    if (!Number.isInteger(num)) {
        return `Trukmė turi būti sveikasis skaičius`
    }

    if (num < 0) {
        return `Trukmė negali būti neigiamas skaičius`;
    }

    if (num > 1000) {
        return `Trukmė negali būti ilgesnė nei 1000 min`;
    }

    return '';
}

export function servicePriceIsInvalid(price) {
    if (price === undefined || price === null) {
        return `Privalote nurodyti paslaugos kainą`;
    }

    const num = +price;

    if (Number.isNaN(num)) {
        return `Kaina turi būti skaičiaus tipo`
    }

    if (num < 0) {
        return `Kaina negali būti neigiamas skaičius`;
    }

    if (num > 3000) {
        return `Kaina negali viršyti 3000€`;
    }

    return '';
}

export function nameIsInvalid(name) {
    if (!name) {
        return `Vardas yra privalomas`
    }

    if (typeof name !== 'string') {
        return `Vardas turi būti tekstas`;
    }

    if (name.length < 3) {
        return `Vardą turi sudaryti bent 3 simboliai`;
    }

    if (name.length > 20) {
        return `Vardą turi sudaryti ne daugiau 20 simbolių`;
    }

    const validSymbols = 'qwertyuiopasdfghjklzxcvbnmąčęėįšųūĄČĘĖĮŠŲŪ9QWERTYUIOPASDFGHJKLZXCVBNM0123456789 ';
    const foundInvalidSymbols = [];

    for (const s of name) {
        if (!validSymbols.includes(s)) {
            foundInvalidSymbols.push(s);
        }
    }

    if (foundInvalidSymbols.length) {
        return `Varde yra neleistini simboliai: ${foundInvalidSymbols.join(', ')}`
    }

    return '';
}

export function surnameIsInvalid(surname) {
    if (!surname) {
        return `Pavardė yra privalomas`
    }

    if (typeof surname !== 'string') {
        return `Pavardė turi būti tekstas`;
    }

    if (surname.length < 2) {
        return `Pavardę turi sudaryti bent 2 simboliai`;
    }

    if (surname.length > 40) {
        return `Pavardę turi sudaryti ne daugiau 40 simbolių`;
    }

    const validSymbols = 'qwertyuiopasdfghjklzxcvbnmąčęėįšųūĄČĘĖĮŠŲŪ9QWERTYUIOPASDFGHJKLZXCVBNM0123456789 ';
    const foundInvalidSymbols = [];

    for (const s of surname) {
        if (!validSymbols.includes(s)) {
            foundInvalidSymbols.push(s);
        }
    }

    if (foundInvalidSymbols.length) {
        return `Pavardėje yra neleistini simboliai: ${foundInvalidSymbols.join(', ')}`
    }

    return '';
}

export function phoneIsInvalid(phone) {
    if (!phone) {
        return `Telefono numeris yra privalomas`
    }

    if (typeof phone !== 'string') {
        return `Telefono numeris turi būti tekstas`;
    }

    if (phone.length < 9) {
        return `Telefono numerį turi sudaryti bent 9 simboliai`;
    }

    if (phone.length > 12) {
        return `Telefono numerį turi sudaryti ne daugiau 12 simbolių`;
    }

    if (phone.includes('+') && phone[0] !== '+') {
        return 'Simbolis + gali būti tik numerio pradžioje';
    }

    const validSymbols = '+0123456789';
    const foundInvalidSymbols = [];

    for (const s of phone) {
        if (!validSymbols.includes(s)) {
            foundInvalidSymbols.push(s);
        }
    }

    if (foundInvalidSymbols.length) {
        return `Pavardėje yra neleistini simboliai: ${foundInvalidSymbols.join(', ')}`
    }

    return '';
}

export function serviceIsInvalid(service) {
    if (!service || service === 'Paslaugos...') {
        return 'Turite pasirinkti paslaugą';
    }

    return '';
}

export function dateIsInvalid(date) {
    const todaysDate = new Date();
    const newDate = new Date(date);

    if (newDate <= todaysDate) {
        return `Negalima rinktis praėjusio laiko`;
    }

    return '';
}