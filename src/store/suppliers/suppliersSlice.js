import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  suppliers: [],
  suppliersLoading: false,
  supplierActive: null,
};

export const suppliersSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {
    setSuppliersLoading(state) {
      state.suppliersLoading = true;
    },
    getSuppliersSuccess(state, action) {
      state.suppliersLoading = false;
      state.suppliers = action.payload;
      state.supplierActive = null;
    },
    addSupplierSuccess(state, action) {
      state.suppliersLoading = false;
      state.suppliers.push(action.payload);
      state.supplierActive = null;
    },
    deleteSupplierSuccess(state, action) {
      state.suppliersLoading = false;
      state.suppliers = state.suppliers.filter(
        (supplier) => supplier.id !== action.payload
      );
      state.supplierActive = null;
    },
    updateSupplierSuccess(state, action) {
      state.suppliersLoading = false;
      state.suppliers = state.suppliers.map((supplier) =>
        supplier.id === action.payload.id ? action.payload : supplier
      );
      state.supplierActive = null;
    },
    setActiveSupplier(state, action) {
      state.suppliersLoading = false;
      state.supplierActive = state.suppliers.find(
        (supplier) => supplier.id === action.payload
      );
    },
  },
});

export const {
  addSupplierSuccess,
  deleteSupplierSuccess,
  getSuppliersSuccess,
  setSuppliersLoading,
  updateSupplierSuccess,
  setActiveSupplier,
} = suppliersSlice.actions;
