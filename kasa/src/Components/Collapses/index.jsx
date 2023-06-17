import { useState } from "react";
import '../Style/Collapses.css'
import vector from '../../Vector.png'

function Collapses() {

   const [isOpen, setIsOpen] = useState(false);

   const toggle = (i) => {

    if(isOpen === i){

      return setIsOpen(null)
    }
     setIsOpen(i)
   
    
   }
   

   return  (
  <div className="col-container">
   
    {dataCollapse.map((item,index) => (
      <div className="collapse">
       <div className="title-collapse">
        <h2>{item.title}</h2>
        <img src={vector} alt="icon"  onClick={() => toggle(index)}/>
       </div>
       <span key={index} className={isOpen === index ? 'text-show' :'text'}>{item.text}</span>
   </div>

    ))}
  
  </div>
         )

}

const dataCollapse =[
  {
    title : "Fiabilité",
    text : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
     title :"Respect",
     text :"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
      title: "Service",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
     title:"Securité",
     text:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
]

export default Collapses