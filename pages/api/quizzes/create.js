import connectDb from "../../../utils/connectDb";
import Quiz from "../../../models/Quiz";
import authMiddleware from "../../../utils/authMiddleware";

export default async function handler(req, res) {
  await connectDb();
  authMiddleware(
    req,
    res,
    async () => {
      if (req.method === "POST") {
        try {
          const quiz = new Quiz(req.body);
          await quiz.save();
          res.status(201).json(quiz);
        } catch (error) {
          res.status(500).json({ message: "Error creating quiz" });
        }
      } else {
        res.status(405).json({ message: "Method not allowed" });
      }
    },
    "teacher"
  );
}
