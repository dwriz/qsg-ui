import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

type SidebarProps = {
  onSectionClick: (
    section:
      | "overview"
      | "gettingStarted"
      | "button"
      | "coreFeatures"
      | "dropdown"
      | "toggler"
  ) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onSectionClick }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
      }}
    >
      <List>
        <ListItem
          button
          onClick={() => onSectionClick("overview")}
          key="Overview"
        >
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem
          button
          onClick={() => onSectionClick("gettingStarted")}
          key="Getting Started"
        >
          <ListItemText primary="Getting Started" />
        </ListItem>
        <ListItem button onClick={() => onSectionClick("button")} key="Button">
          <ListItemText primary="Button" />
        </ListItem>
        <ListItem
          button
          onClick={() => onSectionClick("coreFeatures")}
          key="Core Features"
        >
          <ListItemText primary="Core Features" />
        </ListItem>
        <ListItem
          button
          onClick={() => onSectionClick("dropdown")}
          key="Dropdown"
        >
          <ListItemText primary="Dropdown" />
        </ListItem>
        <ListItem
          button
          onClick={() => onSectionClick("toggler")}
          key="Toggler"
        >
          <ListItemText primary="Toggler" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
