import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11 p-5 shadow-md">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
