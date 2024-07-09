
import BottomNavbar from "./BottomNavbar";
import Find from "./Find";
import Input from "./Input";

const Homebanner = () => {
  return (
    <div className="relative bg-cover bg-center h-screen animate-accordion-down" style={{ backgroundImage: "url('/Images/home.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex justify-center items-center">
        <BottomNavbar />
        <Find />
        <Input />
      </div>
    </div>
  );
};

export default Homebanner;
