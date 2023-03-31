import React from "react";
import "./SingleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import PublishDate from "../PublishDate/PublishDate";

const SingleCard = ({ singleData, handleTime, handleBookmark }) => {
  // console.log(singleData);
  const {id, time, blogImage, authorImage, tags, name, publish, title}= singleData;
  
  

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={blogImage} alt="cover" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            <div className="">
              <img
                className="w-14 h-14 rounded-full border-2 border-secondary"
                src={authorImage}
                alt="author"
              />
            </div>
            <div>
              <h3 className="font-bold text-2xl text-neutral">{name}</h3>
              
              <PublishDate publish={publish} ></PublishDate>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <p className="font-medium text-xl text-neutral opacity-60">
              {time<10?'0'+time:time} min read
            </p>

            <span onClick={()=>handleBookmark(title)} className="opacity-60 text-xl text-neutral cursor-pointer">
              <FontAwesomeIcon icon={faBookmark} />
            </span>
          </div>
        </div>
        <h1 className="font-bold text-4xl text-neutral my-4">{title}</h1>
        <div className="flex gap-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xl font-medium text-neutral opacity-60"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="card-actions">
          <button onClick={()=>handleTime(time)} className="text-secondary font-semibold text-xl underline decoration-1 underline-offset-2 hover:text-success">
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
