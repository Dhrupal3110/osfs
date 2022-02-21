const mongoose=require('mongoose')
const mongoUri="mongodb://localhost:27017/osfs"
connectToMongo().then(()=>{
    console.log("connected")
}).catch(err => console.log(err));

async function connectToMongo() {
  await mongoose.connect(mongoUri);
}


module.exports=connectToMongo;