import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import style from '../css/carousel.module.css'


const items = [
    {
        src: './images/shoe/shoe1.jpg',
        altText: 'Slide 1',
        caption: 'Mens shoe',
        caption1: '30-40% Off on shoes',
        key: 1,
    },
    {
        src: './images/homeImg/child.jpg',
        altText: 'Slide 2',
        caption: 'child clothings',
        caption1: 'upto 20% Off on child cloths',
        key: 2,
    },
    {
        src: './images/homeImg/men.jpg',
        altText: 'Slide 3',
        caption: 'Men Cothings',
        caption1: 'casual and formal cloths',
        key: 3,
    },
    {
        src: './images/homeImg/jewellery.jpg',
        altText: 'Slide 3',
        caption: 'Jwellery',
        caption1: 'upto 5% Off on jwellery',
        key: 3,
    }
];

function CarouselCompo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className={style.carouselitem}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.caption1}
                    captionHeader={item.caption}
                    className={style.carouselCaption}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className={style.carousel}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              
            />
        </Carousel>
    );
}

export default CarouselCompo;