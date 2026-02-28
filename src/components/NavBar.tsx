import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import type { RootState } from "../store/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb" }}>
      <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Typography variant="h6" component={Link} to="/" sx={{ fontWeight: 700, color: "#2563eb", textDecoration: "none" }}>
            LinkedInAutomation
          </Typography>
          <Button component={NavLink} to="/" sx={{ color: "#374151" }}>Home</Button>
          <Button component={NavLink} to="/about" sx={{ color: "#374151" }}>About</Button>
        </Box>

        {isAuth ? (
          <Button variant="outlined" color="primary" onClick={handleLogout} sx={{ borderRadius: "999px", textTransform: "none" }}>
            Logout
          </Button>
        ) : (
          <Button variant="contained" component={Link} to="/signin" sx={{ borderRadius: "999px", textTransform: "none" }}>
            Get Started
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;