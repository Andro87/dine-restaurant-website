import React, { ReactNode } from "react";
import styles from "./highlight.module.scss";

interface Props {
    readonly desktop: string;
    readonly mobile: string;
    readonly header: string;
    readonly paragraph: string;
    readonly line?: ReactNode;
}

const Highlight: React.FunctionComponent<Props> = props => {
    const { desktop, mobile, header, paragraph, line } = props;
    return (
        <>
            <div className={styles.highlights}>
                <picture className={styles.highlights_picture}>
                    <source srcSet={desktop} media="(min-width:600px)" />
                    <img src={mobile} alt="" />
                </picture>
                <div className={styles.highlights_info}>
                    <h3> {header}</h3>
                    <p>{paragraph}</p>
                </div>
            </div>

            {line}
        </>
    );
};

export default Highlight;
