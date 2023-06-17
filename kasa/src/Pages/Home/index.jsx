import {Datas} from '../../Datas/DataApartement';
import Card from '../../Components/Card';
import '../../Components/Style/Card.css';
import montagnes from '../../montagnes.jpg';



function App() {
  return (
<main>
    <div className='image-montagnes'>
      <img src={montagnes} alt="montagnes"/>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>

    <div className='card-container'>
      <ul className='card-list'>
        {Datas.map(({id,cover,title,})=>
           <Card
           
            key={id}
            id={id}
            cover={cover}
            title={title}
          />
        )}

      </ul>

    </div>
    </main>
  )
}

export default App;
