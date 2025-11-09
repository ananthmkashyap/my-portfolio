import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";

const drawerWidth = 260;
const navItems = [
  ["Expertise", "expertise"],
  ["History", "history"],
  ["Education", "Education"],
  ["Projects", "projects"],
  ["Publication", "publications"]
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        setScrolled(window.scrollY > navbar.clientHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        height: "100%",
        backgroundColor: mode === "dark" ? "#1c1c1c" : "#f9f9f9",
        color: mode === "dark" ? "#f5f5f5" : "#111"
      }}
    >
      <p style={{ padding: "15px 0", fontWeight: 600 }}>
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton onClick={() => scrollToSection(item[1])}>
              <ListItemText
                primary={item[0]}
                primaryTypographyProps={{
                  style: { fontWeight: 500, fontSize: "1rem" }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        position="fixed"
        sx={{
          backgroundColor:
            mode === "dark"
              ? scrolled
                ? "#121212"
                : "rgba(18,18,18,0.9)"
              : scrolled
              ? "#ffffff"
              : "rgba(255,255,255,0.9)",
          color: mode === "dark" ? "#f5f5f5" : "#111",
          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.2)" : "none",
          backdropFilter: "blur(8px)",
          transition: "all 0.3s ease"
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 2, sm: 4 }
          }}
        >
          {/* Left: Theme toggle */}
          {mode === "dark" ? (
            <LightModeIcon
              onClick={() => modeChange()}
              style={{ cursor: "pointer", color: "#ffeb3b" }}
            />
          ) : (
            <DarkModeIcon
              onClick={() => modeChange()}
              style={{ cursor: "pointer", color: "#333" }}
            />
          )}

          {/* Right: Hamburger icon (always visible) */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for all devices */}
      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              transition: "0.4s ease-in-out"
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
