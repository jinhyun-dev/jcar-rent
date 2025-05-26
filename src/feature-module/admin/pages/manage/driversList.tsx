import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import PredefinedDateRanges from "../../common/range-picker/datePicker";
import { driversData } from "../../common/json/driversList";
import CommonDatatable from "../../common/dataTable";
import { all_routes } from "../../../router/all_routes";
import CustomSelect from "../../common/select/commonSelect";
import { Gender } from "../../common/json/selectOption";
import { DatePicker } from "antd";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const DriversList = () => {
  const data = driversData;
  const [searchValue, setSearchValue] = useState<string>("");
  const [value, setValue] = useState<any>();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const columns = [
    {
      title: "DRIVERS",
      dataIndex: "DRIVERS",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar rounded-circle me-2 flex-shrink-0">
            <ImageWithBasePath
              src={`assets/admin/img/customer/${record.IMAGE}`}
              className="rounded-circle"
              alt="img"
            />
          </Link>
          <div>
            <h6 className="fs-14 fw-semibold">
              <Link to="#">{text}</Link>
            </h6>
            <p>{record.PHONE}</p>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.DRIVERS.length - b.DRIVERS.length,
    },
    {
      title: "EMAIL",
      dataIndex: "EMAIL",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.EMAIL.length - b.EMAIL.length,
    },
    {
      title: "LICENSE NO",
      dataIndex: "LICENSE_NO",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.LICENSE_NO.length - b.LICENSE_NO.length,
    },
    {
      title: "EXPIRY DATE",
      dataIndex: "EXPIRY_DATE",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.EXPIRY_DATE.length - b.EXPIRY_DATE.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span className="badge badge-dark-transparent d-flex align-items-center">
          <i
            className={`ti ti-point-filled  ${text === "Active" ? "text-success" : "text-danger"} me-1`}
          />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.STATUS.length - b.STATUS.length,
    },
    {
      title: "Action",
      dataIndex: "",
      render: () => (
        <div className="dropdown">
          <button
            className="btn btn-icon btn-sm"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ti ti-dots-vertical" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end p-2">
            <li>
              <Link
                className="dropdown-item rounded-1"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#edit_driver"
              >
                <i className="ti ti-edit me-1" />
                Edit
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_driver"
              >
                <i className="ti ti-trash me-1" />
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Drivers</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Drivers
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
              <Link to="#" className="btn btn-white d-flex align-items-center">
                <i className="ti ti-printer me-2" />
                Print
              </Link>
            </div>
            <div className="mb-2 me-2">
              <div className="dropdown">
                <Link
                  to="#"
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export
                </Link>
              </div>
            </div>
            <div className="mb-2">
              <Link
                to="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_driver"
              >
                <i className="ti ti-plus me-2" />
                Add New Driver
              </Link>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <div className="d-flex align-items-center flex-wrap row-gap-3">
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-filter me-1" /> Sort By : Latest
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-2">
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Latest
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Ascending
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Desending
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Last Month
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Last 7 Days
                  </Link>
                </li>
              </ul>
            </div>
            <div className="me-2">
              <div className="input-icon-start position-relative topdatepicker">
                <span className="input-icon-addon">
                  <i className="ti ti-calendar" />
                </span>
                <PredefinedDateRanges />
              </div>
            </div>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="ti ti-badge fs-16 me-1" />
                Status
              </Link>
              <ul className="dropdown-menu dropdown-menu-md p-2">
                <li className="dropdown-item">Active</li>
                <li className="dropdown-item">Inactive</li>
              </ul>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-edit-circle me-1" /> Bulk Actions
              </Link>
              <ul className="dropdown-menu dropdown-menu-end p-2">
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
            <div className="top-search me-2">
              <div className="top-search-group">
                <span className="input-icon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchValue} // Controlled input
                  onChange={handleSearchChange} // Update search value
                />
              </div>
            </div>
            <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-layout-board me-1" /> Columns
              </Link>
              <div className="dropdown-menu dropdown-menu-lg p-2">
                <ul>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span className="d-inline-flex align-items-center">
                        <i className="ti ti-grip-vertical me-1" />
                        DRIVERS
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        EMAIL
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        LICENSE NO
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        EXPIRY DATE
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        STATUS
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Table Header */}
        {/* Custom Data Table */}
        <CommonDatatable
          dataSource={data}
          columns={columns}
          searchValue={searchValue}
        />
        {/* Custom Data Table */}
      </div>

      {/* Delete  */}
      <div className="modal fade" id="delete_driver">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Driver</h4>
              <p className="mb-3">Are you sure you want to delete Driver?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete */}
      {/* Add Driver */}
      <div className="modal fade" id="add_driver">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Driver</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="row">
                <div className="mb-3">
                  <label className="form-label">
                    Image <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                      <i className="ti ti-photo-up text-gray-4 fs-24" />
                    </div>
                    <div className="profile-upload">
                      <div className="profile-uploader d-flex align-items-center">
                        <div className="drag-upload-btn btn btn-md btn-dark">
                          <i className="ti ti-photo-up fs-14" />
                          Upload
                          <input
                            type="file"
                            className="form-control image-sign"
                            multiple
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="fs-14">
                          Upload Image size 180*180, within 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Driver Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <CustomSelect
                      options={Gender}
                      className="select d-flex"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      country="US"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <h6 className="fs-16 fw-medium mb-2">License Details</h6>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Card Number <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Date of Issue <span className="text-danger">*</span>
                    </label>
                    <div className="input-icon-end position-relative">
                      <DatePicker
                        className="form-control datetimepicker"
                        placeholder="dd/mm/yyyy"
                      />
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Valid Date <span className="text-danger">*</span>
                    </label>
                    <div className="input-icon-end position-relative">
                      <DatePicker
                        className="form-control datetimepicker"
                        placeholder="dd/mm/yyyy"
                      />
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="form-label"> Document</label>
                  <div className="document-upload text-center br-3 mb-3">
                    <ImageWithBasePath
                      src="assets/admin/img/icons/upload-icon.svg"
                      alt="img"
                      className="mb-2"
                    />
                    <p className="mb-2">
                      Drop your files here or{" "}
                      <span className="text-info text-decoration-underline">
                        Browse
                      </span>
                    </p>
                    <p className="fs-12 mb-0">Maximum size 50mb</p>
                    <input
                      type="file"
                      className="form-control image-sign"
                      multiple
                      accept=".pdf, .txt, .doc, .docx"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Driver */}
      {/* Add Driver */}
      <div className="modal fade" id="edit_driver">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Edit Driver</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="row">
                <div className="mb-3">
                  <label className="form-label">
                    Image <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames">
                      <ImageWithBasePath
                        src="assets/admin/img/customer/customer-01.jpg"
                        className="img-fluid rounded"
                        alt="img"
                      />
                      <span className="avatar-badge bg-light text-danger m-1">
                        <i className="ti ti-trash"></i>
                      </span>
                    </div>
                    <div className="profile-upload">
                      <div className="profile-uploader d-flex align-items-center">
                        <div className="drag-upload-btn btn btn-md btn-dark">
                          <i className="ti ti-photo-up fs-14" />
                          Upload
                          <input
                            type="file"
                            className="form-control image-sign"
                            multiple
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="fs-14">
                          Upload Image size 180*180, within 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Driver Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue="Reuben Keen"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <CustomSelect
                      options={Gender}
                      defaultValue={Gender[1]}
                      className="select d-flex"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      country="US"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="reuben@example.com"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="2881 Jarvis Street"
                      type="text"
                    />
                  </div>
                </div>
                <h6 className="fs-16 fw-medium mb-2">License Details</h6>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Card Number <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="DL123456789"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Date of Issue <span className="text-danger">*</span>
                    </label>
                    <div className="input-icon-end position-relative">
                      <DatePicker
                        className="form-control datetimepicker"
                        placeholder="28-03-2025"
                      />
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Valid Date <span className="text-danger">*</span>
                    </label>
                    <div className="input-icon-end position-relative">
                      <DatePicker
                        className="form-control datetimepicker"
                        placeholder="30-03-2025"
                      />
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="form-label"> Document</label>
                  <div className="document-upload text-center br-3 mb-3">
                    <ImageWithBasePath
                      src="assets/admin/img/icons/upload-icon.svg"
                      alt="img"
                      className="mb-2"
                    />
                    <p className="mb-2">
                      Drop your files here or{" "}
                      <span className="text-info text-decoration-underline">
                        Browse
                      </span>
                    </p>
                    <p className="fs-12 mb-0">Maximum size 50mb</p>
                    <input
                      type="file"
                      className="form-control image-sign"
                      multiple
                      accept=".pdf, .txt, .doc, .docx"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Create New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Driver */}
    </>
  );
};

export default DriversList;
