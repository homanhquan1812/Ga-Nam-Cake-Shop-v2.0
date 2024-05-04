import { React, useState, useEffect } from 'react';
import Ma_ChangeInfosHead from '../../../components/Staffs/Managers/Ma_ChangeInfosHead'

const Ma_ChangeInfo = () => {
  const [orders, setOrders] = useState([]);
  const [managers, setManagers] = useState([]);

    useEffect(() => {
      const fetchData2 = async () => {
        try {
          const response = await fetch(`https://localhost:5173/api/staffs/${id}`);
          // const response = await fetch('https://yolohome-homanhquan-api.onrender.com/dashboard');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setManagers(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Fetch data initially
      fetchData2();

        const fetchData = async () => {
          try {
            const response = await fetch('https://localhost:5173/api/orders');
            // const response = await fetch('https://yolohome-homanhquan-api.onrender.com/dashboard');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setOrders(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Fetch data initially
        fetchData();

        // Fetch data every 5 seconds
        const intervalId = setInterval(fetchData, 5000);

        // Cleanup function
        return () => clearInterval(intervalId);
      }, []);

      const countRow = (orders) => {
        if (!Array.isArray(orders)) {
          return 0; // Return 0 if orders is not an array
        }
    
        let totalRow = 0;
    
        orders.forEach(order => {
          if (order && !order.declined && !order.delivered) {
            totalRow += 1; // Increment totalRow if order is not declined and not delivered
          }
        });
    
        return totalRow;
      };

  return (
    <div>
    <Ma_ChangeInfosHead />
    {/* Header */}
    <header className="p-3 bg-dark text-white">
      <div className="header-container">
        <div className="search-box">
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
          </form>
        </div>
        <div className="title" style={{paddingLeft: '50px'}}>
          <h1>SETTINGS</h1>
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
            {orders.length === 0 ? (
                <span className="message-count" style={{ display: 'none' }}>
                    {countRow(orders)}
                </span>
                ) : (
                <span className="message-count">
                    {countRow(orders)}
                </span>
            )}  
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
          <a href="/managers/settings" className="active">
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
              {managers && (
                <form method="POST" action="/managers/changeinfo/{{managers._id}}?_method=PUT">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="type" className="form-control" defaultValue={managers.csw_name} id="csw_name" name="csw_name" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Gender</label>
                  <input type="type" className="form-control" defaultValue={managers.csw_gender} id="csw_gender" name="csw_gender" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Phone Number</label>
                  <input type="type" className="form-control" defaultValue={managers.csw_phonenumber} id="csw_phonenumber" name="csw_phonenumber" />
                </div>
                <div className="form-group">
                  <label htmlFor="csw_username">Username</label>
                  <input type="type" className="form-control" defaultValue={managers.csw_username} id="csw_username" name="csw_username" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="videoID">Password</label>
                  <input type="type" className="form-control" defaultValue={managers.csw_password} id="csw_password" name="csw_password" />
                </div>
                <div className="form-group">
                  <label htmlFor="level">Email Address</label>
                  <input type="type" className="form-control" defaultValue={managers.csw_emailaddress} id="csw_emailaddress" name="csw_emailaddress" />
                </div>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </form>
              )}
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

export default Ma_ChangeInfo