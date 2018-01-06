import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Membership from './Membership';
import Events from './Events';
import FAQ from './FAQ';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  
                  <li><Link to={'/Contact'}>Contact</Link></li>
                  <li><Link to={'/Membership'}>Membership</Link></li>
                  <li><Link to={'/Events'}>Events</Link></li>
                  <li><Link to={'/FAQ'}>FAQ</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  
                  <Route exact path='/Contact' component={Contact} />
                  <Route exact path='/Membership' component={Membership} />
                  <Route exact path='/Events' component={Events} />
                  <Route exact path='/FAQ' component={FAQ} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;