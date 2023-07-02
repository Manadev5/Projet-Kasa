import { useState } from "react";
import vector from '../../Assets/Vector.png'

function Collapses({title, text, index}) {

   // On fait partir le state avec null pour réprésenter le collapse fermé
   const [isOpen, setIsOpen] = useState(null);
  //fonction pour la fermature/overture du collapse
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