import { useState } from "react";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("login");

  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          <div className="logo_wrapper">
            <img src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png" />
          </div>
          <nav>
            <ul>
              <li>Offers</li>
              <li>Careers</li>
              <li>About</li>
              <li>Contact Us</li>
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
