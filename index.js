import express from 'express';
const app = express();
import route from './routes/routes.js';
import path from 'path';
import connectDB from './connectDB/connectDB.js';
import bodyParser from 'body-parser';

let port = 3000;

//connecting database;
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static(path.join(process.cwd(), "public")));
// app.use(express.static(path.join(__dirname, "public")));

app.use('/', route);

app.listen(port, () => {
    console.log(`pserver is running at http://localhost:${port}`);
});