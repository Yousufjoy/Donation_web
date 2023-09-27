import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    description,
    price,
  } = data;
  return (
    <Link to={`/card/${id}`}>
      <div style={{ backgroundColor: card_bg }}>
        <div className="w-[312px] h-[293px] rounded-lg">
          <img className="w-[305px]" src={picture} alt="" />
          <p
            style={{ color: category_bg }}
            className=" text-xs w-[74px] h-[24px] text-center rounded-md mt-3 border-2"
          >
            {category}
          </p>
          <h1
            style={{ color: text_button_bg }}
            className=" text-xl font-semibold px-4"
          >
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
