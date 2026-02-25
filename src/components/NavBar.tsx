import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "flex-start",
          gap: 4,
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            fontWeight: 700,
            color: "#2563eb",
            textDecoration: "none",
          }}
        >
          LinkedInAutomation
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={NavLink}
            to="/"
            sx={{ color: "#374151", fontWeight: 500 }}
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to="/about"
            sx={{ color: "#374151", fontWeight: 500 }}
          >
            About
          </Button>
        </Box>

        
        <Button
          variant="contained"
          sx={{
            ml: 55,
            borderRadius: "999px",
            textTransform: "none",
            px: 3,
          }}
        >
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;