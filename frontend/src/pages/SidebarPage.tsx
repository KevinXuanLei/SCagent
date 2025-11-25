import Button from "@components/common/Button";

export default function SidebarPage() {
    return (
        <div className="flex flex-col h-screen border-r w-80">
            <div className="sidebar-header border-b border-gray-300 flex flex-col px-4 py-3 gap-2">
                <Button text="New Conversation" theme="black" />
                <Button text="Clear Conversations" theme="white" />
            </div>
            <div className="sidebar-body flex-1 border-b border-gray-300 px-4 py-3">
                <span className="text-neutral-500">No chats yet, click <br />'NewConversation' to start</span>
            </div>
            <div className="sidebar-footer border-t border-gray-300">
                <h1>Sidebar Footer</h1>
            </div>
        </div>
    );
}