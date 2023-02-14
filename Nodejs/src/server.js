import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import dotenv from 'dotenv';
import connectDB from './config/connectDB';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectDB();

initWebRoutes(app);
configViewEngine(app);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Backend on port : ' + `http://localhost:${port}`);
});
