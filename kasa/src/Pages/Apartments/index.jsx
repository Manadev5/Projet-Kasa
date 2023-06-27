
import { useState, useEffect } from "react";
import {Datas} from '../../Datas/DataApartement';
import { Navigate, useParams } from "react-router-dom";
import Rating from "../../Components/Rating";
import '../../Components/Style/Apartments.css';
import SlideShow from "../../Components/Slideshow/Slideshow";
import Collapses from "../../Components/Collapses";





function Apartments(){
  
  let { idApartment } = useParams();
  const accommodation = Datas.find(logement => idApartment === logement.id);
  

 

const currentIndex  = useState(0);





 
    return(
      <main>
      <section>
      <SlideShow
    
      accommodation={accommodation}
    
      />
     </section>
    
     <section className="section-info">
      <div className="tags-title">
        <h1>{accommodation.title}</h1>
        <p>{accommodation.location}</p>
        <div>
          {accommodation.tags.map((index)=>(<p key={`tag${index}`}>{index}</p> ))}
        </div>
      </div>
    
      <div className="host-container">
        <div className="host-info">
        <p>{accommodation.host.name}</p>
        <img src={accommodation.host.picture} alt={accommodation.host.name} />
        </div>
        <div className="rating-cont">
       <Rating
         number={accommodation.rating}
       />
       </div>
      </div>
     </section>
    
     <section className="collapses">
      <Collapses
        title ='Description'
        text = {accommodation.description}
        index= {currentIndex}
    
      />
      <Collapses
        title= 'Équipements'
        text= {accommodation.equipments.map((index)=>(<ul key={index}><li key={index + 1}>{index}</li></ul>))}
        index={currentIndex}
      />
     </section>
     
    
    
     </main>
    
    )




}

export default Apartments