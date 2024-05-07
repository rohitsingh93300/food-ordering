import { error } from "console"
import {model, models, Schema} from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    email:{type:String,
       required:true, 
       unique:true
      },
    password:{
        type:String,
        required:true,
        validate: pass=>{
          if(!pass?.length || pass.length < 5){
            new error('password must be atleast 5 characters')
          }
        }

    }
},{timestamps:true})

UserSchema.post('validate',function(user){
  const password = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(password,salt);
})

export const User = models?.User || model('User', UserSchema);