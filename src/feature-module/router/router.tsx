/* eslint-disable @typescript-eslint/no-unused-vars */		
import React, { useEffect, useState } from "react";
import {
  adminAuth,
  adminRoutes,
  authenticationRoute,
  blogroutes,
  listingroutes,
  pageroutes,
  publicRoutes,
  settingsRoute,
  uiInterface,
  usermodule,
} from "./router.link";
import {  Outlet, Route, Routes, useLocation } from "react-router-dom";
import Feature from "../feature";
import UserFeature from "../userFeature";
import HomeFeature from "../homeFeature";
import AdminAuthFeature from "../adminAuthFeature";
import AdminFeature from "../adminFeature";
import UIFeature from "../uiFeature";
import SettingsFeature from "../settingsFeature";

const AllRoutes = () => {
  const [styleLoaded, setStyleLoaded] = useState(false);
  const location = useLocation();
   useEffect(() => {
      setStyleLoaded(false);
      if (location.pathname.includes("/admin")) {
        import("../../style/admin/main.scss")
          .then(() => setStyleLoaded(true))
          .catch((err) => console.error("Admin style load error: ", err));
      } else {
        import("../../style/scss/main.scss")
          .then(() => setStyleLoaded(true))
          .catch((err) => console.error("Main style load error: ", err));
      }
    }, [location]);
    // if (!styleLoaded) {
    //   return null; // You could show a loading spinner here if necessary
    // }
  return (
    <>
      <Routes>
        
        <Route path={"/"} element={<HomeFeature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route path={"/pages"} element={<Feature />}>
          {pageroutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route path={"/blog"} element={<Feature />}>
          {blogroutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route path={"/listings"} element={<Feature />}>
          {listingroutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route path={"/user"} element={<UserFeature />}>
          {usermodule.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        {/* <Route element={<Outlet />}>
          {authenticationRoute.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route> */}
        <Route path={"/admin"} element={<AdminAuthFeature />}>
          {adminAuth.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route path={"/admin"} element={<AdminFeature />}>
          {adminRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route path={"/admin"} element={<UIFeature />}>
          {uiInterface.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route path={"/admin"} element={<SettingsFeature />}>
          {settingsRoute.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
          
      </Routes>
    </>
  );
};
export default AllRoutes;
