import { memo } from 'react'
import { ChevronRight } from 'react-feather'

const frontendSkills = [
  { name: "HTML", borderColor: "rgba(0,0,0,.6)" },
  { name: "CSS", borderColor: "rgba(234,179,8,.6)" },
  { name: "Javascript", borderColor: "rgba(59,130,246,.6)" },
  { name: "React Js", borderColor: "rgba(59,130,246,.6)" }
]

const backendSkills = [
  { name: "Nodejs", borderColor: "rgba(34,197,94,.6)" }
]

const databaseSkills = [
  { name: "MySql", borderColor: "rgba(59,130,246,.6)" },
  { name: "MongoDB", borderColor: "rgba(16,185,129,.6)" }
]

const moreProjects = [
  {
    id: 1,
    title: "portfolio",
    tech: "React",
    link: "https://github.com/tpabhirami03?tab=repositories",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="78" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M33.319 16.408c-4.4 0-5.16 3.43-8.266 7.916" />
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.823 16.4c6.126.604 5.467 7.685 13.405 13.725c.69.517 1.467.949 2.33 1.208c1.207.345 2.243.345 3.106.345c4.486 0 7.765-3.624 8.11-8.11v-.691c0-1.553-.259-3.193-1.294-4.4c-1.208-1.381-3.106-1.899-4.832-1.985c-3.733-.197-16.95-.311-23.296 0c-1.726.086-3.624.604-4.832 1.984c-1.036 1.208-1.294 2.848-1.294 4.4v.691c.345 4.487 3.623 8.11 8.11 8.11c1.208 0 3.279.087 4.918-.948c1.812-1.036 2.33-2.158 3.624-3.797" />
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.52 18.476l-2.934 1.467l-.086 2.502h1.639m34.341-3.969l2.934 1.467l.086 2.502h-1.639" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Restaurant Website",
    tech: "HTML,CSS,Bootstrap",
    link: "https://github.com/tpabhirami03?tab=repositories",
    icon: (
      <svg id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="35" height="78" aria-hidden="true">
        <path d="m292.75 358.526a7.875 7.875 0 1 1 -7.8752 7.875 7.8762 7.8762 0 0 1 7.8752-7.875zm-116.2346-19.8447-.893 15.75h38.7452l-1.1022-15.75zm116.2346-11.6553a7.875 7.875 0 1 1 -7.8752 7.875 7.8762 7.8762 0 0 1 7.8752-7.875zm0-31.5a7.875 7.875 0 1 1 -7.8752 7.875 7.8762 7.8762 0 0 1 7.8752-7.875zm-53.4976-45.9375 40.3724 161.4375h-70.8754v-11.392a44.8462 44.8462 0 0 0 17.9029-11.3921 21.0007 21.0007 0 0 0 6.3-15.75l-4.3053-51.1875h-65.887v-12.4961a40.0638 40.0638 0 0 0 -8.0848-24.1514 269.4531 269.4531 0 0 1 68.8277-31.1309q7.875-2.1276 15.75-3.9375zm107.0476-.2631c5.25 1.2612 10.5 2.68 15.75 4.2006 29.4 8.4014 58.8 21 81.9 39.9014a43.8377 43.8377 0 0 1 16.8 33.5986v84h-154.8752zm-19.7929-15.0664c1.3653-.8409 2.9923.3657 2.9923 2.1533v46.1977a2.101 2.101 0 0 1 -2.9923 2.4165l-33.7577-20.1079-33.757 20.1079a2.1 2.1 0 0 1 -2.993-2.1533v-46.2012c0-1.7841 1.6278-2.9907 2.993-2.15l33.757 19.5816 33.7577-19.8447zm-214.8819-14.4375h17.3248a3.4533 3.4533 0 0 1 1.8376.5776 9.7652 9.7652 0 0 1 6.7723 9.3447v2.4678h-3.9375l2.8875 50.3467a29.5564 29.5564 0 0 1 15.75 26.25v118.86c0 1.6817-1.3646 3.2539-3.78 4.6211h23.94a.9193.9193 0 0 1 -.2623-.7895c.3676-1.7329 2.4147-3.0967 6.1946-4.1973a38.5659 38.5659 0 0 1 7.6654-1.2612c2.6776-.8921 4.5147-2.1533 4.5147-3.36v-30.5567a34.9615 34.9615 0 0 1 -21-10.1309 11.34 11.34 0 0 1 -3.517-8.5039l2.9922-42h50.4525l3.5177 42a11.8775 11.8775 0 0 1 -3.7277 8.61 34.66 34.66 0 0 1 -20.37 10.0249v30.4507c0 1.1552 1.68 2.3618 4.6723 3.36h1.9429q2.6466.3435 5.25.9468c4.2524 1.1006 6.1949 2.519 6.1949 4.3579a1.9889 1.9889 0 0 1 0 .7861h102.0599a10.5 10.5 0 0 1 0 21h-257.25a10.5 10.5 0 0 1 0-21h30.03c-2.4148-1.3637-3.78-2.9394-3.78-4.621v-118.597a29.5569 29.5569 0 0 1 15.75-26.25l3.15-50.3467h-3.9377v-2.4678a9.8133 9.8133 0 0 1 6.8252-9.3447 3.2719 3.2719 0 0 1 1.8376-.5776zm181.1248-165.7955a84 84 0 1 1 -84 84 84 84 0 0 1 84-84z" fillRule="evenodd" fill="#000000" style={{ fill: " rgb(255, 255, 255)" }}></path>
      </svg>
    )
  },
  {
    id: 3,
    title: "yogaWise",
    tech: "React",
    link: "https://github.com/tpabhirami03?tab=repositories",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M45.09 37.13c-4.58-5.5-4.42-5.25-4.5-5.52l-2.54-8.34a7 7 0 0 0-5.55-4.87l-4.5-.75v-.91c3.53-2.47 3-5.85 3-9.74a7 7 0 0 0-14 0c0 3.93-.52 7.27 3 9.74v.91l-4.49.75A7 7 0 0 0 10 23.27l-2.59 8.34c-.08.28.17-.08-4.5 5.52a3.51 3.51 0 0 0 3.17 5.81 4.24 4.24 0 0 0 1.18 3.79C9 48.45 7.55 48 37.7 48a4.29 4.29 0 0 0 4.22-5.06 3.51 3.51 0 0 0 3.17-5.81zM24 2a5 5 0 0 1 5 5c-1.8 0-3.52.07-5.29-1.71a1 1 0 0 0-.87-.29c-1.27.21-.31 2-3.84 2a5 5 0 0 1 5-5zm-5 9V9a4.88 4.88 0 0 0 4.19-1.52A8.54 8.54 0 0 0 29 9v2a5 5 0 0 1-10 0zm5 7c2.21 0 2-.68 2 0a2 2 0 0 1-4 0c0-.68-.21 0 2 0zm-8.17 2.38 4.52-.76a4 4 0 0 0 7.3 0l4.52.76a5 5 0 0 1 4 3.47l1.12 3.68L34 28.6l-1.1-3a1 1 0 0 0-1.89.1C31 26 31 24.94 31 36H17c0-10.74.15-10.38-.43-10.8-1.37-1-1.78 1.19-2.61 3.4l-3.21-1.07 1.12-3.68a5 5 0 0 1 3.96-3.47zm-2.56 19.33 3-1.71h15.46l3 1.72c-13.27 1.53-8.25 1.52-21.46-.01zM15 31.54v4.88L10.46 39c3.54-4.28 2.95-3.2 4.54-7.46zm18 4.88v-4.88c1.61 4.33 1 3.19 4.54 7.48zM4.57 40.68a1.64 1.64 0 0 1-.12-2.27c5.51-6.62 4.44-4.8 5.71-9l3.1 1c-1.74 4.69-.5 2.67-6.61 10a1.55 1.55 0 0 1-2.08.27zm4.1 4.64a2.3 2.3 0 0 1 1.43-3.91c.34 0 0 0 5.8.62a3.08 3.08 0 0 0-1.68 4c-3.94-.03-4.66.19-5.55-.71zm8.45.68a1.11 1.11 0 0 1-.12-2.22l14-1.62V46zm20.58 0H33v-4.07c4.38-.51 4.5-.53 4.71-.53a2.3 2.3 0 0 1 0 4.6zm6.23-6.28a1.46 1.46 0 0 1-2.58.74c-6-7.23-4.88-5.35-6.61-10l3.1-1c.85 2.8.88 3.2 1.41 3.81 4.46 5.33 4.8 5.43 4.68 6.45z" data-name="Yoga pose" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Shoping",
    tech: "React js",
    link: "https://github.com/tpabhirami03?tab=repositories",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="78" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      </svg>
    )
  }
]

