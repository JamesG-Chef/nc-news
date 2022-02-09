import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleCard from "./Components/ArticleCard";
import Articles from "./Components/Articles";
import Comments from "./Components/AddComment";
import Header from "./Components/Header";
import UserContext from "./Components/LoggedInUser";
import Nav from "./Components/Nav";
import Topics from "./Components/Topics";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "Hellboy",
    avatar_url: "https://avatarfiles.alphacoders.com/107/107385.jpg",
    kudos: 5,
  });

  const [topicSelected, setTopicSelection] = useState("All");

  const isLoggedIn = loggedInUser !== null;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <main>
            <Header loggedInUser={loggedInUser}/>

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Topics
                      topicSelected={topicSelected}
                      setTopicSelection={setTopicSelection}
                    />
                    <Articles topicSelected={topicSelected} />
                  </>
                }
              />
              <Route path="/articles/:article_id" element={<ArticleCard />} />
              <Route
                path="/articles/:article_id/comments"
                element={<Comments />}
              />
            </Routes>
          </main>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
