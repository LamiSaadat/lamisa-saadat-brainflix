import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  //set initial state of video upload
  state = {
    isUploaded: false,
  };

  //function to toggle state on upload
  handleUpload() {
    this.setState((prevState) => ({
      isUploaded: !prevState.isUploaded,
    }));
  }

  handleUpload = this.handleUpload.bind(this);

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => {
              return (
                <Home {...routerProps} isUploaded={this.state.isUploaded} />
              );
            }}
          />
          {/*2. pass in routerprops*/}
          <Route
            path="/upload"
            render={(routerProps) => {
              return (
                <Upload {...routerProps} handleUpload={this.handleUpload} />
              );
            }}
          />
          <Route path="/video/:id" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
