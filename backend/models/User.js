const mongoose = require('mongoose');

const { Schema } = mongoose;



const UserSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:Number
  },
  caste:{
    type:String
    
  },
  dob:{
    type:String
  },
  state:{
    type:String
  },
  district:{
    type:String
  },
  height:{
    type:String
  },
  weight:{
    type:String
  },
  
  education:{
    type:String
  },
  working:{
    type:String
  },


  password:{
    type:String,
    required:true
  },
  description:{
    type:String
  },
  

  gender:{
    type:String,
    required:true
  },
  otp:{
    type:Number
  },
  image:{
    type:String
  },
  date:{
    type: Date,
    default: Date.now
  }

});




const User = mongoose.model('user', UserSchema);
module.exports = User;