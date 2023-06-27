import {Link} from 'react-router-dom';
import logo from '../../Assets/LOGO.png';
import '../Style/Header.css';

function Header(){

return (
<div className='en-tete'>
 <img src= {logo} alt="logo kasa"  />
 <div>
 <Link to=" " className='change'><span>ACCUEIL</span></Link>
 <Link to="Apropos" className='change'><span>A PROPOS</span></Link>
 </div>
</div>
)

}

export default Header;