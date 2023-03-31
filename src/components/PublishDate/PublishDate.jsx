import React from "react";
import './PublishDate.css';

const PublishDate = ({ publish }) => {
  const publishDate = new Date(publish);
  const options = { month: "short", day: "numeric" };
  const date = publishDate.toLocaleDateString(undefined, options);
  const currentDate = new Date();
  const differenceInDays = currentDate.getDate() - publishDate.getDate();
  return (
    <div>
      <p className="font-semibold text-neutral opacity-60">
        {date} ({differenceInDays} Days ago)
      </p>
    </div>
  );
};

export default PublishDate;
