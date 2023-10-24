import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import './App.css';

function App() {
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("ETH");
    const [output, setOutput] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const cryptocurrencyData = [
      {"currency":"BLUR","date":"2023-08-29T07:10:40.000Z","price":0.20811525423728813},
{"currency":"bNEO","date":"2023-08-29T07:10:50.000Z","price":7.1282679},
{"currency":"BUSD","date":"2023-08-29T07:10:40.000Z","price":0.999183113},
{"currency":"BUSD","date":"2023-08-29T07:10:40.000Z","price":0.9998782611186441},
{"currency":"USD","date":"2023-08-29T07:10:30.000Z","price":1},
{"currency":"ETH","date":"2023-08-29T07:10:52.000Z","price":1645.9337373737374},
{"currency":"GMX","date":"2023-08-29T07:10:40.000Z","price":36.345114372881355},
{"currency":"STEVMOS","date":"2023-08-29T07:10:40.000Z","price":0.07276706779661017},
{"currency":"LUNA","date":"2023-08-29T07:10:40.000Z","price":0.40955638983050846},
{"currency":"RATOM","date":"2023-08-29T07:10:40.000Z","price":10.250918915254237},
{"currency":"STRD","date":"2023-08-29T07:10:40.000Z","price":0.7386553389830508},
{"currency":"EVMOS","date":"2023-08-29T07:10:40.000Z","price":0.06246181355932203},
{"currency":"IBCX","date":"2023-08-29T07:10:40.000Z","price":41.26811355932203},
{"currency":"IRIS","date":"2023-08-29T07:10:40.000Z","price":0.0177095593220339},
{"currency":"ampLUNA","date":"2023-08-29T07:10:40.000Z","price":0.49548589830508477},
{"currency":"KUJI","date":"2023-08-29T07:10:45.000Z","price":0.675},
{"currency":"STOSMO","date":"2023-08-29T07:10:45.000Z","price":0.431318},
{"currency":"USDC","date":"2023-08-29T07:10:40.000Z","price":0.989832},
{"currency":"axlUSDC","date":"2023-08-29T07:10:40.000Z","price":0.989832},
{"currency":"ATOM","date":"2023-08-29T07:10:50.000Z","price":7.186657333333334},
{"currency":"STATOM","date":"2023-08-29T07:10:45.000Z","price":8.512162050847458},
{"currency":"OSMO","date":"2023-08-29T07:10:50.000Z","price":0.3772974333333333},
{"currency":"rSWTH","date":"2023-08-29T07:10:40.000Z","price":0.00408771},
{"currency":"STLUNA","date":"2023-08-29T07:10:40.000Z","price":0.44232210169491526},
{"currency":"LSI","date":"2023-08-29T07:10:50.000Z","price":67.69661525423729},
{"currency":"OKB","date":"2023-08-29T07:10:40.000Z","price":42.97562059322034},
{"currency":"OKT","date":"2023-08-29T07:10:40.000Z","price":13.561577966101694},
{"currency":"SWTH","date":"2023-08-29T07:10:45.000Z","price":0.004039850455012084},
{"currency":"USC","date":"2023-08-29T07:10:40.000Z","price":0.994},
{"currency":"USDC","date":"2023-08-29T07:10:30.000Z","price":1},
{"currency":"USDC","date":"2023-08-29T07:10:30.000Z","price":1},
{"currency":"USDC","date":"2023-08-29T07:10:40.000Z","price":0.9998782611186441},
{"currency":"WBTC","date":"2023-08-29T07:10:52.000Z","price":26002.82202020202},
{"currency":"wstETH","date":"2023-08-29T07:10:40.000Z","price":1872.2579742372882},
{"currency":"YieldUSD","date":"2023-08-29T07:10:40.000Z","price":1.0290847966101695},
{"currency":"ZIL","date":"2023-08-29T07:10:50.000Z","price":0.01651813559322034}
    ];

    const options = cryptocurrencyData.map(crypto => {
        const duplicates = cryptocurrencyData.filter(item => item.currency === crypto.currency);
        if (duplicates.length > 1) {
            const date = new Date(crypto.date).toLocaleString();
            return `${crypto.currency} (${date})`;
        }
        return crypto.currency;
    });

    function getCryptoData(value) {
        const [currency, dateString] = value.split(" (");
        if (dateString) {
            const date = new Date(dateString.slice(0, -1)).toISOString();
            return cryptocurrencyData.find(crypto => crypto.currency === currency && crypto.date === date);
        }
        return cryptocurrencyData.find(crypto => crypto.currency === currency);
    }

    useEffect(() => {
        convert();
    }, [from, to, input]);

    function getConversionRate(fromCurrency, toCurrency) {
        const fromCryptoData = getCryptoData(fromCurrency);
        const toCryptoData = getCryptoData(toCurrency);

        if (!fromCryptoData || !toCryptoData) {
            console.error("Invalid currency selection");
            return 0;
        }

        const fromPrice = fromCryptoData.price;
        const toPrice = toCryptoData.price;
        return toPrice / fromPrice;
    }

    function convert() {
        const rate = getConversionRate(from, to);
        setOutput(input * rate);

        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    }

    function flip() {
        const temp = from;
        setFrom(to);
        setTo(temp);
    }

    return (
      <div className="App">
          <div className="heading">
              <h1>Cryptocurrency Swap</h1>
          </div>
          <div className="container">
              <div className="left">
                  <h3>Amount</h3>
                  <input 
                      type="text"
                      placeholder="Enter the amount"
                      onChange={(e) => setInput(e.target.value)} 
                  />
              </div>
              <div className="middle">
                  <h3>From</h3>
                  <Dropdown 
                      options={options}
                      onChange={(e) => { setFrom(e.value) }}
                      value={from} 
                      placeholder="From" 
                  />
              </div>
              <div className="switch">
                  <HiSwitchHorizontal 
                      size="30px"
                      onClick={() => { flip() }} 
                  />
              </div>
              <div className="right">
                  <h3>To</h3>
                  <Dropdown 
                      options={options}
                      onChange={(e) => { setTo(e.value) }}
                      value={to} 
                      placeholder="To" 
                  />
              </div>
          </div>
          <div className="action-section">
              <button onClick={convert}>Submit</button>
              {showSuccess && <div style={{ color: 'green', marginTop: '10px' }}>Swap successful!</div>}
          </div>
          <div className="conversion-heading">
              <h2>Converted Amount:</h2>
              <p>
                <span className="fromCurrency">{input}</span> 
                <span className="fromLabel">{from}</span> 
                {" = "} 
                <span className="toCurrency">{output.toFixed(2)}</span>
                <span className="toLabel">{to}</span>
              </p>
          </div>
      </div>
    );
}

export default App;


