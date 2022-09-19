import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <label className="text-white " htmlFor="email">
          Correo electrónico
        </label>

        <input
          className="shadow appearance-none border rounded w-full my-2 py-1 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          placeholder="example@gmail.com"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label className="text-white" htmlFor="username">
          Nombre de usuario
        </label>

        <input
          className="shadow appearance-none border rounded w-full my-2 mr-2 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          placeholder="username"
          name="username"
          type="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label className="text-white" htmlFor="password">
          Contraseña
        </label>

        <input
          className="shadow appearance-none border rounded w-full my-2 mr-2 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          placeholder="********"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className="w-full flex justify-between pt-2">
          <p className="text-white">¿Ya tienes una cuenta?</p>
          <Link
            to="/auth/login"
            className="underline text-white text-right hover:text-blue-700"
          >
            Ingresar
          </Link>
        </div>

        <button
          className="w-full inline-block shadow-yellow-400 shadow bg-gray-300 my-6 rounded-full p-2 hover:bg-gray-400"
          type="submit"
        >
          Registrar
        </button>
      </form>
    </>
  );
};
