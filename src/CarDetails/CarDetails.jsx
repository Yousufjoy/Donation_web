import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { saveDonation } from "../utility/localstorage";
const CarDetails = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const data = datas.find((data) => data.id == idInt);
  const { picture, title, description, price } = data;

  const handleToast = () => {
    saveDonation(idInt);
    Swal.fire({
      title: "Success!!",
      text: "You have Successfully donated!",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className=" max-w-7xl mx-auto my-[50px]">
      <img className="w-[1300px] h-[700px]" src={data?.picture} alt="" />
      <h2 className="text-4xl font-bold my-5 ">{data?.title}</h2>
      <p className="leading-8">{data?.description}</p>
      <div className=" lg:w-[1280px] w-full h-[130px] bg-[#0B0B0B80] absolute lg:bottom-[133px] bottom-[-123px]  md:bottom-[208px]">
        <button
          onClick={handleToast}
          className=" w-[179px] h-[57px] bg-[#FF444A] text-white rounded-md my-7 mx-7"
        >
          <p className=" font-bold">Donate {data?.price}</p>
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
