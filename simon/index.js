const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5500;
const {v4: uuidv4} = require('uuid');
const db = require('./config');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(cors({
    origin: 'http://localhost:5500',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
  }));

const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const educationRoutes = require('./routes/educationRoutes');
const companyRoutes = require('./routes/companyRoutes');
const jobHistoryRoutes = require('./routes/jobHistoryRoutes');
const userEducationRoutes = require('./routes/userEducationRoutes');
const registerRoutes  = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());



// Conexion a la db

db.connect((err)=>{
    if(err){
        console.error('Error conectando a la base de datos', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});


app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/users', userRoutes);
app.use('/contacts', contactRoutes);
app.use('/education', educationRoutes);
app.use('/companies', companyRoutes);
app.use('/jobHistory', jobHistoryRoutes);
app.use('/users_education', userEducationRoutes);


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});





