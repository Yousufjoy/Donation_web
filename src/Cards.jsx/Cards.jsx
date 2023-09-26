import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5 my-[100px]">
      {datas.map((data) => {
        return <Card key={data.id} data={data}></Card>;
      })}
    </div>
  );
};

export default Cards;
