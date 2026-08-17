import { useEffect, useState } from "react";
import { Link } from "react-router";
const Header = () => {
  const [loginBtn, setloginBtn] = useState("login");

  useEffect(() => {
    console.log("Header Component Re-rendered");
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          <div className="logo_wrapper">
            <Link to="/">
              <img src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="cart_wrapper">
            <div>
              <button
                onClick={() => {
                  loginBtn === "login"
                    ? setloginBtn("logout")
                    : setloginBtn("login");
                }}
              >
                {loginBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
