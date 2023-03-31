import React, { useState, useEffect } from 'react';
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Bookmark from './components/Bookmark/Bookmark';

function App() {
  const [count, setCount] = useState(0);
  
 
  
  return (
    <div className="App">
      <div className="max-w-[1280px] mx-auto ">
        <Header></Header>
        <div className="cards-bookmark-container mx-10 mt-8">
          <Cards></Cards>
          <Bookmark></Bookmark>
        </div>
      </div>
    </div>
  );
}

export default App;
