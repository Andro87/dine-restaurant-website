import React, { useState } from "react";
import Detail from "./detail";
import styles from "./carousel.module.scss";

import useEmblaCarousel from "embla-carousel-react";
import SlideBtn from "./slideBtn";
import Book from "./book";
import { slides } from "../data/slides";
interface Props {}

const Carousel: React.FunctionComponent<Props> = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        draggable: false
    });
    const [selected, setSelected] = useState<number>(0);
    const buttons = [" Family Gathering", "Special Events", "Social Events"];
    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {slides.map(slide => (
                    <div className={styles.container_slides} key={slide.id}>
                        <picture className={styles.slide_img}>
                            <source
                                srcSet={slide.desktop}
                                media="(min-width:1100px)"
                            />
                            <source
                                srcSet={slide.tablet}
                                media="(min-width:600px)"
                            />
                            <img src={slide.mobile} alt="" />
                        </picture>

                        <div className={styles.slide_info}>
                            <div className={styles.slide_button_container}>
                                {buttons.map((button, index) => (
                                    <SlideBtn
                                        key={index}
                                        name={button}
                                        onChoose={() => {
                                            emblaApi.scrollTo(index),
                                                setSelected(index);
                                        }}
                                        selectedBtn={
                                            selected === index
                                                ? "selected"
                                                : null
                                        }
                                    />
                                ))}
                            </div>
                            <div className={styles.detail_wrapper}>
                                <Detail
                                    header={slide.header}
                                    paragraph={slide.paragraph}
                                    color="black"
                                />
                                <Book color="dark" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
