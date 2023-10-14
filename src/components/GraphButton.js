const GraphButton = (props) => {
  return (
    <div className={props.cls}>
      <div className="p-5">
        <p className="text-white text-xl font-bold">{props.nam}</p>
        <p className="text-white text-xl font-bold">&rarr;</p>
      </div>
    </div>
  );
};

export default GraphButton;
