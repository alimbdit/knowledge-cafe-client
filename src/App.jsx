import React, { useState, useEffect } from 'react';
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Bookmark from './components/Bookmark/Bookmark';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Blogs from './components/Blogs/Blogs';

function App() {
  const [time, setTime] = useState(0);
  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = (title) => {
    const exist = bookmark.find(singleBookmark => singleBookmark === title)
    if(exist){
      toast("You've bookmarked this already!!!");
    }
    setBookmark([...bookmark, title])
  }

  const handleTime = (readTime) => {
    setTime(time+readTime);

  }

  return (
    <div className="App">
      <div className="max-w-[1280px] mx-auto ">
        <Header></Header>
        <div className="cards-bookmark-container mx-5 lg:mx-10 mt-8">
          <Cards handleTime={handleTime} handleBookmark={handleBookmark}></Cards>
          <Bookmark time={time} bookmark={bookmark}></Bookmark>
        </div>
      </div>
      <Blogs></Blogs>
      <ToastContainer />
    </div>
  );
}

export default App;
