import '../Style/Card.css'

function showCard ({id,cover,title}){
     return(
        <li key={id} className="single-card">
            <img  src={cover} alt={title}/>
            <p>{title}</p>

        </li>
     )
}

export default showCard