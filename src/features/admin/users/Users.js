import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import UserService from "../../../services/UserService";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddEditUser from "./AddEditUser";
import Swal from "sweetalert2";
const Users = () => {
  const [userList, setUserList] = useState([]);
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("add");
  const [currentUser, setCurrentUser] = useState({});

  const handleDialogClose = () => {
    setOpen(false);
  };
  const addNewUser = () => {
    setOperation("add");
    setCurrentUser({});
    setOpen(true);
  };
  const editUser = (user) => {
    setOperation("edit");
    setCurrentUser(user);
    setOpen(true);
  };
  const deleteUser = (id)=> {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id)

          .then((response) => {
            loadUsers();
            Swal.fire("Deleted!", "The user been deleted.", "success");
          })
          .catch((err) => {
            Swal.fire("Not Deleted!", "Could not deleted.", "error");
          });
      }
    });
  };

  const loadUsers = () => {
    UserService.fetchAllUser()
      .then((response) => {
        if (response.data) setUserList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const columns = [
    {
      label: "ID",
      name: "id",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Name",
      name: "name",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (name) => {
          console.log("name ", name);
          return name?.first + " " + name?.last;
        },
      },
    },
    {
      label: "Mobile",
      name: "mobile",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Role",
      name: "role",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (status) => (status ? "Active" : "Inactive"),
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: (index) => {
          const user = userList[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => deleteUser(user?.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <AddEditUser
        open={open}
        handleClose={handleDialogClose}
        currentUser={currentUser}
        operation={operation}
        loadUsers={loadUsers}
      />
      <Button variant="contained" onClick={addNewUser}>
        New +
      </Button>
      <MUIDataTable title="User List" columns={columns} data={userList} />
    </>
  );
};

export default Users;