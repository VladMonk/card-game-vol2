import './switch-component.css'


function Switch(props) {
  return (
    <div className = 'switch'>
      <form>
        <input type = 'radio' id = 'easy' value = '20' name = 'difficult'></input>
        <label htmlFor = 'easy'>Easy</label>
        <input type = 'radio' id = 'normal' value = '24' name = 'difficult'></input>
        <label htmlFor = 'normal'>Medium</label>
        <input type = 'radio' id = 'hard' value = '30' name = 'difficult'></input>
        <label htmlFor = 'hard'>Hard</label>
      </form>
    </div>
  );
}


export default Switch
