import './welcome-component.css'
import InputName from '../input-name-component/input-name-component'
import Switch from '../switch-component/switch-component'
import Button from '../button-component/button-component'


let diff = null

function Welcome(props) {
  localStorage.removeItem('name')
  localStorage.removeItem('diff')

  function handleChange(e) {
    let elem = e.target

    if (elem.className === 'input') {
      localStorage.setItem('name', elem.value);
      if (elem.value === '') {
        localStorage.removeItem('name')
      }
    } else if (elem.type === 'radio') {
      diff = Number(elem.value)
      localStorage.setItem('diff', diff);
    }
  }

  function handleClick(e) {
    let elem = e.target
    let name = localStorage.getItem('name')

    if (elem.className === 'start-button') {
      if (diff) {
        if (name) {
          console.log('navigate');

          // navigate('/playroom')
        } else {
          alert('Enter ur name')
        }
      } else {
        alert('choose difficult')
      }
    }
  }

  return (
    <div onChange = {handleChange} onClick = {handleClick}>
      <div className = 'setting-menu'>
        <InputName />
        <Switch />
        <Button />
      </div>
      <div className = 'desc'>
        <h2>Memory card game</h2>
        <div>
          The objective is to collect the most pairs of cards.
          Shuffle the cards and lay them on the table, face down, in rows.
          The youngest player goes first. ...
          On each turn, a player turns over any two cards (one at a time) and keeps them if the cards match (for instance, two kings)
        </div>
      </div>
    </div>
  );
}


export default Welcome
