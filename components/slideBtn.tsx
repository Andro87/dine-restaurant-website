import React from "react";
import styles from "./slideBtn.module.scss";
interface Props {
    readonly name: string;
    readonly onChoose: () => void;
    readonly selectedBtn: string;
}

const SlideBtn: React.FunctionComponent<Props> = props => {
    const { name, onChoose, selectedBtn } = props;
    return (
        <button
            type="button"
            title="scroll"
            className={`${styles.slide_button} ${styles[selectedBtn]}`}
            onClick={() => onChoose()}
        >
            {name}
        </button>
    );
};
export default SlideBtn;
