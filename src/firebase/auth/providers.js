import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { firebaseAuth } from '../config';
import { getRolById } from './helper/getRolById';

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

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
};
