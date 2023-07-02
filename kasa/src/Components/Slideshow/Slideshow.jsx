import { useState } from 'react';
import vectorleft from '../../Assets/Vector-left.png';
import vectorright from '../../Assets/Vector-right.png';

function SlideShow({accommodation}){
    //utilisation de use state pour faire partir l'index de 0
    const [currentIndex, setCurrentIndex] = useState(0);

   // Fonctions pour naviguer sur l'mage précedénte et suivante
    const Previous = () =>{
        const firstSlide = currentIndex === 0;
        const newIndex= firstSlide ? accommodation.pictures.length - 1 : currentIndex -1;
         setCurrentIndex(newIndex);
      }
      
      const Next = () => {
      const lastSlide = currentIndex === accommodation.pictures.length -1;
      const newIndex= lastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      }

      return(
            
        <div className="slider">{
            // condition pour afficher ou no le fleches de navigation selon le nombre d'image
            accommodation.pictures.length === 1 ? null :
            <div>
            <div className="vector-left"><img src={vectorleft} alt="vector left" onClick={() => Previous()} /></div>
            <div className="vector-right"><img src ={vectorright} alt=" vector right" onClick={()=> Next()}/></div>
            </div>
           }
              <div className="image-container">
               <img  src = {accommodation.pictures[currentIndex]}  alt={accommodation.title}/>
             </div>
             <p>{`${currentIndex + 1}/ ${accommodation.pictures.length}`}</p>
           </div>

      )



}

export default SlideShow