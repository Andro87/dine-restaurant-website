import React, { ReactNode } from "react";
import styles from "./info.module.scss";

interface Props {
    readonly container_position?: string;
    readonly detail: ReactNode;
    readonly desktop: string;
    readonly tablet: string;
    readonly mobile: string;
    readonly order?: string;
    readonly img_position: string;
    readonly lines?: string;
    readonly position?: string;
}

const Info: React.FunctionComponent<Props> = props => {
    const {
        container_position,
        detail,
        desktop,
        tablet,
        mobile,
        order,
        img_position,
        lines,
        position
    } = props;
    return (
        <div
            className={`${styles.info_container} ${styles[container_position]}`}
        >
            <picture
                className={`${styles.info_picture} ${styles[order]} ${styles[img_position]} ${styles[lines]}`}
            >
                <source srcSet={desktop} media="(min-width:1100px)" />
                <source srcSet={tablet} media="(min-width:600px)" />
                <img src={mobile} alt="" />
            </picture>
            <div className={`${styles.info_detail} ${styles[position]}`}>
                {detail}
            </div>
        </div>
    );
};

export default Info;
