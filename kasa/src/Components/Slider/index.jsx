import { useState } from "react";
import vectorleft from '../../Vector-left.png';
import vectorright from '../../Vector-right.png';
import '../Style/Slider.css';
import {Datas} from '../../Datas/DataApartement';


function Slider(ID){
  


const [currentIndex, setCurrentIndex] = useState(0);



const Previous = () =>{
  const firstSlide = currentIndex === 0;
  const newIndex= firstSlide ? Datas[currentIndex].pictures.length - 1 : currentIndex -1;
   setCurrentIndex(newIndex);
}

const Next = () => {
const lastSlide = currentIndex === Datas[currentIndex].pictures.length -1;
const newIndex= lastSlide ? 0 : currentIndex + 1;
setCurrentIndex(newIndex);
}

return (
<main>
  <section>
 <div className="slider">
  <div className="vector-left"><img src={vectorleft} alt="vector left" onClick={() => Previous()} /></div>
  <div className="vector-right"><img src ={vectorright} alt=" vector right" onClick={()=> Next()}/></div>
    <div className="image-container">
     <img  src = {Datas[currentIndex].pictures[currentIndex]}  alt={Datas[currentIndex].title}/>
   </div>
 </div>
 </section>
 <section>
  <div>
    <h1>{Datas[ID].title}</h1>
    <p>{Datas[ID].location}</p>
    <div>{Datas[ID].tags}</div>
  </div>

  <div>
    <div>
      <img src={Datas[ID].host.picture} alt={Datas[ID].host.name} />
      <p>{Datas[ID].host.name}</p>
    </div>
  </div>

 </section>
 


 </main>
)

}

export default Slider