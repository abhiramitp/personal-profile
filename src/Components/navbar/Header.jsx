import { memo } from 'react'
import '../../App.css'
import ProfilePic from '../../Assets/ProfilePic.jpg'

const Header = memo(() => {
  return (
    <header className="nav_home_section" role="banner">
      <div className="Details_Section">
        <div className="image">
          <img 
            src={ProfilePic} 
            alt="Abhirami T P - Web Developer" 
            loading="lazy"
            width="105"
            height="105"
          />
        </div>
        <div className="Name_Details">
          <h1>Abhirami T P</h1>
          <span>Web Developer</span>
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
