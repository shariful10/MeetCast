import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="font-manrope">
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Main;
