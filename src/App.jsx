import './App.css'
import Header from './Components/navbar/Header'
import Sidebar from './Components/navbar/Sidebar'
import Card from './Components/Home/Card'
import Skill from './Components/Home/Skill'

function App() {
  return (
    <div className="App">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="header-container">
        <Header />
      </div>
      <div className="home-container">
        <Card />
        <Skill />
      </div>
    </div>
  )
}

export default App

