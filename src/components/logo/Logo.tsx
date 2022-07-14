import logo from "../../logo.svg";
import './logo.css';

function Logo() {
  return (
    <header className="heading">
      <img src={logo} alt="logo" />
      <h3>TODO APP - using TS</h3>
    </header>
  );
}

export default Logo;
