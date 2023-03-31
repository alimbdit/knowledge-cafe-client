import React from "react";
import './PublishDate.css';
import {dateCalculator} from '../../utilities/utilities'

const PublishDate = ({ publish }) => {
  const publishDate = new Date(publish);
  const options = { month: "short", day: "numeric" };
  const date = publishDate.toLocaleDateString(undefined, options);
  const days = dateCalculator(publish);
  
  return (
    <div>
      <p className="font-semibold text-neutral opacity-60">
        {date} ({days} Days ago )
      </p>
    </div>
  );
};

export default PublishDate;
