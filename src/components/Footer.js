import logo from "../images/logo-1.png";
import fb from "../images/facebook.svg";
import tw from "../images/twitter.svg";
import yt from "../images/youtube.svg";

const Footer = () => {
  return (
    <div className="footer-div flex flex-col justify-center items-center gap-3 px-5 py-16">
      <img src={logo} alt="" className="h-8" />
      <p className="text-center">
        Lorem ipsum dolor sit, amet consectetur elit Lorem ipsum, dolor sit amet
        consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Vero, quibusdam exercitationem.
      </p>
      <div className="flex gap-5">
        <img src={fb} alt="" className="h-8 p-1 bg-slate-300/50 rounded-full" />
        <img src={tw} alt="" className="h-8 p-1 bg-slate-300/50 rounded-full" />
        <img src={yt} alt="" className="h-8 p-1 bg-slate-300/50 rounded-full" />
      </div>
    </div>
  );
};

export default Footer;
