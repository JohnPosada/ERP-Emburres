import { collection, doc, getDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../config';

export const getRolById = async (uid) => {
  const docRef = doc(firebaseDB, 'users', `${uid}`);
  try {
    const res = await getDoc(docRef);
    return res.data();
  } catch (error) {
    console.log(error);
  }
};
