import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const CarDetails = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const data = datas.find((data) => data.id == idInt);
  const { picture, title, description, price } = data;

  return (
    <div className=" max-w-7xl mx-auto my-[50px]">
      <img className="w-[1300px] h-[700px]" src={data?.picture} alt="" />
      <h2 className="text-4xl font-bold my-5 ">{data?.title}</h2>
      <p className="leading-8">{data?.description}</p>
      <div className=" w-[1280px] h-[130px] bg-[#0B0B0B80] absolute bottom-[45px]">
        <button
          onClick={() => {
            Swal.fire({
              title: "Success!!",
              text: "You have Successfully donated!",
              confirmButtonText: "Ok",
            });
          }}
          className=" w-[179px] h-[57px] bg-[#FF444A] text-white rounded-md my-7 mx-7"
        >
          <p className=" font-bold">Donate {data?.price}</p>
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
