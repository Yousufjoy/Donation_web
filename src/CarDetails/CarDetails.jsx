import { useLoaderData, useParams } from "react-router-dom";

const CarDetails = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const data = datas.find((data) => data.id == idInt);

  return <div> </div>;
};

export default CarDetails;
