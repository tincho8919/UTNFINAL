/* import sessionMiddleware from './middleweres/sessionMiddlewere.js' */


import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import blogRoutes from './routes/routes.js'
import ProductRouter from './routes/router.js'
import authRoutes from './routes/authRoutes.js';
import session from "express-session"
import cookieParser from 'cookie-parser';

const app = express()

/* app.use(cookieParser());

app.use(session({
    secret: 'mi-clave',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true, // Usar 'true' en producción si usas HTTPS
        httpOnly: true,
    }
})); */



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/blogs', blogRoutes);
/* app.use('/desarrollador', sessionMiddleware); */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/Product', ProductRouter);
/* app.use('/cargadeproducto', sessionMiddleware); */


app.get('/', (req, res)=>{
    res.send('HELLO WORDS "MY BACKEND"')
}) 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth', authRoutes);


app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})


