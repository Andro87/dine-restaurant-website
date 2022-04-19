import React from "react";

import styles from "./detail.module.scss";
import Divide from "../svgs/patterns/pattern-divide.svg";
interface Props {
    readonly header: string;
    readonly paragraph: string;
    readonly color: string;
}

const Detail: React.FunctionComponent<Props> = props => {
    const { header, paragraph, color } = props;
    return (
        <div className={`${styles.wrap} ${styles[color]}`}>
            <Divide />
            <h2> {header}</h2>
            <p>{paragraph}</p>
        </div>
    );
};

export default Detail;
