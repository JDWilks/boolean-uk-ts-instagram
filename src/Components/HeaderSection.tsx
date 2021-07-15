import React, { useState, useEffect } from "react";

type User = {
  id: number;
  username: string;
  avatar: string;
};

function HeaderSection() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then(setUsers);
  }, []);

  return (
    <>
      <header className="main-header">
        <div className="wrapper">
          {users.map((user) => (
            <div key={user.id} className="chip">
              <div className="avatar-small">
                <img src={user.avatar} alt={user.username} />
              </div>
              <span>{user.username}</span>
            </div>
          ))}
        </div>
      </header>
    </>
  );
}
export default HeaderSection;
