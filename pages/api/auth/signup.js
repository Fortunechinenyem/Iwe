import connectDb from "@/utils/connectDb";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectDb();

    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
