import { React, useState, useEffect } from 'react';
import MenusHead from '../components/MenusHead'
import GeneralScript from '../components/GeneralScript'

const Menu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://localhost:5173/api/products');
            // const response = await fetch('https://yolohome-homanhquan-api.onrender.com/dashboard');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Fetch data initially
        fetchData();
      }, []);

      function filterProducts() {
        var input, filter, items, type, i, txtValue;
        input = document.getElementById("product-searchbar123");
        filter = input.value.toUpperCase();
        items = document.getElementsByClassName("showcase__item");

        for (i = 0; i < items.length; i++) {
            type = items[i].getAttribute("data-category").toUpperCase();
            txtValue = items[i].innerText || items[i].textContent;

            if (type.indexOf(filter) > -1 || txtValue.toUpperCase().indexOf(filter) > -1) {
                items[i].removeAttribute("style");
            } else {
                items[i].style.display = "none";
            }
        }
    }

    document.querySelectorAll(".demo").forEach(function(element) {
        var x = Math.floor(Math.random() * 100) + 1;
        element.innerHTML = x;
    });

  return (
    <div>
    <MenusHead />
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
                <button className="btnLogin-popup" onclick="window.location.href='logout'">LOGOUT</button>
                </li>
                <li className="nav-item">
                        <button className="btnLogin-popup" onClick={() => window.location.href='login'}>LOGIN</button>
                    </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
    {/* FILLTER */}
    <section className="showcase section-padding page_Gallery">
        <div className="container">
        <div className="section-info">
            <h2>Joy baked into every bite.</h2>
            <p className="text-center">Enjoy fresh pastries, warm breads, crafted coffees, our signature cakes and more.A delicious variety of sweet and savory pastries and donuts, freshly baked every day.</p>
            <input type="text" id="product-searchbar123" onKeyUp={filterProducts} placeholder="Search for preferred products." />
        </div>
        </div>
        <div className="filters-button-group">
        <button className="button is-checked active" data-filter="*">ALL</button>
        <button className="button" data-filter=".BREAD">BREAD</button>
        <button className="button" data-filter=".PASTRIES">PASTRIES</button>
        <button className="button" data-filter=".CAKESLICES">CAKE SLICES</button>
        <button className="button" data-filter=".CHEESECAKES">CHEESECAKES</button>
        <button className="button" data-filter=".DRINKS">DRINKS</button>
        <button className="button" data-filter=".ICECREAM">ICE CREAM</button>
        </div>

        <div className="showcase__content row">
        {products && products.map((product) => (
            !product.deleted && product.type === "Bread" && (
                <div className=" showcase__item BREAD " data-category="transition">
                    <div className="showcase__photo">
                    <img style={{height: '400px', width: '100%'}} src={product.photo} alt="" />
                    <div className="showcase__info">
                        {/*
                            <div class="showcase__btn">
                                <a href="#" target="_blank">
                                    <i class="icon-basic_link"></i>
                                </a>
                            </div>
                            */}
                        <div className="showcase__des">
                        <h4>
                            <a href={`/details/${product.id}`}>{product.csw_products}</a>
                        </h4>
                        Sold:<p className="demo" />
                        <p>
                            <a href="#"><button type="button" className="btn btn-primary">{product.price} VND</button></a>
                            <a>
                            </a></p><form className="addToCartForm" action="/shoppingcart/addToCart" method="POST"><a>
                            <input type="hidden" name="id" defaultValue={product.id} />
                            <button type="submit" className="btn btn-danger">Add to cart</button>
                            </a></form>
                        <p />
                        </div>
                    </div>
                    </div>
                </div>
            )
        ))}
        
        {products && products.map((product) => (
            !product.deleted && product.type === "Pastries" && (
                <div className=" showcase__item PASTRIES " data-category="metalloid">
                <div className="showcase__photo">
                <img style={{height: '400px', width: '100%'}} src={product.photo} alt="" />
                <div className="showcase__info">
                    {/*
                        <div class="showcase__btn">
                            <a href="#" target="_blank">
                                <i class="icon-basic_link"></i>
                            </a>
                        </div>
                        */}
                    <div className="showcase__des">
                    <h4>
                        <a href={`/details/${product.id}`}>{product.csw_products}</a>
                    </h4>
                    Sold:<p className="demo" />
                    <p>
                        <a href="#"><button type="button" className="btn btn-primary">{product.price} VND</button></a>
                        <a>
                        </a></p><form className="addToCartForm" action="/shoppingcart/addToCart" method="POST"><a>
                        <input type="hidden" name="id" defaultValue={product.id} />
                        <button type="submit" className="btn btn-danger">Add to cart</button>
                        </a></form>
                    <p />
                    </div>
                </div>
                </div>
            </div>
            )
        ))}

        {products && products.map((product) => (
            !product.deleted && product.type === "Cake Slice" && (
                <div className=" showcase__item CAKESLICES " data-category="post-transition">
                <div className="showcase__photo">
                <img style={{height: '400px', width: '100%'}} src={product.photo} alt="" />
                <div className="showcase__info">
                    {/*
                        <div class="showcase__btn">
                            <a href="#" target="_blank">
                                <i class="icon-basic_link"></i>
                            </a>
                        </div>
                        */}
                    <div className="showcase__des">
                    <h4>
                        <a href={`/details/${product.id}`}>{product.csw_products}</a>
                    </h4>
                    Sold:<p className="demo" />
                    <p>
                        <a href="#"><button type="button" className="btn btn-primary">{product.price} VND</button></a>
                        <a>
                        </a></p><form className="addToCartForm" action="/shoppingcart/addToCart" method="POST"><a>
                        <input type="hidden" name="id" defaultValue={product.id} />
                        <button type="submit" className="btn btn-danger">Add to cart</button>
                        </a></form>
                    <p />
                    </div>
                </div>
                </div>
            </div>
            )
        ))}
        
        {products && products.map((product) => (
            !product.deleted && product.type === "Cheesecake" && (
                <div className=" showcase__item CHEESECAKES " data-category="post-transition">
                <div className="showcase__photo">
                <img style={{height: '400px', width: '100%'}} src={product.photo} alt="" />
                <div className="showcase__info">
                    {/*
                        <div class="showcase__btn">
                            <a href="#" target="_blank">
                                <i class="icon-basic_link"></i>
                            </a>
                        </div>
                        */}
                    <div className="showcase__des">
                    <h4>
                        <a href={`/details/${product.id}`}>{product.csw_products}</a>
                    </h4>
                    Sold:<p className="demo" />
                    <p>
                        <a href="#"><button type="button" className="btn btn-primary">{product.price} VND</button></a>
                        <a>
                        </a></p><form className="addToCartForm" action="/shoppingcart/addToCart" method="POST"><a>
                        <input type="hidden" name="id" defaultValue={product.id} />
                        <button type="submit" className="btn btn-danger">Add to cart</button>
                        </a></form>
                    <p />
                    </div>
                </div>
                </div>
            </div>
            )
        ))}

        {products && products.map((product) => (
            !product.deleted && product.type === "Drinks" && (
                <div className=" showcase__item DRINKS " data-category="transition">
                <div className="showcase__photo">
                <img style={{height: '400px', width: '100%'}} src={product.photo} alt="" />
                <div className="showcase__info">
                    {/*
                        <div class="showcase__btn">
                            <a href="#" target="_blank">
                                <i class="icon-basic_link"></i>
                            </a>
                        </div>
                        */}
                    <div className="showcase__des">
                    <h4>
                        <a href={`/details/${product.id}`}>{product.csw_products}</a>
                    </h4>
                    Sold:<p className="demo" />
                    <p>
                        <a href="#"><button type="button" className="btn btn-primary">{product.price} VND</button></a>
                        <a>
                        </a></p><form className="addToCartForm" action="/shoppingcart/addToCart" method="POST"><a>
                        <input type="hidden" name="id" defaultValue={product.id} />
                        <button type="submit" className="btn btn-danger">Add to cart</button>
                        </a></form>
                    <p />
                    </div>
                </div>
                </div>
            </div>
            )
        ))}
        {products && products.map((product) => (
            !product.deleted && product.type === "Ice Cream" && (
                <div className=" showcase__item ICECREAM " data-category="alkali">
                <div className="showcase__photo">
                <img style={{height: '400px', width: '100%'}} src={product.photo} alt="" />
                <div className="showcase__info">
                    {/*
                        <div class="showcase__btn">
                            <a href="#" target="_blank">
                                <i class="icon-basic_link"></i>
                            </a>
                        </div>
                        */}
                    <div className="showcase__des">
                    <h4>
                        <a href={`/details/${product.id}`}>{product.csw_products}</a>
                    </h4>
                    Sold:<p className="demo" />
                    <p>
                        <a href="#"><button type="button" className="btn btn-primary">{product.price} VND</button></a>
                        <a>
                        </a></p><form className="addToCartForm" action="/shoppingcart/addToCart" method="POST"><a>
                        <input type="hidden" name="id" defaultValue={product.id} />
                        <button type="submit" className="btn btn-danger">Add to cart</button>
                        </a></form>
                    <p />
                    </div>
                </div>
                </div>
            </div>
            )
        ))}
        {/*
        <div class=" showcase__item WEB CRAFTS " data-category="alkali">
            <div class="showcase__photo">
                <img src="./img/showcase-7.jpeg" alt="">
                <div class="showcase__info">
                    <div class="showcase__btn">
                        <a href="#" target="_blank">
                            <i class="icon-basic_link"></i>
                        </a>
                    </div>
                    <div class="showcase__des">
                        <h4>
                            <a href="./product_detail.html" target="_blank">{{this.csw_products}}</a>
                        </h4>
                        Sold:<p class="demo"></p>
                        <p>
                            <a href="#"><button type="button" class="btn btn-primary">{{this.price}} VND</button></a>
                            <a href="#"><button type="button" class="btn btn-danger">More Details</button></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class=" showcase__item PRINTING MEDIA ILLUSTRATION CRAFTS" data-category="transition">
            <div class="showcase__photo">
                <img src="./img/showcase-8.jpeg" alt="">
                <div class="showcase__info">
                    <div class="showcase__btn">
                        <a href="#" target="_blank">
                            <i class="icon-basic_link"></i>
                        </a>
                    </div>
                    <div class="showcase__des">
                        <h4>
                            <a href="#" target="_blank">EXTERNAL LINK</a>
                        </h4>
                        <p>
                            <a href="#">CATEGORY 1 , </a>
                            <a href="#">CATEGORY 2</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        */}
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
        <p> Copyright © 2023 <span>Gà Nám Cake Shop</span>. All rights reserved.</p>
        </div>
    </footer>
    {/* jquery */}
    {/* Jquery Waypoint  */}
    {/* BS5 */}
    {/* CountUP JS  */}
    <GeneralScript />
    </div>
  )
}

export default Menu