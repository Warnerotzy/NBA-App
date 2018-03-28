import React from 'react';

import NewsSlider from '../widgets/NewsSlider/Slider';

const Home = () => {
    return (
        <div>
            <NewsSlider 
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots: false
                }}
            />
        </div>
    );
};

export default Home;