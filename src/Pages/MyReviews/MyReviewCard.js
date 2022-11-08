import React from "react";
import { SlNote, SlTrash } from "react-icons/sl";

const MyReviewCard = ({ review, handleReviewDelete, handleReviewEdit }) => {
  return (
    <div className="card bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{review.serviceName}</h2>
        <p>{review.review}</p>
        <div className="card-actions justify-end">
          {/* The button to open modal */}
          <label
            htmlFor={`my-modal-${review._id}`}
            className="badge badge-outline cursor-pointer"
          >
            <SlNote />
            Edit
          </label>
          <button
            onClick={() => handleReviewDelete(review._id)}
            className="badge badge-outline"
          >
            <SlTrash />
            Delete
          </button>

          {/* Put this part before </body> tag */}
          <input
            type="checkbox"
            id={`my-modal-${review._id}`}
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor={`my-modal-${review._id}`}
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold mb-3">
                Edit {review.serviceName} Service Review
              </h3>
              <form onSubmit={handleReviewEdit}>
                <textarea
                  className="textarea w-full textarea-bordered h-[150px] py-4 mb-3"
                  placeholder="reviews"
                  name="review"
                  defaultValue={review.review}
                ></textarea>
                <div className="modal-action">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
