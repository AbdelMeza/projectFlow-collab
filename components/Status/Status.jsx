export default function Status({ content }) {
    const statusType = () => {
        if (content === "Waiting") return "grey"
        if (content === "In progress") return "blue"
        if (content === "Completed") return "green"
    }

    return <div className={`status-container ${statusType()}`}>
        <span className="status">{content}</span>
    </div>
}