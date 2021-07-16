import React from "react";
import CreatePostSection from "./CreatePostSection";
import Feed from "./Feed";
import { User, Post } from "../Types";
import { useStore } from "./Store";

type MainProps = {
  posts: Post[];
  // users: User[];
};

function MainSection(props: MainProps) {
  const users = useStore((store) => store.users);

  return (
    <main className="wrapper">
      <section className="create-post-section">
        <CreatePostSection />
      </section>
      <section className="feed">
        <Feed posts={props.posts} />
      </section>
    </main>
  );
}

export default MainSection;
