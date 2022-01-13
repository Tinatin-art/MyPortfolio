import React from 'react'
import {img1, img2, img3} from "../../assets/images";

import './Portfolio.scss';
function Portfolio() {
    return (
        <section className='portfolio' id='portfolio'>
            <div className="container">
                <h2>Portfolio</h2>
                <img src={img1} alt="img1" width="300px"/>
                <img src={img2} alt="img2" width="500px"/>
            </div>
        </section>
    )
}

export default Portfolio
