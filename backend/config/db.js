import mongoose from "mongoose";

export const connectDB = async()=>{
  await mongoose.connect('mongodb+srv://mogesbekele32:mogesbekele32@cluster0.44bwz.mongodb.net/food-del').then(()=>{
    console.log('db connected')
    
  })
}