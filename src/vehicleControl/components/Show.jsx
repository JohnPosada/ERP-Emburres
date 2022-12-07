import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {collection, getDocs, getDoc, deleteDoc} from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { async } from '@firebase/util';

const mySwal = withReactContent(Swal)

const Show = () => {
    //configurar los hooks
    const [vehiculos, setVehiculos] = useState([])
    //Referenciar a la DB de firestore
    const vehiculosCollection = collection(firebaseDB, "vehiculos")
    //Funcion para mostrar los documentos
    const getVehiculos = async  () =>{
        const datos = await getDocs(vehiculosCollection)
        //console.log(datos.docs)
        setVehiculos(
          datos.docs.map((doc) => ({...doc.data(), id:doc.nombre}))
        )
      console.log(vehiculos)
    }
    //Funcion para eliminar documento
    const deleteVehiculos = async (id) => {
      const vehiculoDoc = doc(firebaseDB, "vehiculos", id)
      await deleteDoc(vehiculoDoc)
      getVehiculos()
    }

    //Funcion de confirmación para sweet alert

    //usar UsseEffect
    useEffect(() => {
        getVehiculos()
        //eslint-disable-next-line
    }, [] )

    //Retornar la vista del componente
    return (
      <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='d-grid gap-2'>
              <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Create</Link>
            </div>
            <table className='table table-dark table-hover'>
              <thead>
                <tr> Nombre </tr>
                <tr> Placa </tr>
                <tr> Actions </tr>
              </thead>

              <tbody>
                {vehiculos.map( (vehiculo) => (
                    <tr key={vehiculo.id}>
                      <td>{vehiculo.nombre}</td>
                      <td>{vehiculo.placa}</td>
                      <td>
                        <Link to={`/edit/${vehiculo.id}`} className="btn btn-light">Editar</Link>
                        <button onClick={ () => { deleteVehiculos(vehiculo.id)}} className="btn btn-danger" >Eliminar</button>
                      </td>
                    </tr>
                ) ) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
    )
  
}

export default Show
