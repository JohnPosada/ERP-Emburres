import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';



const Create = () => {
    const [nombre, setNombre] = useState('')
    const [placa, setPlaca] = useState('')
    const navigate = useNavigate()

    const vehiculosCollection = collection(firebaseDB, "vehiculos")
    const store =async(e) => {
        e.preventDefault()
        await addDoc(vehiculosCollection, {nombre: nombre, placa: placa})
        navigate('/vehiculos')
    }
    return(
    <div className='container m-0 row justify-content-center ' >
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h1 className="text-4xl">Crear Vehiculos</h1>
        </div>
        <div className='p-4 text-center col-auto'>
                <form onSubmit={store}>

                    <div className='mb-3'>
                        <label className='form-label'>
                            Nombre
                        </label>
                        <input
                            value={nombre}
                            onChange={(e)=>setNombre(e.target.value)}
                            type="text"
                            className='form-control'/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>
                            Placa
                        </label>
                        <input
                            value={placa}
                            onChange={(e)=>setPlaca(e.target.value)}
                            type="text"
                            className='form-control'/>
                    </div>
                <button type='submit' className='btn btn-primary'>Crear</button>
                </form>
                </div>
            </div>
    )
}
export default Create
