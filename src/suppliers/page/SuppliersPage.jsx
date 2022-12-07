import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { AiFillDelete, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSuppliers } from '../../hooks/useSuppliers';

export const SuppliersPage = () => {
  const columns = [
    {
      field: 'nombre',
      headerName: 'Nombre',
      width: 150,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'direccion',
      headerName: 'Direccion',
      width: 150,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'telefono',
      headerName: 'Telefono',
      type: 'number',
      width: 160,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'nit',
      headerName: 'Nit',
      width: 160,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'webPage',
      headerName: 'WebPage',
      width: 160,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'fecha',
      headerName: 'Fecha',
      width: 160,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'actions',
      type: 'actions',
      width: 200,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<BsFillPencilFill className="text-blue-600 text-lg" />}
          label="Update"
          onClick={() => {
            navigate('/proveedores/edit/' + params.id);
            startSetActiveSupplier(params.id);
          }}
        />,
        <GridActionsCellItem
          icon={<AiFillDelete className="text-red-700 text-xl" />}
          label="Delete"
          onClick={() => deleteSupplier(params.id)}
        />,
      ],
    },
  ];
  const { getSuppliers, deleteSupplier, suppliers, startSetActiveSupplier } =
    useSuppliers();
  const navigate = useNavigate();
  useEffect(() => {
    getSuppliers();
  }, []);
  const onClickAdd = () => {
    navigate('/proveedores/add');
  };

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between mb-8">
        <h1 className="text-4xl">Proveedores</h1>
        <button className="bg-white rounded-full" onClick={onClickAdd}>
          <AiOutlinePlusCircle className="text-4xl text-green-600 m-2 " />
        </button>
      </div>
      <Box component="div" className="bg-white rounded-xl" sx={{ height: 400 }}>
        <DataGrid
          rows={suppliers}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
};
