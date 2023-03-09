import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <h1 className="logo ">{/* <Link to=""> Remi Andreas Benbow</Link> */}</h1>
      <nav>
        <ul>
          <li className="my-btn">
            <Link to="/">Home</Link>
            
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="my-btn">
            <Link to="/Connect">Connect</Link>
          </li>
          <li>
            <Link to="/my-work">My work</Link>
          </li>
          
          {/* <nav>
          <CustomDropdown />
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link> 
        </nav> */}
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
