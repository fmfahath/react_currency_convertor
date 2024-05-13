import './App.css'
import logo from './assets/logo.png';
function App() {

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Currency Convertor</h2>
        </div>
        <div className="amount">
          <label htmlFor="amount">Amount :</label>
          <input type="number" id='amount' name='amount' />
        </div>
        <div className="from-currency">
          <label htmlFor="from-currency">From Currency:</label>
          <select name="from-currency" id="from-currency">
            <option value="USD">USD - United State Dollar</option>
            <option value="LKR">LKR - Sri LankanRupee</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="EUR">EUR - Euro</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </div>
        <div className="to-currency">
          <label htmlFor="to-currency">From Currency:</label>
          <select name="to-currency" id="to-currency">
            <option value="USD">USD - United State Dollar</option>
            <option value="LKR">LKR - Sri LankanRupee</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="EUR">EUR - Euro</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </div>
        <div className="result">
          <p>1 LKR is <span>295.98</span> US Dollar</p>
          <p>Amount is: <span>23687.98</span> LKR</p>
        </div>
      </div>
    </>
  )
}

export default App
