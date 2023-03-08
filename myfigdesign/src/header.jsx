import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="logo">
        {/* <Link to=""> Remi Andreas Benbow</Link> */}
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
          </li>
          <li>
            <Link to="/my-work">My work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
