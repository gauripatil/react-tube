import CommentsList from "./CommentsList";
import { comments } from "../utils/commentsMock";
const CommentsContainer = () => {
  return (
    <div className=" py-3 w-[1050px]">
      <h1 className="font-bold text-2xl">Comments:</h1>

      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
