import React, { useState } from "react";
import { patchArticle } from "../Utils/api";

const Votes = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [disabled, setDisabled] = useState(false)

  const giveVote = () => {
    setVoteChange((currChange) => currChange + 1);
    setDisabled(true)
    patchArticle(article_id).catch((err) => {
      setVoteChange((currChange) => currChange - 1);
      alert("Something went wrong, please try again.");
    });
  };

  return (
    
      <button disabled={disabled} onClick={() => giveVote()} className="votes_button" role="button">
        Add a vote: {votes + voteChange}
      </button>
    
  );
};

export default Votes;
