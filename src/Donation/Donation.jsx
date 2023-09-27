import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localstorage";
import DonationCard from "../../DonationCard/DonationCard";

const Donation = () => {
  const datas = useLoaderData();

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
    <div className=" grid grid-cols-2 gap-5 max-w-7xl mx-auto my-8">
      {donated.map((donation) => {
        return (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        );
      })}
    </div>
  );
};

export default Donation;
