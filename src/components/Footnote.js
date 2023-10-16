import up from "../images/uparr.svg";

const Footnote = () => {
  return (
    <div className="mx-5 flex justify-between items-center py-5 md:px-10 border-t-2">
      <p>
        Powered by <span className="text-purple-400">SocioLib</span>.
      </p>
      <div className="flex gap-5 justify-center items-center">
        <p>Privacy Policy</p>
        <p>Our Terms</p>
        <img src={up} alt="" className="h-10" />
      </div>
    </div>
  );
};

export default Footnote;
