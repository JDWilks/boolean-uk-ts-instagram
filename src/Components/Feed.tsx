import React, { useEffect, useState } from "react";
import { Post, User } from "../Types";
import PostListItem from "./PostListItem";
import { useStore } from "./Store";

type FeedProps = {
  posts: Post[];
  // users: User[];
};

function Feed(props: FeedProps) {
  const users = useStore((store) => store.users);

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
