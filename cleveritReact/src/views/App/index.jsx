import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import _ from "lodash";

// * Components can be CLASS Components or FUNCTIONAL Components
// * The main difference is that CLASS can use the component state (this.state)

// * Class
class App extends Component {
  // * The class constructor where it's initial attributes are set
  // * Also where it's methods are binded to the main context - this
  constructor(props) {
    // * super() calls the parent class' constructor (in this case React.Component)
    super(props);

    this.myvar = "Asad";

    // * Setting up the initial state value(s)
    this.state = {
      mutableVar:
        "the var's initial state, that is, when the component first mounts",
    };

    // * Bind the class' methods to the main context so they can hace access to it (this keyword)
    this.someClassMethod = this.someClassMethod.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (!_.isEqual(nextProps, this.props)) {
      process.env.NODE_ENV === "development" &&
        console.warn("DIDN'T RE-RENDER");
      return false;
    }

    return true;
  };

  someClassMethod() {
    // * If this method wasn't binded the "this" keyword would be undefined
    // * So, now that's it's binded, "this" refers to the class instance and it has access to everything
    const { mutableVar } = this.state;

    // * Update the mutableVar attr of the component state
    this.setState({ mutableVar: "newValue" });
  }

  someClassFunction = () => {
    // * This doesn't need binding, it takes a little toll on performance but not that much
    const { mutableVar } = this.state;
    this.setState({ mutableVar: "newValue" });
  };

  handleClick(event) {
    // * The event var is passed to the callback of the eventHhandler (this case the 'click' event)
    console.log("event: ", event);
    console.log("event.target: ", event.target);

    this.setState({ mutableVar: "CLICKED!" }, () => {});
  }

  handleSelectChange = event => {
    console.log("event: ", event);
    console.log("event.target: ", event.target);
    console.log("event.target.value: ", event.target.value);
  };

  render() {
    const { mutableVar } = this.state;
    console.log("mutableVar: ", mutableVar);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div style={{ marginTop: "50px", padding: "2em" }}>
          <button type="button" onClick={this.handleClick}>
            BUTTON!
          </button>
          <hr />
          <select name="" id="mySelect" onChange={this.handleSelectChange}>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
          </select>
        </div>
      </div>
    );
  }
}

// * or Functional component: no this.state or anything like that
const AppFunctional = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
