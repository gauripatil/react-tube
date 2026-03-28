import CommentsList from "./CommentsList";

const Comment = ({ comment }) => {
  const { name, text, replies } = comment;
  return (
    <div className="m-4 p-4 flex  border-gray-50 bg-stone-50 border-b-2 shadow-md">
      <img
        src="https://www.svgrepo.com/show/13656/user.svg"
        className="w-9 h-9"
      />
      <div className="px-3">
        <h3 className="font-bold text-lg ">{name}</h3>
        <h4 className="font-normal text-sm">{text}</h4>
        <CommentsList comments={replies} />
      </div>
    </div>
  );
};

export default Comment;
