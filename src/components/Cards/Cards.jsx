import { useState, useEffect } from "react";
import SingleCard from '../SingleCard/SingleCard';
import './Cards.css';

const Cards = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
    return (
        <div>
            {
                data && data.map(singleData => <SingleCard singleData={singleData} key={singleData.id}></SingleCard>)
            }
        </div>
    );
};

export default Cards;