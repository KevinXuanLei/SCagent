export default function SidebarPage() {
    return (
        <div className="flex flex-col h-screen border-r">
            <div className="sidebar-header border-b border-gray-300">
                <h1>Sidebar Header</h1>
            </div>
            <div className="sidebar-body flex-1 border-b border-gray-300">
                <h1>Sidebar Body</h1>
            </div>
            <div className="sidebar-footer border-t border-gray-300">
                <h1>Sidebar Footer</h1>
            </div>
        </div>
    );
}