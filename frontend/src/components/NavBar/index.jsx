import { Link } from "@reach/router";
import React from "react";
import homePageIcon from "../../assets/images/icons/home.png";
import logoIcon from "../../assets/images/logo.png";
import { classList, subjectList } from "../../data/list";
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
            <li>
              <Link to="/">
                <img src={homePageIcon} alt="I" />
                <span>মূল পৃষ্ঠা</span>
              </Link>
            </li>
            <li className="menu-heading">
              <h3>বিষয় ভিত্তিক পরীক্ষণ</h3>
            </li>

            {subjectList.map((s) => (
              <li>
                <a href="#0">
                  <img src={s.image} alt="I" />

                  <span>{s.name}</span>
                </a>
              </li>
            ))}
            <li className="menu-heading">
              <h3>শ্রেণি ভিত্তিক পরীক্ষণ</h3>
            </li>
            {classList.map((c) => (
              <li>
                <a href="#0">
                  <img src={c.image} alt="I" />

                  <span>{c.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
