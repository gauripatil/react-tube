import Button from "./Button";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../stores/appSlice";

const list = [
  "All",
  "Gaming",
  "Music",
  "News",
  "Sports",
  "Comedy",
  "Movies",
  "Tech"
];

const ButtonList = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (categoryName) => {
    dispatch(setSelectedCategory(categoryName));
  };

  return (
    <div className="flex scroll-auto pb-5">
      {list.map((item) => {
        return (
          <Button 
            key={item} 
            name={item} 
            onClick={() => handleButtonClick(item)}
          />
        );
      })}
    </div>
  );
};

export default ButtonList;