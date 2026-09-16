import React, { useState } from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Signup = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    fname: "", lname: "", email: "", password: ""
  });

  const signup = () => {
    fetch("http://localhost:3000/api/users/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        handleClose();
      })
      .catch(err => console.log(err));
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6" align="center">Create Account</Typography>

      <Button
        variant="outlined"
        startIcon={<Google />}
        sx={{ mb: 2 }}
        fullWidth
      >
        Continue with Google
      </Button>

      <Divider>OR</Divider>

      <TextField
        fullWidth label="First Name" name="fname"
        onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
      />
      <TextField
        fullWidth label="Last Name" name="lname"
        onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
      />
      <TextField
        fullWidth label="Email" name="email"
        onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
      />
      <TextField
        fullWidth label="Password" type="password" name="password"
        onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
      />

      <Button variant="contained" fullWidth onClick={signup}>
        Signup
      </Button>
    </Box>
  );
};

export default Signup;