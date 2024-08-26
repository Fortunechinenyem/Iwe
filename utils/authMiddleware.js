import { getSession } from "next-auth/react";

const authMiddleware = async (req, res, next, requiredRole = null) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (requiredRole && session.role !== requiredRole) {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
};

export default authMiddleware;
