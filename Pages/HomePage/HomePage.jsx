import { useEffect } from "react";
import authentificationManagement from "../../Store/authentificationManagement";
import "./HomePage.css";

export default function HomePage() {
    const { getUserData, userData } = authentificationManagement()

    useEffect(() => {
        const fetchUserData = async () => {
            await getUserData()
        }

        fetchUserData()
    }, [])

    return (
        <main className="homepage">
            <nav className="navbar">
                <div className="side-content">
                    <span className="main-link" style={{ fontWeight: "900" }}>ProjectFlow</span>
                </div>
                <div className="side-content">
                    {userData && (<span className="username" style={{ cursor: "pointer" }}>{userData?.user.username}</span>)}
                    {userData ?
                        <button className="primary-btn">
                            Dashboard
                        </button> :
                        <button className="primary-btn">
                            Get started
                        </button>
                    }
                </div>
            </nav>
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-eyebrow" style={{ fontWeight: "900" }}>
                        Une nouvelle façon de collaborer
                    </span>

                    <h1>
                        La plateforme qui structure
                        <br />
                        les échanges clients & freelances
                    </h1>

                    <p>
                        Centralisez les demandes, clarifiez les réponses
                        et suivez chaque projet dans un espace
                        pensé pour le travail professionnel.
                    </p>

                    <div className="hero-actions">

                        {userData ?
                            <button className="primary-btn">
                                Dashboard
                            </button> :
                            <>
                                <button className="primary-btn">
                                    Commencer gratuitement
                                </button>
                                <button className="secondary-btn">
                                    Découvrir le produit
                                </button>
                            </>
                        }
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <header className="section-header">
                    <span className="section-eyebrow" style={{ fontWeight: "900" }}>Processus</span>
                    <h2>Un flux clair, de la demande à la réponse</h2>
                    <p>
                        Chaque interaction est structurée pour éviter
                        les allers-retours inutiles et les malentendus.
                    </p>
                </header>

                <div className="steps">
                    <div className="step">
                        <span className="step-number">01</span>
                        <h3>Demande client</h3>
                        <p>
                            Le client décrit précisément son besoin
                            via un formulaire clair et guidé.
                        </p>
                    </div>

                    <div className="step">
                        <span className="step-number">02</span>
                        <h3>Réponse freelance</h3>
                        <p>
                            Le freelance répond avec une proposition
                            structurée : délais, budget et conditions.
                        </p>
                    </div>

                    <div className="step">
                        <span className="step-number">03</span>
                        <h3>Suivi centralisé</h3>
                        <p>
                            Suivez l’état, les décisions et l’avancement
                            du projet depuis un seul espace.
                        </p>
                    </div>
                </div>
            </section>

            {/* ROLES */}
            <section className="roles">
                <div className="role-card">
                    <span className="role-eyebrow" style={{ fontWeight: "900" }}>Clients</span>
                    <h3>Pilotez vos demandes en toute clarté</h3>
                    <ul>
                        <li>Formulez des besoins précis</li>
                        <li>Recevez des réponses comparables</li>
                        <li>Décidez plus rapidement</li>
                        <li>Gardez une vue claire sur chaque projet</li>
                    </ul>
                </div>

                <div className="role-card">
                    <span className="role-eyebrow" style={{ fontWeight: "900" }}>Freelances</span>
                    <h3>Répondez de manière professionnelle</h3>
                    <ul>
                        <li>Centralisez toutes les demandes</li>
                        <li>Structurez vos réponses</li>
                        <li>Réduisez les échanges inutiles</li>
                        <li>Améliorez votre taux de conversion</li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <h2>
                    Un espace pensé pour
                    <br />
                    le travail professionnel
                </h2>

                <p>
                    Que vous soyez client ou freelance,
                    simplifiez vos échanges et gagnez en efficacité.
                </p>

                <button className="primary-btn large">
                    Créer un compte
                </button>
            </section>

        </main >
    );
}
