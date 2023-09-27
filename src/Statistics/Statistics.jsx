import { Chart } from "react-google-charts";
import { getStoredDonation } from "../utility/localstorage";

const Statistics = () => {
  const givenDonation = getStoredDonation();

  const data = [
    ["Task", "Hours per Day"],
    ["Total Donation", 12],
    ["My Contribution", givenDonation.length],
  ];
  return (
    <>
      <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
    </>
  );
};

export default Statistics;
