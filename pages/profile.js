import { getSession } from "next-auth/react";

export default function Profile({ user }) {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const user = await fetch(`http://your-api-url/api/users/me`, {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  }).then((res) => res.json());

  return { props: { user } };
}
