import { useState, useEffect } from "react";
import SingleCard from "../SingleCard/SingleCard";
import "./Cards.css";

const Cards = ({ handleTime, handleBookmark }) => {
  const [data, setData] = useState([]);
  

  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="">
      {data &&
        data?.slice(0,5).map((singleData) => (
          <SingleCard
            handleTime={handleTime}
            handleBookmark={handleBookmark}
            singleData={singleData}
            key={singleData.id}
          ></SingleCard>
        ))}
      
    </div>
  );
};

export default Cards;
