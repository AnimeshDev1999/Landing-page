import logo from "../images/logo-1.png";

const Navbar = () => {
  return (
    <div className="flex justify-start items-center px-5 py-3 shadow-lg">
      <img src={logo} alt="" className="h-8" />
    </div>
  );
};

export default Navbar;
