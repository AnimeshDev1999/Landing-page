import logo from "../images/logo-1.png";

const Navbar = () => {
  return (
    <div className="flex justify-start md:justify-between items-center px-5 md:px-10 py-3 shadow-lg">
      <img src={logo} alt="" className="h-8" />
      <div className="justify-center items-center gap-7 hidden md:flex">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Pages</button>
        <button className="nav-btn">Services</button>
        <button className="nav-btn">About</button>
      </div>
      <button className="px-5 ring-2 ring-purple-400 py-2 rounded-full hidden md:block">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
