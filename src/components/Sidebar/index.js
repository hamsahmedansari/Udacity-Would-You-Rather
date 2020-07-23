import React from "react";
import { MoveToInbox, Mail } from "@material-ui/icons";
import {
  SwipeableDrawer,
  Divider,
  ListItemText,
  List,
  ListItemIcon,
  ListItem,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import PropType from "prop-types";
import "./style.scss";
import { withRouter } from "react-router-dom";

const navbars = [
  { title: "Home", link: "/" },
  { title: "New Question", link: "/question/new" },
  { title: "Leader Board", link: "/leaderboard" },
];

const Sidebar = (props) => {
  const navigateTo = (route) => props.history.push(route);
  const handleLogout = () => props.history.push("/logout");
  return (
    <SwipeableDrawer
      variant="persistent"
      anchor="left"
      open={props.open}
      onClose={props.onClose}
      onOpen={props.onOpen}
    >
      <div className="fix-sidebar-width sidebar-bar-container">
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="body1">Would You Rather App</Typography>
            </Toolbar>
          </AppBar>
          <Divider />
          <List>
            {navbars.map((item, index) => (
              <ListItem
                button
                key={item.title}
                onClick={(e) => navigateTo(item.link)}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <Divider />
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <MoveToInbox />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

Sidebar.prototype = {
  open: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
};

export default withRouter(Sidebar);
