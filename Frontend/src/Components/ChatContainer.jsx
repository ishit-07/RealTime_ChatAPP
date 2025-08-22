import { useChatStore } from "../Store/useChatStore";

const ChatContainer = () => {

    const {messages, isMessagesLoading, getMessages, selctedUser} = useChatStore();

    if(isMessagesLoading) return 
    return (  
        <h1>ChatContainer</h1>
    );
}
 
export default ChatContainer;