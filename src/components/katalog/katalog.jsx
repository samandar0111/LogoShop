import React, { useEffect ,useRef} from 'react'
import katalog from "./katalog.module.scss"
const Katalogcard = () => {
 const card = useRef(null)
  const func = (e)=>{
console.log(e.target.id);
  }
 
  return (
    <div className='container'>

    <div className={katalog.card}>
      <div  onMouseOver={func}  className={katalog.bar}>
        <div id='1'>
        element1
        </div>
        <div id='2'>
          element2
        </div>
        <div id='3'>
          element3
        </div>
        <div id='4'>
          element4
        </div>
        <div id='5'>
          element5
        </div>
        <div id='6'>
          element6
        </div>

      </div>
    </div>
    </div>
  )
}

export default Katalogcard