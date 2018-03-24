import React, {Component} from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "./styles/global.css";
import App from "./containers/App";
import Resume from "./containers/Resume/Resume";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import imageForFacebookMeta from './resources/facebook_share_image_dialog.jpg';
import registerServiceWorker from "./registerServiceWorker";

class Root extends Component {

    constructor() {
        super();

        ReactGA.initialize('UA-116283572-1');

        ReactGA.pageview(window.location.pathname + window.location.search)
    }

    render() {

        const meta = {
            description: 'My Own Portfolio, check it out! Click Here dude! Feedback are welcome!',
            canonical: 'pedropcruz.pt',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'front-end, frontend, designer, front-end developer, developer, coder, coding, programming,'
                },
                property: {
                    'og:image': imageForFacebookMeta,
                    'og:title': 'pedropcruz personal website',
                    'og:url': 'http://pedropcruz.pt/resume',
                    'og:site_name': 'Pedropcruz Website',
                    'og:type': 'portfolio',
                }
            }
        };

        return (
            <DocumentMeta {...meta} extend>
                <Router>
                    <div>
                        <Route exact path="/" component={App}/>
                        <Route path="/resume" component={Resume}/>
                    </div>
                </Router>
            </DocumentMeta>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById("root"));
registerServiceWorker();
