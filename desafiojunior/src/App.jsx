import { useRef, useState } from 'react'

import './App.css'

function App() {

  const [arrayDdivs, setArrayDdivs] = useState ([])
  const [arraysretirados, setArrRetirados] = useState ([])
  const [Count, setCount] = useState (Number)

const Click = (ev) => {

console.log (ev.pageX)
console.log (ev.pageY)

  let styles = {
    position: "absolute",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
  
    border: "1px solid black",
    top: ev.pageY + "px",
    left: ev.pageX + "px",
  }
setArrayDdivs ([...arrayDdivs, styles])


arrayDdivs.length >= Count ? setCount (arrayDdivs.length + 1) : setCount (Count)
}

const diminuir = () => {
  

if (arrayDdivs.length > 0) {

setArrRetirados ([...arraysretirados, arrayDdivs[arrayDdivs.length -1]])
setArrayDdivs (e => e.slice (0, arrayDdivs.length - 1))
}
}
const aumentar  = () => {


  if (arraysretirados[arraysretirados.length -1]) {
    let styles = {
      position: "absolute",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
    
      border: "1px solid black",
      top: arraysretirados[arraysretirados.length -1].top,
      left: arraysretirados[arraysretirados.length -1].left ,
    }
    
  
    setArrayDdivs ([...arrayDdivs, styles])
    setArrRetirados (e => e.slice (0, arraysretirados.length - 1))
  }


} 

  const thumbsUpEmoji = "👍";

  return (
   
    <div className="container">

    <h1> Count {thumbsUpEmoji} </h1>
    <div className="btns">
    <button onClick={aumentar}>aumentar</button>
    <button onClick={diminuir}>diminuir</button>
    </div>
  
    <span>Count: {Count} </span>
    <div className="quadrado" onClick={Click}>

{ arrayDdivs.map ((elementos, id) => (
 <div   style={elementos}  key={id}></div>
 ))}



    </div>

    
    </div>
  )
}

export default App
