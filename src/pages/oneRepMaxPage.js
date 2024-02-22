import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const OneRepMaxPage = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [result, setResult] = useState('');

  const customRound = (value, step) => 2.5 * Math.floor((Math.floor(value) + step / 2) / step);

  const calculate = () => {
    const weightValue = parseFloat(weight);
    const repsValue = parseFloat(reps);

    if (!isNaN(weightValue) && !isNaN(repsValue)) {
      setResult(`Result: ${customRound(weightValue * (36 / (37 - reps)), 2.5)}`);
    } else {
      setResult('Please enter valid numbers');
    }
  };

  return(
    <>
      <Navbar />
      <div className="container d-flex flex-column min-vh-100">
        <div className="row">
          <div className="col">
            <h1>One Rep Max</h1>
            <div className="card mt-4" style={{ borderRadius: 15 }}>
              <div className="card-body">
                <p>
                  The One Rep Max (1RM) Calculator is a practical tool for individuals seeking to estimate their maximum lifting 
                  capacity. By inputting the weight lifted and the corresponding repetitions, users can quickly obtain an estimate 
                  of their one-repetition maximum strength. 
                </p>
                <p>
                  The calculator employs the Brzycki formula, a widely recognized method in strength training, ensuring accuracy in 
                  its calculations. Whether used by seasoned fitness enthusiasts fine-tuning their training program or beginners 
                  establishing benchmarks, the calculator provides a straightforward means to understand individual strength thresholds. 
                </p>
                <p>
                  This calculator facilitates progress tracking and allows users to make informed adjustments to their workout routines based on 
                  reliable insights from the formula. In essence, the One Rep Max Calculator offers a simple and accurate approach 
                  to optimize strength training regimens.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4" style={{ borderRadius: 15 }}>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h3>Weight (lbs)</h3>
                <input
                  className="input-text"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  style={{width: "100%"}}
                />
                <h3 className="mt-2">Repetitions</h3>
                <input
                  className="input-text"
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  style={{width: "100%"}}
                />
                <button className="btn text-white mt-4" onClick={calculate} style={{ backgroundColor: "#dc405c", width:120 , height: 45}}>Calculate</button>
              </div>
              <div className="col">
                <h3>Your One Rep Max Estimate: </h3>
                <h3 id="result">{result}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};