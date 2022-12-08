import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { async } from '@firebase/util';
import 'bootstrap/dist/css/bootstrap.min.css'

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
          datos.docs.map((doc) => ({...doc.data(), id:doc.id}))
        )
      console.log(vehiculos)
    }
    //Funcion para eliminar documento
    const deleteVehiculos = async (id) => {
      console.log(id)
      const vehiculoDoc = doc(firebaseDB, "vehiculos", id)
      await deleteDoc(vehiculoDoc)
      getVehiculos()
    }

    //Funcion de confirmación para sweet alert
    const confirmDelete = (id) => {
      mySwal.fire({
        title: '¿Borrar producto?',
        text: "No puedes revertir la acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'SI'
      }).then((result) => {
        if(result.isConfirmed){
          deleteVehiculos(id)
          Swal.fire(
          'Borrar',
          'El vehiculo ha sido borrado',
          'Hecho!'
        )
        }
      })
    }
    //usar UsseEffect
    useEffect(() => {
        getVehiculos()
    }, [] )

    //Retornar la vista del componente
    return (
      <>
    <div className="p-6 w-full">
      <div className="flex justify-between mb-8">
        <h1 className="text-4xl">Gestión Vehiculos</h1>
        <Link to="/create" className='btn btn-success'>Registrar vehículo</Link>
      </div>
      <table className='table table-light table-bordered'>
      <thead>
        <tr className='text-center table-active'>
          <td>Nombre</td> 
          <td>Placa</td> 
          <td>Acciones</td>
        </tr>
        </thead>

      <tbody>
        {vehiculos.map( (vehiculo) => (
        <tr className='text-center' key={vehiculo.id}>
          <td>{vehiculo.nombre}</td>
          <td>{vehiculo.placa}</td>
          <td>
            <Link to={`/edit/${vehiculo.id}`} className="btn btn-warning">Editar</Link>
            <button onClick={ () => { confirmDelete(vehiculo.id)}} className="btn btn-danger" >Eliminar</button>
          </td>
        </tr>
        ) ) }
      </tbody>
      </table>
    </div>
    </>
    )
  
}

export default Show
