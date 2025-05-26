import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminHeader from "./admin/common/header/adminHeader";
import AdminSidebar from "./admin/common/sidebar/adminSidebar";
import AdminFooter from "./admin/common/footer/adminFooter";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../core/data/redux/commonSlice";
import SettingsSidebar from "./admin/common/settings-sidebar/settingsSidebar";
import { all_routes } from "./router/all_routes";

const SettingsFeature = () => {
  const dispatch = useDispatch();
  const expandMenu = useSelector((state: any) => state.commonSlice.expandMenu);
  const miniSidebar = useSelector(
    (state: any) => state.commonSlice.miniSidebar
  );
  const mobileSidebar = useSelector(
    (state: any) => state.commonSlice.mobileSidebar
  );
  const toggleMobileSidebar = () => {
    dispatch(setMobileSidebar(!mobileSidebar));
  };
  return (
    <>
      <div
        className={`${!expandMenu && miniSidebar ? "expand-menu" : ""} ${miniSidebar ? "mini-sidebar" : ""}`}
      >
        <div className={`main-wrapper ${mobileSidebar ? "slide-nav" : ""}`}>
          <AdminHeader />
          <AdminSidebar />
          <div className="page-wrapper">
            <div className="content me-4 pb-0">
              <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                <div className="my-auto mb-2">
                  <h2 className="mb-1">Settings</h2>
                  <nav>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link to={all_routes.adminDashboard}>Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Settings
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="row">
                <SettingsSidebar />
                <div className="col-xl-9">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
          <AdminFooter />
        </div>
        <div
          className={`sidebar-overlay ${mobileSidebar ? "opened" : ""}`}
          onClick={toggleMobileSidebar}
        ></div>
      </div>
    </>
  );
};

export default SettingsFeature;
