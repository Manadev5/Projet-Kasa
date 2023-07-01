import { useState } from "react";
import vector from '../../Assets/Vector.png'

function Collapses({title, text, index}) {

   const [isOpen, setIsOpen] = useState(null);

   const toggle = (i) => {

     setIsOpen(i);
     
     if(isOpen === i){
      setIsOpen(null)
     }
   
   }
   
return(
  
       
      <div className="collapse" >
       <div className="title-collapse">
        <h2>{title}</h2>
        <img src={vector} alt="icon" className={isOpen === index ? 'vector-up' :'vector-down'} onClick={() => toggle(index)}/>
       </div>
       <div key={'collapse'+ index} className={isOpen === index ? 'text-show' :'text'}>{text}</div>
     </div>

  
)

}


export default Collapses