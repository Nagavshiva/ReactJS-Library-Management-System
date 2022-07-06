import "./Sidebar.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Avatar, Button, Menu, MenuItem, Stack, Tooltip } from "@mui/material";
import NestedList from "./NestedList";
import ViewBooks from "./Pages/ViewBooks";
import AddBooks from "./Pages/AddBooks";

import IssuedBooks from "./Pages/IssueBooks";
import Issue from "./Pages/Issue";
import BookList from "./Pages/BookList";
import Logo from "../assets/icons8-library-50.png";
import { Bounce, Slide } from "react-awesome-reveal";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

const SidebarHeading = styled(Typography)`
  font-family: "Barlow", sans-serif;
  font-weight: 300;
`;

const StyledDrawer = styled(Drawer)(({ theme }) => ({}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = ["About Us", "Contact Us"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <Bounce>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            background:
              " linear-gradient(to right top, #6becc2, #57e0c2, #44d4c0, #32c7be, #22bbba, #18b7bf, #17b3c3, #1eafc6, #32b1d2, #48b2dc, #5eb3e5, #74b4eb)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>

            <Stack>
              <img src={Logo} />
            </Stack>

            <SidebarHeading variant="h6" noWrap component="div">
              Verso Library
            </SidebarHeading>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "right",
                justifyContent: "right",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "right",
                justifyContent: "right",
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://thumbs.dreamstime.com/b/abstract-letter-n-logo-element-design-beauty-elegant-geometric-curve-logotype-orange-gradient-symbol-creative-modern-abstract-114271281.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        <StyledDrawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",

              background:
                " linear-gradient(to right top, #6becc2, #57e0c2, #44d4c0, #32c7be, #22bbba, #18b7bf, #17b3c3, #1eafc6, #32b1d2, #48b2dc, #5eb3e5, #74b4eb)",
              color: "white",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Slide>
            <DrawerHeader>
              <SidebarHeading variant="h6">Verso Library</SidebarHeading>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
          </Slide>
          <Divider />
          <NestedList />

          <Divider />
        </StyledDrawer>

        <Main open={open}>
          <DrawerHeader />

          <Routes>
            <Route path="/" element={<ViewBooks />} />
            <Route path="/addbooks" element={<AddBooks />} />
            <Route path="/booklist" element={<BookList />} />
            <Route path="/issuedbooks" element={<IssuedBooks />} />
            <Route path="/issue" element={<Issue />} />
          </Routes>
        </Main>
      </Box>
    </Bounce>
  );
}
