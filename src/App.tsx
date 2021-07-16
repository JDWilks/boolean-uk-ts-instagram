import React, { useState, useEffect } from "react";
import "../src/styles/reset.css";
import "../src/styles/index.css";
import HeaderSection from "./Components/HeaderSection";
import MainSection from "./Components/MainSection";
import { User, Post } from "./Types";
import { useStore } from "./Components/Store";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchUsers = useStore((store) => store.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:4000/users")
  //     .then((resp) => resp.json())
  //     .then(setUsers);
  // }, []);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((resp) => resp.json())
      // .then(console.log);
      .then(setPosts);
  }, []);

  function postToServer(newPost) {
    fetch("http://localhost:4000/posts", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
  }

  return (
    <div className="App">
      <div id="root">
        <header className="main-header">
          <HeaderSection />
        </header>
        <main className="wrapper">
          <MainSection
            posts={posts}
            // users={users}
            postToServer={postToServer}
          />
        </main>
      </div>
    </div>
  );
}

export default App;

// function handleSubmit(event: React.SyntheticEvent) {
//   event.preventDefault();
//   const targetForm = event.target as typeof event.targetForm & {
//     title: { value: string };
//     image: { value: string };
//     content: { value: string };
//   };
//   const title = targetForm.title.value;
//   const image = targetForm.image.value;
//   const content = targetForm.content.value;
//   console.log("targetForm", targetForm);
//   console.log("content", content);
//   console.log("image", image);
//   console.log("title", title);
//   postToServer();
//   targetForm.reset();
// }

// we need to make post fetch request to put the above on the server.
