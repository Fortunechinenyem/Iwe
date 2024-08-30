import bcrypt from "bcryptjs";
import connectDb from "@/utils/connectDb";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log("Attempting to connect to database...");
      await connectDb();

      console.log("Connected to database");
      const { email, password } = req.body;
      console.log("Received payload:", { email, password });

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      console.log("Checking if user already exists...");
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      console.log("Hashing password...");
      const hashedPassword = await bcrypt.hash(password, 10);

      console.log("Creating new user...");
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();

      console.log("User created successfully:", newUser);
      return res
        .status(201)
        .json({ success: true, message: "User created successfully" });
    } catch (error) {
      console.error("Error in signup API:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
