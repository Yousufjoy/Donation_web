import img from "./../assets/background.png";

const Banner = () => {
  return (
    <div className="relative ">
      <div className="absolute z-20 opacity-10 w-full ">
        <img className="h-[50vh] w-full" src={img} alt="" />
      </div>
      <h1 className="pt-[144px] text-center text-4xl font-bold leading-normal text-black dark:text-white ">
        I Grow By Helping People In Need
      </h1>
    </div>
  );
};

export default Banner;
