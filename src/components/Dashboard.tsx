import Sidebar from "./parts/Sidebar";
import Navbard from "./parts/Navbar";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/users/Users";
import Porsche from "./pages/Porsche";
import MercedesBenz from "./pages/MercedesBenz";
import LotusCars from "./pages/LotusCars";
import Maserati from "./pages/Maserati";
import AstonMartin from "./pages/AstonMartin";
import Bentley from "./pages/Bentley";
import Bugatti from "./pages/Bugatti";
import Ferrari from "./pages/Ferrari";
import Lamborghini from "./pages/Lamborghin";
import RollsRoyce from "./pages/RollsRoyce";

const Dashboard = () => {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-12 col-md-12 a1">
          <Navbard />
        </div>
        <div className="col-12 col-md-2 a3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10 c1">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/astonmartin" element={<AstonMartin />} />
            <Route path="/bentley" element={<Bentley />} />
            <Route path="/bugatti" element={<Bugatti />} />
            <Route path="/ferrari" element={<Ferrari />} />
            <Route path="/lamborghini" element={<Lamborghini />} />
            <Route path="/lotuscars" element={<LotusCars />} />
            <Route path="/maserati" element={<Maserati />} />
            <Route path="/mercedesbenz" element={<MercedesBenz />} />
            <Route path="/porsche" element={<Porsche />} />
            <Route path="/rollsroyce" element={<RollsRoyce />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
