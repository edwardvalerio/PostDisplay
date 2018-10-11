import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';



class App extends Component {


    render() {

        return(
            <BrowserRouter>
            <div className="application-root">
                 <Navbar />
                 <Routing />
               </div>
           </BrowserRouter>);

    }

}

export default App;
