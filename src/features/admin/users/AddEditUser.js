import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import UserForm from "./UserForm";
const AddEditUser = ({
  open,
  handleClose,
  operation,
  ...props
}) => {
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>
          {operation == "edit" ? "Edit" : "Create"} User
        </DialogTitle>
        <DialogContent>
          <UserForm
            operation={operation}
            handleClose={handleClose}
            {...props}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditUser;