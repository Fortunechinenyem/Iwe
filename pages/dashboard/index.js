import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    return <p>You need to be signed in to access this page</p>;
  }

  return <div>Welcome to your dashboard, {session.user.email}!</div>;
};

export default Dashboard;
