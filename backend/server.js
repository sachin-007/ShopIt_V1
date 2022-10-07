const app =require("./app");
const dotenv=require('dotenv');
const connectDatabase=require('./config/database')


// setting config file
dotenv.config({path:'backend/config/config.env'})

// connecting to database
connectDatabase();
// DB_LOCAL_URI= mongodb://127.0.0.1:27017/shopit  this problem took my more than hr to solve that is i have to alter the mongodb://localhost:27017/shopit -> mongodb://127.0.0.1:27017/shopit XD


app.listen(process.env.PORT,()=>{
    console.log(`server started on PORT :${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})