import React from 'react'
import SuccesssHead from '../components/SuccesssHead'
import SuccesssScript from '../components/SuccesssScript'

const Success = () => {
  return (
    <div>
    <SuccesssHead />
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
                <a className="nav-link" href="gallery">MENU</a>
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
    <div className="success_detail">
        <h2>Success</h2>
        <i className="fa-solid fa-check" />
        <h3>We've received your order and we will contact you soon.</h3>
        <h3>Please keep in touch!</h3>
    </div>
    <div className="success_button">
        <button className="button-pink "><a href="/gallery">Continue Buying</a></button>
        <button className="button-pink "><a href="/home">Go back to Homepage</a></button>
    </div>
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
    <SuccesssScript />
    </div>
  )
}

export default Success