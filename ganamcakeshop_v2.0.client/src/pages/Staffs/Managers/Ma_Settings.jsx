import { React, useState, useEffect } from 'react';
import Ma_SettingsHead from '../../../components/Staffs/Managers/Ma_SettingsHead'

const Ma_Settings = () => {
    const [orders, setOrders] = useState([]);
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
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
          fetchData();

        const fetchData2 = async () => {
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
          fetchData2();

          // Fetch data every 5 seconds
        const intervalId = setInterval(fetchData2, 5000);

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
    <Ma_SettingsHead />
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
            {managers && (
                <div className="insights">
                <div className="expenses">
                    <span className="material-symbols-outlined"> manage_accounts </span>
                    <div className="middle">
                    <div className="left">
                        <h1 style={{marginTop: '10px'}}>Change information</h1>
                        <h3 style={{fontSize: '5px'}}>Click this button to change your information:</h3>
                        <a href={`/managers/changeinfo/${managers.id}`}>
                        <button style={{marginTop: '10px'}} type="button" className="btn btn-primary">Click here</button>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="income" style={{height: '220px'}}>
                    <span className="material-symbols-outlined"> logout </span>
                    <div className="middle">
                    <div className="left">
                        <h1 style={{marginTop: '10px'}}>Sign out</h1>
                        <h3>Click this button to sign out:</h3>
                        <a href="/logout">
                        <button style={{marginTop: '10px'}} type="button" className="btn btn-primary">Click here</button>
                        </a>
                    </div>
                    </div>        
                </div>
                </div>
            )}
        </div>
        </main>
        <div className="right">
        <div className="top">
        </div>
        </div>
    </div>
    </div>
  )
}

export default Ma_Settings