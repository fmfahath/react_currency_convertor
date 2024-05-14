import { useState } from 'react';
import './App.css'
import logo from './assets/logo.png';
function App() {

  const [inputAmount, setInputAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("LKR");
  const [baseAmount, setBaseAmount] = useState(null);
  const [conertedAmount, setCOnvertedAmount] = useState(null);

  const handleInput = (e) => {
    const inputValue = parseFloat(e.target.value);
    setInputAmount(isNaN(inputValue) ? 0 : inputValue);

  }

  // console.log("input:", inputAmount);
  // console.log("from:", fromCurrency);
  // console.log("to:", toCurrency);

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Currency Convertor</h2>
        </div>
        <div className="amount">
          <label htmlFor="amount">Amount :</label>
          <input type="number" id='amount' name='amount' onChange={handleInput} />
        </div>
        <div className="from-currency">
          <label htmlFor="from-currency">From Currency:</label>
          <select name="from-currency" id="from-currency" onChange={(e) => setFromCurrency(e.target.value)} value={fromCurrency}>
            <option value="USD">USD - United State Dollar</option>
            <option value="LKR">LKR - Sri LankanRupee</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="EUR">EUR - Euro</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </div>
        <div className="to-currency">
          <label htmlFor="to-currency">To Currency:</label>
          <select name="to-currency" id="to-currency" onChange={(e) => setToCurrency(e.target.value)} value={toCurrency}>
            <option value="USD">USD - United State Dollar</option>
            <option value="LKR">LKR - Sri LankanRupee</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="EUR">EUR - Euro</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </div>
        <div className="result">
          <p>1 {toCurrency} is <span>{baseAmount}</span> {fromCurrency}</p>
          <p>Amount is: <span>{conertedAmount}</span> LKR</p>
        </div>
      </div>
    </>
  )
}

export default App
