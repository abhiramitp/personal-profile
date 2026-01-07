import { memo } from 'react'
import "../../App.css"
import leaf_diseases from '../../Assets/leaf_diseases.jpg'
import Athletics_hq from '../../Assets/Athletics_hq.jpg'
import Portfolio from '../../Assets/Portfolio.png'
import travel_img from '../../Assets/travel_img.avif'
import Yoga_wise from '../../Assets/Yoga_wise.avif'
import Uploadingvideo from '../../Assets/Uploadingvideo.webp'
import user from '../../Assets/user.avif'

const projects = [
  {
    id: 1,
    title: "Leaf Disease Detection",
    tech: "Python, Degree project",
    image: leaf_diseases,
    link: "https://github.com/tpabhirami03?tab=repositories",
    alt: "Leaf Disease Detection project"
  },
  {
    id: 2,
    title: "Athletics HQ",
    tech: "React, PG project",
    image: Athletics_hq,
    link: "https://github.com/tpabhirami03?tab=repositories",
    alt: "Athletics HQ project"
  },
  {
    id: 3,
    title: "Portfolio",
    tech: "React, React Material UI",
    image: Portfolio,
    link: "https://656234cbfbcc7556dec6516b--inspiring-maamoul-3d7ce8.netlify.app/",
    alt: "Portfolio project"
  },
  {
    id: 4,
    title: "Travel Website",
    tech: "HTML, CSS, Bootstrap5",
    image: travel_img,
    link: "https://github.com/tpabhirami03?tab=repositories",
    alt: "Travel Website project"
  },
  {
    id: 5,
    title: "Yoga Wise",
    tech: "React, HTML, CSS, Bootstrap5",
    image: Yoga_wise,
    link: "https://github.com/tpabhirami03?tab=repositories",
    alt: "Yoga Wise project"
  },
  {
    id: 6,
    title: "Video Uploading",
    tech: "React, Node.js",
    image: Uploadingvideo,
    link: "https://github.com/tpabhirami03?tab=repositories",
    alt: "Video Uploading project"
  },
  {
    id: 7,
    title: "User Details",
    tech: "React, Node.js",
    image: user,
    link: "https://github.com/tpabhirami03?tab=repositories",
    alt: "User Details project"
  }
]

const Card = memo(() => {
  return (
    <section className="card-container" aria-label="Projects section">
      <div className="card_main_title">
        <h2 className="card-heading">Projects</h2>
      </div>
      <div className="cards" role="list">
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            role="listitem"
            aria-label={`View ${project.title} project`}
          >
            <article className="card-content">
              <div className="card-image">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  loading="lazy"
                  width="250"
                  height="150"
                />
              </div>
              <div className="card-text">
                <h3>{project.title}</h3>
                <span>{project.tech}</span>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  )
})

Card.displayName = 'Card'

export default Card
