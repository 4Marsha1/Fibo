import Main from "./Main"
import MobileDashboard from "./MobileDashboard"
import Sidebar from "./Sidebar"
import styles from "./styles.module.css"

const DashboardComponent = () => {
    return (
        <div className={styles["container"]}>
            <Sidebar />
            <Main />
            <MobileDashboard />
        </div>
    )
}

export default DashboardComponent