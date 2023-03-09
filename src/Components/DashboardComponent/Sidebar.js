import styles from "./styles.module.css"
import Logo from "../../assets/logo.png"
import { routes } from "./routes"

const Sidebar = () => {
    const getRoutes = () => routes.map(route => (
        <div className={styles["sidebar__tab"]} key={route.id}>
            <route.svg />
            <span className={route.active ? styles["route__title__active"] : styles["route__title__inactive"]}>{route.title}</span>
        </div>
    ))

    return (
        <div className={styles["sidebar"]}>
            <div className={styles["branding__section"]}>
                <img src={Logo} className={styles["logo"]} alt="logo" />
                <span className={styles["logo__brandname"]}>
                    FI<span className={styles["logo__brandname__highlight"]}>T</span>NESS
                </span>
            </div>
            <div className={styles["sidebar__tabs"]}>
                {getRoutes()}
            </div>
        </div>
    )
}

export default Sidebar