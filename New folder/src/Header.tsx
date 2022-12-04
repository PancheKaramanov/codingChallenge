import "./App.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const Header = () => {
  return (
    <div className="header">
      <div className="links">
      <Link to="/quotes" className="link">
        <Button variant="contained">Home</Button>
      </Link>
      <Link to="/random-quote" className="link">
        <Button variant="contained">Random Quote</Button>
      </Link>
      </div>
      <div className="title">
        <h1>Quotes App</h1>
      </div>
      <div className="img">

      </div>
    </div>
  );
};

export default Header;
