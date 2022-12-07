import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore/lite';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseDB } from '../firebase/config';
import {
  getSuppliersSuccess,
  setSuppliersLoading,
  addSupplierSuccess,
  updateSupplierSuccess,
  deleteSupplierSuccess,
  setActiveSupplier,
} from '../store/suppliers/suppliersSlice';

export const useSuppliers = () => {
  const dispatch = useDispatch();
  const { suppliers, suppliersLoading, supplierActive } = useSelector(
    (state) => state.suppliers
  );

  const getSuppliers = useCallback(async () => {
    dispatch(setSuppliersLoading());
    try {
      const suppliersCol = collection(firebaseDB, 'suppliers');
      const suppliersSnapshot = await getDocs(suppliersCol);
      const data = suppliersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(getSuppliersSuccess(data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const addSupplier = useCallback(
    async (supplier) => {
      dispatch(setSuppliersLoading());
      try {
        const newDoc = doc(collection(firebaseDB, 'suppliers'));
        await setDoc(newDoc, supplier);
        supplier.id = newDoc.id;
        dispatch(addSupplierSuccess(supplier));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const deleteSupplier = useCallback(
    async (id) => {
      dispatch(setSuppliersLoading());
      try {
        const docRef = doc(firebaseDB, 'suppliers', id);
        await deleteDoc(docRef);
        dispatch(deleteSupplierSuccess(id));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const updateSupplier = useCallback(
    async (supplier) => {
      dispatch(setSuppliersLoading());
      try {
        const docRef = doc(firebaseDB, 'suppliers', supplier.id);
        await setDoc(docRef, supplier);
        dispatch(updateSupplierSuccess(supplier));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );
  const startSetActiveSupplier = useCallback(
    (id) => {
      dispatch(setActiveSupplier(id));
    },
    [dispatch]
  );

  return {
    suppliers,
    suppliersLoading,
    supplierActive,
    getSuppliers,
    addSupplier,
    deleteSupplier,
    updateSupplier,
    startSetActiveSupplier,
  };
};
