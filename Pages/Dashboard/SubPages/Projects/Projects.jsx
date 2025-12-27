import { useEffect } from "react"
import userManagement from "../../../../Store/UserManagement"
import './Projects.css'

export default function ProjectsView() {
    const { getData, profileData } = userManagement()
    useEffect(() => {
        async function fetchData() {
            await getData()
        }

        if (profileData === null) {
            fetchData()
        }
    }, [])

    const projects = profileData?.projects
    console.log(projects)

    return <div className="projects-view">
        <div className="upper-content">
            <div className="side-content">
                <div className="page-title">Projects</div>
                <div className="counter">{projects?.length > 0 ? projects.length : 0}</div>
            </div>
            <div className="side-content">
                <button className="primary-btn" style={{ display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add project
                </button>
            </div>
        </div>
        <div className="lower-content">
            <div className="projects-table-wrapper">
                <table className="projects-table">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Client</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects && projects.length > 0 ? (
                            projects.map(project => (
                                <tr key={project._id}>
                                    <td className="project-title">
                                        {project.title}
                                    </td>

                                    <td className="project-title">
                                        {project.clientId?.username ? project.clientId.username : <button className="table-btn">Add</button> }
                                    </td>

                                    <td>
                                        <span className={`status-badge ${project.status.toLowerCase()}`}>
                                            {project.status}
                                        </span>
                                    </td>

                                    <td className="date">
                                        {new Date(project.createdAt).toLocaleDateString()}
                                    </td>

                                    <td>
                                        <button className="table-btn">View</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="empty-state" style={{ color: "#111", padding: "5vw 0" }}>
                                    No projects yet
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}