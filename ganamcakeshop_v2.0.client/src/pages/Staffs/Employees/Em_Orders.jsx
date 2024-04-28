import React from 'react'
import Em_OrdersHead from '../../../components/Staffs/Employees/Em_OrdersHead'

const Em_Orders = () => {
  return (
    <div>
    <Em_OrdersHead />
    {/* Header */}
    <header className="p-3 bg-dark text-white">
        <div className="header-container">
        <div className="search-box">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form>
        </div>
        {/*
            <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
            */}
        <div className="title" style={{paddingLeft: '50px'}}>
            <h1>NEW ORDERS</h1>
        </div>
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
            <a href="/employees/overview">
            <span className="material-symbols-outlined"> overview </span>
            <h3>Overview</h3>
            </a>
            <a href="/employees/dashboard">
            <span className="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
            </a>
            <a href="/employees/orders" className="active">
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
            <a href="/employees/notes">
            <span className="material-symbols-outlined"> format_list_bulleted_add </span>
            <h3>To-Do Lists</h3>
            {/*
                    <span class="message-count">23</span>
                    */}
            </a>
            <a href="/employees/products">
            <span className="material-icons-sharp">inventory</span>
            <h3>Products</h3>
            </a>
            <a href="/employees/feedbacks">
            <span className="material-icons-sharp">feedback</span>
            <h3>Feedbacks</h3>
            </a>
            <a href="/employees/settings">
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
                {/*
                        <div class="middle">
                            <div class="left">
                                <button type="button" class="btn btn-primary">Add more members</button>
                            </div>
                        </div>
                        */}
                {'{'}{'{'}#each orders{'}'}{'}'}
                {'{'}{'{'}#unless this.delivered{'}'}{'}'}
                {'{'}{'{'}/unless{'}'}{'}'}
                {'{'}{'{'}/each{'}'}{'}'}
                <table style={{marginTop: '20px'}}>
                <thead>
                    <tr>
                    <th>Customer</th>
                    <th>Phone number</th>
                    <th>Address</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total cost</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody><tr><td>{'{'}{'{'}this.customer{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.phonenumber{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.address{'}'}{'}'}</td>
                    <td>
                        {'{'}{'{'}#each this.products{'}'}{'}'}
                        {'{'}{'{'}this.name{'}'}{'}'}
                        {'{'}{'{'}#unless @last{'}'}{'}'}<br /><hr /> {'{'}{'{'}/unless{'}'}{'}'}
                        {'{'}{'{'}/each{'}'}{'}'}
                    </td>
                    <td>
                        {'{'}{'{'}#each this.products{'}'}{'}'}
                        {'{'}{'{'}this.qty{'}'}{'}'}
                        {'{'}{'{'}#unless @last{'}'}{'}'}<br /><hr /> {'{'}{'{'}/unless{'}'}{'}'}
                        {'{'}{'{'}/each{'}'}{'}'}
                    </td>
                    <td>{'{'}{'{'}this.totalcost{'}'}{'}'} VND</td>
                    <td>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-id="{{this._id}}" data-target="#delete-course-modal">Finish delivering</button>
                    </td></tr><tr />
                </tbody>
                </table>
                {/*
                    <div class="showall">
                        <a href="#">Show All</a>
                    </div>
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
                <p>Are you sure that you've already delivered cakes to this customer?</p>
            </div>
            <div className="modal-footer">
                <button id="btn-delete-course" type="button" className="btn btn-primary">Yes</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">No</button>
            </div>
            </div>
        </div>
        </div>
        <div className="right">
        <div className="top">
        </div>
        </div>
    </div>
    </div>
  )
}

export default Em_Orders