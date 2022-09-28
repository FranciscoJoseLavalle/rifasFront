import { appContext } from '../../context/AppContext';
import { useContext, useEffect, useState } from 'react';
import './Sorteo.css';

function Sorteo() {
  const { data } = useContext(appContext);

  const [sorted, setSorted] = useState(false);
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  function sortear() {
    let randomNumber = Math.floor(Math.random() * data.length);

    let result = data[randomNumber];

    setNumber(result.number);
    setName(result.name);
    setSorted(true);
  }

  return (
    <div className='sorteo'>
      <h3>¿Quién será el ganador?</h3>
      <button onClick={sortear}>Sortear</button>
      {sorted
      ? <p>El ganador es... {name} con el número {number}</p>
      : null
    }
    </div>
  )
}

export default Sorteo