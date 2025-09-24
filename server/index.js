import express from 'express';
import cors from 'cors';
import { postRegister } from './api/postRegister.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}));

app.get('/', (req, res) => {
    res.send("It's alive!");
});

app.post('/register', postRegister);

app.listen(PORT, () => {
    console.log(`Server is running`);
});