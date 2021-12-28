import React, { useContext } from "react";
import { DropdownMenu, MenuItem } from "react-bootstrap-dropdown-menu";
import { LoginContext } from "./../../contexts/login";
import { HistoryContext } from "../../contexts/history";
import { ProfileContext } from "../../contexts/profile";

const SettingsMenu = () => {
  const loginContext = useContext(LoginContext);
  const historyContext = useContext(HistoryContext);

  return (
    <DropdownMenu position="left" iconColor="#FFFFFF">
      <MenuItem text="edit profile" location="/profile/edit" />
      <MenuItem type="separator" />
      <MenuItem text="create product" location="/create/product" />
      <MenuItem text="show and edit" location="/main/my/product" />
      <MenuItem text="history" location="/product/history" />
      <MenuItem text="pending approval" location="/products/approval" />
      <MenuItem text="rejected" location="/products/rejected" />
      <MenuItem type="separator" />
      <MenuItem text="signOut" onClick={loginContext.logout} />
    </DropdownMenu>
  );
};

export default SettingsMenu;

