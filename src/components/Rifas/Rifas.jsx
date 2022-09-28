import './Rifas.css';
import { useContext } from 'react';
import Rifa from '../Rifa/Rifa';
import Loader from '../Loader/Loader';
import { appContext } from '../../context/AppContext';

function Rifas() {
    const { data, getDatabase, loaded } = useContext(appContext);

    return (
        <>
            <p style={{textAlign: "center", margin: ".3rem 0"}}>Participantes: {data.length}</p>
            <p style={{textAlign: "center", margin: ".3rem 0"}}>Monto total: ${data.length * 300}</p>
            <table cellSpacing="15">
                {loaded
                    ? <Loader />
                    : <>
                        <thead>
                            <tr>
                                <td>Número</td>
                                <td>Nombre</td>
                                <td>Estado del pago</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(element => <Rifa key={element.number} element={element} getDatabase={getDatabase} />).sort((a, b) => {
                                return parseInt(a.key) - parseInt(b.key);
                            })}
                        </tbody>
                    </>
                }
            </table>
        </>

    )
}

export default Rifas