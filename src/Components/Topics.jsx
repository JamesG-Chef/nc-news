import React, { useEffect, useState } from "react";
import "../Styles/Topics.css";
import { getTopics } from "../Utils/api";

const Topics = ({ topicSelected, setTopicSelection }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  function handleChange(event) {
    setTopicSelection(event.target.value);
  }
  return (
    <>
      <div>
        <select className="select_topics" onChange={handleChange}>
          
          <option value="All">All Topics</option>
          {topics.length
            ? topics.map((topic) => {
                return (
                  <option value={topic.slug} key={topic.slug}>
                    {topic.slug}
                  </option>
                );
              })
            : null}
        </select>
      </div>
    </>
  );
};

export default Topics;
