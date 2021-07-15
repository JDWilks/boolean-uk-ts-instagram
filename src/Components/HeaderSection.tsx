import React, { useState, useEffect } from "react";

function HeaderSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("is this working useffect");
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then(setUsers);
  }, []);

  if (!users) console.log("errrrrrorrrrrr");

  return (
    <>
      <header className="main-header">
        <div className="wrapper">
          {users.map((user) => {
            return (
              <div className="chip">
                <div className="avatar-small">
                  <img
                    src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
                    alt="Salvador Dali"
                  />
                </div>
                <span>Salvador Dali</span>
              </div>
            );
          })}
        </div>
      </header>
    </>
  );
}
export default HeaderSection;
