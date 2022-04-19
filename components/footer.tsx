import React from "react";
import styles from "./footer.module.scss";
const Footer: React.FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <img
                    src="/images/logo.svg"
                    alt="logo"
                    className={styles.logo}
                />

                <div className={styles.footer_info_container}>
                    <div className={styles.footer_info}>
                        <p> Marthwaite, Sedbergh</p>
                        <p> Cumbria</p>
                        <p>+00 44 123 4567</p>
                    </div>

                    <div className={styles.footer_info}>
                        <p> Open Times</p>
                        <p> Mon - Fri: 09:00 AM - 10:00 PM</p>
                        <p> Sat - Sun: 09:00 AM - 11:30 PM</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
