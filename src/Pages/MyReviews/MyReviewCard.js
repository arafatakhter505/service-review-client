import React from "react";
import { SlNote, SlTrash } from "react-icons/sl";
import { Link } from "react-router-dom";

const MyReviewCard = ({ review, handleReviewDelete }) => {
  return (
    <div className="card bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{review.serviceName}</h2>
        <p>{review.review}</p>
        <div className="card-actions justify-end">
          <Link to={`/editreview/${review._id}`}>
            <button className="badge badge-outline cursor-pointer">
              <SlNote />
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleReviewDelete(review._id)}
            className="badge badge-outline"
          >
            <SlTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
