import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import TwitterIcon from "@mui/icons-material/Twitter";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const validate = () => {
    let formErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern) || !email.endsWith(".com")) {
      formErrors.email = "Please enter a valid email address.";
    }
    const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!password.match(passwordPattern)) {
      formErrors.password = "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("/api/user/validate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const result = await response.json();
          setEmail("");
          setPassword("");
          setApiError("");
          console.log("Login successful:", result);
        } else {
          const errorData = await response.json();
          setApiError(errorData.message || "Login failed. Please try again.");
        }
      } catch (error) {
        setApiError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F4D941", // Light teal background for an animal-friendly feel
        padding: 4,
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
        <Typography variant="h5" fontWeight="bold" mb={4} color="#F0AE3B"> {/* Dark teal color for text */}
          Login to your Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email/Mobile No."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
            margin="normal"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
            margin="normal"
          />

          {apiError && (
            <Typography color="error" variant="body2" mt={2}>
              {apiError}
            </Typography>
          )}

          <Box mt={4} mb={5} display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: "100%", maxWidth: "200px", backgroundColor: "#F0AE3B", "&:hover": { backgroundColor: "#EC8235" }}}
            >
              Log In
            </Button>
          </Box>

          <Box mt={3}  display="flex" justifyContent="space-around" alignItems="center">
            <Typography variant="body2">
              <a href="#" style={{ color: "#F0AE3B", textDecoration: "none" }}>
                Forgot Password?
              </a>
            </Typography>
            <Typography variant="body2">
              <a href="/signup" style={{ color: "#F0AE3B", textDecoration: "none" }}>
                Register
              </a>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginForm;
