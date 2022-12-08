import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {getDoc, updateDoc, doc} from "firebase/firestore"
import { firebaseDB } from '../../firebase/config';
import { async } from "@firebase/util";

const Edit = () => {
    const [nombre, setNombre] = useState('')
    const [placa, setPlaca] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const vehiculo = doc(firebaseDB, "vehiculos", id)
        const data = {nombre:nombre, placa:placa}
        await updateDoc(vehiculo, data)
        navigate('/vehiculos')
    }

    const getVehicleById = async (id) =>{
        const vehiculo = await getDoc(doc(firebaseDB, "vehiculos", id))
        if (vehiculo.exists()) {
            setNombre(vehiculo.data().nombre)
            setPlaca(vehiculo.data().placa)
        }else{
            console.log('El vehiculo no existe')
        }
    }

    useEffect(()=>{
        getVehicleById()
    }, [])


    return(
        <div className='container m-0 row justify-content-center ' >
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h1 className="text-4xl">Editar Vehiculo</h1>
        </div>
        <div className='p-4 text-center col-auto'>
                <form onSubmit={update}>

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
                <button type='submit' className='btn btn-primary'>Editar</button>
                </form>
                </div>
            </div>
)
}
export default Edit
