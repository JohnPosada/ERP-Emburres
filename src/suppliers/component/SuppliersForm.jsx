import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useSuppliers } from '../../hooks/useSuppliers';

export const SuppliersForm = () => {
  const { addSupplier, supplierActive, updateSupplier } = useSuppliers();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  return (
    <div className="bg-gray-300 w-full mx-16 px-20 py-8 rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Agregar Proveedor</h1>
      <Formik
        initialValues={
          location.pathname === '/proveedores/add'
            ? {
                nombre: '',
                direccion: '',
                telefono: '',
                nit: '',
                webPage: '',
                fecha: '',
              }
            : supplierActive
        }
        onSubmit={(values) => {
          if (location.pathname === '/proveedores/add') {
            addSupplier(values);
          } else {
            values.id = id;
            updateSupplier(values);
          }
          navigate('/proveedores');
        }}
        validationSchema={Yup.object({
          nombre: Yup.string().required('El nombre es requerido'),
          direccion: Yup.string().required('La direccion es requerida'),
          telefono: Yup.number().required('El telefono es requerido'),
          nit: Yup.number().required('El nit es requerido'),
          webPage: Yup.string().required('La pagina web es requerida'),
          fecha: Yup.date().required('La fecha es requerida'),
        })}
      >
        <Form>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="text-black font-medium " htmlFor="nombre">
                Nombre
              </label>
              <Field
                className="shadow appearance-none border rounded w-full my-2 py-1 px-3 mr-2  text-gray-700 leading-tight focus:shadow-outline"
                type="text"
                name="nombre"
              />
              <ErrorMessage
                name="nombre"
                component={'span'}
                className="text-red-600"
              />
            </div>
            <div>
              <label className="text-black font-medium " htmlFor="direccion">
                Direccion
              </label>
              <Field
                className="shadow appearance-none border rounded w-full my-2 py-1 px-3 mr-2  text-gray-700 leading-tight focus:shadow-outline"
                type="text"
                name="direccion"
              />
              <ErrorMessage
                name="direccion"
                component={'span'}
                className="text-red-600"
              />
            </div>
            <div>
              <label className="text-black font-medium " htmlFor="telefono">
                Telefono
              </label>
              <Field
                className="shadow appearance-none border rounded w-full my-2 py-1 px-3 mr-2  text-gray-700 leading-tight focus:shadow-outline"
                type="text"
                name="telefono"
              />
              <ErrorMessage
                name="telefono"
                component={'span'}
                className="text-red-600"
              />
            </div>
            <div>
              <label className="text-black font-medium " htmlFor="nit">
                NIT
              </label>
              <Field
                className="shadow appearance-none border rounded w-full my-2 py-1 px-3 mr-2  text-gray-700 leading-tight focus:shadow-outline"
                type="text"
                name="nit"
              />
              <ErrorMessage
                name="nit"
                component={'span'}
                className="text-red-600"
              />
            </div>
            <div>
              <label className="text-black font-medium " htmlFor="webPage">
                Pagina web
              </label>
              <Field
                className="shadow appearance-none border rounded w-full my-2 py-1 px-3 mr-2  text-gray-700 leading-tight focus:shadow-outline"
                type="text"
                name="webPage"
              />
              <ErrorMessage
                name="webPage"
                component={'span'}
                className="text-red-600"
              />
            </div>
            <div>
              <label className="text-black font-medium " htmlFor="fecha">
                Fecha
              </label>
              <Field
                className="shadow appearance-none border rounded w-full my-2 py-1 px-3 mr-2  text-gray-700 leading-tight focus:shadow-outline"
                type="date"
                name="fecha"
              />
              <ErrorMessage
                name="fecha"
                component={'span'}
                className="text-red-600"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              type="submit"
              className="px-24 flex self-center border border-black py-2 rounded-md bg-white font-medium hover:bg-gray-400 hover:shadow-md hover:shadow-black "
            >
              {location.pathname === '/proveedores/add'
                ? 'Agregar'
                : 'Actualizar'}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-24 text-white flex self-center border border-black py-2 rounded-md bg-slate-500 font-medium hover:bg-red-500 hover:shadow-md hover:shadow-black "
            >
              Cancelar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
