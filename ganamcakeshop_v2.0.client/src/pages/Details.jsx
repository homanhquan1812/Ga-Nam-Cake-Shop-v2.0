import React from 'react'
import ProductDetailsHead from '../components/DetailsHead'
import ProductDetailsScript from '../components/DetailsScript'

const ProductDetails = () => {
  return (
    <div>
    <ProductDetailsHead />
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
                <button className="btnLogin-popup" onclick="window.location.href='../logout'">LOGOUT</button>
                </li>
                <li className="nav-item">
                        <button className="btnLogin-popup" onClick={() => window.location.href='login'}>LOGIN</button>
                    </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
    <div className="flex-box">
        <div className="left">
        <div className="big-img">
            <img src="{{info.photo}}" />
        </div>
        <div className="images">
        </div>
        </div>
        <div className="right">
        <div className="pname">{'{'}{'{'}info.csw_products{'}'}{'}'}</div>
        <div className="ratings">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
        </div>
        <div className="price">{'{'}{'{'}info.price{'}'}{'}'} VND</div>
        <div className="right product-details">
            <p>{'{'}{'{'}info.description{'}'}{'}'}</p>
        </div>
        <div className="btn-box" style={{marginBottom: '10px'}}>
            <form action="/shoppingcart/addToCart2" method="POST" style={{display: 'inline-block'}}>
            <p>Quantity:
                <input type="number" name="quantityInput" min={1} max={99} defaultValue={1} required />
                <input type="hidden" name="id" defaultValue="{{info._id}}" />
            </p>
            <button className="buy-btn">Buy Now</button>
            </form>
            <form className="addToCartForm" action="/shoppingcart/addToCart3" method="POST" style={{display: 'inline-block'}}>
            <input type="hidden" name="id" defaultValue="{{info._id}}" />
            <button className="cart-btn">Add 1 to Cart</button>
            </form>
        </div>
        </div>
    </div>
    <h2>Other products</h2>
    <div className="mt-4">
        <div className="row">
        {'{'}{'{'}#each otherProducts{'}'}{'}'}
        <div className="col">
            <div className="card card-course-item" style={{width: '11rem', height: '300px', margin: '0 0 20px 10px'}}>
            <img className="card-img-top" style={{width: '100%', height: '100px'}} src="{{this.photo}}" />
            <div className="card-body">
                <h5 className="card-title">{'{'}{'{'}this.csw_products{'}'}{'}'}</h5>
                {/*
                <p class="card-text" style="font-size: 12px; height: 80px; overflow: hidden">{{this.description}}</p>
                */}
                <div style={{position: 'absolute', bottom: '65px', left: 0, right: 0, textAlign: 'center'}}>
                <p className="card-text"><b>{'{'}{'{'}this.price{'}'}{'}'} VND</b></p>
                </div>
                <a href="/product_details/{{this._id}}" className="btn btn-primary" style={{position: 'absolute', bottom: '20px', left: '10px', right: '10px'}}>More Details</a>
            </div>  
            </div>
        </div>
        {'{'}{'{'}/each{'}'}{'}'}
        </div>
    </div>
    <ProductDetailsScript />
    </div>
  )
}

export default ProductDetails