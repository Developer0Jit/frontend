import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import appRoutes from "../../shared/routes/appRoutes";
import { Link } from "react-router-dom";
const SidebarMenu = () => {
  return (
    <>
      <List>
        {appRoutes
          .filter((route) => route.showInMenu)
          .map(({ title, path, icon }, index) => (
            <Link
              to={path}
              key={path + index}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          ))}
      </List>
    </>
  );
};

export default SidebarMenu;