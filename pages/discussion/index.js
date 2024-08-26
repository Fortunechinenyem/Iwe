import Layout from "@/app/components/Layout";
import { useSession } from "next-auth/react";

const Discussion = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You must be signed in to view this page.</div>;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Discussion Forum</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg">Discussion details and forms...</p>
      </div>
    </Layout>
  );
};

export default Discussion;
