import '../Style/Card.css';
import { Link, } from 'react-router-dom';


function showCard ({id,cover,title}){
     return(

        <li key={id} className="single-card">
        <Link to ={`/Apartments/${id}`}>

            <img  src={cover} alt={title}/>
            <p>{title}</p>
        </Link>
        </li>

     )
}



export default showCard