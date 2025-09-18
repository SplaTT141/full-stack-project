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
        return `El. paštas yra privalomas`
    }

    if (typeof email !== 'string') {
        return `El. paštas turi būti tekstas`;
    }

    if (email.length < 6) {
        return `El. paštą turi sudaryti bent 6 simboliai`;
    }

    if (email.length > 50) {
        return `El. paštą turi sudaryti ne daugiau 50 simbolių`;
    }

    if (!email.includes('@')) {
        return `El. paštas privalo turėti "@" simbolį`;
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
    if (passwordRepeat !== password) {
        return 'Slaptažodžiai yra nevienodi'
    }

    return '';
}