import { useLocation, useNavigate } from "react-router-dom"
import './SideBar.css'

export default function SideBar({ navigation }) {
    const navigate = useNavigate()
    const location = useLocation()
    const path = location.pathname
    console.log(path)

    return <div className="side-bar">
        <div className="header">
            <span>ProjectFlow</span>
        </div>
        <div className="navigation-container">
            {navigation.map((item, index) => (
                <div
                    className={`navigation-item ${path === "/" + item.navigation ? "active" : ""}`}
                    key={index} onClick={() => navigate(`/${item.navigation}`)}
                >
                    {item.title}
                </div>
            ))}
        </div>
    </div>
}