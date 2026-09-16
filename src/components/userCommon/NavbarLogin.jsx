import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, NavLink } from "react-router-dom";
import { useContextData } from '../context/contextApi.jsx';
import AuthModal from "../auth/authModal";
import { useLocation } from "react-router-dom";

function NavbarLogin() {
  const { user } = useContextData()
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState(0); 
  const location = useLocation();
  const isHome = location.pathname === "/";

  // 🔥 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Profile menu
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/Allrooms" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" }
  ];

 

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: isHome ? scrolled ? "#000000dc" : "transparent" : "#ececec",
          transition: "all 0.3s ease",
          px: 2,
        }}
      >
        <Toolbar sx={{ position: "relative" }}>
          
          {/* 🔥 LEFT - LOGO */}
          <Typography variant="h6" sx={{ fontWeight: "bold" , color: isHome ? "#ececec" : "black" }}>
            HotelManagemengtSystem
          </Typography>

          {/* 🔥 MOBILE MENU ICON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon sx={{ color: scrolled ? "white" : "black" }} />
          </IconButton>
          

          {/* 🔥 CENTER NAV (DESKTOP ONLY) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              gap: 3,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.name}
                component={NavLink}
                to={link.path}
                sx={{
                  color: scrolled ? "white" : "black",
                  borderBottom: "2px solid transparent",
                  "&.active": {
                    borderBottom: "2px solid #00bcd4",
                  },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          {/* 🔥 RIGHT */}
          <Box
            sx={{
              marginLeft: "auto",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* SEARCH */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0)",
                borderRadius: 1,
                overflow: "hidden",
                maxWidth: searchOpen ? 200 : 40,
                transition: "max-width 0.3s ease",
              }}
            >
              <InputBase
                placeholder="Search..."
                sx={{
                  color: scrolled ? "white" : "black",
                  px: searchOpen ? 1 : 0,
                  width: searchOpen ? 150 : 0,
                  transition: "all 0.3s ease",
                }}
              />
              <IconButton
                onClick={() => setSearchOpen(!searchOpen)}
                sx={{ color: scrolled ? "white" : "black" }}
              >
                {searchOpen ? <CloseIcon /> : <SearchIcon />}
              </IconButton>
            </Box>
            {user ? (
              <IconButton onClick={handleMenuOpen} sx={{ color: "#202020" }}>
                <AccountCircle />
              </IconButton>
            ) : (
              <>
                <Button
                  sx={{
                    color: scrolled ? "white" : "black"
                  }}  
                  onClick={() => {
                    setAuthTab(0); // login tab
                    setAuthOpen(true);
                  }}
                >
                  Login
                </Button>

                <Button
                  sx={{
                    color: scrolled ? "white" : "black"
                  }}
                  onClick={() => {
                    setAuthTab(1); // signup tab
                    setAuthOpen(true);
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* 🔥 MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
    
    {/* 🔥 NAV LINKS */}
    <List>
      {navLinks.map((link) => (
        <ListItem
          button
          key={link.name}
          component={Link}
          to={link.path}
          onClick={() => setMobileOpen(false)}
        >
          <ListItemText primary={link.name} />
        </ListItem>
      ))}
    </List>

    {/*AUTH SECTION*/}
    <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            setAuthTab(0);
            setAuthOpen(true);
            setMobileOpen(false);
          }}
        >
          Login
        </Button>

        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            setAuthTab(1);
            setAuthOpen(true);
            setMobileOpen(false);
          }}
        >
          Sign Up
        </Button>
    </Box>
  </Box>
      </Drawer>

    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to="/user-profile">
        Profile
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        Logout
      </MenuItem>
    </Menu>

    <AuthModal
      open={authOpen}
      tab={authTab}
      setTab={setAuthTab}
      handleClose={() => setAuthOpen(false)}
    />
    </>
  );
}

export default NavbarLogin