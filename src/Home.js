import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Section from "./Section";
import dummyText from "./dummyText";

class Home extends Component {
  render() {
    return (
      <div>
        <h2 id="top">Guelph Coding Community </h2>
        <p>Write code and eat pizza.</p>
 
        <p>Except not pizza this semester because of quarantine.</p>

        <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section 2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
              </li>
            </ul>

      <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />

      <Section
        title="Section 2"
        subtitle={dummyText}
        dark={true}
        id="section 2"
        />


      <ul className="nav-items">
        <li className="nav-item">
          <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
            Back to Top
            </Link>
        </li>
      </ul>

      </div>
    );
  }
}

export default Home;