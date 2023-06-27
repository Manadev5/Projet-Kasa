import logoNoir from '../../Assets/LOGO-noir.png';
import '../Style/Footer.css';

function Footer(){

    return(
        <div className='footer'>
            <img src= {logoNoir} alt="logo kasa blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )

};

export default Footer