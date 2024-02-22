import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const SmolovJrPage = () => {
  const [maxLift, setMaxLift] = useState(0)
  const [increment, setIncrement] = useState(5)
  
  const maxChange = (e) =>{ setMaxLift(e.target.value) };
  const incrementChange = (e) => { setIncrement(e.target.value); }

  const customRound = (value, step) => 2.5 * Math.floor((Math.floor(value) + step / 2) / step);

  const calculateWeight = (percentage) => customRound(maxLift * percentage, 2.5);

  return(
    <>
      <Navbar />
      <div className="container d-flex flex-column min-vh-100">
        <div className="row">
          <div className="col">
            <h1>Smolov Jr.</h1>
            <br />
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body">
                <p>
                  Smolov Jr. is a popular and intense powerlifting program designed to rapidly increase strength, particularly in the 
                  bench press, squat, and deadlift. A modified version of the original Smolov program, Smolov Jr. is a condensed and 
                  slightly less demanding approach, making it more accessible for athletes looking to boost their one-repetition maximum 
                  (1RM) without committing to the full Smolov cycle.
                </p>
                <br />
                <p>
                  The program typically spans three weeks, with four intense workouts per week focused on the specific lift of choice. Each 
                  week, the intensity and volume increase, challenging lifters to push their limits and break through plateaus. Smolov Jr. is 
                  known for its effectiveness in building strength quickly but should be approached with caution due to its high demands on 
                  the central nervous system and the potential for overtraining. 
                </p>
                <br />
                <p>
                  Before embarking on the Smolov Jr. program, it is advisable to assess your current fitness level and ensure that you have a 
                  solid foundation in lifting technique. Additionally, proper warm-up, nutrition, and recovery are crucial to maximize the 
                  benefits of this challenging powerlifting regimen.  
                </p>      
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h3 className="mt-5">One Rep Max (lbs)</h3>
            <input className="input-text" type="number" value={maxLift} onChange={maxChange}/>
            <br />
            <h3 className="mt-4">Increment (lbs)</h3>
            <input className="input-text" type="number" value={increment} onChange={incrementChange}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-8 col-xs-12">
            <table class="table mt-5">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Sets</th>
                  <th scope="col">Reps</th>
                  <th scope="col">Weight (lbs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monday</th>
                  <td>6</td>
                  <td>6</td>
                  <td>{calculateWeight(0.7)}</td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>7</td>
                  <td>5</td>
                  <td>{calculateWeight(0.75)}</td>
                </tr>
                <tr>
                  <th scope="row">Friday</th>
                  <td>8</td>
                  <td>4</td>
                  <td>{calculateWeight(0.8)}</td>
                </tr>
                <tr>
                  <th scope="row">Saturday</th>
                  <td>10</td>
                  <td>3</td>
                  <td>{calculateWeight(0.85)}</td>
                </tr>
              </tbody>
            </table>

            <table class="table mt-5">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Sets</th>
                  <th scope="col">Reps</th>
                  <th scope="col">Weight (lbs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monday</th>
                  <td>6</td>
                  <td>6</td>
                  <td>{calculateWeight(0.7) + parseInt(increment * 1)}</td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>7</td>
                  <td>5</td>
                  <td>{calculateWeight(0.75) + parseInt(increment * 1)}</td>
                </tr>
                <tr>
                  <th scope="row">Friday</th>
                  <td>8</td>
                  <td>4</td>
                  <td>{calculateWeight(0.8) + parseInt(increment * 1)}</td>
                </tr>
                <tr>
                  <th scope="row">Saturday</th>
                  <td>10</td>
                  <td>3</td>
                  <td>{calculateWeight(0.85) + parseInt(increment * 1)}</td>
                </tr>
              </tbody>
            </table>

            <table class="table mt-5">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Sets</th>
                  <th scope="col">Reps</th>
                  <th scope="col">Weight (lbs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monday</th>
                  <td>6</td>
                  <td>6</td>
                  <td>{calculateWeight(0.7) + parseInt(increment * 2)}</td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>7</td>
                  <td>5</td>
                  <td>{calculateWeight(0.75) + parseInt(increment * 2)}</td>
                </tr>
                <tr>
                  <th scope="row">Friday</th>
                  <td>8</td>
                  <td>4</td>
                  <td>{calculateWeight(0.8) + parseInt(increment * 2)}</td>
                </tr>
                <tr>
                  <th scope="row">Saturday</th>
                  <td>10</td>
                  <td>3</td>
                  <td>{calculateWeight(0.85) + parseInt(increment * 2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">
                  How is your program calculated?
                </h3>
                <br />
                <p>
                  The Smolov Jr. Calculator program efficiently computes training weights by systematically incorporating a percentage-based
                  approach and incremental adjustments across four weeks. Starting with 70% of the one-repetition maximum (1RM) on the first 
                  day, the program progressively increases the percentage to 75% on the second day, 80% on the third day, and peaks at 85% 
                  on the final day. These percentages are applied to the user's specified 1RM, generating respective base weights. For example,
                  if the user's 1RM is 300 pounds, the calculated training weights for the four weeks would be 210 pounds, 225 pounds, 240 pounds, 
                  and 255 pounds, respectively. This meticulous approach reflects the program's commitment to precision and tailored progression 
                  within the context of the Smolov Jr. powerlifting routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};