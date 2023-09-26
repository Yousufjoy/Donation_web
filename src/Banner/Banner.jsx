const Banner = () => {
  return (
    <div>
      <div className=" bg-[url('../assets/background.png)]">
        <h1 className="mt-[24px] text-center text-4xl font-bold leading-normal text-black dark:text-white">
          I Grow By Helping People In Need
        </h1>
        <div className="mx-[635px] my-[50px] flex">
          <input
            className="w-[470px] h-[50px] rounded-lg border border-gray-300 bg-white"
            placeholder="Search here!"
            type="text"
          />
          <button className="w-[110px] h-[50px] bg-[#FF444A] rounded-lg text-white">
            Click!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
