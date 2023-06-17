import Collapses from "../../Components/Collapses";
import Paesage from "../../paesage.jpg"

function Apropos (){

return(
<main>
<div className="paesage">
    <img src={Paesage} alt="paesage"/>
</div>

<section>
<Collapses />
</section>

</main>
) 

}

export default Apropos;