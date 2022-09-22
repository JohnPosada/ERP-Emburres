import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startSignInWhitEmailandPassword } from '../../store/auth/thunks';
import dotenv from 'dotenv';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: (values) => {
      dispatch(startSignInWhitEmailandPassword(values.email, values.password));
    },
  });

  return (
    <>
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
        {/* <div className="w-full mt-3 bg-gray-400 rounded-xl py-1 px-3 flex justify-center">
          <span className="text-red-600 w-full">error</span>
        </div> */}

        <button
          className="w-full inline-block border border-black hover:shadow-md hover:shadow-black bg-gray-300 my-6 rounded-full p-2 hover:bg-gray-400"
          type="submit"
        >
          Ingresar
        </button>
      </form>
    </>
  );
};
