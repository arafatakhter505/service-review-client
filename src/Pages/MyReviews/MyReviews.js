import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import MyReviewCard from "./MyReviewCard";
import { toast } from "react-hot-toast";
import useTitle from "./../../hooks/useTitle";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My Reviews");

  const handleReviewDelete = (id) => {
    const confirm = window.confirm("Are you sure delete this review");

    if (confirm) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
            toast.success("Successfully delete");
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div className="lg:px-20 md:px-8 px-6 md:min-h-[200px] min-h-screen my-12">
      {reviews.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {reviews.map((review) => (
            <MyReviewCard
              key={review._id}
              review={review}
              handleReviewDelete={handleReviewDelete}
            />
          ))}
        </div>
      ) : (
        <h2 className="text-3xl font-semibold text-center">
          No reviews were added
        </h2>
      )}
    </div>
  );
};

export default MyReviews;
