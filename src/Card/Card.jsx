import React from "react";

const Card = ({ data }) => {
  const {
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
    <div>
      <div className={`w-[312px] h-[293px] rounded-lg ${card_bg}`}>
        <img src={picture} alt="" />
        <p>{category}</p>
        <h1 className={`${text_button_bg}`}>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
