import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const EditReview = () => {
  const review = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = event.target.review.value;
    fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully update");
          navigate("/myreviews");
        } else {
          toast.error("Something is wrong");
        }
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <div className="lg:px-20 md:px-8 px-6 my-12">
      <form
        onSubmit={handleSubmit}
        className="md:w-[500px] mx-auto shadow-lg border p-6 rounded"
      >
        <h2 className="text-xl font-semibold mb-4">
          Edit {review.serviceName} Service Review
        </h2>
        <textarea
          className="textarea textarea-bordered h-[200px] w-full mb-3"
          placeholder="review"
          name="review"
          defaultValue={review.review}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditReview;
