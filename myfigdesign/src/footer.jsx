import AboutPage from "./routes/about/about.jsx";
import ConnectPage from "./routes/connect/Connect.jsx";
import HomePage from "./routes/home/Home.jsx";
import Link from "./routes/links/Links.jsx";


function Footer() {
  return (
    <footer>
      <ul className="footer-nav">
        <li>
          <a href="tel:93051536">Or call me for a chat</a>
        </li>
        <li>
          <label for="skills">Web dev skills </label>
          <progress id="skills" value="30" max="100"></progress>
        </li>
      </ul>
      <ul className="footer-social">
        <li>
          <a
            className="social-link"
            href="https://www.facebook.com/remi.benbow"
          >
            <img
              src="./assets/images/fblogo.png"
              className="social-icon"
              alt=""
              aria-label="facebook"
            />
          </a>
        </li>
        <li>
          <a
            className="social-link"
            href="https://www.instagram.com/remibenbow"
          >
            <img
              src="./assets/images/fblogo.png"
              className="social-icon"
              alt=""
              aria-label="instagram"
            />
          </a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <nav>

         
        </nav>
{/* <CustomDropdown /> */}
    </footer>
  );
}

export default Footer;

