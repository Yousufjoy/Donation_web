import { useState, useEffect } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  const handleSearch = () => {
    const filteredDatas = datas.filter((data) => {
      return data.category.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setDatas(filteredDatas);
  };

  return (
    <>
      <div className="absolute z-20 ">
        <div className="flex lg:mt-12 lg:ml-[350px] ml-[80px] mt-5 md:ml-[250px]">
          <div>
            <input
              className="lg:w-[470px] lg:h-[50px] rounded-lg border border-gray-300 bg-white"
              type="text"
              placeholder="Search by category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <button
              className="lg:w-[110px] lg:h-[50px] w-[70px] h-[45px] bg-[#FF444A] rounded-lg text-white"
              onClick={handleSearch}
            >
              Search!
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-5 my-[250px] grid-cols-1 mx-[50px] md:grid-cols-2 ">
          {datas.map((data) => {
            return <Card key={data.id} data={data}></Card>;
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
