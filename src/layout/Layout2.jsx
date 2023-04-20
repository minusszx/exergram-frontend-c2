import React from "react";
import NavMenu from "../components/NavMenu/NavMenu";

function Layout2(props) {
  const { children } = props;

  return (
    <div>
      <NavMenu />
      {children}
    </div>
  );
}

export default Layout2;
