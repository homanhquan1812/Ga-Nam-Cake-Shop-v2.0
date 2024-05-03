import React from 'react'
import CartsHead from '../components/CartsHead'
import GeneralScript from '../components/GeneralScript'

const Cart = () => {
  return (
    <div>
    <CartsHead />
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
    {/* CART  */}
    {/* CART  */}
    <div className="container cart">
        <div className="cart_menu">
        <p className="text sp">Product Name</p>
        <p className="text dg">Price</p>
        <p className="text sl">Quantity</p>
        <p className="text st">Total Cost</p>
        <p className="text tt">Action</p>
        </div>
        {'{'}{'{'}#each info.csw_cart.items{'}'}{'}'}
        <section className="cart_content">
        <section className="cart_item" role="list">
            <div className="product_name" role="listitem">
            <div className="sanPham">
                <div className="ten_hinh">
                <div className="ten_hinh_item"><a title="hinh_san_pham"><img style={{height: '85px', width: '100px'}} src="{{this.photo}}" /></a>
                    <div className="ten_hinh_text">
                    <a className title="description_hinh ">{'{'}{'{'}this.name{'}'}{'}'}</a>
                    </div>
                </div>
                </div>
                <div className="content_donGia">
                <div>
                    <span className="donGia_text">{'{'}{'{'}this.price{'}'}{'}'}</span>
                </div>
                </div>
                <div className="content_soLuong">
                <form action="/shoppingcart/changeQuantity" method="POST">
                    <div className="add_minus">
                    <input className="EOdsa- v3H4Zf" type="text" role="spinbutton" aria-valuenow={1} name="quantity" defaultValue="{{this.qty}}" required />
                    <input type="hidden" name="id" defaultValue="{{this.productId}}" />
                    <input type="submit" hidden />
                    </div>
                </form>
                </div>
                <div className="content_soTien">
                <span>{'{'}{'{'}this.totalCost{'}'}{'}'}</span>
                </div>
                <div className="content_thaoTac">
                <form action="/shoppingcart/deleteFromCart" method="POST">
                    <input type="hidden" name="id" defaultValue="{{this.productId}}" />
                    <button className="fX1Y2g button-pink">Delete</button>
                </form>
                </div>
            </div>
            </div>
        </section>
        </section>
        {'{'}{'{'}/each{'}'}{'}'}
        <section className="cart_total">
        <div style={{margin: '10px 0 10px 10px', fontWeight: 700}}><u>Note</u>: Press Enter after you change the quantity of a product.</div>
        </section>
        <section className="cart_total">
        <div className="s1Gxkq">
            <div className="UQv8V6" role="region">
            <div className="fyYBP1">
                <div className="aiyQAr">
                <div className="A-CcKC">Total Cost:</div>
                <div className="total">{'{'}{'{'}info.csw_cart.totalPrice{'}'}{'}'}</div>
                </div>
            </div>
            </div>
            <form action="/shoppingcart/sendToOrder" method="POST">
            <input type="hidden" name="id" defaultValue="{{info.csw_cart}}" />
            <button className="button-pink"><span className="TTXpRG">Order</span></button>
            </form>
        </div>
        </section>
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
    <GeneralScript />
    </div>
  )
}

export default Cart