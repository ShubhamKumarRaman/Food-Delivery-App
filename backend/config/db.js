import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://food-delivery-app:Shubham%232003@cluster0.kcczz3o.mongodb.net/food-del')
        .then(() => console.log("DB connected successfully"))

}