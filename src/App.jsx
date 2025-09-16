import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <div className="flex flex-1">
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  )
}

export default App
