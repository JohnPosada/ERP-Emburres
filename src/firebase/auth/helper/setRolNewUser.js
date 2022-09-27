import { addDoc, collection, doc, setDoc } from 'firebase/firestore/lite';
import React from 'react';
import { firebaseAuth, firebaseDB } from '../../config';

export const setRolNewUser = async (uid, rol) => {
  const newDoc = doc(firebaseDB, 'users', `${uid}`);
  await setDoc(newDoc, rol);
};
