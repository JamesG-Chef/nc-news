import React, { useState } from "react";
import { upvoteComment, downvoteComment } from "../../Utils/api";
import { BiDownvote, BiUpvote } from "react-icons/bi";

const CommentVotes = ({ votes, comment_id }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const giveVote = () => {
    setVoteChange((currChange) => currChange + 1);
    setDisabled(true);
    upvoteComment(comment_id).catch((err) => {
      setVoteChange((currChange) => currChange - 1);
      alert("Something went wrong, please try again.");
    });
  };

  const downVote = () => {
    setVoteChange((currChange) => currChange - 1);
    setDisabled(true);
    downvoteComment(comment_id).catch((err) => {
      setVoteChange((currChange) => currChange + 1);
      alert("Something went wrong, please try again.");
    });
  };

  return (
    <div className="comment_votes_box">
      <button
        disabled={disabled}
        onClick={() => downVote()}
        className="comment_votes_button"
      >
        <BiDownvote />
      </button>
      <p className="vote_text">{votes + voteChange}</p>
      <button
        disabled={disabled}
        onClick={() => giveVote()}
        className="comment_votes_button"
      >
        <BiUpvote />
      </button>
    </div>
  );
};

export default CommentVotes;
