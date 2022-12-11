import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-form">
          <h2 className="">What is Your Roseville Home Worth Now?</h2>
          <p className="">
            Recent home sales have affected your home’s value! Get your home’s
            new value estimate instantly for free!
          </p>
          <input
            type="text"
            name="adress"
            id="adress"
            placeholder="Enter your home address"
          />
          <button type="submit">
            Get value estimate
            <span class="arrow-white"></span>
          </button>
        </div>
      </header>
      <div className="container">
        <div className="values">
          <h3>Discover the value of your property</h3>
          <div className="value">
            <span className="icon-track"></span>
            <h4>Track your home’s value</h4>
            <p>
              Instantly learn your home’s value and how much you could sell for
              in today’s market.
            </p>
          </div>
          <div className="value">
            <span className="icon-trends"></span>
            <h4>See local market trends</h4>
            <p>
              Stay up to date on market changes and find out how much homes like
              yours have sold in the past year.
            </p>
          </div>
          <div className="value">
            <span className="icon-report"></span>
            <h4>Get a free monthly home report</h4>
            <p>
              Receive a monthly email with updates about your home value and how
              it’s changing.
            </p>
          </div>
        </div>
        <div className="book">
          <div className="book-valuation">
            <h3>Book an in-person valuation</h3>
            <p>Get the most accurate valuation based on:</p>
            <ul>
              <li>
                <span className="check" />
                Your unique property features
              </li>
              <li>
                <span className="check" />
                Our knowledge of the area
              </li>
              <li>
                <span className="check" />
                The latest changes in the local market
              </li>
            </ul>
            <button>
              <span>Book now!</span>
              <span class="arrow-green"></span>
            </button>
          </div>

          <span className="illustration"></span>
        </div>
        <div className="guides">
          <h3>Pump up the value with our guides</h3>
          <p>
            If you’re looking to sell quickly or boost the value of your home,
            our expert free guides will help you do it like a pro.
          </p>

          <div className="guide">
            <div className="guide-image-1"></div>
            <h4>The ultimate guide to selling your Home</h4>
            <button>Download</button>
          </div>
          <div className="guide">
            <div className="guide-image-2"></div>
            <h4>The ultimate guide to selling your Home</h4>
            <button>Download</button>
          </div>
          <div className="guide">
            <div className="guide-image-3"></div>
            <h4>The ultimate guide to selling your Home</h4>
            <button>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
