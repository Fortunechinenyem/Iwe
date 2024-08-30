import Course from "@/models/Course";
import connectDb from "@/utils/connectDb";

export default async function handler(req, res) {
  await connectDb();
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const course = await Course.findById(id);
      res.status(200).json(course);
    } catch (error) {
      res.status(500).json({ message: "Error fetching course" });
    }
  } else if (req.method === "DELETE") {
    try {
      await Course.findByIdAndDelete(id);
      res.status(200).json({ message: "Course deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting course" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
