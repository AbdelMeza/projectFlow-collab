import { useState, useEffect } from "react";
import "./Dashboard.css";
import authentificationManagement from "../../Store/authentificationManagement";
import SideBar from "../../components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import userManagement from "../../Store/UserManagement";

export default function Dashboard() {
    const [requests, setRequests] = useState([])
    const [stats, setStats] = useState({ total: 0, pending: 0, answered: 0 })
    const { getData } = userManagement()

    useEffect(() => {
        async function fetchData() {
            await getData()
        }

        fetchData()
    }, [])

    const navigation = [
        {
            title: "Overview",
            navigation: "dashboard"
        }, {
            title: "Projects",
            navigation: "dashboard/projects"
        }, {
            title: "Requests",
            navigation: "dashboard/requests"
        }
    ]

    return (
        <main className="dashboard">
            <div className="side-content">
                <SideBar navigation={navigation} />
            </div>
            <div className="side-content">
                <Outlet />
            </div>
        </main>
    );
}
