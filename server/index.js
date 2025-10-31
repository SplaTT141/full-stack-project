import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { postRegister } from './api/postRegister.js';
import { postLogin } from './api/postLogin.js';
import { cookieParser } from './middleware/cookieParser.js';
import { userData } from './middleware/userData.js';
import { getLogin } from './api/getLogin.js';
import { postLogout } from './api/postLogout.js';
import { getServices } from './api/getServices.js';
import { deleteService } from './api/deleteService.js';
import { postService } from './api/postService.js';
import { putService } from './api/putService.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(helmet());
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
app.get('/services', getServices);

app.post('/register', postRegister);
app.post('/login', postLogin);
app.post('/logout', postLogout);
app.post('/admin/services', postService);

app.put('/admin/services/:id', putService);

app.delete('/admin/services/:id', deleteService);

app.listen(PORT, () => {
    console.log(`Server is running`);
});