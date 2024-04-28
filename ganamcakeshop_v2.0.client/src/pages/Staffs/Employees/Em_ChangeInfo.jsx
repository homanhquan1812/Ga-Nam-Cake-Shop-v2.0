import React from 'react'
import Em_ChangeInfosHead from '../../../components/Staffs/Employees/Em_ChangeInfosHead'

const Em_ChangeInfo = () => {
  return (
    <div>
    <Em_ChangeInfosHead />
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
            <h1>SETTINGS</h1>
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
            <a href="/employees/orders">
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
            <a href="/employees/settings" className="active">
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
                <h1>Change your information here:</h1>
                <form method="POST" action="/employees/changeinfo/{{info._id}}?_method=PUT">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="type" className="form-control" defaultValue="{{info.csw_name}}" id="csw_name" name="csw_name" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Gender</label>
                    <input type="type" className="form-control" defaultValue="{{info.csw_gender}}" id="csw_gender" name="csw_gender" disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Phone Number</label>
                    <input type="type" className="form-control" defaultValue="{{info.csw_phonenumber}}" id="csw_phonenumber" name="csw_phonenumber" />
                </div>
                <div className="form-group">
                    <label htmlFor="csw_username">Username</label>
                    <input type="type" className="form-control" defaultValue="{{info.csw_username}}" id="csw_username" name="csw_username" disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="videoID">Password</label>
                    <input type="type" className="form-control" defaultValue="{{info.csw_password}}" id="csw_password" name="csw_password" />
                </div>
                <div className="form-group">
                    <label htmlFor="level">Email Address</label>
                    <input type="type" className="form-control" defaultValue="{{info.csw_emailaddress}}" id="csw_emailaddress" name="csw_emailaddress" />
                </div>
                <button type="submit" className="btn btn-primary">Save changes</button>
                </form>
                {/*
                    <div class="showall">
                        <a href="#">Show All</a>
                    </div>
                    
                        <small class="text-muted">Last 24 Hours</small>
                    */}
            </div>
            </div>
        </div></main>
    </div></div>
  )
}

export default Em_ChangeInfo