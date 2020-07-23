import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  LinearProgress,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ArrowBack as ArrowBackIcon,
  Menu as MenuIcon,
} from "@material-ui/icons";
import PropType from "prop-types";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarComponent = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const user = useSelector((state) => state.User);

  const open = Boolean(anchorEl);

  const currentRoute = props.location.pathname;

  const routeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    routeLoading();
  }, [currentRoute]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    props.history.push("/logout");
  };

  return (
    <div className={classes.root}>
      <Helmet onChangeClientState={(newState) => setTitle(newState.title)} />

      <AppBar position="static">
        <Toolbar>
          {user.isSuccess && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={props.toggleSidebar}
            >
              {props.sideBarShow ? <ArrowBackIcon /> : <MenuIcon />}
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            {title?.split(" - ")[0]}
          </Typography>
          {user.isSuccess && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt={user.data.name} src={user.data.avatarURL} />
                <Typography variant="body2" className="text-white ml-2">
                  {user.data.name}
                </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={(e) => setAnchorEl(null)}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {isLoading && <LinearProgress />}
    </div>
  );
};
AppBarComponent.prototype = {
  toggleSidebar: PropType.func.isRequired,
};

export default withRouter(AppBarComponent);
