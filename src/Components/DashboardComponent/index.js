import Main from "./Main"
import Sidebar from "./Sidebar"
import styles from "./styles.module.css"

const DashboardComponent = () => {
    return (
        <div className={styles["container"]}>
            <Sidebar />
            <Main />
        </div>
    )
}

export default DashboardComponent