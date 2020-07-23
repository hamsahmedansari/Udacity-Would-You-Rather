import React, { useState, useEffect } from "react";
import { AppBar, Sidebar } from "..";
import { useDispatch } from "react-redux";
import { Questions } from "../../store/actions";
import "./style.scss";

const Layout = (props) => {
  const [sideBarShow, setSideBarShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Questions.getAll());
  });
  return (
    <div>
      <div className="d-flex justify-content-between align-item-start">
        <div className={sideBarShow ? "fix-sidebar-width" : ""}>
          <Sidebar
            open={sideBarShow}
            onClose={(e) => setSideBarShow(false)}
            onOpen={(e) => setSideBarShow(true)}
          />
        </div>
        <div className="flex-grow-1">
          <AppBar
            toggleSidebar={(e) => setSideBarShow(!sideBarShow)}
            sideBarShow={sideBarShow}
          />
          <div className="container"> {props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
