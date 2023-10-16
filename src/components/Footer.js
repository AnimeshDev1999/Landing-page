import logo from "../images/logo-1.png";
import fb from "../images/facebook.svg";
import tw from "../images/twitter.svg";
import yt from "../images/youtube.svg";

const Footer = () => {
  return (
    <div className="footer-div px-5 md:px-10 grid grid-cols-1 md:place-items-center gap-5 md:grid-cols-4 py-16">
      <div className="flex flex-col md:self-start justify-center items-center gap-3">
        <img src={logo} alt="" className="h-8" />
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur elit Lorem ipsum, dolor sit
          amet consectetur adipisicing elit Lorem ipsum dolor.
        </p>
        <div className="flex gap-5">
          <img
            src={fb}
            alt=""
            className="h-8 p-1 bg-slate-300/50 rounded-full"
          />
          <img
            src={tw}
            alt=""
            className="h-8 p-1 bg-slate-300/50 rounded-full"
          />
          <img
            src={yt}
            alt=""
            className="h-8 p-1 bg-slate-300/50 rounded-full"
          />
        </div>
      </div>
      <div className="self-start hidden md:block">
        <h2 className="font-semibold mb-5">Services</h2>
        <ul className="list-disc">
          <li>Social Analytic</li>
          <li>Content Creation</li>
          <li>Engagement</li>
          <li>Social Media Ads</li>
          <li>Branding</li>
        </ul>
      </div>
      <div className="self-start hidden md:block">
        <h2 className="font-semibold mb-5">Company</h2>
        <ul className="list-disc">
          <li>About</li>
          <li>Partnership</li>
          <li>Features</li>
          <li>Testimonials</li>
          <li>Media Center</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="self-start hidden md:block">
        <h2 className="font-semibold mb-5">Links</h2>
        <ul className="list-disc">
          <li>Social Analytic</li>
          <li>Content Creation</li>
          <li>Engagement</li>
          <li>Social Media Ads</li>
          <li>Branding</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
