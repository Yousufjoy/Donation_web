const DonationCard = ({ donation }) => {
  const {
    picture,
    category,
    title,
    category_bg,
    text_button_bg,
    card_bg,
    price,
  } = donation;
  return (
    <>
      <div className="flex" style={{ backgroundColor: card_bg }}>
        <div className="w-[312px] h-[193px] rounded-lg ">
          <img className="w-[305px] h-[193px]" src={picture} alt="" />
        </div>
        <div className="px-4 py-4">
          <p
            style={{ color: category_bg }}
            className=" text-xs w-[74px] h-[24px] text-center rounded-md mt-3 border-2 pr-[40px] "
          >
            {category}
          </p>
          <h1 className=" text-xl font-semibold pr-[40px] mt-[60px]">
            {title}
          </h1>
          <h1
            style={{ color: text_button_bg }}
            className=" text-xl font-semibold pr-[40px]"
          >
            {price}
          </h1>
          <div className="">
            <button
              style={{ backgroundColor: text_button_bg }}
              className="w-[110px] h-[50px] rounded-lg text-white "
            >
              View Details!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationCard;
