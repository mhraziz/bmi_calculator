import React,  {useState} from "react";
import "./App.css";
const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let CalcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("Healthy Weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };
  let reload = () => {
    window.location.reload();
  };
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={CalcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
            type="text"
            placeholder="Enter Weight Value"
             value={weight}
              onChange={(e) => setWeight(e.target.value)} 
              />
          </div>

          <div>
            <label>Height (In)</label>
            <input 
            type="text"
            placeholder="Enter Height Value"
            value={height} 
            onChange={(event) => setHeight(event.target.value)} 
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default App;
