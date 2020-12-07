import Play from './playroom-component/playroom-component'
import Welcome from './welcome-component/welcome-component'


const Routes = {
  '/': () => <Welcome/>,
  '/playroom': () => <Play/>,
}

export default Routes
