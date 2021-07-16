import React, { useState, useEffect } from "react";
import { User } from "../Types";

type HeaderProps = {
  users: User[];
};

function HeaderSection(props: HeaderProps) {
  return (
    <>
      <header className="main-header">
        <div className="wrapper">
          {props.users.map((user) => (
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
