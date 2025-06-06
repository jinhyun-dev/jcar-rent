import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import { datatable } from "../../../common/json/datatable";
import CommonDatatable from "../../../common/dataTable";
const DataTables = () => {
  const routes = all_routes;
  const data = datatable;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a: any, b: any) =>
        a.name.length - b.name.length,
    },
    {
      title: "Position",
      dataIndex: "position",
      sorter: (a: any, b: any) =>
        a.position.length - b.position.length,
    },
    {
      title: "Office",
      dataIndex: "office",
      sorter: (a: any, b: any) =>
        a.office.length - b.office.length,
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a: any, b: any) =>
        a.age.length - b.age.length,
    },
    {
      title: "Start date",
      dataIndex: "startDate",
      sorter: (a: any, b: any) =>
        a.startDate.length - b.startDate.length,
    },
    {
      title: "Salary",
      dataIndex: "age",
      sorter: (a: any, b: any) =>
        a.salary.length - b.salary.length,
    },
    
  ];
  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Data Tables</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Data Tables</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Default Datatable</h4>
                  <p className="card-text">
                    This is the most basic example of the datatables
                  </p>
                </div>
                <div className="card-body">
                  <CommonDatatable dataSource={data} columns={columns} />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Page Header */}
     
    </div>
  );
};

export default DataTables;
