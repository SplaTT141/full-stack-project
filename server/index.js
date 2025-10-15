import express from 'express';
import cors from 'cors';
import { postRegister } from './api/postRegister.js';
import { postLogin } from './api/postLogin.js';
import { cookieParser } from './middleware/cookieParser.js';
import { userData } from './middleware/userData.js';
import { getLogin } from './api/getLogin.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser);
app.use(userData);

app.get('/', (req, res) => {
    res.send("It's alive!");
});
app.get('/login', getLogin);

app.post('/register', postRegister);
app.post('/login', postLogin);

app.listen(PORT, () => {
    console.log(`Server is running`);
});