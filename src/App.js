import React, {Component} from 'react';
import Header from "./containers/Header";
import About from './containers/About';

class App extends Component {
    render() {
        const roles = ["UX/UI Specialist", "Front-End Developer"];
        const aboutText = {
            text: 'I like to be involved not only in the UX/UI but also in the JS layers below. \n' +
            'I\'m a tinkerer, a jack of all trades, who spends the night dreaming on the \n' +
            'next big thing.'
        };

        return (
            <div>
                <Header/>
                <About name="Pedro Cruz" role={roles} text={aboutText.text}/>
            </div>
        );
    }
}

export default App;
