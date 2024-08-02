import { Box, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ p: 3 }}>
        <Typography variant="h1">Overview</Typography>
        <Typography paragraph>
          This site is a documentation to provide comprehensive guide to
          integrate custom Material UI (MUI) components into your project.
        </Typography>
        <Typography variant="h1">Getting Started</Typography>
        <Typography paragraph>This is "Getting Started" section.</Typography>
        <Typography variant="h1">Button</Typography>
        <Typography paragraph>This is "Button" section.</Typography>
        <Typography variant="h1">Core Features</Typography>
        <Typography paragraph>This is "Core Features" section.</Typography>
        <Typography variant="h1">Dropdown</Typography>
        <Typography paragraph>This is "Dropdown" section.</Typography>
        <Typography variant="h1">Toggler</Typography>
        <Typography paragraph>This is "Toggler" section.</Typography>
      </Box>
    </Box>
  );
};

export default App;
