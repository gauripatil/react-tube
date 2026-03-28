import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => {
    return (
      <div className="border-l-2 border-gray-200">
        <Comment key={index} comment={comment} />
      </div>
    );
  });
};

export default CommentsList;
