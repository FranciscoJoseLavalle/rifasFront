import { useState, useContext } from 'react';
import { appContext } from '../../context/AppContext';
import axios from 'axios';
import './Formulario.css';

function Formulario() {
    const { getDatabase } = useContext(appContext);
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [payed, setPayed] = useState('');

    function formSubmit(e) {
        e.preventDefault();
        console.log(number, name, payed)
        let params = JSON.stringify({
            "number": number,
            "name": name,
            "payed": payed
        })

        axios.post("https://ash-glitter-ticket.glitch.me/", params, {
            "headers": {
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(console.log)
            .finally(res => getDatabase())

    }

    return (
        <>
            <form onSubmit={(e) => formSubmit(e)}>
                <h3>Agregá un nuevo participante</h3>
                <div>
                    <label htmlFor="number">Número del participante</label>
                    <input type="number" placeholder='Número del participante' id='number' onInput={(e) => setNumber(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="name">Nombre del participante</label>
                    <input type="text" placeholder='Nombre del participante' id='name' onInput={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="pay">Estado del pago</label>
                    <select id="pay" onChange={(e) => setPayed(e.target.value)}>
                        <option value={null}>Seleccionar estado</option>
                        <option value={true}>Pagado</option>
                        <option value={false}>Sin pagar</option>
                    </select>
                </div>
                <input type="submit" value="Agregar" />
            </form>
        </>
    )
}

export default Formulario