const SkillCard = ({ title, skills }) => (
  <div className={`${title.toLowerCase()}-card shadow`}>
    <div className="skill_heading">{title}</div>
    <div className="skills p-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="p-2 rounded m-2 shadow-lg"
          style={{
            backgroundColor: "rgba(35, 35, 50, 0.35)",
            color: "#8b8a91",
            border: `1px solid ${skill.borderColor}`
          }}
        >
          {skill.name}
        </div>
      ))}
    </div>
  </div>
)

const Skill = memo(() => {
  return (
    <section className="skill-section" aria-label="Skills section">
      <div className="tech-skill">
        <h2 className="skill-section-title" id="skills">What I Know</h2>
        <div className="card-list">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
          <SkillCard title="Database" skills={databaseSkills} />
        </div>
      </div>
      <aside className="more-porjects p-4">
        <h2 className="project-section-title">More Projects</h2>
        <div className="project-details-section" role="list">
          {moreProjects.map((project) => (
            <div key={project.id} className="more-project-details p-2" role="listitem">
              <div style={{ width: "50px" }} aria-hidden="true">
                {project.icon}
              </div>
              <a 
                href={project.link} 
                style={{ textDecoration: 'none' }} 
                className="more-project-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} project`}
              >
                <div className="project-details">
                  <div className="project-title">{project.title}</div>
                  <div style={{ color: "#4f4f52", fontSize: "0.81rem", paddingTop: "3px" }}>
                    {project.tech}
                  </div>
                </div>
              </a>
              <div className="link" aria-hidden="true">
                <ChevronRight style={{ marginLeft: "8px" }} />
              </div>
            </div>
          ))}
        </div>
      </aside>
    </section>
  )
})

Skill.displayName = 'Skill'

export default Skill
