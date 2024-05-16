import NavLinks from "@/app/dashboard/nav-links"
import Logo from "./Logo"
import { LiaSignOutAltSolid } from "react-icons/lia";


const SideNav = () => {
  return (
   <div className="side-bar">
    <div className="logo-wrapper">
      <Logo />
    </div>
    <div className="menu">
      <NavLinks />
    </div>
    <div className="sign-out">
      <LiaSignOutAltSolid />
      Sign Out
    </div>
   </div>
  )
}

export default SideNav