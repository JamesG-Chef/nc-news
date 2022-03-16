import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";
import { getSingleUser } from "../Utils/api";

const GetUserAvatar = ({ username }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    return getSingleUser(username).then((userData) => {
      console.log(userData);
      setUser(userData);
    });
  }, [username]);

  return (
    <div>
      <img src={user.avatar_url} alt={username} className="userAvatar" />
    </div>
  );
};

export default GetUserAvatar;
