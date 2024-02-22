import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return(
    <>
      <Navbar />
      <div className="container justify-content-center d-flex flex-column min-vh-100">
        <div className="row">
          <div className="col text-center">
            <h1 style={{ fontWeight: 600 }}>Lifte, Elevating Your Strength</h1>
            <p className='mt-4 mb-5'>
              Discover your strength through our user-friendly strength calculators. These innovative 
              tools empowers you to harness your true potential and gain valuable insights into your physical 
              strength. Whether you're an athlete, fitness enthusiast, or simply curious about your strengths, 
              our calculators simplifies the process, providing you with the data you need to chart your 
              fitness journey and reach your personal performance goals.
            </p>
          </div>
        </div>
        <div className="row text-center justify-content-between mt-5">
          {renderFeature('/onerepmax.html', 'One Rep Max', 'Estimate your max weight liftable for one repetition based on performance')}
          {renderFeature('/smolovjr.html', 'Smolov Jr.', 'Generate an intense three-week training program to increase strength')}
          {renderFeature('/contact.html', 'Contact Us', 'Drop a message or ask anything using our contact form')}
        </div>
      </div>
      <Footer />
    </>
  );

};

const renderFeature = (link, title, description) => {
  return (
    <div className="col-md-12 col-lg-3 mb-5">
      <a href={link}>
        <img className="img-fluid" src="../assets/placeholder.jpg" alt={title} style={{ borderRadius: 15 }} />
      </a>
      <h4 className="mt-4">{title}</h4>
      <p>{description}</p>
    </div>
  );
}