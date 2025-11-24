import SidebarPage from './pages/SidebarPage'
import ChatPage from './pages/ChatPage'

import './App.css'

function App() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <SidebarPage />
      <ChatPage />
    </div>
  )
}

export default App
