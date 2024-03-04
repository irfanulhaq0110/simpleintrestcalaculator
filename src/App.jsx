import TextField from '@mui/material/TextField';
import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {

const [amount,setAmount]=useState(0)
const [year,setYear]=useState(0)
const [rate,setRate]=useState(0)
const [interest,setInterest]=useState(0)

const calculate=(e)=>{
  const output=(amount*year*rate/100)
  console.log(output);
  setInterest(output)
}
const reset=(e)=>{
  setAmount(0)
  setYear(0)
  setRate(0)
  setInterest(0)
}

  return (
    <div className="App">

<div className="container">
<div className="header">
<h1>SIMPLE INTREST CALCULATOR</h1>
<p>Calculate your simple intreset with us</p>
</div>
<div className="total">
  <h2>&#8377;{interest}</h2>
  <p>your Total Intrest</p>
</div>
<div className="form">
<TextField id="outlined-basic" label="Amount" variant="outlined" value={amount||''} onChange={(e)=>setAmount(e.target.value)} />&nbsp;&nbsp;
<br></br>
<br></br>
<TextField id="filled-basic" label="Year" variant="outlined" value={year||''}  onChange={(e)=>setYear(e.target.value)} />&nbsp;&nbsp;
<br></br>
<br></br>
<TextField id="standard-basic" label="Rate of intrest" variant="outlined" value={rate||''} onChange={(e)=>setRate(e.target.value)} />&nbsp;&nbsp;
<br></br>
</div>
<br></br>
<div className='button'>

<Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button> &nbsp;&nbsp;
<Button variant="contained" onClick={e=>reset(e)}>Reset</Button>
</div>
</div>




   
    </div>
  );
}

export default App;
