import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-form">
          <h2 className="col-span-3">What is Your Roseville Home Worth Now?</h2>
          <p className="col-span-3">
            Recent home sales have affected your home’s value! Get your home’s
            new value estimate instantly for free!
          </p>
          <input
            type="text"
            name="adress"
            id="adress"
            placeholder="Enter your home address"
            className="col-span-2"
          />
          <button type="submit" className="col-span-1">
            Get value estimate
            <span class="arrow"></span>
          </button>
        </div>
      </header>
      <div className="container">
        <h3>Discover the value of your property</h3>
        <div className="values">
          <div className="value">
            <h4>Track your home’s value</h4>
            <p>
              Instantly learn your home’s value and how much you could sell for
              in today’s market.
            </p>
          </div>
          <div className="value">
            <h4>See local market trends</h4>
            <p>
              Stay up to date on market changes and find out how much homes like
              yours have sold in the past year.
            </p>
          </div>
          <div className="value">
            <h4>Get a free monthly home report</h4>
            <p>
              Receive a monthly email with updates about your home value and how
              it’s changing.
            </p>
          </div>
        </div>
        <div className="book"></div>
      </div>
    </div>
  );
}

export default App;
