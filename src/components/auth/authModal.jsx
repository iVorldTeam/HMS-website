import React from "react";
import { Dialog, Tabs, Tab, Box, Divider } from "@mui/material";
import Login from "../Pages/login";
import Signup from "../Pages/signup";

const AuthModal = ({ open, handleClose, tab, setTab }) => {
  const handleChange = (e, newValue) => setTab(newValue);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
          sx: {
          backdropFilter: "blur(16px)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
          borderRadius: 4,
          border: "1px solid rgba(255,255,255,0.2)",
        }
      }}
    >
      <Tabs
        value={tab}
        onChange={handleChange}
        centered
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tab label="Login" />
        <Tab label="Signup" />
      </Tabs>

      <Box
        p={3}
        sx={{
          maxHeight: "70vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
          display: "none"
        }}}
      >
        {tab === 0 && <Login handleClose={handleClose} />}
        {tab === 1 && <Signup handleClose={handleClose} />}
      </Box>
    </Dialog>
  );
};

export default AuthModal;