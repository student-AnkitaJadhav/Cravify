import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://jadhavankita1120:259jN48AbcZspexk@cluster0.wbclrak.mongodb.net/Cravify').then(()=>console.log("DB connected"));

}