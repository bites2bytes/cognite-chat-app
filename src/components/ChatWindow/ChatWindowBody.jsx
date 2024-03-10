import MessageCard from "./MessageCard";
import backgroundImg from "../../assets/chat_background.png";

function ChatWindowBody({ currentChat }) {
  return (
    <div
      className="w-full flex flex-col flex-grow overflow-auto gap-1 px-10 py-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {currentChat === undefined ? (
        <div className="flex flex-grow items-center justify-center">
          <p className="text-gray-500">Start a conversation</p>
        </div>
      ) : (
        currentChat.messages.map((message, i) => (
          <MessageCard
            key={i}
            text={message.text}
            timestamp={message.timestamp}
            userId={message.userId}
          />
        ))
      )}
    </div>
  );
}

export default ChatWindowBody;
