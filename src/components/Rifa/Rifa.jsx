import './Rifa.css';
import axios from 'axios';
import { useState } from 'react';

function Rifa({ element, getDatabase }) {
  const [number, setNumber] = useState('')

  function deleteRifa() {
    console.log(element.number);

    axios.delete("https://recondite-pentagonal-neighbor.glitch.me/", {
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

  function updateRifa(e) {

    axios.put("https://recondite-pentagonal-neighbor.glitch.me/", {
      "number": element.number,
      "name": element.name,
      "payed": e.target.value === 'Pagado' ? true : false
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
      <select style={{
        color: element.payed ? "green" : "red"
      }} onChange={(e) => updateRifa(e)}>
        {element.payed
          ? <>
            <option style={{ color: "green" }}>Pagado</option>
            <option style={{ color: "red" }}>Sin pagar</option>
          </>
          : <>
            <option style={{ color: "red" }}>Sin pagar</option>
            <option style={{ color: "green" }}>Pagado</option>
          </>
        }
      </select>
      <td
        onClick={deleteRifa}
      >Eliminar</td>
    </tr>
  )
}

export default Rifa