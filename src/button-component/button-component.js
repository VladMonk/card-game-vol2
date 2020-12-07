import './button-component.css'
import {NavLink} from 'react-router-dom'
import A from 'hookrouter'


function Button() {
  return (
    <div>
      <button className = 'start-button'><a href = '/playroom'>GO</a></button>
    </div>
  );
}


export default Button
