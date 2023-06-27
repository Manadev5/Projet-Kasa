import '../Style/Card.css';
import { Link, } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Card ({id,cover,title}){

    const location = useLocation().pathname;
    const locationUrl = location + 'Apartments/'
    
     return(

        <li key={id} className="single-card">
        <Link to ={locationUrl + `${id}`}>
           
            <img  src={cover} alt={title}/>
            <p>{title}</p>
            
        </Link>
        </li>

     )
}



export default Card