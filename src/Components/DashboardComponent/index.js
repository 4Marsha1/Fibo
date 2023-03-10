import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Main from "./Main"
import MobileDashboard from "./MobileDashboard"
import Sidebar from "./Sidebar"
import styles from "./styles.module.css"

const DashboardComponent = ({ logout }) => {
    const { isAuthenticated } = useAuth0()
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            if (!isAuthenticated) {
                navigate('/')
            }
        })()
    }, [isAuthenticated, navigate])

    return (
        <div className={styles["container"]}>
            <Sidebar
                logout={logout}
            />
            <Main />
            <MobileDashboard />
        </div>
    )
}

export default DashboardComponent