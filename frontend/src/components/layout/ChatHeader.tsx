import Button from "@components/common/Button";



export default function ChatHeader() {
    return (
        <div className="flex items-center justify-between px-4 py-3">
            <span>Single Particle Analysis Chatbot</span>
            <Button text="Settings" theme="white" />
        </div>
    );
}