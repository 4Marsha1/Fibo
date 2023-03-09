import { quickActions } from "./quickActions"
import styles from "./styles.module.css"
import { ReactComponent as SubscriptionIcon } from "../../assets/dashboard/main/fees.svg"
import { mobileRoutes } from "./mobileRoutes"

const MobileDashboard = () => {
    const getQuickActions = () => quickActions.map(item => (
        <div className={styles["mobile__quick__action"]} key={item.id}>
            <item.svg className={styles["mobile__quick__action__icon"]} />
            <span className={styles["mobile__quick__action__text"]}>{item.title}</span>
            <div></div>
        </div>
    ))
    const getRoutes = () => mobileRoutes.map(route => (
        <div className={styles["mobile__footer__tab"]} key={route.id}>
            <route.svg />
            <span className={route.active ? styles["route__title__active"] : styles["route__title__inactive"]}>{route.title}</span>
        </div>
    ))
    return (
        <div className={styles["mobile__dashboard"]}>
            <div className={styles["navbar"]}>
                <span className={styles["greetings"]}>Hey Tushar</span>
                <span className={styles["location"]}>Bangalore Branch ˅</span>
            </div>
            <div className={styles["mobile__quick__actions__wrapper"]}>
                <span className={styles["mobile__quick__actions__title"]}>Quick Actions</span>
                <div className={styles["mobile__quick__actions"]}>
                    {getQuickActions()}
                </div>
            </div>
            <div className={styles["sales__wrapper"]}>
                <span className={styles["mobile__quick__actions__title"]}>Sales & Revenue Details</span>
                <div className={styles["sales__data"]}>
                    <span className={styles["sales__value"]}>₹42,893.90</span>
                    <span className={styles["sales__type"]}>Total Revenue</span>
                </div>
            </div>
            <div className={styles["subscription__wrapper"]}>
                <span className={styles["mobile__quick__actions__title"]}>Subscription plans</span>
                <div className={styles["mobile__subscription"]}>
                    <SubscriptionIcon className={styles["mobile__quick__action__icon"]} />
                    <span className={styles["mobile__quick__action__text"]}>Manage Subscription Plans</span>
                    <div></div>
                </div>
            </div>
            <div className={styles["mobile__footer"]}>
                {getRoutes()}
            </div>
        </div>
    )
}

export default MobileDashboard