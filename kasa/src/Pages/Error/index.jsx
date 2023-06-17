import '../../Components/Style/Error.css'
import { Link } from 'react-router-dom'

function error(){

   return(
    <div className='error-container'>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className='lien'><span>Retourner sur la page d’accueil</span></Link>
    </div>
   )

}
export default error