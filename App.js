import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class App extends Component {
  state = {
    dontclick : null,
    fucking: null
  }
  render() {

    let titleHandler = () => {
      this.setState({
        fucking: "FUCKING"
      })
    }

    let dontclickHandler = () => {
      this.setState({
        dontclick: "Fuck You"
      })
    }

    return (
    <Router>
      <div className="App">
      <div className="App">
        <header>
          <nav>
            <ul><a href="/link">Link</a></ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>Home</h1>} />
            <body className="App">
              <h1 className="App">My {this.state.fucking} Website.</h1>
              <p>{this.state.dontclick}</p>
              <div className="MyRow">
              <div class="dropdown" className="MyColumn">
                      <button class="btn btn-secondary dropdown-toggle" 
                              type="button" 
                              id="dropdownMenuButton" 
                              data-toggle="dropdown" 
                              aria-haspopup="true" 
                              aria-expanded="false">
                        Malarkey
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#" onClick= {titleHandler} >Button</a>
                        <a class="dropdown-item" href="#">Another Button</a>
                        <a class="dropdown-item" href="#">The Best Button</a>
                        <a class="dropdown-item" href="#" onClick= {dontclickHandler} >Don't Click this Button</a>
                      </div>
                    </div>
                    <div></div>
                    <div class="dropdown" className="MyColumn">
                      <button class="btn btn-secondary dropdown-toggle" 
                              type="button" 
                              id="dropdownMenuButton" 
                              data-toggle="dropdown" 
                              aria-haspopup="true" 
                              aria-expanded="false">
                        Bull Honkey        
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Button</a>
                        <a class="dropdown-item" href="#">Another Button</a>
                        <a class="dropdown-item" href="#">The Best Button</a>
                        <a class="dropdown-item" href="#">Don't Click this Button</a>
                      </div>
                    </div>
                    <div class="dropdown" className="MyColumn">
                      <button class="btn btn-secondary dropdown-toggle" 
                              type="button" 
                              id="dropdownMenuButton" 
                              data-toggle="dropdown" 
                              aria-haspopup="true" 
                              aria-expanded="false">
                        Dropdown Menu
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Button</a>
                        <a class="dropdown-item" href="#">Another Button</a>
                        <a class="dropdown-item" href="#">The Best Button</a>
                        <a class="dropdown-item" href="#">Don't Click this Button</a>
                      </div>
                    </div>
                  </div>
            </body>
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
