import { useEffect, useRef } from "react"; // Add useRef import
import { useChatStore } from "../Store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../Store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    isMessagesLoading,
    getMessages,
    selectedUser,
    subscibeToMessage,
    unsubscribeToMessage,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messagesEndRef = useRef(null); // Add ref for auto-scroll

  useEffect(() => {
    getMessages(selectedUser._id);

    subscibeToMessage();

    return () => unsubscribeToMessage();
  }, [selectedUser._id, getMessages, subscibeToMessage, unsubscribeToMessage]);

  useEffect(() => {
    if (messagesEndRef.current && messages) {
      messagesEndRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex flex-1 flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          // // handle both populated sender objects and raw id strings
          // const messageSenderId = message?.senderId?._id ?? message?.senderId;
          // const isOwn = String(messageSenderId) === String(authUser?._id);

          return (
            <div
              key={message._id}
              className={`chat ${
                message.senderId === authUser._id ? "chat-end" : "chat-start"
              }`}
              ref={messagesEndRef}
            >
              <div className="chat-image avatar">
                <div className="w-10 h-10 rounded-full border overflow-hidden">
                  <img
                    src={
                      message.senderId === authUser._id
                        ? authUser?.profilePic || "/avatar.webp"
                        : selectedUser.profilePic || "/avatar.webp"
                    }
                    alt="Profile Pic"
                  />
                </div>
              </div>

              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">
                  {formatMessageTime(message.createdAt)}
                </time>
              </div>

              <div className="chat-bubble flex flex-col">
                {message.image && (
                  <img
                    src={message.image}
                    alt="Attachment"
                    className="sm:max-w-[200px] rounded-md mb-2"
                  />
                )}
                {message.text && <p>{message.text}</p>}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} /> {/* Add ref element for auto-scroll */}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
