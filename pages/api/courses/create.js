import Course from "@/models/Course";
import authMiddleware from "@/utils/authMiddleware";
import connectDb from "@/utils/connectDb";

export default async function handler(req, res) {
  await connectDb();
  authMiddleware(
    req,
    res,
    async () => {
      if (req.method === "POST") {
        try {
          const course = new Course(req.body);
          await course.save();
          res.status(201).json(course);
        } catch (error) {
          res.status(500).json({ message: "Error creating course" });
        }
      } else {
        res.status(405).json({ message: "Method not allowed" });
      }
    },
    "teacher"
  );
}
