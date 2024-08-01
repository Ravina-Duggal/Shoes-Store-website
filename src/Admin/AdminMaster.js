import { Outlet } from "react-router-dom";
import AdminHeader from "./layouts/AdminHeader";

export default function AdminMaster(){
    return(
        <>
        <AdminHeader/>
        <Outlet/>
        </>
    )
}