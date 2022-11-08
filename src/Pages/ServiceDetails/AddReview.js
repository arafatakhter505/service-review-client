import React from "react";

const AddReview = ({ handleReviewSubmit }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Add Your Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          name="review"
          className="textarea textarea-bordered w-1/2 h-[200px] mb-3"
          placeholder="Your review"
          required
        ></textarea>
        <br />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded border border-blue-600 hover:bg-white hover:text-blue-600 transition-all"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddReview;
