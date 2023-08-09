import express from 'express';
import router from './routes/note.routes.js';

const PORT: number = 5000;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, (err?: Error) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
