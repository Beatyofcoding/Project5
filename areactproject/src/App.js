import React from "react";
import Tweet from "./Tweet";

function App() {
  
  return (
    <div className="App">
      {/* <h1>TestingApp.js</h1> */}
      <Tweet name="tweet1"/>
      <Tweet name="tweet2"/>
      <Tweet />
      <Tweet />
    </div>
  );
}
export default App;