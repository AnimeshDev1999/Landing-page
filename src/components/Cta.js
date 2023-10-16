const Cta = () => {
  return (
    <div className="flex cta-div mx-5 mb-10 rounded-md flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-5 px-5 md:px-10 py-16">
      <p className="text-3xl md:text-4xl lg:text-5xl font-semibold md:w-3/4 text-white">
        Are You Ready to Boost Your Social Media Performance?{" "}
      </p>
      <button className="bg-purple-300 px-3 py-1 md:px-5 md:py-3 lg:px-6 lg:py-4 md:font-semibold rounded-full">
        Learn More
      </button>
    </div>
  );
};

export default Cta;
