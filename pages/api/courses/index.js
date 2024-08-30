import Course from "@/models/Course";
import connectDb from "@/utils/connectDb";

export default async function handler(req, res) {
  await connectDb();
  if (req.method === "GET") {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ message: "Error fetching courses" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
