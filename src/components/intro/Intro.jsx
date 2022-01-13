import React from 'react'
import './Intro.scss';
import {img1, img2, img3} from "../../assets/images";
function Intro() {
    return (
        <section className='intro' id='#intro'>
            <div className="container">
                <div className="intro__inner">
                  <div className="intro__left">
                    <div className="intro__img-wrapper">
                    <img src={img3} alt="img2" width="500px"/>
                    </div>
                  </div>
                  <div className="intro__right">
                    <div className="intro__right-inner">
                        <h4>Hi, my name is</h4>
                        <h1>Omurova Tinatin</h1>
                        <h3>React.js Developer</h3>
                        <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
