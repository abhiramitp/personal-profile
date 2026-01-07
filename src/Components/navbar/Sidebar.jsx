import { useState, useCallback, useMemo } from 'react'
import "../../App.css"
import { SidebarData, SidebarIcon } from './SidebarData'
import { Close } from '@mui/icons-material'
import { Menu, User } from 'react-feather'
import resume from '../../Assets/resume.pdf'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [show, setShow] = useState(false)

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev)
  }, [])

  const handleResume = useCallback(() => {
    window.open(resume, "_blank")
  }, [])

  const contactOpen = useCallback(() => {
    setShow(true)
  }, [])

  const contactClose = useCallback(() => {
    setShow(false)
  }, [])

  const currentPath = useMemo(() => window.location.pathname, [])

  const handleNavClick = useCallback((val) => {
    if (val.title === 'Resume') {
      handleResume()
    } else if (val.link) {
      window.location.pathname = val.link
    }
  }, [handleResume])

  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          onClick={contactOpen}
          className="contactbtn"
          aria-label="Open contact modal"
        >
          Contact Me<User style={{ marginLeft: '15px' }} />
        </button>
      </div>
      <button 
        className="close" 
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={isSidebarOpen}
      >
        {isSidebarOpen ? <Close /> : <Menu />}
      </button>
      <nav 
        className={`sidebar_section ${isSidebarOpen ? 'menu-open' : ''}`}
        aria-label="Main navigation"
      >
        <ul className="SidebarList" role="list">
          {SidebarData.map((val, key) => (
            <li
              key={key}
              className="SidebarRow"
              id={currentPath === val.link ? "active" : ""}
              onClick={() => handleNavClick(val)}
              role="listitem"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleNavClick(val)
                }
              }}
            >
              <div id="Icon" aria-hidden="true">
                {val.icon}
              </div>
              <div id="Title">
                {val.title}
              </div>
            </li>
          ))}
        </ul>
        <ul className="SidebarList" role="list">
          <div className="mt-2 SidebarHead">Socials</div>
          {SidebarIcon.map((val, key) => (
            <li 
              className="SidebarRow"
              key={key}
              id={currentPath === val.link ? "active" : ""}
              onClick={() => window.open(val.link, "_blank", "noopener,noreferrer")}
              role="listitem"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  window.open(val.link, "_blank", "noopener,noreferrer")
                }
              }}
            >
              <div id="Icon" aria-hidden="true">
                {val.icon}
              </div>
              <div id="Title">
                {val.title}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <Modal
        show={show}
        onHide={contactClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contact-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contact-modal-title">Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Phone: 7594897220</h5>
          <h5>Phone: 7012927220</h5>
          <p>
            Email: <a href="mailto:tpabhirami03@gmail.com">tpabhirami03@gmail.com</a>
          </p>
          <p>Let's dive into the tech wonders together!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={contactClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Sidebar
