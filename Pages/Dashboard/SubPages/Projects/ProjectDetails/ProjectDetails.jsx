import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useCasesManagement from "../../../../../Store/useCasesManagement"
import Status from "../../../../../components/Status/Status"
import KPIs from "../../../../../components/KPIs/KPIs"
import './ProjectDetails.css'

export default function ProjectDetails() {
    const { getOneProject, projectDetails } = useCasesManagement()
    const { id } = useParams()

    useEffect(() => {
        const fetchProject = async () => {
            if (!id) return
            await getOneProject(id)
        }

        fetchProject()
    }, [id])

    const data = [
        {
            title: "Creator",
            data: projectDetails?.owner.username
        }, {
            title: "Client",
            data: projectDetails?.client.username
        }, {
            title: "Created at",
            data: new Date(projectDetails?.createdAt).toLocaleDateString()
        }, {
            title: "Deadline",
            data: new Date(projectDetails?.deadline).toLocaleDateString()
        },
    ]


    console.log(projectDetails)
    return <div className="project-details">
        <div className="header">
            <span className="title">{projectDetails?.title}</span>
            <Status content={projectDetails?.status} />
        </div>
        <div className="upper-content">
            <KPIs data={data} />
        </div>
    </div>
}