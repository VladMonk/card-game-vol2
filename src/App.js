import './App.css';
import './welcome-component/welcome-component.css'
import Welcome from './welcome-component/welcome-component'
import {useRoutes, A} from 'hookrouter'
import Routes from './routes'
import {Route, BrowserRouter, Switch} from 'react-router-dom'


function App() {
  const routeResult = useRoutes(Routes)
  console.log(routeResult);
  // return (
  //   <BrowserRouter>
  //     <div className = 'background' id = 'bg'>
  //       <Switch>
  //         <Route path = '/playroom' component = {Play}/>
  //         <Route exact path = '/' component = {Welcome}/>
  //       </Switch>
  //
  //     </div>
  //   </BrowserRouter>
  // );
  return (
    // routeResult
    <div>
      <Welcome />
    </div>
  );
}


export default App;
