import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localstorage";
import DonationCard from "../../DonationCard/DonationCard";

const Donation = () => {
  const datas = useLoaderData();
  const [dataLength, setDataLength] = useState(4);

  const [donated, setDonated] = useState([]);
  // Jei jei data gula store ase seigula dorkar so ekhane outside{localStorage e store kora data} theke jehetu antesi tai useEffect use kortesi!

  useEffect(() => {
    const storedData = getStoredDonation();
    if (datas.length > 0) {
      const donated = datas.filter((data) => storedData.includes(data.id));

      setDonated(donated);
    }
  }, []);

  return (
    <>
      <div className=" grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto my-8">
        {donated.slice(0, dataLength).map((donation) => {
          return (
            <DonationCard key={donation.id} donation={donation}></DonationCard>
          );
        })}
      </div>

      <div className={donated.length < 4 ? "hidden" : " text-center"}>
        <button
          className=" w-[110px] h-[48px] rounded-lg text-center text-white bg-[#009444]"
          onClick={() => setDataLength(donated.length)}
        >
          Show All!
        </button>
      </div>
    </>
  );
};

export default Donation;
