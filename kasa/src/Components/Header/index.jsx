import {Link} from 'react-router-dom';
import logo from '../../LOGO.png';
import '../Style/Header.css';

function Header(){

return (
<div className='en-tete'>
 <img src= {logo} alt="logo kasa"  />
 <div>
 <Link to=" " ><span>Accueil</span></Link>
 <Link to="Apropos"><span>A Propos</span></Link>
 </div>
</div>
)

}

export default Header;