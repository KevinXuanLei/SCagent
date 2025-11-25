import ChatHeader from "@components/layout/ChatHeader";

export default function ChatPage() {
    return (
        <div className="flex flex-1 flex-col h-screen border-b">
            <div className="chat-header border-b border-gray-300">
                <ChatHeader />
            </div>
            <div className="chat-body flex-1 border-b border-gray-300">"chatbody here"</div>
            <div className="chat-footer border-t border-gray-300">"chatfooter here"</div>
        </div>
    );
}