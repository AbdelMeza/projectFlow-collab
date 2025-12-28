import { useState } from 'react'
import './CreateProject.css'
import useCasesManagement from '../../Store/useCasesManagement'

export default function CreateProject() {
    const { openCreateProject, createProject } = useCasesManagement()
    const [projectTitle, setProjectTitle] = useState("")
    const [projectDeadline, setProjectDeadline] = useState("")

    const isValidDeadline = (date) => {
        if (!date) return false

        const selectedDate = new Date(date)
        const currentDate = new Date()

        selectedDate.setHours(0, 0, 0, 0)
        currentDate.setHours(0, 0, 0, 0)

        return selectedDate >= currentDate
    }

    const handleCreate = async () => {
        await createProject({
            title: projectTitle,
            deadline: projectDeadline
        })

        window.location.reload()
    }


    return <div className="create-project-container">
        <div className="close" onClick={() => openCreateProject()}>
            <svg xmlns="http://www.w3.org/2000/svg" width={15} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <div className="content">
            <div className="upper-content">
                <div className="input-container">
                    <label htmlFor="title">Project title</label>
                    <input type="text"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="title">Project deadline</label>
                    <input type="date"
                        value={projectDeadline}
                        onChange={(e) => setProjectDeadline(e.target.value)}
                    />
                </div>
            </div>
            <div className="lower-content">
                <button className="primary-btn"
                    disabled={projectTitle === "" || !isValidDeadline(projectDeadline)}
                    onClick={() => handleCreate()}
                >
                    Create project
                </button>
            </div>
        </div>
    </div>
}