import { Field, FormikProvider, useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startRegisterUser,
  startSignInWhitEmailandPassword,
} from '../../store/auth/thunks';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      displayName: '',
      rol: '',
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(startRegisterUser(values));
    },
  });

  return (
    <>
      <FormikProvider value={formik}>
        <form className="w-full" onSubmit={formik.handleSubmit}>
          <label className="text-black font-medium " htmlFor="email">
            Correo electrónico
          </label>

          <input
            className="shadow appearance-none border rounded w-full my-2 py-1 px-3 mr-2 mb-3 text-gray-700 leading-tight focus:shadow-outline"
            id="email"
            placeholder="example@gmail.com"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <label className="text-black font-medium " htmlFor="username">
            Nombre de usuario
          </label>

          <input
            className="shadow appearance-none border rounded w-full my-2 mr-2 py-1 px-3 text-gray-700 leading-tight focus:shadow-outline"
            id="displayName"
            placeholder="Nombre de usuario"
            name="displayName"
            type="displayName"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <label className="text-black font-medium " htmlFor="password">
            Contraseña
          </label>

          <input
            className="shadow appearance-none border rounded w-full my-2 mr-2 py-1 px-3 text-gray-700 leading-tight focus:shadow-outline"
            id="password"
            placeholder="********"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label className="text-black font-medium " htmlFor="rol">
            rol
          </label>

          <Field
            as="select"
            className="shadow bg-white border rounded w-full my-2 mr-2 py-1 px-3 text-gray-700 leading-tight focus:shadow-outline"
            id="rol"
            name="rol"
          >
            <option value="rol1">rol1</option>
            <option value="rol2">rol2</option>
            <option value="rol3">rol3</option>
          </Field>

          <button
            className="w-full inline-block border border-black hover:shadow-md hover:shadow-black bg-gray-300 my-6 rounded-full p-2 hover:bg-gray-400"
            type="submit"
          >
            Registrar
          </button>
        </form>
      </FormikProvider>
    </>
  );
};
