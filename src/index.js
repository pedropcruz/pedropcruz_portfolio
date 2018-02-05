import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./containers/App";
import Resume from "./containers/Resume/Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/resume" component={Resume} />
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
