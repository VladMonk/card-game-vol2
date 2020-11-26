import './switch-component.css'


function Switch(props) {
  return (
    <div className = 'switch'>
      <form>
        <input type = 'radio' id = 'easy' value = 'easy' name = 'difficult'></input>
        <label htmlFor = 'easy'>Easy</label>
        <input type = 'radio' id = 'normal' value = 'normal' name = 'difficult'></input>
        <label htmlFor = 'normal'>Medium</label>
        <input type = 'radio' id = 'hard' value = 'hard' name = 'difficult'></input>
        <label htmlFor = 'hard'>Hard</label>
      </form>
    </div>
  );
}


export default Switch
