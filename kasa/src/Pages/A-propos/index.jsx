import Collapses from "../../Components/Collapses";
import Paesage from "../../Assets/paesage.jpg";
import '../../Components/Style/Collapses.css'

function Apropos (){

return(
 //utilisation de map pour recuperer les données affiché du collpase 
<main>
<div className="paesage">
    <img src={Paesage} alt="paesage"/>
</div>

<section className="collapses-section">
 
{dataCollapse.map((index)=>(
  <Collapses
     text = {index.text}
     title = {index.title}
     index = {index} 
     key={Math.random + index.title}
  />

)) 

}


</section>

</main>
) 

}

//Json contenant le titre et le texte affiché sur le collpase 
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

export default Apropos;