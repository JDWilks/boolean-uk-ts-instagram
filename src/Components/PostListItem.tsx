import React from "react";
import { Post, User } from "../Types";
import CommentListitem from "./Comment";
import { useStore } from "./Store";

type PostProps = {
  post: Post;
  // users: User[];
};

function PostListItem(props: PostProps) {
  const users = useStore((store) => store.users);

  let postUser: User | undefined = users.find(
    (user) => props.post.userId === user.id
  );
  //   console.log("this is the postuser", postUser);

  return (
    <li key={props.post.id} className="post">
      <div className="chip active">
        <div className="avatar-small">
          <img src={postUser?.avatar} alt={postUser?.username} />
        </div>
        <span>{postUser?.username}</span>
      </div>
      <div className="post--image">
        <img src={props.post.image.src} alt="undefined" />
      </div>
      <div className="post--content">
        <h2>{props.post.title}</h2>
        <p>{props.post.content}</p>
      </div>
      <div className="post--comments">
        <h3>Comments</h3>
        {props.post.comments.map((comment) => (
          <CommentListitem comment={comment} users={users} />
        ))}

        <form id="create-comment-form" autoComplete="off">
          <label htmlFor="comment">Add comment</label>
          <input id="comment" name="comment" type="text" />
          <button type="submit">Comment</button>
        </form>
      </div>
    </li>
  );
}

export default PostListItem;
