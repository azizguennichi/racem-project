import React from "react";
import NavRigas from "../layout/NavRigas";
import Menu from "../layout/Menu";
import CardUser from "./cardUser/CardUser";

const Admin = () => {
  return (
    <div>
      <NavRigas />
      <Menu />
      <CardUser />
    </div>
  );
};

export default Admin;
