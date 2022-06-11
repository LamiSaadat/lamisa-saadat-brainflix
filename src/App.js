import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" component={Upload} />
        <Route path="/video/:id" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
