import React, { useEffect, useState } from "react";
import { Post, User } from "../Types";
import PostListItem from "./PostListItem";

type FeedProps = {
  posts: Post[];
  users: User[];
};

function Feed(props: FeedProps) {
  return (
    <section className="feed">
      <ul className="stack">
        {props.posts.map((post) => (
          <PostListItem post={post} users={props.users} />
        ))}
      </ul>
    </section>
  );
}
export default Feed;
