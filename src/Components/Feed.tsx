import React, { useEffect, useState } from "react";
import { Post } from "../Types";
import PostListItem from "./PostListItem";

type FeedProps = {
  posts: Post[];
};

function Feed(props: FeedProps) {
  return (
    <section className="feed">
      <ul className="stack">
        {props.posts.map((post) => (
          <PostListItem post={post} />
        ))}
      </ul>
    </section>
  );
}
export default Feed;
