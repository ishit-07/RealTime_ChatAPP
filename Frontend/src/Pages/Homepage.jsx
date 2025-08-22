import ChatContainer from "../Components/ChatContainer";
import NoChatSelected from "../Components/NoChatSelected";
import Sidebar from "../Components/Sidebar";
import { useChatStore } from "../Store/useChatStore";


const Homepage = () => {
  const { selctedUser } = useChatStore();
  return (
    <>
      <div className="h-screen bg-base-200">
        <div className="flex items-center justify-center ">
          <div className="bg-base-100 rounded-lg shadow-cl w-full  h-screen">
            <div className="flex h-full rounded-lg overflow-hidden">
              <Sidebar />

              {!selctedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
