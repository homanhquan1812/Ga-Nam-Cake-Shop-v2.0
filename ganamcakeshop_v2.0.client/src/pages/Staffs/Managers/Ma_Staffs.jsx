import React from 'react'
import Ma_StaffsHead from '../../../components/Staffs/Managers/Ma_StaffsHead'

const Ma_Staffs = () => {
  return (
    <div>
    <Ma_StaffsHead />
    {/* Header */}
    <header className="p-3 bg-dark text-white">
        <div className="header-container">
        <div className="search-box">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form>
        </div>
        <div className="title" style={{paddingLeft: '50px'}}>
            <h1>MEMBERS</h1>
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
            <a href="/managers/staffs" className="active">
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
        {/* <form name="container-form" method="POST" action="/managers/handle-form-actions"> */}
        <main id="dynamic-content">
        <div className="mt-4">
            <div className="insights">
            <div className="sales">
                <div className="middle">
                <div className="left">
                    <button type="button" className="btn btn-primary" id="addInfoBtn">Add more members</button>
                    <button style={{marginLeft: '10px'}} type="button" className="btn btn-warning" id="changeInfoBtn">Change member's role</button>                                  
                    <button style={{marginLeft: '10px'}} type="submit" className="btn btn-success" id="saveInfoBtn">Save all changes</button>                           
                    <button style={{marginLeft: '10px'}} type="button" className="btn btn-danger" id="discardInfoBtn" onclick="window.location.href='/managers/staffs'">Discard all changes</button>
                    <button style={{marginLeft: '10px'}} type="submit" className="btn btn-success" id="saveAddedInfoBtn" form="addInfoForm">Save this member</button>
                    <button style={{marginLeft: '10px'}} type="button" className="btn btn-danger" id="discardAddedInfoBtn" onclick="window.location.href='/managers/staffs'">Discard</button>
                </div>       
                </div>
                {/*
                            <div id="warning" style="margin-top: 10px; font-size: 15px; display: none;">
                                <div style="color: red; font-weight: bold;">Notes: </div>
                                - "<b>Save all changes</b>" is temporarily disabled.
                                <br>
                                - Click <b>Enter</b> in every cell of information you want to save.
                            </div>
                            */}
                <div className="add-data">
                <form method="POST" id="addInfoForm" action="/managers/store">
                    <input type="type" id="csw_name" name="csw_name" placeholder="Name" required />
                    <input type="type" id="csw_gender" name="csw_gender" placeholder="Gender" />
                    <input type="type" id="csw_phonenumber" name="csw_phonenumber" placeholder="Phone number" />
                    <input type="type" id="csw_username" name="csw_username" placeholder="Username" />
                    <input type="type" id="csw_emailaddress" name="csw_emailaddress" placeholder="Email address" />
                    <input type="password" id="csw_password" name="csw_password" placeholder="Password" />
                    <input type="type" id="csw_position" name="csw_position" placeholder="Position" />
                    <input type="type" id="csw_department" name="csw_department" placeholder="Department" />
                </form>
                </div>
                {'{'}{'{'}#each csw_info{'}'}{'}'}
                {'{'}{'{'}/each{'}'}{'}'}                                    
                <table style={{marginTop: '20px'}}>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Member</th>
                    <th>Gender</th>
                    <th>Phone number</th>
                    <th>Username</th>
                    <th>Email address</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody><tr>
                    <td>{'{'}{'{'}sum @index 1{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_name{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_gender{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_phonenumber{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_username{'}'}{'}'}</td>
                    <td>{'{'}{'{'}this.csw_emailaddress{'}'}{'}'}</td>
                    <form method="POST" id="updateForm{{@index}}" name="updateForm{{@index}}" action="/managers/{{this._id}}?_method=PUT" />
                    <td>             
                        <div className="currentPosition">
                        {'{'}{'{'}this.csw_position{'}'}{'}'}
                        </div>                           
                        <div className="changeCurrentPosition"> 
                        <input type="type" className="form-control" defaultValue="{{this.csw_position}}" name="csw_position" />
                        {/*
                                                        <select name="selectposition" id="selectposition">
                                                            <optgroup label="Select position">
                                                                <option {{#if (eq this.csw_position 'Manager')}} selected {{/if}}>Manager</option>
                                                                <option {{#unless (eq this.csw_position 'Manager')}} selected {{/unless}}>Employee</option>
                                                            </optgroup>
                                                        </select>
                                                        */}
                        {/* <input style="margin-top: 5px; background-color: yellow; padding: 2px;"  type="submit" value="Submit" /> */}
                        </div>
                    </td>
                    <td>
                        <div className="currentDepartment">
                        {'{'}{'{'}this.csw_department{'}'}{'}'}
                        </div>                           
                        <div className="changeCurrentDepartment">
                        <input type="type" className="form-control" defaultValue="{{this.csw_department}}" name="csw_department" />
                        {/*
                                                        <select name="selectdepartment" id="selectdepartment">
                                                            <optgroup label="Select Department">
                                                                <option {{#if (eq this.csw_department 'Cake Cook')}} selected="selected"{{/if}}>Cake Cook</option>
                                                                <option {{#if (eq this.csw_department 'Cupcake Creations')}} selected="selected"{{/if}}>Cupcake Creations</option>
                                                                <option {{#if (eq this.csw_department 'Chocolate Delights')}} selected="selected"{{/if}}>Chocolate Delights</option>
                                                                <option {{#if (eq this.csw_department 'Frosty Treats')}} selected="selected"{{/if}}>Frosty Treats</option>
                                                                <option {{#if (eq this.csw_department 'Sweet Innovations')}} selected="selected"{{/if}}>Sweet Innovations</option>
                                                                <option {{#if (eq this.csw_department 'Tasty Tarts')}} selected="selected"{{/if}}>Tasty Tarts</option>
                                                                <option {{#if (eq this.csw_department 'Creamy Confections')}} selected="selected"{{/if}}>Creamy Confections</option>
                                                                <option {{#if (eq this.csw_department 'Fruity Delights')}} selected="selected"{{/if}}>Fruity Delights</option>
                                                                <option {{#if (eq this.csw_department 'Velvet Vanilla')}} selected="selected"{{/if}}>Velvet Vanilla</option>
                                                                <option {{#if (eq this.csw_department 'Divine Desserts')}} selected="selected"{{/if}}>Divine Desserts</option>
                                                            </optgroup>
                                                        </select>
                                                        */}
                        {/* <input style="margin-top: 5px; background-color: yellow; padding: 2px;"  type="submit" value="Submit" /> */}
                        </div>
                    </td>
                    <td>
                        {'{'}{'{'}#unless (eq this.csw_position "Manager"){'}'}{'}'}
                        <button type="button" className="btn btn-danger" data-toggle="modal" data-id="{{this._id}}" data-target="#delete-course-modal">Remove</button>
                        {'{'}{'{'}/unless{'}'}{'}'}
                    </td>
                    </tr>
                    <tr /><tr />
                </tbody>
                </table>
                {/*
                        <div class="showall">
                            <a href="#">Show All</a>
                        </div>
                        */}
            </div>
            </div>
        </div>
        </main>
        {/* </form> */}
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
                <p>Are you sure that you want to delete this member?</p>
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
    <div id="savedNumber" style={{display: 'none'}}>
        {'{'}{'{'}csw_info.length{'}'}{'}'}
    </div>
    </div>
  )
}

export default Ma_Staffs