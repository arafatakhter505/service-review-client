import React from "react";
import { SlNote, SlTrash } from "react-icons/sl";

const MyReviewCard = ({ review }) => {
  return (
    <div className="card bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{review.name}</h2>
        <p>{review.review}</p>
        <div className="card-actions justify-end">
          <button className="badge badge-outline">
            <SlNote />
            Edit
          </button>
          <button className="badge badge-outline">
            <SlTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
