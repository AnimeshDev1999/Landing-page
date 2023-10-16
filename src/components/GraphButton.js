const GraphButton = (props) => {
  return (
    <div className={props.cls}>
      <div className="p-5 md:pt-[16rem]">
        <p className="text-white text-xl font-bold md:text-2xl">{props.nam}</p>
        <p className="text-white text-xl font-bold md:text-2xl">&rarr;</p>
      </div>
    </div>
  );
};

export default GraphButton;
