import React, { useState } from "react";
import { patchArticle } from "../Utils/api";

const Votes = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const giveVote = () => {
    setVoteChange((currChange) => currChange + 1);
    patchArticle(article_id).catch((err) => {
      setVoteChange((currChange) => currChange - 1);
      alert("Something went wrong, please try again.");
    });
  };

  return (
    <div>
      <button onClick={() => giveVote()} className="votes_button" role="button">
        Add a vote: {votes + voteChange}
      </button>
    </div>
  );
};

export default Votes;
