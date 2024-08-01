import { Outlet } from "react-router-dom";
import UserHeader from "./layouts/UserHeader";
import UserFooter from "./layouts/UserFooter";

export default function UserMaster(){
    return(
        <>
        <UserHeader/>
        <Outlet/>
        <UserFooter/>
        </>
    )
}