import React from 'react'
import Ma_OverviewsHead from '../../../components/Staffs/Managers/Ma_OverviewsHead'

const Ma_Overview = () => {
  return (
    <div>
    <Ma_OverviewsHead />
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
            <h1>OVERVIEW</h1>
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
            <a href="/managers/overview" className="active">
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
        <div className="insights">
        </div>
        <div className="recent-orders">
            <h1>Recent Orders <button style={{marginLeft: '10px'}} type="button" className="btn btn-primary" onclick="window.location.href='/managers/dashboard'">More Details</button></h1>
            {'{'}{'{'}#each orders{'}'}{'}'}
            {'{'}{'{'}/each{'}'}{'}'}
            <table style={{marginTop: '20px'}}>
            <thead>
                <tr>
                <th>No</th>
                <th>Customers</th>
                <th>Phone Number</th>
                <th>Product/Quantity</th>
                <th>Status</th>
                <th />
                </tr>
            </thead>
            <tbody><tr>
                <td>{'{'}{'{'}sum @index 1{'}'}{'}'}</td>
                <td>{'{'}{'{'}this.customer{'}'}{'}'}</td>
                <td>{'{'}{'{'}this.phonenumber{'}'}{'}'}</td>
                <td>
                    {'{'}{'{'}#each this.products{'}'}{'}'}
                    {'{'}{'{'}this.name{'}'}{'}'} x {'{'}{'{'}this.qty{'}'}{'}'}
                    {'{'}{'{'}#unless @last{'}'}{'}'}<br /><hr /> {'{'}{'{'}/unless{'}'}{'}'}
                    {'{'}{'{'}/each{'}'}{'}'}
                </td>
                <td>
                    {'{'}{'{'}#if (isBool this.declined true){'}'}{'}'}
                    <button type="button" className="btn btn-danger">Declined</button>
                    {'{'}{'{'}else{'}'}{'}'}
                    {'{'}{'{'}#if (isBool this.delivered true){'}'}{'}'}
                    <button type="button" className="btn btn-success">Delivered</button>
                    {'{'}{'{'}else{'}'}{'}'}
                    <button type="button" className="btn btn-warning">Processing</button>
                    {'{'}{'{'}/if{'}'}{'}'}
                    {'{'}{'{'}/if{'}'}{'}'}
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
        </main>
        <div className="right">
        <main id="dynamic-content">
            <div className="recent-updates">
            <div className="insights">
                <div className="sales">
                <span className="material-icons-sharp">analytics</span>
                <div className="middle">
                    <div className="left">
                    <h3>Total Sales</h3>
                    <h1>{'{'}{'{'}getTotal orders{'}'}{'}'} VND</h1>
                    </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
                </div>
            </div>
            </div></main>
        <div className="recent-updates">
            <div className="updates">
            <div className="insights">
                <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '25px'}}>To-Do Lists</span>
                {'{'}{'{'}#each notes{'}'}{'}'}
                {'{'}{'{'}/each{'}'}{'}'}
                <table style={{marginTop: '20px', width: '100%'}}>
                <thead>
                    <tr>
                    <th style={{width: '20%'}}>No</th>
                    <th style={{width: '80%'}}>Notes</th>
                    </tr>
                </thead>
                <tbody><tr>
                    <td>{'{'}{'{'}sum @index 1{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_notes{'}'}{'}'}</td>
                    </tr><tr /><tr />
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Ma_Overview