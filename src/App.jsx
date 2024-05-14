import { useState } from 'react';
import './App.css'
import logo from './assets/logo.png';
import axios from 'axios';
import { useEffect } from 'react';


function App() {

  const [inputAmount, setInputAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("LKR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [conertedAmount, setConvertedAmount] = useState(null);


  const getExchangeRate = async () => {

    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
      const res = await axios.get(apiUrl);
      // console.log(res);

      setExchangeRate(res.data.rates[toCurrency]);

    } catch (error) {
      console.log("API Fetch error: ", error.message);
    }
  }

  useEffect(() => {
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((inputAmount * exchangeRate).toFixed(2));
    }
  }, [inputAmount, exchangeRate]);

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
          <p>1 {fromCurrency} is <span>{exchangeRate}</span> {toCurrency}</p>
          <p>Amount is: <span>{conertedAmount}</span> {toCurrency}</p>
        </div>
      </div>
    </>
  )
}

export default App
