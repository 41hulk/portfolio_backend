import express from 'express';
import "./configs/database.js";
import "dotenv/config.js"
import postRouter from './Routes/postRoutes.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api', postRouter)

const port = process.env.PORT;
app.listen(
    port,
    console.log(`Server is listenning on Port ${port}`),
    );
