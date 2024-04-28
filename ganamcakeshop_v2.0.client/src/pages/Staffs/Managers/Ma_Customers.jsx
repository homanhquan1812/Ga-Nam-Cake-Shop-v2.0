import React from 'react'
import Ma_CustomersHead from '../../../components/Staffs/Managers/Ma_CustomersHead'

const Ma_Customers = () => {
  return (
    <div>
    <Ma_CustomersHead />
    {/* Header */}
    <header className="p-3 bg-dark text-white">
        <div className="header-container">
        <div className="search-box">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form>
        </div>
        <div className="title" style={{paddingLeft: '50px'}}>
            <h1>CUSTOMERS</h1>
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
            <a href="/managers/customers" className="active">
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
            <a href="/managers/products">
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
                {/*
                        <div class="middle">
                            <div class="left">
                                <button type="button" class="btn btn-primary">Add more members</button>
                            </div>
                        </div>
                        */}
                {'{'}{'{'}#each csw_info2{'}'}{'}'}
                {'{'}{'{'}/each{'}'}{'}'}
                <table style={{marginTop: '20px'}}>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Customer</th>
                    <th>Gender</th>
                    <th>Phone number</th>
                    <th>Address</th>
                    <th>Username</th>
                    <th>Email address</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody><tr>
                    <td>{'{'}{'{'}sum @index 1{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_name{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_gender{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_phonenumber{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_address{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_username{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_emailaddress{'}'}{'}'}</td>
                    <td>
                        {'{'}{'{'}#unless (eq this.csw_position "Manager"){'}'}{'}'}
                        <button type="button" className="btn btn-danger" data-toggle="modal" data-id="{{this._id}}" data-target="#delete-course-modal">Remove</button>
                        {'{'}{'{'}/unless{'}'}{'}'}
                    </td>
                    </tr><tr />
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
                <p>Are you sure that you want to delete this customer?</p>
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

export default Ma_Customers