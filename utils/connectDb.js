import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Database connection failed");
  }
};

export default connectDb;
