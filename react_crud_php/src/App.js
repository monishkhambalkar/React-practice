import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components
import Home from './components/Home';
// import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={<Home/>} />
        {/* <Route path="/about" component={About} /> */}
      </div>
    </Router>
  );
}

export default App;