import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import authentificationManagement from "../Store/authentificationManagement"

export default function RequireAuth({ children }) {
    const { getUserData, userData } = authentificationManagement()
    const navigate = useNavigate()

    useEffect(() => {
        getUserData()
    }, [])

    if (userData === undefined) {
        return null
    }

    if (userData === null) {
        navigate("/", { replace: true })
        return null
    }

    return children
}
