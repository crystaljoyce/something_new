import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const URL = 'https://api.github.com'

const App = () => { 

    return <> 

    <h1> THIS IS THE APP COMPONENT</h1>
    </> 

}; 

ReactDOM.render( 
    <Router> 
        <App/>
    </Router>, 
    document.getElementById('root')
);