import './App.css';
import './welcome-component/welcome-component.css'
import React from 'react'
import Welcome from './welcome-component/welcome-component'
import Play from './playroom-component/playroom-component'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// const Play = React.lazy(() => import('./playroom-component/playroom-component'))



function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exac path = '/' component = {Welcome}/>
        <Route path = '/playroom' component = {Play}/>

      </Switch>
    </BrowserRouter>
  );
}



export default App;
