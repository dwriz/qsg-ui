import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <List>
        <ListItem button key="Overview">
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button key="Getting Started">
          <ListItemText primary="Getting Started" />
        </ListItem>
        <ListItem button key="Button">
          <ListItemText primary="Button" />
        </ListItem>
        <ListItem button key="Core Features">
          <ListItemText primary="Core Features" />
        </ListItem>
        <ListItem button key="Dropdown">
          <ListItemText primary="Dropdown" />
        </ListItem>
        <ListItem button key="Toggler">
          <ListItemText primary="Toggler" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
