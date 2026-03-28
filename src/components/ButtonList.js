import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Music",
  "News",
  "Sports",
  "Learning",
  "Fashion",
  "Comedy",
  "Movies",
  "Tech",
  "Travel",
  "Pets",
  "Food",
];

const ButtonList = () => {
  return (
    <div className="flex  scroll-auto  pb-5">
      {list.map((item) => {
        return <Button key={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
