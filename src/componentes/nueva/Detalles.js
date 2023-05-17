import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Contexto } from '../../servicios/Memoria';
import estilos from './Detalles.module.css';
function Detalles() {
    const { id } = useParams();

    const [form, setForm] = useState({
        id: String(Math.floor(Math.random() * 100)),
        detalles: '',
        eventos: 1,
        periodo: 'weekly',
        icono: '🧑‍🎓',
        meta: 52,
        plazo: '2030-01-01',
        completado: 0
    });

    const [estado, enviar] = useContext(Contexto);

    const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;
    const metaMemoria = estado.objetos[id];

    const onChange = (event, prop) => {
        setForm(estado => ({ ...estado, [prop]: event.target.value }));

    }
    const navegar = useNavigate();
    useEffect(() => {

        if (!id) return;
        if (!metaMemoria) {
            return navegar('/lista');
        }
        setForm(metaMemoria);
    }, [id, metaMemoria, navegar]);


    const crear = () => {
        enviar({ tipo: 'crear', meta: form });
        navegar('/lista');

    }

    const actualizar = () => {
        enviar({ tipo: 'actualizar', meta: form });
        navegar('/lista');
    }
    const borrar = () => {
        enviar({ tipo: 'borrar', id });
        navegar('/lista');
    }

    const cancelar = () => {
        navegar('/lista');
    }

    const frecuencias = ["Daily", "Weekly", "Monthly", "annually"];
    const iconos = ["🏃", "🧑‍🎓", "👨‍💻", "👩‍🍳", "👨‍🍳", "👩‍🎨", "👨‍🎨","💃","🕺","🏊‍♂️","🏋️‍♂️","🚴","🏞","✈","🎮","📖"];
    return (
        <div className='tarjeta'>
            <form className='p-4'>
                <label className='label'>
                    Describe your goal
                    <input
                        className='input'
                        placeholder="ex. Make a trip every month"
                        value={detalles}
                        onChange={e => onChange(e, 'detalles')}
                    />
                </label>
                <label className='label'>
                    How often would you do it <span>(ex. Weekly)</span>
                    <div className='flex mb-6'>
                        <input
                            className='input mr-6'
                            type="number"
                            value={eventos}
                            onChange={e => onChange(e, 'eventos')} />
                        <select
                            className='input'
                            value={periodo}
                            onChange={e => onChange(e, 'periodo')}>
                            {frecuencias.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className='label'>
                    How many times you want to complete this goal.
                    <input
                        className='input'
                        type="number"
                        value={meta}
                        onChange={e => onChange(e, 'meta')} />
                </label>
                <label className='label'>
                    Do you have a deadline?
                    <input
                        className='input'
                        type="date"
                        value={plazo}
                        onChange={e => onChange(e, 'plazo')} />
                </label>
                <label className='label'>
                    How many times have you completed it.
                    <input
                        className='input'
                        type="number"
                        value={completado}
                        onChange={e => onChange(e, 'completado')} />
                </label>
                <label className='label'>
                    Choose the icon
                    <select
                        className='input'
                        value={icono}
                        onChange={e => onChange(e, 'icono')}>
                        {iconos.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                {!id && <button
                    onClick={crear}
                    className="boton boton--negro">Create</button>}
                {id && <button
                    onClick={actualizar}
                    className="boton boton--negro">Update</button>}
                {id && <button
                    onClick={borrar}
                    className="boton boton--rojo">Remove</button>}
                <button
                    onClick={cancelar}
                    className='boton boton--gris'>Cancel</button>
            </div>
        </div>
    );
}

export default Detalles 