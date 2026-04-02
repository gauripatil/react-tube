import { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { addMessage } from "../stores/chatSlice";

const LiveChat = () => {
  const [liveMessages, setLiveMessages] = useState([]);
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        }),
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-white-300 rounded-md p-2 shadow-sm overflow-scroll flex flex-col-reverse">
        {chatMessages
          .slice()
          .reverse()
          .map((msg, index) => (
            <LiveChatMessage
              key={index}
              name={msg.name}
              message={msg.message}
            />
          ))}
      </div>
      <form
        className="w-full p-1 ml-2 border border-gray-400 rounded-md flex space-between"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="w-full border border-gray-400 p-1 m-2 rounded"
          type="text"
          value={liveMessages}
          onChange={(e) => setLiveMessages(e.target.value)}
        />
        <button
          className="border rounded bg-green-100 border-gray-400 px-3 py-1 m-2"
          type="submit"
          onClick={() => {
            dispatch(
              addMessage({
                name: "gauri",
                message: liveMessages,
              }),
            );
            setLiveMessages("");
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
