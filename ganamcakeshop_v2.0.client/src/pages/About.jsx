import React from 'react'
import AboutsHead from '../components/AboutsHead'
import AboutsScript from '../components/AboutsScript'

const About = () => {
  return (
    <div>
        <AboutsHead />
        {/* HEADER  */}
        <header className="contact_header">
            <nav className="navbar navbar-expand-lg navbarGaNam">
            <div className="container header__content">
                <img style={{width: '50px', height: '50px', marginRight: '20px'}} src="../../img/logo.png" />
                <a className="navbar-brand logo" href="home">GÀ NẤM</a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#GaNamNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse navigation" id="GaNamNav">
                <ul style={{fontSize: '20px'}} className="navbar-nav ms-auto ">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="home">HOME</a>
                    </li>
                    {/*
                    <li class="nav-item">
                        <a class="nav-link" href="about">ABOUT</a>
                    </li>
                    */}
                    <li className="nav-item">
                    <a className="nav-link" href="menu">MENU</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="contact">CONTACT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about">ABOUT</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="history">HISTORY</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">NAME</a>
                    </li>
                    <li className="nav-item">
                    <a href="cart">
                        <i className="fa-solid fa-cart-shopping" />
                    </a>
                    </li>
                    <li className="nav-item">
                    <button className="btnLogin-popup" onclick="window.location.href='/logout'">LOGOUT</button>
                    </li>
                    <li className="nav-item">
                        <button className="btnLogin-popup" onClick={() => window.location.href='login'}>LOGIN</button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
        {/* INTRO  */}
        <section className="intro" id="intro">
            <div className="row g-0">
            <div className="intro__item intro__text col-3">
                <div>
                <h3>Masters at Work</h3>
                <p>On every level, we strive to do our best to deliver the very best to you.</p>
                </div>
            </div>
            <div className="intro__item col-6">
                <img src="./img/ab1.jpg" alt="intro1" />
            </div>
            <div className="intro__item intro__text col-3">
                <div>
                <h3>Community</h3>
                <p>The desire to make the world a happier place drives everything we do.</p>
                </div>
            </div>
            <div className="intro__item intro__text col-6">
                <div>
                <h3>Rise to the Occasion</h3>
                <p>We bring our best to every task, poring over details and never doing anything halfway or in haste.</p>
                </div>
            </div>
            <div className="intro__item col-3">
                <img src="./img/ab2.jpg" alt="intro2" />
            </div>
            <div className="intro__item intro__text col-3">
                <div>
                <h3>Have Heart</h3>
                <p>A genuine feeling of warmth is infused in all that we do</p>
                </div>
            </div>
            <div className="intro__item col-3">
                <img src="./img/ab3.jpg" alt="intro3" />
            </div>
            <div className="intro__item intro__text col-3">
                <div>
                <h3>Nourish Community</h3>
                <p>Fostering connections, building community and making people’s days a little brighter, any way we can.</p>
                </div>
            </div>
            <div className="intro__item col-6">
                <img src="./img/ab4.jpg" alt="intro4" />
            </div>
            </div>
        </section>
        {/* NUMBER  */}
        <section className="number">
            <div className="number__content">
            <div className="number__item">
                <p className="counter">3500</p>
                <p>Coffee</p>
            </div>
            <div className="number__item">
                <p className="counter">650</p>
                <p>Happy Client</p>
            </div>
            <div className="number__item">
                <p className="counter">10</p>
                <p>Experience</p>
            </div>
            <div className="number__item">
                <p className="counter">1010</p>
                <p>Expert Worker</p>
            </div>
            </div>
        </section>
        {/* TEAM */}
        <section className="team">
            <h2>BAKE TEAM</h2>
            <div className="container">
            <div className="team__content row">
                <div className="team__item col-4">
                <img src="./img/t1.jpg" alt="" />
                <div className="team__title">
                    <h3>JOHN SIMON</h3>
                    <p>-Cake Maker</p>
                </div>
                <div className="team__detail">
                    <h3>JOHN SIMON</h3>
                    <p className="team__text">-Cake Maker</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.</p>
                    <div className="team__social">
                    <i className="fab fa-facebook-f" />
                    <i className="fab fa-google-plus-g" />
                    <i className="fab fa-twitter" />
                    </div>
                </div>
                </div>
                <div className="team__item team__item2 col-4">
                <img src="./img/t2.jpg" alt="" />
                <div className="team__title">
                    <h3>JOHN SIMON</h3>
                    <p>-Cake Maker</p>
                </div>
                <div className="team__detail">
                    <h3>JOHN SIMON</h3>
                    <p className="team__text">-Cake Maker</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.</p>
                    <div className="team__social">
                    <i className="fab fa-facebook-f" />
                    <i className="fab fa-google-plus-g" />
                    <i className="fab fa-twitter" />
                    </div>
                </div>
                </div>
                <div className="team__item team__item3 col-4">
                <img src="./img/t3.jpg" alt="" />
                <div className="team__title">
                    <h3>JOHN SIMON</h3>
                    <p>-Cake Maker</p>
                </div>
                <div className="team__detail">
                    <h3>JOHN SIMON</h3>
                    <p className="team__text">-Cake Maker</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.</p>
                    <div className="team__social">
                    <i className="fab fa-facebook-f" />
                    <i className="fab fa-google-plus-g" />
                    <i className="fab fa-twitter" />
                    </div>
                </div>
                </div>
                <div className="team__item team__item4 col-4">
                <img src="./img/t4.jpg" alt="" />
                <div className="team__title">
                    <h3>JOHN SIMON</h3>
                    <p>-Cake Maker</p>
                </div>
                <div className="team__detail">
                    <h3>JOHN SIMON</h3>
                    <p className="team__text">-Cake Maker</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.</p>
                    <div className="team__social">
                    <i className="fab fa-facebook-f" />
                    <i className="fab fa-google-plus-g" />
                    <i className="fab fa-twitter" />
                    </div>
                </div>
                </div>
                <div className="team__item team__item5 col-4">
                <img src="./img/t1.jpg" alt="" />
                <div className="team__title">
                    <h3>JOHN SIMON</h3>
                    <p>-Cake Maker</p>
                </div>
                <div className="team__detail">
                    <h3>JOHN SIMON</h3>
                    <p className="team__text">-Cake Maker</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.</p>
                    <div className="team__social">
                    <i className="fab fa-facebook-f" />
                    <i className="fab fa-google-plus-g" />
                    <i className="fab fa-twitter" />
                    </div>
                </div>
                </div>
                <div className="team__item team__item6 col-4">
                <img src="./img/t2.jpg" alt="" />
                <div className="team__title">
                    <h3>JOHN SIMON</h3>
                    <p>-Cake Maker</p>
                </div>
                <div className="team__detail">
                    <h3>JOHN SIMON</h3>
                    <p className="team__text">-Cake Maker</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.</p>
                    <div className="team__social">
                    <i className="fab fa-facebook-f" />
                    <i className="fab fa-google-plus-g" />
                    <i className="fab fa-twitter" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* FOOTER  */}
        <footer>
            <div className="footer__main row">
            <div className="footer__item col-3">
                <h3>About Us</h3>
                <p>Welcome to your neighborhood bakery café.</p>
                <p>Where smiles are served daily
                Enjoy delicious pastries, warm breads, stunning cakes and expertly brewed drinks while feeling right at home.</p>
                <div className="footer__social">
                <i className="fab fa-facebook-f" />
                <i className="fab fa-google-plus-g" />
                <i className="fab fa-twitter" />
                </div>
            </div>
            <div className="footer__item col-3">
                <h3>Working Time</h3>
                <div className="footer__time">
                <p>Monday</p>
                <p>9h30 - 18h30</p>
                </div>
                <div className="footer__time">
                <p>Tuesday</p>
                <p>9h30 - 18h30</p>
                </div>
                <div className="footer__time">
                <p>Wednesday</p>
                <p>9h30 - 18h30</p>
                </div>
                <div className="footer__time">
                <p>Thursday</p>
                <p>9h30 - 18h30</p>
                </div>
                <div className="footer__time">
                <p>Friday</p>
                <p>9h30 - 18h30</p>
                </div>
                <div className="footer__time">
                <p>Saturday</p>
                <p>9h30 - 18h30</p>
                </div>
                <div className="footer__time">
                <p>Sunday</p>
                <p>9h30 - 18h30</p>
                </div>
            </div>
            <div className="footer__item col-3">
                <h3>Twitter Us</h3>
                <p>Masters at Work</p>
                <p>Community is at our Core</p>
                <p>Happy to see you. </p>
                <p>Happier to serve you.</p>
            </div>
            <div className="footer__item col-3">
                <h3>SUBSCRIBE US</h3>
                <form className="footer__sub">
                <input type="email" name id placeholder="name@example" />
                <button className="button-pink" type="submit">Send</button>
                </form>
                <p>Thank you for your interest in reaching out to us! Fill out the feedback form and a member of our team will be in touch soon.</p>
            </div>
            </div>
            <div className="footer__copyright">
            <p> Copyright © 2023 <span>Gà Nấm Cake Shop</span>. All rights reserved.</p>
            </div>
        </footer>
        {/* Back to top  */}
        <a href="#" className="backtotop cd-top text-replace js-cd-top">
            <i className="fa fa-angle-up" />
        </a>
        {/* jquery */}
        {/* Jquery Waypoint  */}
        {/* BS5 */}
        {/* CountUP JS  */}
        <AboutsScript />
    </div>
  )
}

export default About