import './input-name-component.css'


function InputName(props) {
  return (
    <div className = 'background-input-name input'>
      <h3>Type ur name</h3>
      <form className = 'input-form input'>
        <input className = 'input' type = 'text'></input>
      </form>
    </div>
  );
}


export default InputName
