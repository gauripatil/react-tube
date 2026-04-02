const LiveChatMessage = ({ name, message }) => {
  return (
    <div className="flex w-full py-2 items-center border-b border-gray-200">
      <img
        alt="user"
        className="h-8 w-8 rounded-full"
        src="https://www.svgrepo.com/show/13656/user.svg"
      ></img>
      <span className="px-2 text-xs text-gray-600">@{name}</span>
      <span className="text-[13px] text-gray-800">{message}</span>
    </div>
  );
};

export default LiveChatMessage;
