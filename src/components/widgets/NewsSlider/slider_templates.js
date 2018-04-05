import React from 'react';
import { Link } from 'react-router-dom';

import styles from './slider.css';
import Slick from 'react-slick';

const SliderTemplates = (props) => {
    console.log(props);

    let template = null;

    const settings ={
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
    }

    switch (props.type) {
        case "featured":
            template = props.data.map((item, i)=>{
                return (
                    <div key={i}>
                        <div className={styles.featured_item}>
                            <div className={styles.featured_image}
                                style={{
                                    background: `url(${item.image})`
                                }}
                            >
                            </div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={styles.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
            break;
        case ('other'):
        
        break;
        default:
        template = null;
            break;
    }

    return (
        <Slick {...settings}>
            {template}
        </Slick>
    );
};

export default SliderTemplates;