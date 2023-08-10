// Inside the Card component
const Card = ({ data, onClick, isSelected }) => {
  return (
    <div
      className={`cards w-[100px] h-[100px] 
      bg-gradient-to-r from-blue-200 to-cyan-300
       rounded-[25px] ${
        isSelected ? "selected" : ""
      }`}
      onClick={onClick}
    >
      {/* Image */}
      <img className="w-[100px] items-center m-auto  max-w-full" src={data.image} alt={`Dish ${data.id}`} />
    </div>
  );
};
export default Card