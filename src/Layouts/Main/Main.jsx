import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="font-manrope">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
