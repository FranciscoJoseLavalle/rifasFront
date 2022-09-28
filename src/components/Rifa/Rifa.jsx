import './Rifa.css';
import axios from 'axios';
import { useState } from 'react';

function Rifa({ element, getDatabase }) {
  const [number, setNumber] = useState('')


  function deleteRifa() {
    console.log(element.number);

    axios.delete("https://ash-glitter-ticket.glitch.me/", {
      "headers": {
        'Content-Type': 'application/json'
      }, data: {
        "number": element.number
      }
    })
      .then(res => console.log(res))
      .catch(console.log)
      .finally(res => getDatabase())
  }


  return (
    <tr className='rifa'>
      <td className='number'>{element.number}</td>
      <td>{element.name}</td>
      {/* <p>{element.number}</p>
      <p>{element.name}</p> */}
      {element.payed
        ? <td style={{ color: "green" }}>Pagado</td>
        : <td style={{ color: "red" }}>Sin pagar</td>
      }
      <td
        onClick={deleteRifa}
      >Eliminar</td>
    </tr>
  )
}

export default Rifa