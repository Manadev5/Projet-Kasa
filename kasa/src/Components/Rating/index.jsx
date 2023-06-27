import Redstar from '../../Assets/Redstar.png';
import Greystar from '../../Assets/Greystar.png'

function Rating({number}){

const stars = [] ;
for(let i= 0; i < number; i++) {
    stars.push(<img key={i}  src={Redstar} alt='star' className='star' />);
   
  }
  if(number < 5){
    for(let i= 0; i < (5 - number); i++) {
        stars.push(<img key={'star'+i}  src={Greystar} alt='star' className='grey-star' />);
}
  }

    return(
      <div className='star-container'>{stars}</div>
    )
}

export default Rating