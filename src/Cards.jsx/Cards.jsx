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
      <div className="flex mt-12 ml-[350px]">
        <div>
          <input
            className="w-[470px] h-[50px] rounded-lg border border-gray-300 bg-white"
            type="text"
            placeholder="Search by category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          <button
            className="w-[110px] h-[50px] bg-[#FF444A] rounded-lg text-white"
            onClick={handleSearch}
          >
            Search!
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 my-[100px]">
        {datas.map((data) => {
          return <Card key={data.id} data={data}></Card>;
        })}
      </div>
    </>
  );
};

export default Cards;
