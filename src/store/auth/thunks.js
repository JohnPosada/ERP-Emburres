import Swal from 'sweetalert2';
import { getRolById } from '../../firebase/auth/helper/getRolById';
import {
  loginWithEmail,
  logoutFirebase,
  registerUser,
} from '../../firebase/auth/providers';
import { firebaseAuth } from '../../firebase/config';
import { login, logout } from './slice';

export const startSignInWhitEmailandPassword = (email, password) => {
  return async (dispatch) => {
    const res = await loginWithEmail(email, password);
    if (res.ok === false) return dispatch(logout(res.errorMessage));

    dispatch(login(res));
  };
};
export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
export const startRegisterUser = (email, password, displayName, rol) => {
  return async (dispatch) => {
    const res = await registerUser(email, password, displayName, rol);
    if (res !== true)
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: res,
      });
    Swal.fire({
      icon: 'success',
      title: 'Usuario registrado',
      text: 'El usuario ha sido registrado satisfactoriamente, a continuacion se redirigira a el login...',
      showConfirmButton: false,
    });
    await logoutFirebase();
    setTimeout(() => {
      dispatch(logout());
      Swal.close();
    }, 2000);
  };
};
