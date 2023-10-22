import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { usuariosRoutes } from './routes/usuarios.routes';
import { tweetsRoutes } from './routes/tweets.routes';
import { likesRoutes } from './routes/likes.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/usuarios', usuariosRoutes())
app.use('/tweets', tweetsRoutes())
app.use('/likes', likesRoutes())

app.listen(process.env.PORTA, () => console.log(`Servidor ta rodando na porta ${process.env.PORTA}`));
app.get('/', (_, res) => res.status(200).json({ ok: true }));