import { useState, useEffect } from "react";
import "./Dashboard.css";

export default function Dashboard({ user }) {
    const [requests, setRequests] = useState([]);
    const [stats, setStats] = useState({ total: 0, pending: 0, answered: 0 });

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

    return (
        <main className="dashboard">
            <header className="dashboard-header">
                <h1>Bienvenue, {user?.username}</h1>
                <p>Voici un aperçu de vos demandes et réponses</p>
            </header>

            {/* Stats cards */}
            <section className="dashboard-stats">
                <div className="stat-card">
                    <span className="stat-title">Total des requêtes</span>
                    <span className="stat-value">{stats?.total}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-title">Requêtes en attente</span>
                    <span className="stat-value">{stats?.pending}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-title">Réponses envoyées</span>
                    <span className="stat-value">{stats?.answered}</span>
                </div>
            </section>

            {/* Table des requêtes */}
            <section className="dashboard-requests">
                <h2>Requêtes récentes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Projet</th>
                            <th>Statut</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests?.map((req) => (
                            <tr key={req._id}>
                                <td>{req.client.username}</td>
                                <td>{req.title}</td>
                                <td>{req.status}</td>
                                <td>{new Date(req.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}
