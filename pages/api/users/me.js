import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await connectDb();
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await User.findById(session.user.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data" });
  }
}
