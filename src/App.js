import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import About from "./components/pages/About";

class App extends Component {
  state = {
    courseMeetings: [],
    meetingResults: []
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                {/* add search bar under header */}


                {/* add meeting results main component */}

              </React.Fragment>
            )}
          />

          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
