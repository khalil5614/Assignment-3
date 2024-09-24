import React from "react";

function Ratings({ rating }) {
  return (
    <div className="rating">
      <input
        type="radio"
        name="rating-2"
        checked={rating >= 1}
        readOnly
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        readOnly
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        //defaultChecked
        checked={rating >= 2}
      />
      <input
        type="radio"
        readOnly
        name="rating-2"
        checked={rating >= 3}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-2"
        readOnly
        checked={rating >= 4}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        readOnly
        name="rating-2"
        checked={rating >= 5}
        className="mask mask-star-2 bg-orange-400"
      />
      <p>({rating})</p>
    </div>
  );
}

export default Ratings;
