const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  questions: [{ question: String, options: [String], correctAnswer: String }],
  attempts: [
    {
      student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      score: Number,
    },
  ],
});

module.exports = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);
