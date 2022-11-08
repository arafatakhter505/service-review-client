import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import AddReview from "./AddReview";
import { toast } from "react-hot-toast";
import ReviewItem from "./ReviewItem";
import useTitle from "./../../hooks/useTitle";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();
  useTitle(`${service.name}`);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (!user?.uid) {
      return toast.error("Please login to add a review");
    }
    const review = event.target.review.value;
    const newReview = {
      name: user.displayName,
      email: user.email,
      img: user.photoURL,
      serviceId: service._id,
      serviceName: service.name,
      time: new Date(),
      review: review,
    };
    fetch("https://tooth-fixers-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully new review add");
          event.target.reset();
          setReviews([newReview, ...reviews]);
        }
      })
      .catch((e) => toast.error(e.message));
  };

  useEffect(() => {
    fetch(`https://tooth-fixers-server.vercel.app/reviews/${service._id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((e) => toast.error(e.message));
  }, [service._id]);
  return (
    <div className="lg:px-20 md:px-8 px-6 my-12">
      {/* service section */}
      <div className="card lg:card-side bg-base-100 shadow-xl border">
        <figure className="lg:w-1/2">
          <img src={service.imgUrl} alt="service" className="w-full h-[100%]" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title">{service.name}</h2>
          <p>{service.description}</p>
          <div className="card-actions justify-end">
            <span className="bg-blue-600 text-white px-6 py-2">
              Price: ${service.price}
            </span>
          </div>
        </div>
      </div>

      {/* review section */}
      <div className="my-20">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-6">
          User Reviews
        </h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewItem key={review._id} reviewItem={review} />
          ))
        ) : (
          <p className="text-center">No Reviews</p>
        )}
      </div>
      <div className="my-20">
        <AddReview handleReviewSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};

export default ServiceDetails;
