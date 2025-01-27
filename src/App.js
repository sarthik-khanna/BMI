import './index.css'
import React,{useState} from "react";
import "./App.css";
function App() {
  const [weight,setWeight] = useState(null);
  const [height,setHeight]=useState(null);
  const [bmi,setBmi]=useState("");
  const [message,setMessage]=useState("");
//logic 
let calcBmi =(event)=>{
  event.preventDefault();
  if(weight===0 || height===0){
alert('please enter a valid weight and height')
  }
  else{
    let bmi=(weight/(height*height)*703)
    setBmi(bmi.toFixed(1))
    if(bmi<25){
      setMessage('you are underweight')
    }
    else if(bmi>=25 && bmi<30){
      setMessage('you are healty weight')
    }
    else{
      setMessage('you are overWeight')
    }
  }

}
let reload = ()=>{
  window.location.reload()
}



   return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) =>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>height (in)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e) =>setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              submit
            </button>
            <button className="btn  btn-outline" onClick={reload} type="submit">
          reload
            </button>
          </div>
          <div className="center">
            <h3>Your Bmi is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
