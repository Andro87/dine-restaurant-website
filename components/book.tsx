import React from "react";
import styles from "./book.module.scss";
import Link from "next/link";
interface Props {
    readonly color: string;
}

const Book: React.FunctionComponent<Props> = props => {
    const { color } = props;
    return (
        <Link href="./booking">
            <a className={`${styles.book} ${styles[color]}`}>BOOK A TABLE</a>
        </Link>
    );
};

export default Book;
