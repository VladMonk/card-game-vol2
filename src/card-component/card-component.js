import './card-component.css'


function Card(props) {
  return (
    <div className = 'card'>
      <img src = 'png/back.png' className = 'img' id = {props.id}/>
    </div>
  );
}


export default Card
