import { useState } from "react";
import '../Style/ApartCollapses.css'
import vector from '../../Vector.png'

function ApartCollapses( {description, equipments, index, index2}) {

   const [isOpen, setIsOpen] = useState(null);

   const toggle = (i) => {

    setIsOpen(i);
     
     if(isOpen === i){
      setIsOpen(null)
     }
   
   }
   
  return  (
  <div className="container">
   
    
      <div className="sing-collapse">
       <div className="title">
        <h2>Description</h2>
        <img src={vector} alt="icon"  onClick={() => toggle(index)}/>
       </div>
       <span  className={isOpen === index ? 'text-c-show' :'text-c'}>{description}</span>
   </div>

   <div className="sing-collapse">
       <div className="title">
        <h2>Équipements</h2>
        <img src={vector} alt="icon" onClick={() => toggle(index2)}/>
       </div>
       <ul  className={isOpen === index ? 'text-liste-show' :'text-liste'}>{equipments}</ul>
   </div>

  </div>
)

}

export default ApartCollapses