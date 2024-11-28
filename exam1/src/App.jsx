import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [arr, setArr] = useState([]);

  const handleClick = () => {
    let obj = {
      name,
      email,
      password,
    };
    setArr([...arr, obj]);
    alert("SignUp Successfull");
    setState(0);
  };

  const handleLoginClick = () => {
    let a = arr.filter((el) => {
      if (el.email == loginEmail && el.password == loginPassword) {
        return el;
      }
    });

    if (a.length > 0) {
      alert("Login Successfull");
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <div className="App">
      <header>
        <img
          src="https://seeklogo.com/images/A/amazon-in-logo-6FDF9EDE86-seeklogo.com.png"
          alt=""
        />
      </header>
      {state == 0 ? (
        <div>
          <div className="signupbox">
            <div className="box">
              <div className="mainbox">
                <h3>Sign Up</h3>
                <input
                  type="text"
                  placeholder="Please Enter Your Name"
                  onChange={(name) => {
                    setName(name.target.value);
                  }}
                />
                <input
                  type="email"
                  placeholder="Please Enter Email"
                  onChange={(email) => {
                    setEmail(email.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Please Enter Password"
                  onChange={(pass) => {
                    setPassword(pass.target.value);
                  }}
                />
                <button className="signbtn" onClick={handleClick}>
                  Sign Up
                </button>
                <p>
                  To verify your number, we will send you a text message with a
                  temporary code. Message and data rates may apply.
                </p>
                <div className="spanbox">
                  <p>Buying for work?</p>
                  <p>Shop on Amazon Business</p>
                </div>
                <div className="alac" onClick={() => setState(1)}>
                  Already have an account? Login{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="loginbigbox">
            <div className="loginbox">
              <div className="loginmainbox">
                <h3>Login</h3>
                <input
                  type="email"
                  placeholder="Please Enter Email"
                  onChange={(loginemail) => {
                    setLoginEmail(loginemail.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Please Enter Password"
                  onChange={(loginpass) => {
                    setLoginPassword(loginpass.target.value);
                  }}
                />
                <button className="signbtn" onClick={handleLoginClick}>
                  Login
                </button>
                <p>
                  By continuing, you agree to Amazon's Conditions of Use and
                  Privacy Notice.
                </p>
                <p>Need help?</p>
                <div className="spanbox">
                  <p>Buying for work?</p>
                  <p>Shop on Amazon Business</p>
                </div>
              </div>
            </div>
            <p>New to Amazon?</p>
            <button className="crac" onClick={() => setState(0)}>
              Create an account
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
