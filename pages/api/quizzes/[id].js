import connectDb from "../../../utils/connectDb";
import Quiz from "../../../models/Quiz";

export default async function handler(req, res) {
  await connectDb();
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const quiz = await Quiz.findById(id);
      res.status(200).json(quiz);
    } catch (error) {
      res.status(500).json({ message: "Error fetching quiz" });
    }
  } else if (req.method === "DELETE") {
    try {
      await Quiz.findByIdAndDelete(id);
      res.status(200).json({ message: "Quiz deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting quiz" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
