import { useState, useEffect } from "react";
import "./Dashboard.css";
import authentificationManagement from "../../Store/authentificationManagement";
import SideBar from "../../components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
    const [requests, setRequests] = useState([])
    const [stats, setStats] = useState({ total: 0, pending: 0, answered: 0 })
    const { userData } = authentificationManagement()

    // useEffect(() => {
    //     // fetch dashboard data depuis ton API
    //     async function fetchData() {
    //         const res = await fetch("/api/dashboard"); // endpoint backend
    //         const data = await res.json();
    //         setRequests(data.requests);
    //         setStats(data.stats);
    //     }
    //     fetchData();
    // }, []);

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
        }, {
            title: "Client",
            navigation: "dashboard/clients"
        },
    ]

    return (
        <main className="dashboard">
            <div className="side-content">
                <SideBar navigation={navigation} />
            </div>
            <div className="side-content">
                <Outlet/>
            </div>
        </main>
    );
}
