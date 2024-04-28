import React from 'react'
import ContactsScript from '../components/ContactsScript'
import ContactsHead from '../components/ContactsHead'

const Contact = () => {
  return (
    <div>
        <ContactsHead />
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
        {/* CONTACT */}
        <section className="contact" id="contact">
            <h2>CONTACT</h2>
            <div className="contact__form container">
            <div>
                <form className="row" action="/contact/store" method="POST">
                <input className="col-6 g-2" type="text" name="firstName" id="firstName" placeholder="First Name" />
                <input className="col-6 g-2" type="text" name="lastName" id="lastName" placeholder="Last Name" />
                <input className="col-6 g-2" type="email" name="email" id="email" placeholder="Email" />
                <input className="col-6 g-2" type="tel" name="phone" id="phone" placeholder="Phone Number" />
                <textarea className="col-12 gy-2" name="message" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} />
                <button className="gy-2 button-pink" type="submit" onclick="feedbackSent()">Send</button>
                </form>
            </div>
            </div>
            <div className="contact__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.397043949722!2d106.61869841167713!3d10.780871689323831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c1b113b9605%3A0x5241b1bb53abb66c!2zMjEzIEzDqiBDYW8gTMOjbmcsIFBow7ogVGjhuqFuaCwgVMOibiBQaMO6LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1688815979375!5m2!1sen!2s" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="contact__info container">
            <div className="row">
                <div className="contact__item col-4">
                <i className="fa fa-home" />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="contact__item col-4">
                <i className="fa fa-phone" />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="contact__item col-4">
                <i className="fa fa-envelope-open" />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            </div>
        </section>
        {/* POLICY */}
        <section className="policy">
            <h1>POLICY</h1>
            <div className="policy__text1">
            <h2>PURPOSE AND SCOPE OF CUSTOMER INFORMATION COLLECTION</h2>
            <p>Purpose of collection: GaNam only collects customer information for the purpose of receiving, responding
                to comments and answering customer questions related to ABC Bakery's products and services, and
                understanding customer information, customers' wishes and desires to improve product and service
                quality, ensuring full benefits for customers.</p>
            <p>Scope of collection: During the process of receiving, responding to comments and answering questions for
                customers, abcbakery.co only collects information provided by customers including: contact name, email,
                contact content.</p>
            </div>
            <div className="policy__text2">
            <h2>SCOPE OF INFORMATION USE:</h2>
            <p>Website abcbakery.co only uses customer information to provide feedback and answer customer questions
                about ABC bakery's products and services.</p>
            <p>ABC Bakery does not use, transfer, provide or disclose to third parties users' personal information
                without prior consent.</p>
            <p>In case there is a request from a competent state agency related to a violation, abcbakery.co is
                responsible for cooperating in providing customer personal information.</p>
            </div>
            <div className="policy__text3">
            <h2>INFORMATION STORAGE PERIOD</h2>
            <p>Personal information provided by customers will be kept confidential on abcbakery.co's server until
                cancellation is requested by the customer via email contact@abcbakery.co or via customer care
                (028)38520857- ext: 1604</p>
            </div>
            <div className="policy__text4">
            <h2>PEOPLE OR ORGANIZATIONS WHO MAY HAVE ACCESS TO CUSTOMER INFORMATION:</h2>
            <p>Consumers agree that, in case of necessity, the following agencies/organizations/individuals have the
                right to access and collect their personal information, including:
            </p>
            <p> Board</p>
            <p> At the request of a competent state agency</p>
            </div>
            <div className="policy__text5">
            <h2>ADDRESS OF THE INFORMATION COLLECTION AND MANAGEMENT UNIT, including contact methods so consumers can
                inquire about the collection and processing of personal information related to them:</h2>
            <p>Address of the unit that collects and manages personal information
            </p>
            <p> Asia Confectionery One Member Company Limited</p>
            <p> Office address: 1175A, 3/2 Street, Ward 6, District 11, City. Ho Chi Minh, Vietnam</p>
            </div>
            <div className="policy__text6">
            <h2>Contact method for customers to ask about the collection and processing of personal information related
                to them</h2>
            <p>Contact customer service (028)38520857- ext: 1604
            </p>
            <p> Via email: contact@abcbakery.co</p>
            </div>
            <div className="policy__text6">
            <h2>MEANS AND TOOLS FOR USERS TO ACCESS AND EDIT PERSONAL DATA:</h2>
            <p>The website does not allow online transactions and has no online transaction function. Therefore, the
                website abcbakery.co does not require users to register/log in to an account.
                We only store customer information including name, contact email and the content the customer wants to
                communicate. In addition, the website does not require customers to provide any other information.
                The person contacting abcbakery.co will be solely responsible for the accuracy of the information they
                provide. When there is a need to access and edit personal information, users can contact via ABC
                Bakery's information shown on the website in the "Contact" section. Users cannot check, update, adjust
                or cancel personal information themselves
            </p>
            </div>
            <h2>Mechanism to receive and resolve consumer complaints related to personal information being used for the
            wrong purpose or scope as notified.</h2>
            <div className="policy__text7">
            <p>Users' personal information on abcbakery.co is committed to absolute confidentiality according to
                abcbakery.co's personal information protection policy.</p>
            <p>The collection and use of each user's information is only carried out with that customer's consent,
                unless otherwise prescribed by law.</p>
            <p>In the event that the information server is attacked by hackers resulting in the loss of member personal
                data, ABC Bakery will be responsible for reporting the incident to the investigating authorities for
                timely handling and notification to users. known use.</p>
            <p>Users are responsible for promptly notifying the abcbakery.co website of any illegal use or misuse of
                information to take appropriate measures.</p>
            <p>We commit to all sharing and use of customer information in accordance with the company's privacy policy
                and the provisions of Vietnamese Law. ABC Bakery is committed to making you feel confident and satisfied
                about the security of personal information when cooperating with the company.</p>
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
                <button className="button-pink" type="submit" onclick="feedbackSent()">Send</button>
                </form>
                <p>Thank you for your interest in reaching out to us! Fill out the feedback form and a member of our team will be in touch soon.</p>
            </div>
            </div>
            <div className="footer__copyright">
            <p> Copyright © 2023 <span>Gà Nấm Cake Shop</span>. All rights reserved.</p>
            </div>
        </footer>
        <ContactsScript />
    </div>
  )
}

export default Contact