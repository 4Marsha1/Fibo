import Main from "./Main"
import MobileDashboard from "./MobileDashboard"
import Sidebar from "./Sidebar"
import styles from "./styles.module.css"

const DashboardComponent = ({ logout }) => {
    return (
        <div className={styles["container"]}>
            <Sidebar />
            <Main
                logout={logout}
            />
            <MobileDashboard />
        </div>
    )
}

export default DashboardComponent