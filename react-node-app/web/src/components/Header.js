import logo from "../assets/logo.png";
import "./Header.css";

const Header = ({ locationHandler }) => {
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="logo" />
      <div className="btns">
        <button
          className="login-btn"
          onClick={locationHandler}
          data-target="login"
        >
          Sign In
        </button>
        <button
          className="register-btn"
          onClick={locationHandler}
          data-target="register"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Header;
