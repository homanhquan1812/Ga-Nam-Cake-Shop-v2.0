import React from 'react'
import LoginsHead from '../components/LoginsHead'
import { IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';

const Login = () => {
  return (
    <div>
        <LoginsHead />
        <section>
        <div className="wrapper">
            <span className="icon-close">
            <IonIcon icon={close} onClick={() => window.location.href='home'}></IonIcon>
            </span>
            <div className="button-active" style={{display: 'none'}}>
            <span className="icon-close2 login-link">
                <ion-icon name="arrow-back-outline" />
            </span>
            </div>
            <div className="form-box login">
            <div className="form-value">
                {/* <a href="home"><span class="material-symbols-outlined" style="color: white;">arrow_back</span></a> */}
                <form action="/login/loginSubmit" method="POST">
                <h2>Login</h2>
                <div className="inputbox">
                    <input type="username" id="username" name="username" required />
                    <span className="icon"><ion-icon name="person" /></span>
                    <label>Username</label>
                </div>
                <div className="inputbox">
                    <input type="password" id="password" name="password" className="password" required />
                    <span className="icon"><ion-icon name="eye-off" id="changeLogo" onclick="myFunction3()" /></span>
                    <label>Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" name="submit">Login</button>
                <div className="registerBtn">
                    <p>Don't have an account? <a href="#" className="register-link">Click here</a></p>
                </div>
                </form>
            </div>
            </div>
            <div className="form-box register">
            <div className="form-value">
                <h2>Registration</h2>
                <form action="/login/registerSubmit" method="POST">
                {/* Left Section */}
                <div className="left-section">
                    <div className="inputbox">
                    <span className="icon"><ion-icon name="person-circle" /></span>
                    <input type="text" id="fullname" name="fullname" required />
                    <label>Full Name</label>
                    </div>
                    <div className="inputbox">
                    <span className="icon"><ion-icon name="call" /></span>
                    <input type="text" id="phonenumber" name="phonenumber" required />
                    <label>Phone Number</label>
                    </div>
                    <div className="inputbox">
                    <span className="icon"><ion-icon name="home" /></span>
                    <input type="text" id="address" name="address" required />
                    <label>Address</label>
                    </div>
                    <div className="inputbox">
                    <span className="icon"><ion-icon name="transgender" /></span>
                    <input type="text" id="gender" name="gender" placeholder="Type &quot;Male&quot; or &quot;Female&quot;." maxLength={6} required />
                    <label>Gender</label>
                    </div>
                    <div className="inputbox">
                    <span className="icon"><ion-icon name="person" /></span>
                    <input type="username" id="user" name="user" required />
                    <label>Username</label>
                    </div>
                    <div className="inputbox">
                    <span className="icon"><ion-icon name="mail" /></span>
                    <input type="email" id="email" name="email" required />
                    <label>Email</label>
                    </div>
                    <div className="inputbox">
                    <span className="icon"><ion-icon id="changeLogo2" name="eye-off" onclick="myFunction2()" /></span>
                    <input type="password" id="pass" name="pass" required />
                    <label>Password</label>
                    </div>
                </div>
                {/* Right Section
                    <div class="right-section">
                        <div class="inputbox">
                            <span class="icon"><ion-icon name="person"></ion-icon></span>
                            <input type="username" id="username" name="username" required>
                            <label>Username</label>
                        </div>

                        <div class="inputbox">
                            <span class="icon"><ion-icon name="mail"></ion-icon></span>
                            <input type="email" id="email" name="email" required>
                            <label>Email</label>
                        </div>

                        <div class="inputbox">
                            <span class="icon"><ion-icon name="eye"></ion-icon></span>
                            <input type="password" id="password" name="password" class="password" required>
                            <label>Password</label>
                        </div>
                    </div>
                    */}
                <div className="remember-forgot">
                    <label><input type="checkbox" id="termsCheckbox" />I agree to the Terms and Conditions.</label>
                </div>
                <button type="submit" className="submit" onclick="validateForm()">Register</button>
                {/*
                    <div class="registerBtn">
                        <p>Already have an account? <a href="#" class="login-link">Login</a></p>
                    </div>
                    */}
                </form>
            </div>
            </div>
        </div></section>
    </div>
  )
}

export default Login