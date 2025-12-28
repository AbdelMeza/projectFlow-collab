import { useSearchParams } from 'react-router-dom'
import './AddClient.css'
import { useEffect, useState } from 'react'
import useCasesManagement from '../../Store/useCasesManagement'

export default function AddClient({ selectedProject }) {
    const { searchClient, clientSearched, addClient } = useCasesManagement()
    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get("s") || ""
    const [selectedClient, setSelectedClient] = useState()
    const { openAddClient } = useCasesManagement()

    useEffect(() => {
        const searchTimeOut = setTimeout(() => {
            searchClient(search)
        }, 300)

        return () => clearTimeout(searchTimeOut)
    }, [search])

    return <div className="add-client-container">
        <div className="close" onClick={() => openAddClient()}>
            <svg xmlns="http://www.w3.org/2000/svg" width={15} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <div className="content">
            <div className="search-bar-container">
                <input type="text" placeholder="Search for client.." maxLength={13} onChange={(e) => {
                    const value = e.target.value
                    setSearchParams(value ? { s: value } : {})
                }} />
            </div>
            <div className="lower-content">
                <header>Result</header>
                <div className="result-container">
                    {clientSearched === null ? <code>Search for your client</code> :
                        clientSearched.length > 0 ?
                            clientSearched.map(c => (
                                <span
                                    className="user-item" key={c}
                                    onClick={() => {
                                        addClient({
                                            projectId: selectedProject,
                                            clientId: c._id
                                        }),
                                        window.location.reload()
                                    }}
                                >
                                    {c.username}
                                </span>
                            )) :
                            <code>No user found</code>
                    }
                </div>
            </div>
        </div>
    </div>
}