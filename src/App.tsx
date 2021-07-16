import React, { useState, useEffect } from "react";
import "../src/styles/reset.css";
import "../src/styles/index.css";
import HeaderSection from "./Components/HeaderSection";
import MainSection from "./Components/MainSection";
import { User, Post } from "./Types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((resp) => resp.json())
      // .then(console.log);
      .then(setPosts);
  }, []);

  return (
    <div className="App">
      <div id="root">
        <header className="main-header">
          <HeaderSection users={users} />
        </header>
        <main className="wrapper">
          <MainSection posts={posts} users={users} />
        </main>
      </div>
    </div>
  );
}

export default App;
