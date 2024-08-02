import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  // SIDEBAR REFS
  const overviewRef = useRef<HTMLDivElement>(null);
  const gettingStartedRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const coreFeaturesRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const togglerRef = useRef<HTMLDivElement>(null);

  const sections = {
    overview: overviewRef,
    gettingStarted: gettingStartedRef,
    button: buttonRef,
    coreFeatures: coreFeaturesRef,
    dropdown: dropdownRef,
    toggler: togglerRef,
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: "smooth" });
  };
  // SIDEBAR REFS END

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar onSectionClick={scrollToSection} />
      <Box sx={{ p: 3 }}>
        <div ref={sections.overview}>
          <Typography variant="h1">Overview</Typography>
          <Typography paragraph>
            This site is a documentation to provide comprehensive guide to
            integrate custom Material UI (MUI) components into your project.
          </Typography>
        </div>
        <div ref={sections.gettingStarted}>
          <Typography variant="h1">Getting Started</Typography>
          <Typography paragraph>This is "Getting Started" section.</Typography>
        </div>
        <div ref={sections.button}>
          <Typography variant="h1">Button</Typography>
          <Typography paragraph>This is "Button" section.</Typography>
        </div>
        <div ref={sections.coreFeatures}>
          <Typography variant="h1">Core Features</Typography>
          <Typography paragraph>This is "Core Features" section.</Typography>
        </div>
        <div ref={sections.dropdown}>
          <Typography variant="h1">Dropdown</Typography>
          <Typography paragraph>This is "Dropdown" section.</Typography>
        </div>
        <div ref={sections.toggler}>
          <Typography variant="h1">Toggler</Typography>
          <Typography paragraph>This is "Toggler" section.</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default App;
