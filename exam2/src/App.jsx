import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Mainsec from "./mainsec";

function App() {
  function toggleOffCanvas() {
    const offCanvas = document.getElementById("OffCanvasMenu");
    if (offCanvas) {
      offCanvas.classList.toggle("open");
    }
  }

  const [state, setState] = useState(0);

  return (
    <>
      <header>
        <nav>
          <div id="masai">
            <div className="logo"></div>
            <div className="dropdown">
              <a href="">Courses</a>
            </div>
          </div>

          <div className="navbar">
            <ul>
              <li>
                <a href="">Scholarship</a>
              </li>
              <li>
                <a href="">Success Stories</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Hire From Us</a>
              </li>
              <li>
                <a href="">Fees</a>
              </li>
            </ul>
            <button onClick={toggleOffCanvas}>Register</button>
          </div>

          <div className="offCanvas" id="OffCanvasMenu">
            {state === 0 ? (
              <div>
                    <button className="btn-close" onClick={toggleOffCanvas}>
                      &times;
                    </button>
                <div className="offCanvasHeader">
                  
                      <h2>Create Account</h2>
                    <p
                      onClick={() => {
                        setState(1);
                      }}
                    >
                      Already have an account? <span>Sign in</span>
                    </p>
                    <label htmlFor="Full Name">Full Name <span>*</span></label>
                    <input type="text" placeholder="Enter full name" required />
                    <label htmlFor="Email">Email address <span>*</span></label>
                    <input type="email" placeholder="Enter email address" required />
                    <label htmlFor="Password">Password <span>*</span></label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      required
                    />
                    <label htmlFor="Referral Code ">
                      Referral Code (Optional)
                    </label>
                    <input type="text" placeholder="Enter referral Code" />
                    <button className="btn">Create Account</button>
                    <p className="info">
                      By signing up, I accept the Masai <span>Terms of Service</span> and
                      acknowledge the <span>Privacy Policy.</span>
                    </p>
                    <div />
                </div>
              </div>
            ) : (
              <div>
                  <button className="btn-close2" onClick={toggleOffCanvas}>
                    &times;
                  </button>
                <div className="offCanvasHeader2">
                  <h2>Sign In</h2>
                  <p
                    onClick={() => {
                      setState(0);
                    }}
                  >
                    New User? <span>Sign Up</span>
                  </p>
                  <label htmlFor="Email">Email <span>*</span></label>
                  <input type="email" placeholder="Enter Email" required />
                  <label htmlFor="Password">Password <span>*</span></label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    required
                  />
                  <button className="btn">Login</button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <Mainsec />
      <Footer />
    </>
  );
}

export default App;
