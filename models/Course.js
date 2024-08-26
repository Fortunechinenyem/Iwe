const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lessons: [{ title: String, content: String, videoUrl: String }],
});

module.exports =
  mongoose.models.Course || mongoose.model("Course", CourseSchema);
