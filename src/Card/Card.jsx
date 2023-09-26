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
      <div>
        <div className={`w-[312px] h-[293px] rounded-lg ${card_bg}`}>
          <img src={picture} alt="" />
          <p className=" text-xs">{category}</p>
          <h1 className=" text-xl font-semibold">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
