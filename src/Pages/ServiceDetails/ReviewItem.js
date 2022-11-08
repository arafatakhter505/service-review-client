import React from "react";

const ReviewItem = ({ reviewItem }) => {
  const { name, img, review } = reviewItem;
  return (
    <div className="border p-4 rounded mb-3 shadow">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 border-blue-600 border-2 rounded-full avatar overflow-hidden">
          <img src={img} alt="user" />
        </div>
        <h3 className="text-xl font-semibold ml-3">{name}</h3>
      </div>
      <p>"{review}"</p>
    </div>
  );
};

export default ReviewItem;
