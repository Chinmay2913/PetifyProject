import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    let formErrors = {};

    if (name.length > 30) {
      formErrors.name = "Name should be less than 30 characters.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern) || !email.endsWith('.com')) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
      formErrors.mobile = "Mobile number should be exactly 10 digits.";
    }

    const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!password.match(passwordPattern)) {
      formErrors.password = "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://localhost:3000/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            mobile,
            password,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          setSuccessMessage("Registration successful! Please log in.");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setMobile("");
          setName("");
          setErrors({});
        } else {
          const errorData = await response.json();
          setErrors({ apiError: errorData.message || "Registration failed. Please try again." });
        }
      } catch (error) {
        setErrors({ apiError: "An error occurred. Please try again." });
      }
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F4D941", // Light green for an animal-friendly feel
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 2,
          width: "100%",
          backgroundColor: "#ffffff", // White background for the form
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for subtle depth
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={4} color="#F0AE3B"> {/* Dark green color for text */}
          Create New Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
            margin="normal"
          />

          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
            margin="normal"
          />

          <TextField
            fullWidth
            variant="outlined"
            label="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            error={Boolean(errors.mobile)}
            helperText={errors.mobile}
            margin="normal"
          />

          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            variant="outlined"
            label="Re-enter Password"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {errors.apiError && <Typography color="error" variant="body2" mt={2}>{errors.apiError}</Typography>}
          {successMessage && <Typography color="success" variant="body2" mt={2}>{successMessage}</Typography>}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: "100%", mt: 3, backgroundColor: "#F0AE3B", "&:hover": { backgroundColor: "#EC8235" }}}
          >
            Register
          </Button>

          <Box mt={3} textAlign="center">
            <Typography variant="body2">
              Already registered?
              <Link
                to="/login"
                style={{
                  color: "#F0AE3B",
                  textDecoration: "none",
                  marginLeft: 8,
                }}
              >
                Log in
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default RegistrationForm;
