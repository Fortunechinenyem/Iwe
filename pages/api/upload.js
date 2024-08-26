import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { file } = req.body; // Assume file data is sent via formData
    try {
      const uploadedFile = await cloudinary.uploader.upload(file);
      res.status(200).json({ url: uploadedFile.secure_url });
    } catch (error) {
      res.status(500).json({ message: "Upload failed", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
