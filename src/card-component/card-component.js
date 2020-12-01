import './card-component.css'


function Card(props) {
  return (
    <div className = 'card'>
      <div>
        <img src = 'png/back.png' className = 'img' id = {props.id}/>
      </div>
    </div>
  );
}


export default Card
