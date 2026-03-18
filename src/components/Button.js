const Button = ({ name }) => {
  return (
    <div>
      <button className=" text-sm font-bold rounded-lg bg-gray-100 px-2 py-2 my-1 mx-3 hover:bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
