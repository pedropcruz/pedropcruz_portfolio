import React, {Component} from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "./styles/global.css";
import App from "./containers/App";
import Resume from "./containers/Resume/Resume";
import {BrowserRouter as Router, Route} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

class Root extends Component {

    constructor() {
        super();

        ReactGA.initialize('UA-116283572-1');

        ReactGA.pageview(window.location.pathname + window.location.search)
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/resume" component={Resume}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById("root"));
registerServiceWorker();
