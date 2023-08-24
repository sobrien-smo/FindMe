const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const validationRoute  = require('./routes/validation');
//const users = require ('./routes/users');
const userRoute = require ('./routes/userRoute');
//const postRoute = require ('./routes/posts');
const fileRoute = require('./routes/files'); 

const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// routes


const CONNECTION_URL = 'mongodb+srv://user:user123@cluster0.vtqshy7.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 4000;
try {
    mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    console.log('Connected to database');
}catch{
    ((error) => console.log(`${error} did not connect`))
    console.log("DB not connected");
};

app.use('/validate', validationRoute);
//app.use('/users', users);
//app.use('/posts', postRoute)
app.use('/user', userRoute);
//app.use('/posts', postRoute);
//app.use('/file', fileRoute);