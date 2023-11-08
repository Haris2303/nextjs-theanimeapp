const SubCard = ({ title, data }) => {
  return (
    <div className="w-36 flex flex-col items-center rounded border border-color-primary">
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

export default SubCard;
