import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleCard from "./Components/ArticleCard";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Topics from "./Components/Topics";

function App() {
  const [topicSelected, setTopicSelection] = useState("All");
 
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Header />

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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
