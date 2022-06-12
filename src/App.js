import "./App.scss";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";

document.title = "Brainflix";

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
                <HomePage {...routerProps} isUploaded={this.state.isUploaded} />
              );
            }}
          />
          {/*2. pass in routerprops*/}
          <Route
            path="/upload"
            render={(routerProps) => {
              return (
                <UploadPage {...routerProps} handleUpload={this.handleUpload} />
              );
            }}
          />
          <Route path="/video/:id" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
