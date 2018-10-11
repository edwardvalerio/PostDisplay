import React, { Component } from 'react';
import ReactDOM from "react-dom";
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/reducers/rootReducer';

const store = createStore(rootReducer);


class Main extends Component {


    render() {


        return(<Provider store={store}><App /></Provider>);

    }

}



ReactDOM.render(   <Main />  , document.getElementById('app-root'));
