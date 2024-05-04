import { React, useState, useEffect } from 'react';
import ProductDetailsHead from '../components/DetailsHead'
import GeneralScript from '../components/GeneralScript'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams(); // Accessing the id parameter from the URL
    const [products, setProducts] = useState([]);
    const [products2, setProducts2] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://localhost:5173/api/products/${id}`);
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

        const fetchData2 = async () => {
            try {
              const response = await fetch('https://localhost:5173/api/products');
              // const response = await fetch('https://yolohome-homanhquan-api.onrender.com/dashboard');
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setProducts2(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          // Fetch data initially
          fetchData2();
      }, []);
      
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
                <a className="nav-link" href="../menu">MENU</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="../contact">CONTACT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../about">ABOUT</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="../history">HISTORY</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" href="#">NAME</a>
                </li>
                <li className="nav-item">
                <a href="../cart">
                    <i className="fa-solid fa-cart-shopping" />
                </a>
                </li>
                <li className="nav-item">
                <button className="btnLogin-popup" onclick="window.location.href='../logout'">LOGOUT</button>
                </li>
                <li className="nav-item">
                        <button className="btnLogin-popup" onClick={() => window.location.href='../login'}>LOGIN</button>
                    </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
    {products && (
        <div className="flex-box">
            <div className="left">
            <div className="big-img">
                <img src={products.photo} />
            </div>
            <div className="images">
            </div>
            </div>
            <div className="right">
            <div className="pname">{products.csw_products}</div>
            <div className="ratings">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
            </div>
            <div className="price">{products.info} VND</div>
            <div className="right product-details">
                <p>{products.description}</p>
            </div>
            <div className="btn-box" style={{marginBottom: '10px'}}>
                <form action="/shoppingcart/addToCart2" method="POST" style={{display: 'inline-block'}}>
                <p>Quantity:
                    <input type="number" name="quantityInput" min={1} max={99} defaultValue={1} required />
                    <input type="hidden" name="id" defaultValue={products.id} />
                </p>
                <button className="buy-btn">Buy Now</button>
                </form>
                <form className="addToCartForm" action="/shoppingcart/addToCart3" method="POST" style={{display: 'inline-block'}}>
                <input type="hidden" name="id" defaultValue={products.id} />
                <button className="cart-btn">Add 1 to Cart</button>
                </form>
            </div>
            </div>
        </div>
    )}
    <h2>Other products</h2>
    <div className="mt-4">
            <div className="row">
            {products2 && products2.map((product) => (
            <div className="col">
                <div className="card card-course-item" style={{width: '11rem', height: '300px', margin: '0 0 20px 10px'}}>
                <img className="card-img-top" style={{width: '100%', height: '100px'}} src={product.photo} />
                <div className="card-body">
                    <h5 className="card-title">{product.csw_products}</h5>
                    {/*
                    <p class="card-text" style="font-size: 12px; height: 80px; overflow: hidden">{{this.description}}</p>
                    */}
                    <div style={{position: 'absolute', bottom: '65px', left: 0, right: 0, textAlign: 'center'}}>
                    <p className="card-text"><b>{product.price} VND</b></p>
                    </div>
                    <a href={`/details/${product.id}`} className="btn btn-primary" style={{position: 'absolute', bottom: '20px', left: '10px', right: '10px'}}>More Details</a>
                </div>  
                </div>
            </div>
            ))}
            </div>
    </div>
    <GeneralScript />
    </div>
  )
}

export default ProductDetails