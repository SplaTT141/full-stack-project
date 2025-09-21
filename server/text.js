import bcrypt from 'bcrypt';

const password = '123456';

const passwordHash = await bcrypt.hash(password, 12);

console.log(passwordHash);
console.log(typeof passwordHash);