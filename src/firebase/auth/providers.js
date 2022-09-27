import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { firebaseAuth } from '../config';
import { getRolById } from './helper/getRolById';
import { setRolNewUser } from './helper/setRolNewUser';

export const loginWithEmail = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid, displayName } = user;
    const { rol } = await getRolById(uid);
    return {
      ok: true,
      uid,
      rol,
      email,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const registerUser = async ({ email, password, displayName, rol }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid } = user;
    setRolNewUser(uid, { rol });
    await updateProfile(firebaseAuth.currentUser, { displayName });
    return true;
  } catch (error) {
    return error.message;
  }
};

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
};
