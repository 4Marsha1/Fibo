import styles from "./style.module.css"
import BrandingImg from "../../assets/login/branding_image.png"
import Logo from "../../assets/logo.png"
import GoogleLogo from "../../assets/login/google_logo.png"

const LoginComponent = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["branding__section"]}>
                <img src={BrandingImg} className={styles["branding__image"]} alt="branding" />
                <div className={styles["branding__content"]}>
                    <span className={styles["branding__title"]}>
                        Fitness Made Easy
                    </span>
                    <span className={styles["branding__desc"]}>
                        FiBO helps you track your fitness goals, and manage your gyms, clients and branches in a one stop solution, saving you time and money!
                    </span>
                </div>
            </div>
            <div className={styles["login__section"]}>
                <div className={styles["logo__wrapper"]}>
                    <img src={Logo} className={styles["logo"]} alt="logo" />
                    <span className={styles["logo__brandname"]}>
                        FI<span className={styles["logo__brandname__highlight"]}>T</span>NESS
                    </span>
                </div>
                <div className={styles["login__message"]}>
                    <span className={styles["login__message__heading"]}>
                        Login to your Account
                    </span>
                    <span className={styles["login__message__subheading"]}>
                        Your Own Digital Campaign
                    </span>
                </div>
                <form className={styles["login__form"]}>
                    <div className={styles["login__input__group"]}>
                        <label>+91</label>
                        <span></span>
                        <input className={styles["login__input"]} type="text" placeholder="mobile number" />
                    </div>
                    <input className={styles["login__btn"]} type="submit" value="Login to Your Account" />
                </form>
                <div className={styles["hr__wrapper"]}>
                    <span className={styles["hr"]}></span>
                    <span className={styles["hr__or"]}>OR</span>
                    <span className={styles["hr"]}></span>
                </div>
                <div className={styles["login__google"]}>
                    <img src={GoogleLogo} className={styles["google__logo"]} alt="google logo" />
                    <span className={styles["login__google__text"]}>
                        Log in with Google
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent