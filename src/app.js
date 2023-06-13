import express  from "express";
import mainRouter from "./routes/index.routes.js"
import languagesRouter from "./routes/languages.routes.js";
import { PORT } from './config.js'

const app = express();

// Config port
app.set('port', PORT);
const link = `http://localhost:${PORT}/`;

// Config App
app.use(express.json())
app.use(mainRouter);
app.use('/languages', languagesRouter);


// NOT FOUND ENDPOINT
app.use((req, res, next)=> {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export {app, link} 