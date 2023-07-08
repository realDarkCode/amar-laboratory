import React from "react";
import biologyIcon from "../../assets/images/biologyIcon.png";
import chemistryIcon from "../../assets/images/chemistryIcon.png";
import elevenIcon from "../../assets/images/elevenIcon.png";
import homePageIcon from "../../assets/images/homeIcon.png";
import logoIcon from "../../assets/images/logo.png";
import nineIcon from "../../assets/images/nineIcon.png";
import physicsIcon from "../../assets/images/physicsIcon.png";
import tenIcon from "../../assets/images/tenIcon.png";
import twelveIcon from "../../assets/images/twelveIcon.png";
import "./style.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <svg style={{ display: "none" }}>
        <symbol id="down" viewBox="0 0 16 16">
          <polygon points="3.81 4.38 8 8.57 12.19 4.38 13.71 5.91 8 11.62 2.29 5.91 3.81 4.38" />
        </symbol>
      </svg>
      <header className="page-header">
        <nav>
          <button
            className="toggle-mob-menu"
            aria-expanded="false"
            aria-label="open menu"
          >
            <svg width="20" height="20" aria-hidden="true">
              <use xlinkHref="#down"></use>
            </svg>
          </button>
          <div className="logo">
            <img src={logoIcon} />
          </div>
          <ul className="admin-menu">
            {/* <li className="menu-heading">
              <h3>Admin</h3>
            </li> */}
            <li>
              <a href="#0">
                <img src={homePageIcon} alt="I" />
                <span>মূল পৃষ্ঠা</span>
              </a>
            </li>
            <li className="menu-heading">
              <h3>বিষয় ভিত্তিক পরীক্ষণ</h3>
            </li>
            <li>
              <a href="#0">
                <img src={chemistryIcon} alt="I" />

                <span>রসায়ন</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <img src={physicsIcon} alt="I" />

                <span>পদার্থ বিজ্ঞান</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <img src={biologyIcon} alt="I" />
                <span>জীব বিজ্ঞান</span>
              </a>
            </li>
            <li className="menu-heading">
              <h3>শ্রেণি ভিত্তিক পরীক্ষণ</h3>
            </li>
            <li>
              <a href="#0">
                <img src={nineIcon} alt="I" />

                <span>নবম</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <img src={tenIcon} alt="I" />
                <span>দশম</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <img src={elevenIcon} alt="I" />
                <span>একাদশ</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <img src={twelveIcon} alt="I" />
                <span>দ্বাদশ</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
