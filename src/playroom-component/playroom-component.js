import './playroom-component.css'
import Card from '../card-component/card-component'

let pathArr = [
  'armor',
  'black',
  'blue',
  'brown',
  'dgreen',
  'fox',
  'green',
  'idk',
  'orange',
  'pink',
  'purple',
  'red',
  'suit',
  'white',
  'yellow',
  'armor',
  'black',
  'blue',
  'brown',
  'dgreen',
  'fox',
  'green',
  'idk',
  'orange',
  'pink',
  'purple',
  'red',
  'suit',
  'white',
  'yellow'
]
let prevElem = null
let clickCount = null

function shuffle(arr) {
  let shuffleArr = arr
  for (let i = shuffleArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffleArr[i], shuffleArr[j]] = [shuffleArr[j], shuffleArr[i]];
  }
  return shuffleArr;
}

function setBack(...elems) {
  let value = 'png/back.png'
  let attr = 'src'

  elems.forEach((elem) => {
    elem.setAttribute(attr, value)
  });
}

function removeElem(...elems) {
  elems.forEach((elem) => {
    elem.remove()
  });

}

function Play(props) {

  let cardArr = shuffle( (() => {
    let arr = []
    for (let i = 0; i < 30; i++) {
      arr.push(<Card key = {i} id = {i}/>)
    }
    return arr;
  })() )

  function handleClick(e) {

    if (clickCount < 2) {
      let elem = e.target

      if (elem !== prevElem) {
        if (elem.className === 'img') {
          let id = elem.id
          let path = 'png/' + pathArr[id] + '.png'
          elem.setAttribute('src', path)
          clickCount += 1

          if (prevElem) {      
            if (prevElem.getAttribute('src') === path) {
              setTimeout(() => {
                removeElem(elem, prevElem)
                prevElem = clickCount = null
              }, 500)
            } else {
              setTimeout(() => {
                setBack(elem, prevElem)
                prevElem = clickCount = null
              }, 2000)
            }
          } else {
            prevElem = elem
          }
        }
      }
    }
  }

  return (
    <div className = 'playroom' onClick = {handleClick}>
      {cardArr}
    </div>
  );
}


export default Play
