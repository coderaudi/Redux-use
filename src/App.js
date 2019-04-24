import React from "react";
import Showdata from "./js/components/display";
import AddArticle from "./js/components/addArticle";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>Welcome redux-use</h3>
      <Showdata />
      <AddArticle />
    </div>
  );
}

export default App;
