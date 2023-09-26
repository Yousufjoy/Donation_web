import { useLoaderData, useParams } from "react-router-dom";

const CarDetails = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const data = datas.find((data) => data.id == idInt);
  const { picture, title, description } = data;

  return (
    <div className=" max-w-7xl mx-auto my-[50px]">
      <img className="w-[1300px] h-[700px]" src={data?.picture} alt="" />
      <h2 className="text-4xl font-bold my-5 ">{data?.title}</h2>
      <p className="leading-8">{data?.description}</p>
    </div>
  );
};

export default CarDetails;
