import React from "react";
import Book from "./book";

import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main_wrap}>
                <div className={styles.main_info}>
                    <img
                        src="/images/logo.svg"
                        alt="logo"
                        className={styles.logo}
                    />
                    <h1>Exquisite dining since 1989</h1>
                    <p>
                        Experience our seasonal menu in beautiful country
                        surroundings. Eat the freshest produce from the comfort
                        of our farmhouse.
                    </p>

                    <Book color="transparent" />
                </div>
            </div>
        </main>
    );
};

export default Main;
