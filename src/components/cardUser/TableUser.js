import NavRigas from '../../layout/NavRigas'
import React, { useCallback, useMemo, useState,useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import axios from 'axios';
import { publicRequest } from '../../requestMethod';
import { Link } from 'react-router-dom';
import { Back } from '../../styled-components/Styleuser';
import { BiArrowBack } from 'react-icons/bi';
import { toast } from 'react-toastify';

const TableUser = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});


 

  

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await publicRequest.get(`/all-users?_=${Math.random()}`);
        setTableData(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
  
    getData(); // Fetch data when the component initially loads
  }, []);
 
  /* const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  }; */

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      try {
        // Send a PUT request to update the user's data
        const updatedUser = await publicRequest.patch(`/update-user/${row.original._id}`, values);

        // Check if the update was successful
        if (updatedUser) {
          // Update the local table data with the updated user
          // Ensure that the updated user has a unique key or identifier
          tableData[row.index] = updatedUser;
          setTableData([...tableData]);
          
          exitEditingMode(); // Exit editing mode and close modal
          window.location.reload();
          toast.success("utilisateur modifié avec succès !");
         
        } else {
          console.error('Error updating user');
          toast.error("Erreur lors de la modification de l'utilisateur !");
        }
      } catch (error) {
        console.error('Error updating user:', error);
        toast.error("Erreur lors de la modification de l'utilisateur !");
      }
    }
  };
  
  

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

 // Function to handle deleting a user row
 const handleDeleteRow = useCallback(
  async (row) => {
    if (!window.confirm(`Êtes-vous sûr que vous voulez supprimer ${row.original.firstName}?`)) {
      return;
    }

    try {
      // Send an API delete request to the server with the correct user's ID
      await publicRequest.delete(`/delete-user/${row.original._id}`);

      // If the API request is successful, update the local table data
      setTableData((prevData) => {
        const newData = [...prevData];
        newData.splice(row.index, 1);
        return newData;
      });
      toast.success("utilisateur supprimé avec succès!");
    } catch (error) {
      console.error('Error deleting data:', error);
      toast.error("Erreur de suppression d'un utilisateur !");
    }
  },
  []
);
  
  

const getCommonEditTextFieldProps = useCallback(
  (cell) => {
    return {
      error: !!validationErrors[cell.id],
      helperText: validationErrors[cell.id],
      onBlur: (event) => {
        const isValid =
          cell.column.id === 'email'
            ? validateEmail(event.target.value)
            : cell.column.id === 'age'
            ? validateAge(+event.target.value)
            : validateRequired(event.target.value);
        if (!isValid) {
          //set validation error for cell if invalid
          setValidationErrors({
            ...validationErrors,
            [cell.id]: `${cell.column.columnDef.header} is required`,
          });
        } else {
          //remove validation error for cell if valid
          delete validationErrors[cell.id];
          setValidationErrors({
            ...validationErrors,
          });
        }
      },
    };
  },
  [validationErrors],
);


  const columns = useMemo(
    () => [
      {
        accessorKey: '_id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'firstName',
        header: 'Prénom',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'lastName',
        header: 'Nom',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'email',
        header: 'Email',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'email',
        }),
      },
      {
        accessorKey: 'role',
        header: 'Role',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          select: true, // Use a select input
          children: [
            // Map the select options to an array of MenuItem components
            ...[
              'super-admin',
              'admin',
              'expert',
              'operator',
            ].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            )),
          ],
        }),
      },
      
    ],
    [getCommonEditTextFieldProps],
  );

  return (
    <>
      <NavRigas />
      <Link to="/admin">
        <Back>
          <BiArrowBack size="35px" />
        </Back>
      </Link>
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip arrow placement="bottom" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        /* renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Create New Account
          </Button>
        )} */
      />
      {/*  <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      /> */}
    </>
  );
};

//TableUser of creating a mui dialog modal for creating new rows
/* export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {}),
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};
 */
const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default TableUser;
