const mongoose=require('mongoose')
const {Schema}=mongoose;

const userSchema=new Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        orgCode:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    }
)
const facultyUsers=mongoose.model('facultyusers',userSchema)
module.exports=facultyUsers;