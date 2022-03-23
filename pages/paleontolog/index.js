import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const index = ({ users }) => {
  return (
    <div>
      <h1>User Index</h1>
      {users.map((user) => (
        <Link href={'/list/' + user.id} key={user.id}>
          <a>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;
