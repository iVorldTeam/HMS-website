import React, { useState } from "react";
import { Box, TextField, Button, Typography, InputAdornment, IconButton, Divider } from "@mui/material";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import { useContextData } from "../context/contextApi";

const Login = ({ handleClose }) => {
  const { setUserProfile } = useContextData();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const loginFunc = () => {
    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setUserProfile(data.user);
        handleClose();
        if (data.user.role === "admin") window.location.href = "/dashboard";
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6" align="center">Login to Your Account</Typography>

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
        fullWidth
        label="Email"
        name="email"
        type="email"
        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
      />

      <TextField
        fullWidth
        label="Password"
        name="password"
        type={showPassword ? "text" : "password"}
        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button variant="contained" fullWidth onClick={loginFunc}>
        Login
      </Button>
    </Box>
  );
};

export default Login;