import styles from "./styles.module.css"
import { ReactComponent as BellIcon } from "../../assets/dashboard/main/bell.svg"
import { ReactComponent as RevenueIcon } from "../../assets/dashboard/main/revenue.svg"
import { ReactComponent as SalesIcon } from "../../assets/dashboard/main/sales.svg"
import { ReactComponent as Graph } from "../../assets/dashboard/main/graph.svg"
import comingSoonImg from "../../assets/dashboard/main/coming_soon.png"
import { quickActions } from "./quickActions"

const Main = ({ logout }) => {
    const getQuickActions = () => quickActions.map(item => (
        <div className={styles["quick__action"]} key={item.id}>
            <item.svg className={styles["quick__action__icon"]} />
            {item.title === 'Logout' ?
                <span className={styles["quick__action__text"]}
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}

                >{item.title}</span>
                :
                <span className={styles["quick__action__text"]}>{item.title}</span>

            }
            <div></div>
        </div>
    ))
    return (
        <div className={styles["main"]}>
            <div className={styles["navbar"]}>
                <div className={styles["navbar__heading__wrapper"]}>
                    <span className={styles["navbar__heading"]}>Dashboard</span>
                    <span className={styles["navbar__message"]}>Welcome back, Syeda!</span>
                </div>
                <div className={styles["navbar__icons"]}>
                    <BellIcon />
                    <span className={styles["profile__img"]}></span>
                </div>
            </div>

            <div className={styles["information__section__wrapper"]}>
                <div className={styles["data__section"]}>
                    <div className={styles["data__tabs"]}>
                        <div className={styles["data__tab"]}>
                            <RevenueIcon />
                            <div className={styles["data__tab__details"]}>
                                <span className={styles["data__value"]}>₹48,783.34</span>
                                <span className={styles["data__type"]}>Total Revenue</span>
                            </div>
                        </div>
                        <div className={styles["data__tab"]}>
                            <SalesIcon />
                            <div className={styles["data__tab__details"]}>
                                <span className={styles["data__value"]}>₹42,893.90</span>
                                <span className={styles["data__type"]}>Total Sales</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["graph__section"]}>
                        <span className={styles["graph__section__heading"]}>Members</span>
                        <Graph className={styles["graph"]} />
                    </div>
                </div>

                <div className={styles["coming__soon__wrapper"]}>
                    <span className={styles["coming__soon__title"]}>Coming Soon</span>
                    <div className={styles["coming__soon__section"]}>
                        <div className={styles["coming__soon__content"]}>
                            <span className={styles["coming__soon__text"]}>Swipe Up</span>
                            <span className={styles["coming__soon__desc"]}>
                                Create Customized
                                mini plans for your
                                clients easily
                            </span>
                        </div>
                        <img src={comingSoonImg} className={styles["coming__soon__img"]} alt="coming soon" />
                    </div>
                </div>
            </div>

            <div className={styles["quick__actions__wrapper"]}>
                <span className={styles["quick__actions__title"]}>
                    Quick Actions
                </span>
                <div className={styles["quick__actions"]}>
                    {getQuickActions()}
                </div>
            </div>
        </div>
    )
}

export default Main