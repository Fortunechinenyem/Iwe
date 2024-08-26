// Next.js API route to create a course
export default async function handler(req, res) {
  if (req.method === "POST") {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  }
}
