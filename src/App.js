import React from "react";
import './App.css';

function App() {
  const [days, setDays] = React.useState(0);
  const [goal, setGoal] = React.useState("");
  const [names, setNames] = React.useState([]);
  const [formStage, setFormStage] = React.useState(0);

  let content;

  if(formStage === 0) {
    content = (
      <>
        <h1>Empower Your Vision Through Affirmation</h1>
        <h4>Enter your goal and have it repeated back to you.</h4>
        <input onChange={(e) => setGoal(e.target.value)} type="text" />
        <button onClick={() => setFormStage(formStage + 1)}>Next</button>
        <h3>{goal}</h3>
        <p>{goal.length < 45 ? <div>45 characters max</div> : <div>Input too long</div>}</p>
      </>
    )
  } else if(formStage === 1) {
    content = (
      <>
        <h1>Empower Your Vision Through Affirmation</h1>
        <h4>How many days per month will you practice this goal?</h4>
        <h2>{days}</h2>
        <button onClick={() => days < 31 && setDays(days + 1)}>+</button>
        <button onClick={() => setFormStage(formStage - 1)}>Prev</button>
        <button onClick={() => setFormStage(formStage + 1)}>Next</button>
      </>
    )
  }  else if(formStage === 2) {
    content = (
      <>
        <h1>Empower Your Vision Through Affirmation</h1>
        <h4>What are your names?</h4>
        <input onChange={(e) => setNames([e.target.value])} type="text" />
        <h2>{names} will {goal} {days} days/month</h2>
        <button onClick={() => setFormStage(formStage - 1)}>Prev</button>
      </>
    )
  }
  
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;