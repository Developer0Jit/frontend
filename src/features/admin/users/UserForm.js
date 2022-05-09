import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UserService from "../../../services/UserService";

const UserForm = ({ operation, currentUser, loadUsers, handleClose }) => {
  const [user, setUser] = useState({ status: true, role: "admin" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, name: { ...user.name, [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (operation == "edit") {
      UserService.updateUser(user.id, user)
        .then((response) => {
          loadUsers();
          handleClose();
          alert("User updated");
        })
        .catch((err) => {
          alert("Could not updated the user");
        });
    } else {
      UserService.createUser(user)
        .then((response) => {
          loadUsers();
          handleClose();

          alert("User created");
        })
        .catch((err) => {
          alert("Could not created the user");
        });
    }
  };

  useEffect(() => {
    if (currentUser) setUser({ ...currentUser });
  }, [currentUser]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            fullWidth
            label="First Name"
            name="first"
            value={user?.name?.first}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            fullWidth
            label="Last Name"
            name="last"
            value={user?.name?.last}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            label="Mobile"
            name="mobile"
            value={user?.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={user?.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={user?.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user?.role}
              label="Role"
              name="role"
              onChange={handleChange}
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"customer"}>Customer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user?.status}
              label="Status"
              name="status"
              onChange={handleChange}
            >
              <MenuItem value={true}>Active</MenuItem>
              <MenuItem value={false}>Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {operation == "edit" ? "Update" : "Create"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UserForm;