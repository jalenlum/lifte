import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const ContactPage = () => {
  return(
    <>
      <Navbar />
      <div className="container d-flex flex-column min-vh-100" id="contact">
        <div className="row justify-content-center">
          <div className="col text-center">
            <h1>Contact Me</h1>
            <br />
            <p>Feel free to reach out to me through this contact form.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-9 col-xs-12 text-center">
            <form action="https://api.backendform.com/sendform/808jalen@gmail.com" method="post">
              <input className="contact-text mt-4" placeholder="Your Name" type="text" name="name" />
              <br />
              <input className="contact-text mt-4" placeholder="Your Email" type="email" name="email" />
              <br />
              <textarea className="contact-text mt-4" placeholder="Your Message" type="text" name="message" style={{ height: 350, resize: "none" }} />
              <br />
              <button className="btn text-white mt-4" type="submit" style={{ backgroundColor: "#dc405c", width: 120, height: 45 }}>
                <div>Submit &nbsp;<i className="fas fa-paper-plane"></i></div>
              </button>
              <input hidden type="text" name="from" value="Lifte" />
              <input hidden type="text" name="redirect" value="http://localhost:3000/" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
