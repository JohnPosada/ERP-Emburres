import { getRolById } from '../../firebase/auth/helper/getRolById';
import { loginWithEmail, logoutFirebase } from '../../firebase/auth/providers';
import { login, logout } from './slice';

export const startSignInWhitEmailandPassword = (email, password) => {
  return async (dispatch) => {
    const res = await loginWithEmail(email, password);
    console.log(res);
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
export const ss = (email, password) => {
  return async (dispatch) => {
    const res = await loginWithEmail(email, password);
    console.log(res);
    if (res.ok === false) return;
    dispatch(login());
  };
};
