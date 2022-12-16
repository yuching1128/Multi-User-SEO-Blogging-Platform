const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();
// bring routes
const blogRoutes = require('./routes/blog');

// app
const app = express();

// database
mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.DATABASE_LOCAL, {})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error => ", err));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//cors
if(process.env.NODE_ENV == 'development'){
    app.use(cors({origon: `${process.env.CLIENT_URL}`}));
};

// routes middleware
app.use('/api', blogRoutes);

// port
const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});