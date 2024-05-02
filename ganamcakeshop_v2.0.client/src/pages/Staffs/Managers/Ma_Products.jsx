import { React, useState, useEffect } from 'react';
import Ma_ProductsHead from '../../../components/Staffs/Managers/Ma_ProductsHead'

const Ma_Products = () => {
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

  return (
    <div>
    <Ma_ProductsHead />
    {/* Header */}
    <header className="p-3 bg-dark text-white">
        <div className="header-container">
        <div className="search-box">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form>
        </div>
        <div className="title" style={{paddingLeft: '50px'}}>
            <h1>PRODUCTS</h1>
        </div>
        {/*
            <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
            */}
        <div className="right">
            <div className="top">
            <div className="profile">
                <div className="info">
                <p style={{color: 'white'}}>Welcome back, <b style={{color: 'yellow'}}>{'{'}{'{'}csw_name{'}'}{'}'}</b>.</p>
                <p style={{color: 'white'}}>Position: <b style={{color: 'cyan'}}>{'{'}{'{'}csw_position{'}'}{'}'}</b></p>
                </div>                                <div className="profile-photo">
                <img src="../../img/avatar.jpg" />
                </div>
            </div>
            </div>
        </div>
        </div>
    </header>
    {/* Content */}
    <div className="container">
        <aside>
        <div className="top">
            <div className="logo">
            <img src="../../img/logo.png" />
            </div>
            <div className="close">
            <span className="material-icons-sharp">close</span>
            </div>
        </div>
        <div className="sidebar" id="sidebar">
            <a href="/managers/overview">
            <span className="material-symbols-outlined"> overview </span>
            <h3>Overview</h3>
            </a>
            <a href="/managers/dashboard">
            <span className="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
            </a>
            <a href="/managers/orders">
            <span className="material-symbols-outlined"> list_alt </span>
            <h3>New Orders</h3>
            {'{'}{'{'}#if (eq (countRow orders) 0){'}'}{'}'}
            <span className="message-count" style={{display: 'none'}}>
                {'{'}{'{'}countRow orders{'}'}{'}'}
            </span>
            {'{'}{'{'}else{'}'}{'}'}
            <span className="message-count">
                {'{'}{'{'}countRow orders{'}'}{'}'}
            </span>
            {'{'}{'{'}/if{'}'}{'}'} 
            </a>
            <a href="/managers/staffs">
            <span className="material-symbols-outlined">groups</span>
            <h3>Members</h3>
            </a>
            <a href="/managers/customers">
            <span className="material-icons-sharp">person_outline</span>
            <h3>Customers</h3>
            </a>
            <a href="/managers/notes">
            <span className="material-symbols-outlined"> format_list_bulleted_add </span>
            <h3>To-Do Lists</h3>
            {/*
                    <span class="message-count">23</span>
                    */}
            </a>
            <a href="/managers/products" className="active">
            <span className="material-icons-sharp">inventory</span>
            <h3>Products</h3>
            </a>
            <a href="/managers/feedbacks">
            <span className="material-icons-sharp">feedback</span>
            <h3>Feedbacks</h3>
            </a>
            <a href="/managers/settings">
            <span className="material-icons-sharp">settings</span>
            <h3>Settings</h3>
            </a>
        </div>
        </aside>
        <main id="dynamic-content">
        {/*
            <div class="date">
                <input type="date">
            </div>
            */}
        <div className="mt-4">
            <div className="insights">
            <div className="sales">
                <div className="middle">
                <div className="left">
                    <button type="button" className="btn btn-primary" id="addProductBtn">Add more products</button>
                    <button style={{marginLeft: '0px'}} type="submit" className="btn btn-success" id="saveProductBtn" form="addProductForm">Save this product</button>
                    <button style={{marginLeft: '10px'}} type="button" className="btn btn-danger" id="discardProductBtn" onclick="window.location.href='/managers/products'">Discard this product</button>
                </div>
                </div>
                <input type="text" id="product-searchbar" onkeyup="myFunction()" placeholder="Search for products." />
                {/*
                        <div id="warning3" style="margin-top: 10px; font-size: 15px; display: none;">
                                <div style="color: red; font-weight: bold;">Notes: </div>
                                - Click <b>Enter</b> in every cell of information you want to save.
                                </ul></div>
                        */}
                <div className="add-data">
                <form method="POST" id="addProductForm" action="/managers/storeproducts">
                    <input type="type" id="csw_products" name="csw_products" placeholder="Product Name" required />
                    <input type="type" id="type" name="type" placeholder="Type" required />
                    <input type="type" id="price" name="price" placeholder="Price" required />
                    <input type="type" id="photo" name="photo" placeholder="Image Link" required />
                    <div className="description-input">
                    <input type="type" id="description" name="description" placeholder="Description" />
                    </div>         
                </form>
                </div>
                <table style={{marginTop: '20px'}} id="myTable">
                <thead>
                    <tr>
                    <th style={{width: '5%'}}>No</th>
                    <th style={{width: '15%'}}>Product</th>
                    <th>Photo</th>
                    <th style={{width: '15%'}}>Date added</th>
                    <th style={{width: '10%'}}>Type</th>
                    <th style={{width: '45%'}}>Description</th>                                       
                    <th style={{width: '5%'}}>Price</th>
                    <th style={{width: '5%'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(() => {
                        let counter = 0;
                        return products && products.map((product) => (
                            !product.deleted && (
                                <tr key={product.id}>
                                <td>{++counter}</td>
                                <td>{product.csw_products}</td>
                                <td><img src={product.photo} alt={product.csw_products} className="photo" /></td>
                                <td>{product.createdAt}</td>
                                <td>{product.type}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td><button type="button" class="btn btn-danger"  data-toggle="modal" data-id={product.id} data-target="#delete-course-modal">Remove</button></td>
                            </tr>
                            )
                        ))
                    })()}
                </tbody>
                </table>
                {/*
                    <div class="showall">
                        <a href="#">Show All</a>
                    </div>
                    
                        <small class="text-muted">Last 24 Hours</small>
                    */}
            </div>
            </div>
        </div></main>
        <form method="POST" name="delete-course-form" />
        <div id="delete-course-modal" className="modal" tabIndex={-1} role="dialog" style={{fontSize: '15px'}}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" style={{fontSize: '15px!important'}}>Delete Confirmation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <p>Are you sure that you want to delete this product?</p>
            </div>
            <div className="modal-footer">
                <button id="btn-delete-course" type="button" className="btn btn-primary">Yes</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">No</button>
            </div>
            </div>
        </div>
        </div>
        <div className="right">
        <div className="top" />
        </div>
    </div>
    <div className="right">
        <div className="top">
        </div>
    </div>
    </div>
  )
}

export default Ma_Products