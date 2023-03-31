import React from "react";
import "./SingleCard.css";

const SingleCard = ({ singleData }) => {
  console.log(singleData);
  const { id, time, blogImage, authorImage, tags, name, publish, title } =
    singleData;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={blogImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="">
              <img className="w-14 h-14 rounded-full border-2 border-secondary" src={authorImage} alt="" />
            </div>
            <div>
              <h3 className="font-bold text-2xl text-neutral">{name}</h3>
              <p className="font-semibold text-neutral opacity-60">Date: {publish}</p>
            </div>
          </div>
          <div>
            <p className="font-medium text-xl text-neutral opacity-60">minute: {time}</p>
          </div>
        </div>
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
