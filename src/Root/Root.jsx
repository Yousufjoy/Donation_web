import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Header></Header> {/* This is fixed! */}
      <Outlet></Outlet> {/* Children */}
    </div>
  );
};

export default Root;
