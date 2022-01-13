import React from 'react';
function Header({menuOpen, setMenuOpen}) {

    return (
        <header className={ "header " + (menuOpen &&  "header--active")}>
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <a className="header__logo" to="#intro">OmurovaT</a>
                        <div className="header__contacts">
                            <span className='tel-number'>+996705160622</span>
                            <span className='email'>omurovatinatin@gmail.com</span>
                        </div>
                    </div>
                    <div className="header__right">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='header__nav-toggler'
                        ></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
