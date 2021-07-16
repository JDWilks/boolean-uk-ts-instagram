import React from "react";
import { Post } from "../Types";
import CommentListitem from "./Comment";

type PostProps = {
  post: Post;
};

function PostListItem(props: PostProps) {
  return (
    <li className="post">
      <div className="chip active">
        <div className="avatar-small">
          <img
            src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
            alt="Salvador Dali"
          />
        </div>
        <span>Salvador Dali</span>
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
          <CommentListitem comment={comment} />
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
