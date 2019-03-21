import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import axios from 'axios';
import AvengerPage from './Components/AvengerPage';


//This component handles all the primary page routes when typed into the url.  When a specific route is called the AvengerPage is rendered.
class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <AvengerPage searchTopic='Marvel'/>}/>
          <Route exact path='/ironman' render={() => <AvengerPage searchTopic='Iron Man'/>}/>
          <Route exact path='/hulk' render={() => <AvengerPage searchTopic='Incredible Hulk'/>}/>
          <Route exact path='/captainamerica' render={() => <AvengerPage searchTopic='Captain America'/>}/>
          <Route exact path='/thor' render={() => <AvengerPage searchTopic='Thor'/>}/>
          <Route exact path='/antman' render={() => <AvengerPage searchTopic='Ant Man'/>}/>
          <Route exact path='/blackpanther' render={() => <AvengerPage searchTopic='Black Panther'/>}/>
          <Route exact path='/captainmarvel' render={() => <AvengerPage searchTopic='Captain Marvel'/>}/>
          <Route exact path='/spiderman' render={() => <AvengerPage searchTopic='Spiderman'/>}/>
          <Route exact path='/doctorstrange' render={() => <AvengerPage searchTopic='Doctor Strange'/>}/>
          <Route exact path='/blackwidow' render={() => <AvengerPage searchTopic='Black Widow'/>}/>
          <Route exact path='/hawkeye' render={() => <AvengerPage searchTopic='Hawkeye'/>}/>
          <Route render={() => <AvengerPage searchTopic='404 Not Found'/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App