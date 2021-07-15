import React from "react";
import CreatePostSection from "./CreatePostSection";
import Feed from "./Feed";

function MainSection() {
  return (
    <main className="wrapper">
      <section className="create-post-section">
        <CreatePostSection />
      </section>
      <section className="feed">
        <Feed />
      </section>
    </main>
  );
}

export default MainSection;
