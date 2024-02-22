import React from "react";
import ReactDOM from "react-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark mb-4" style={{ backgroundColor: "#dc405c" }}>
      <div className="container">
        <a href="/lifte/home.html" className="navbar-brand" style={{ fontSize: 30, fontWeight: 600 }}>Lifte</a>
        <button className="navbar-toggler" data-bs-toggle="collapse"
          data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/lifte/home.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/lifte/onerepmax.html" className="nav-link">One Rep Max</a>
            </li>
            <li className="nav-item">
              <a href="/lifte/smolovjr.html" className="nav-link">Smolov Jr.</a>
            </li>
            <li className="nav-item">
              <a href="/lifte/contact.html" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
