import mongoose from 'mongoose';

// This function connects to the MongoDB database using Mongoose
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("Error connecting to MongoDB:", err);
    }
}

export default connectDB;