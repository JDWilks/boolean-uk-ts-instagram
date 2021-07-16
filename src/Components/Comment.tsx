import React from "react";
import { Comment } from "../Types";

type CommentProps = {
  comment: Comment;
};

function CommentListitem(props: CommentProps) {
  return (
    <div className="post--comment">
      <div className="avatar-small">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
          alt="Van Gogh"
        />
      </div>
      <p>{props.comment.content}</p>
    </div>
  );
}
export default CommentListitem;






(http://localhost:4000/posts) comments.userId = (http://localhost:4000/users) users.id ===  bingo !