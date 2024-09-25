import React from "react";

function Ratings({ rating }) {
  return (
    <div className="rating">
      <input
        type="radio"
        name="rating-2"
        checked={rating >= 1}
        readonly={true}
        onChange={(e) => {}}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        readonly={true}
        onChange={(e) => {}}
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        checked={rating >= 2}
      />
      <input
        type="radio"
        readonly={true}
        onChange={(e) => {}}
        name="rating-2"
        checked={rating >= 3}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-2"
        readonly={true}
        onChange={(e) => {}}
        checked={rating >= 4}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        readonly={true}
        name="rating-2"
        onChange={(e) => {}}
        checked={rating >= 5}
        className="mask mask-star-2 bg-orange-400"
      />
      {/* <p>({rating >= 5 ? "True" : "False"})</p> */}
    </div>
  );
}

export default Ratings;
