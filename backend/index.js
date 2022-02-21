const connectToMongo=require('./db')
const express=require('express')
let cors=require('cors')
// const router = express.Router();

//express work
connectToMongo();
const app=express();
const port=5000;
app.use(cors())


//authentication about data
app.use(express.json())

//define the path that was required
const rejestration=require('./routes/auth/rejestration');
const login=require('./routes/auth/Login')

//Availebal Routes
app.use('/api/auth',rejestration);
app.use('/api/auth',login);


//home
app.get('/',(req,res)=>{
    res.end('please choose currect path')
})
app.listen(port,()=>{
    console.log(`app listning on  http://localhost:${port}`)
})

