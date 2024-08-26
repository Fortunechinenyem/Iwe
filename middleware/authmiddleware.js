import { getSession } from "next-auth/react";

export default async function authMiddleware(req, res, next) {
  const session = await getSession({ req });
  if (!session || session.role !== "teacher") {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
}
