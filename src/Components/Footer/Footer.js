import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/yt.svg";
import twitter from "../../assets/icons/twitter.svg";
import ytube from "../../assets/icons/ytube.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-container">
        <div className="footer-container-sub">
          <div className="footer__about">
            <div className="con">
              <Link to="/">
                <img src={logo} alt="logo" className="nav-logo" />
              </Link>
            </div>
            <ul>
              <li className="footer-li footer-link">Address: No. 240 Elelewon off Rstv by deeper life junction</li>
              <li className="footer-li footer-link">Phone: +234 703 814 5052</li>
              <li className="footer-li footer-link">Email: epayinstallments@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-container-sub2">
          <div className="footer__widget">
            <p className="footer-header" >Useful Links</p>
            <ul>
              <li className="footer-li"><Link to="/aboutus" className="footer-link">About Us</Link></li>
              <li className="footer-li"><Link to="/" className="footer-link">Contact Us</Link></li>
              <li className="footer-li"><Link to="/faq" className="footer-link">FAQ</Link></li>
              {/* <li className="footer-li"><Link to="/deliveryinfo" className="footer-link">Delivery infomation</Link></li> */}
              <li className="footer-li"><Link to="/returnpolicy" className="footer-link">Return Policy</Link></li>
              <li className="footer-li"><Link to="/tc" className="footer-link">T&C</Link></li>
              <li className="footer-li"><Link to="/privacypolicy" className="footer-link">Privacy policy</Link></li>

            </ul>
          </div>
        </div>
        <div className="">
          <div className="footer__widget">
            <p className="footer-header">Join Our Newsletter Now</p>
            <p className="footer-li footer-link">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <div className="footer-social">
              <a target="_blank" href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.instagram.com/epay_installment/%3Fhl%3Den&ved=2ahUKEwiwmOm7qLr5AhV0IMUKHefpD7oQFnoECAwQAQ&usg=AOvVaw2EDUQp198nkDEUpIv9UlMl">
                <img src={instagram} alt="" className="footer-icons" /></a>
              &nbsp;&nbsp; <a target="_blank" href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://mobile.twitter.com/epayinstallmen1&ved=2ahUKEwiV64PqqLr5AhWInqQKHRXxC_UQFnoECA8QAQ&usg=AOvVaw35nur6qAqduKVxSPvRG30l">
                <img src={twitter} alt="" className="footer-icons" /></a>
             &nbsp;&nbsp;  <a href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.youtube.com/channel/UCQ1WzkuzCgrtOoqk2mF7FHA/videos&ved=2ahUKEwj2j-zNqLr5AhVRuqQKHVzGDawQFnoECAkQAQ&usg=AOvVaw2cckWh1Al23eqKI7rXentC">
                <img src={ytube} alt="" className="footer-icons" />
              </a>
              &nbsp;&nbsp; <a title="Telegram Messenger LLP, Public domain, via Wikimedia Commons" target="_blank" href="https://t.me/+VV0avPgJxJf7KeDx">
                <img className="footer-icons" alt="Telegram logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png" /></a>
            </div>
          </div>
        </div>

      </div>
      <div className="footer__copyright__text">
        <p className="footer-copy-right footer-header">Copyright @epayinstallment.com</p>
      </div>
    </footer>
  );
};

export default Footer;
