import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [advice, setAdvice] = useState("");
  // axios.defaults.headers = {
  //   "Cache-Control": "no-cache",
  //   Pragma: "no-cache",
  //   Expires: "0",
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch("https://api.adviceslip.com/advice");
  //     const json = await data.json();
  //     const adviceString = json.slip.advice;
  //     setAdvice(adviceString);
  //     console.log(adviceString);
  //   };

  //   fetchData().catch(console.error);
  // }, []);

  const getAdvices = async () => {
    try {
      const advices = await axios.get("https://api.adviceslip.com/advice");

      setAdvice(advices.data.slip.advice);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAdvices();
  }, []);
  console.log(advice);

  // function handleClick() {
  //   // const fetchData = async () => {
  //   //   const data = await fetch("https://api.adviceslip.com/advice");
  //   //   const json = await data.json();
  //   //   const adviceString = json.slip.advice;
  //   //   setAdvice(adviceString);
  //   //   //console.log(adviceString);
  //   //   fetchData().catch(console.error);
  //   };
  //onClick={handleClick}

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button onClick={() => getAdvices()} className="button">
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
