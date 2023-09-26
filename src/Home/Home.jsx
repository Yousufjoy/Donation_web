import Banner from "../Banner/Banner";
import Cards from "../Cards.jsx/Cards";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className=" max-w-7xl mx-auto">
        <Cards></Cards>
      </div>
    </>
  );
};

export default Home;
