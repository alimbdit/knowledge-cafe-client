import React, { useState, useEffect } from 'react';
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Bookmark from './components/Bookmark/Bookmark';

function App() {
  const [time, setTime] = useState(0);

  const handleTime = (readTime) => {
    setTime(time+readTime);

  }

  return (
    <div className="App">
      <div className="max-w-[1280px] mx-auto ">
        <Header></Header>
        <div className="cards-bookmark-container mx-10 mt-8">
          <Cards handleTime={handleTime}></Cards>
          <Bookmark time={time}></Bookmark>
        </div>
      </div>
    </div>
  );
}

export default App;
