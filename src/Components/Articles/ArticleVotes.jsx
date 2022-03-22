import React, { useState } from "react";
import { upvoteArticle, downvoteArticle } from "../../Utils/api";
import { BiDownvote, BiUpvote } from "react-icons/bi";
const Votes = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const giveVote = () => {
    setVoteChange((currChange) => currChange + 1);
    setDisabled(true);
    upvoteArticle(article_id).catch((err) => {
      setVoteChange((currChange) => currChange - 1);
      alert("Something went wrong, please try again.");
    });
  };

  const downVote = () => {
    setVoteChange((currChange) => currChange - 1);
    setDisabled(true);
    downvoteArticle(article_id).catch((err) => {
      setVoteChange((currChange) => currChange + 1);
      alert("Something went wrong, please try again.");
    });
  };

  return (
    <div className="articlevotes_box">
      <button
        disabled={disabled}
        onClick={() => giveVote()}
        className="votes_button"
      >
        <BiUpvote />
      </button>
      <h6>{votes + voteChange}</h6>
      <button
        disabled={disabled}
        onClick={() => downVote()}
        className="votes_button"
      >
        <BiDownvote />
      </button>
    </div>
  );
};

export default Votes;
