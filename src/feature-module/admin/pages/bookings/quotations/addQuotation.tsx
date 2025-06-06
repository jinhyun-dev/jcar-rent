import React, { useState } from "react";
import BookingModal from "../../../common/modal/bookingModal";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../router/all_routes";
import CustomSelect from "../../../common/select/commonSelect";
import {
  Customer,
  Driver,
  DrivingType,
  PickupLocation,
  ReturnLocation,
  Tarrif,
  TaxType,
} from "../../../common/json/selectOption";
import { DatePicker, TimePicker } from "antd";

const AddQuotation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <>
      <div className="content me-4">
        <div className="mb-3">
          <Link
            to={all_routes.adminQuotationsList}
            className="d-inline-flex align-items-center fw-medium"
          >
            <i className="ti ti-arrow-narrow-left me-2" />
            Quotations
          </Link>
        </div>
        <div className="wizard-form">
          {currentStep === 1 && (
            <fieldset id="first-field">
              <div className="row">
                <div className="col-lg-12">
                  <form>
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="reservation-wizard mb-4">
                          <ul
                            className="d-flex align-items-center flex-wrap row-gap-2"
                            id="progressbar"
                          >
                            <li className="d-flex align-items-center active me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-calendar" />
                              </span>
                              <h6>Car &amp; Dates Info</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-user-check" />
                              </span>
                              <h6>Customer</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-float-center" />
                              </span>
                              <h6>Extra Services</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-file-invoice" />
                              </span>
                              <h6>Billing Details</h6>
                            </li>
                          </ul>
                        </div>
                        <div className="card card-bg">
                          <div className="card-body">
                            <h4 className="d-flex align-items-center">
                              <i className="ti ti-info-circle me-2 text-secondary fs-24" />
                              Basic Info
                            </h4>
                          </div>
                        </div>
                        <div className="pb-3">
                          <div className="border-bottom mb-3 pb-3">
                            <div className="row gx-3">
                              <div className="col-lg-3 col-sm-12">
                                <div>
                                  <h5 className="mb-1">
                                    Date &amp; Time Of Travel
                                  </h5>
                                  <p>Add Information on Date of Travel</p>
                                </div>
                              </div>
                              <div className="col-lg-9 col-sm-12">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Tarrif
                                      </label>
                                      <CustomSelect
                                        options={Tarrif}
                                        className="select d-flex"
                                        placeholder="Select"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Driving Type
                                      </label>

                                      <CustomSelect
                                        options={DrivingType}
                                        className="select d-flex"
                                        placeholder="Select"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Passengers
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="row gx-3">
                                      <div className="col-md-7">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Start Date{" "}
                                            <span className="text-danger">
                                              {" "}
                                              *
                                            </span>{" "}
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
                                      <div className="col-md-5">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Time{" "}
                                            <span className="text-danger">
                                              {" "}
                                              *
                                            </span>{" "}
                                          </label>
                                          <div className="d-flex align-items-center">
                                            <div className="input-icon-end position-relative flex-fill">
                                              <TimePicker className="form-control timepicker" />
                                              <span className="input-icon-addon">
                                                <i className="ti ti-clock" />
                                              </span>
                                            </div>
                                            <span className="avatar avatar-sm flex-shrink-0 bg-success fs-14 rounded-circle ms-3">
                                              <i className="ti ti-chevron-right" />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="row gx-3">
                                      <div className="col-md-8">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            End Date{" "}
                                            <span className="text-danger">
                                              {" "}
                                              *
                                            </span>{" "}
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
                                            Time{" "}
                                            <span className="text-danger">
                                              {" "}
                                              *
                                            </span>{" "}
                                          </label>
                                          <div className="input-icon-end position-relative">
                                            <TimePicker className="form-control timepicker" />
                                            <span className="input-icon-addon">
                                              <i className="ti ti-clock" />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Pickup Location{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <CustomSelect
                                        options={PickupLocation}
                                        className="select d-flex"
                                        placeholder="Select"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Return Location{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <CustomSelect
                                        options={ReturnLocation}
                                        className="select d-flex"
                                        placeholder="Select"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Security Deposit{" "}
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <label className="d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-2"
                                      type="checkbox"
                                    />
                                    Return Same Location
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row ">
                            <div className="col-lg-3 col-sm-12">
                              <div>
                                <h5 className="mb-1">Select Vehicle</h5>
                                <p>Select Vehicle for your rental</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-sm-12">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="d-flex align-items-center mb-3">
                                    <div className="dropdown me-2">
                                      <Link
                                        to="#filtercollapse"
                                        className="filtercollapse coloumn d-inline-flex align-items-center"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="true"
                                        aria-controls="filtercollapse"
                                      >
                                        <i className="ti ti-filter me-1" />{" "}
                                        Filter{" "}
                                        <span className="badge badge-xs rounded-pill bg-danger ms-2">
                                          0
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="top-search me-2  w-100">
                                      <div className="top-search-group">
                                        <span className="input-icon">
                                          <i className="ti ti-search" />
                                        </span>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Search"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <Link
                                        to={all_routes.addCar}
                                        className="btn btn-dark d-inline-flex min-width-100 align-items-center"
                                      >
                                        <i className="ti ti-plus me-1" />
                                        Add New
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="collapse" id="filtercollapse">
                                    <div className="filterbox mb-3 px-3">
                                      <div className="row align-items-center">
                                        <div className="col-lg-10">
                                          <div className=" d-flex align-items-center flex-wrap row-gap-3">
                                            <div className="dropdown me-2">
                                              <Link
                                                to="#"
                                                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside"
                                                aria-expanded="false"
                                              >
                                                Select Brand
                                              </Link>
                                              <ul className="dropdown-menu dropdown-menu-lg p-2">
                                                <li>
                                                  <div className="top-search m-2">
                                                    <div className="top-search-group">
                                                      <span className="input-icon">
                                                        <i className="ti ti-search" />
                                                      </span>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search"
                                                      />
                                                    </div>
                                                  </div>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Toyota
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Honda
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Ford
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Chevrolet
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    BMW
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="dropdown me-2">
                                              <Link
                                                to="#"
                                                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside"
                                              >
                                                Select Type
                                              </Link>
                                              <ul className="dropdown-menu dropdown-menu-lg p-2">
                                                <li>
                                                  <div className="top-search m-2">
                                                    <div className="top-search-group">
                                                      <span className="input-icon">
                                                        <i className="ti ti-search" />
                                                      </span>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search"
                                                      />
                                                    </div>
                                                  </div>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Economy
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Compact
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Sedan
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    SUV
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Luxury
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="dropdown me-2">
                                              <Link
                                                to="#"
                                                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside"
                                              >
                                                <i className="ti ti-badge me-1" />
                                                Select Model
                                              </Link>
                                              <ul className="dropdown-menu dropdown-menu-lg p-2">
                                                <li>
                                                  <div className="top-search m-2">
                                                    <div className="top-search-group">
                                                      <span className="input-icon">
                                                        <i className="ti ti-search" />
                                                      </span>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search"
                                                      />
                                                    </div>
                                                  </div>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Urban Cruiser
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Fortuner
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    V8
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Q3
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Huracan
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="dropdown">
                                              <Link
                                                to="#"
                                                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside"
                                              >
                                                <i className="ti ti-badge me-1" />
                                                Select Color
                                              </Link>
                                              <ul className="dropdown-menu dropdown-menu-lg p-2">
                                                <li>
                                                  <div className="top-search m-2">
                                                    <div className="top-search-group">
                                                      <span className="input-icon">
                                                        <i className="ti ti-search" />
                                                      </span>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search"
                                                      />
                                                    </div>
                                                  </div>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    White
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Black
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Silver
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Gray
                                                  </label>
                                                </li>
                                                <li>
                                                  <label className="dropdown-item d-flex align-items-center rounded-1">
                                                    <input
                                                      className="form-check-input m-0 me-2"
                                                      type="checkbox"
                                                    />
                                                    Blue
                                                  </label>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-2">
                                          <div className="d-flex align-items-center justify-content-end">
                                            <Link
                                              to="#"
                                              className="me-3 text-purple links"
                                            >
                                              Apply
                                            </Link>
                                            <Link
                                              to="#"
                                              className="text-danger links"
                                            >
                                              Clear All
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex bg-light justify-content-center align-items-center p-3 br-5">
                                    <div className="text-center ">
                                      <ImageWithBasePath
                                        src="assets/admin/img/icons/nodata.svg"
                                        className="mb-2"
                                        alt="nodata"
                                      />
                                      <p className="text-gray-5">
                                        No Data Available
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer px-0 pb-0">
                          <div className="d-flex align-items-center justify-content-end">
                            <div className="field-btns">
                              <button
                                className="btn btn-light me-2"
                                type="button"
                              >
                                <i className="ti ti-chevron-left me-1" />
                                Cancel
                              </button>
                            </div>
                            <div className="field-btns">
                              <button
                                className="btn btn-primary wizard-next-btn"
                                type="button"
                                onClick={handleNext}
                              >
                                Add Customer{" "}
                                <i className="ti ti-chevron-right ms-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </fieldset>
          )}
          {currentStep === 2 && (
            <fieldset style={{ display: "block" }}>
              <div className="row">
                <div className="col-lg-12">
                  <form>
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="reservation-wizard mb-4">
                          <ul
                            className="d-flex align-items-center flex-wrap row-gap-2"
                            id="progressbar1"
                          >
                            <li className="d-flex align-items-center activated me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-calendar" />
                              </span>
                              <span className="active-check me-2">
                                <i className="ti ti-check" />
                              </span>
                              <h6>Car &amp; Dates Info</h6>
                            </li>
                            <li className="d-flex align-items-center active me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-user-check" />
                              </span>
                              <h6>Customer</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-float-center" />
                              </span>
                              <h6>Extra Services</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-file-invoice" />
                              </span>
                              <h6>Billing Details</h6>
                            </li>
                          </ul>
                        </div>
                        <div className="card card-bg">
                          <div className="card-body">
                            <h4 className="d-flex align-items-center">
                              <i className="ti ti-user-check me-2 text-secondary fs-24" />
                              Customer
                            </h4>
                          </div>
                        </div>
                        <div className="border-bottom mb-3">
                          <div className="row">
                            <div className="col-lg-3 col-sm-12">
                              <div className="mb-3">
                                <h6 className="mb-1">Select Customer </h6>
                                <p>Add Information of Customer</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-sm-12">
                              <div className="mb-3">
                                <label className="form-label">
                                  Customer{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="d-flex align-items-center">
                                  <div className="flex-fill ">
                                    <CustomSelect
                                      options={Customer}
                                      className="select d-flex"
                                      placeholder="Select"
                                    />
                                  </div>
                                  <div className="ms-4">
                                    <Link
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_client"
                                      className="btn btn-dark d-inline-flex align-items-center"
                                    >
                                      <i className="ti ti-plus me-1" />
                                      Add New
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-sm-12">
                            <div className="mb-3">
                              <h6 className="mb-1">Select Driver </h6>
                              <p>Add Information of Driver</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Driver <span className="text-danger">*</span>
                              </label>
                              <div className="d-flex align-items-center">
                                <div className="flex-fill ">
                                  <CustomSelect
                                    options={Driver}
                                    className="select d-flex"
                                    placeholder="Select"
                                  />
                                </div>
                                <div className="ms-4">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_driver"
                                    className="btn btn-dark d-inline-flex align-items-center"
                                  >
                                    <i className="ti ti-plus me-1" />
                                    Add New
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-end mb-3 d-none">
                              <Link
                                to="#"
                                className="text-purple text-decoration-underline fw-medium"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_price"
                              >
                                Edit Price
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer px-0 pb-0">
                          <div className="d-flex align-items-center justify-content-end">
                            <div className="field-btns">
                              <button
                                className="btn btn-light wizard-prev-btn me-2"
                                type="button"
                                onClick={handlePrev}
                              >
                                <i className="ti ti-chevron-left me-1" />
                                Back to Info
                              </button>
                            </div>
                            <div className="field-btns">
                              <button
                                className="btn btn-primary wizard-next-btn"
                                type="button"
                                onClick={handleNext}
                              >
                                Add Extra Services
                                <i className="ti ti-chevron-right ms-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </fieldset>
          )}
          {currentStep === 3 && (
            <fieldset style={{ display: "block" }}>
              <form>
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="reservation-wizard mb-4">
                      <ul
                        className="d-flex align-items-center flex-wrap row-gap-2"
                        id="progressbar2"
                      >
                        <li className="d-flex align-items-center activated me-2">
                          <span className="me-2 wizard-icon">
                            <i className="ti ti-calendar" />
                          </span>
                          <span className="active-check me-2">
                            <i className="ti ti-check" />
                          </span>
                          <h6>Car &amp; Dates Info</h6>
                        </li>
                        <li className="d-flex align-items-center activated  me-2">
                          <span className="me-2 wizard-icon">
                            <i className="ti ti-user-check" />
                          </span>
                          <span className="active-check me-2">
                            <i className="ti ti-check" />
                          </span>
                          <h6>Customer</h6>
                        </li>
                        <li className="d-flex align-items-center active me-2">
                          <span className="me-2 wizard-icon">
                            <i className="ti ti-float-center" />
                          </span>
                          <h6>Extra Services</h6>
                        </li>
                        <li className="d-flex align-items-center me-2">
                          <span className="me-2 wizard-icon">
                            <i className="ti ti-file-invoice" />
                          </span>
                          <h6>Billing Details</h6>
                        </li>
                      </ul>
                    </div>
                    <div className="card card-bg">
                      <div className="card-body">
                        <h4 className="d-flex align-items-center">
                          <i className="ti ti-float-center me-2 text-secondary fs-24" />
                          Extra Service
                        </h4>
                      </div>
                    </div>
                    <div className="row border-bottom mb-3">
                      <div className="col-lg-12 col-sm-12">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="mb-3">
                            <h6 className="mb-1">Select Extra Services</h6>
                            <p>Add extra services for your rental</p>
                          </div>
                          <Link
                            to="#"
                            className="text-purple text-decoration-underline fw-medium"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_price1"
                          >
                            Edit Price
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="custom-checkbox active">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-1"
                                  defaultChecked
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-1"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Navigation
                                  </span>
                                  <span className="d-block">
                                    Using GPS while travel
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-2"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-2"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Wi-Fi Hotspot
                                  </span>
                                  <span className="d-block">
                                    Constant portable internet
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-3"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-3"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Fuel Pre-Purchase
                                  </span>
                                  <span className="d-block">
                                    Full tank, return hassle-free
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">One Time</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-4"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-4"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Satellite Radio
                                  </span>
                                  <span className="d-block">
                                    {" "}
                                    Unlimited premium music
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-5"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-5"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    USB Charger
                                  </span>
                                  <span className="d-block">
                                    Fast charging for devices
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-6"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-6"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Toll Pass
                                  </span>
                                  <span className="d-block">
                                    Skip toll booth lines
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">One Time</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-7"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-7"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Dash Cam
                                  </span>
                                  <span className="d-block">
                                    Records trips extra security
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label className="form-check-label ms-2 ps-4">
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Express Check-in/out
                                  </span>
                                  <span className="d-block">
                                    Fast pickup &amp; return process
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox active">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-9"
                                  defaultChecked
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-9"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Child Safety Seats
                                  </span>
                                  <span className="d-block">
                                    Secure infant/toddler car seat
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-10"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-10"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Roadside Assistance
                                  </span>
                                  <span className="d-block">
                                    24/7 emergency car support
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-end">
                        <div className="field-btns">
                          <button
                            className="btn btn-light wizard-prev-btn me-2"
                            type="button"
                            onClick={handlePrev}
                          >
                            <i className="ti ti-chevron-left me-1" />
                            Back to Info
                          </button>
                        </div>
                        <div className="field-btns">
                          <button
                            className="btn btn-primary wizard-next-btn"
                            type="button"
                            onClick={handleNext}
                          >
                            Add Extra Services
                            <i className="ti ti-chevron-right ms-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </fieldset>
          )}
          {currentStep === 4 && (
            <fieldset style={{ display: "block" }}>
              <form>
                <div className="card">
                  <div className="card-body">
                    <div className="reservation-wizard mb-4">
                      <ul
                        className="d-flex align-items-center flex-wrap row-gap-2"
                        id="progressbar3"
                      >
                        <li className="d-flex align-items-center activated me-2">
                          <span className="me-2 wizard-icon">
                            <i className="ti ti-calendar" />
                          </span>
                          <span className="active-check me-2">
                            <i className="ti ti-check" />
                          </span>
                          <h6>Car &amp; Dates Info</h6>
                        </li>
                        <li className="d-flex align-items-center activated  me-2">
                          <span className="me-2 wizard-icon">
                            <i className="ti ti-user-check" />
                          </span>
                          <span className="active-check me-2">
                            <i className="ti ti-check" />
                          </span>
                          <h6>Customer</h6>
                        </li>
                        <li className="d-flex align-items-center activated me-2">
                          <span className="me-2 wizard-icon">
                            <i className="ti ti-float-center" />
                          </span>
                          <span className="active-check me-2">
                            <i className="ti ti-check" />
                          </span>
                          <h6>Extra Services</h6>
                        </li>
                        <li className="d-flex align-items-center active me-2">
                          <span className="me-2 wizard-icon">
                            <i className="ti ti-file-invoice" />
                          </span>
                          <h6>Billing Details</h6>
                        </li>
                      </ul>
                    </div>
                    <div className="card card-bg">
                      <div className="card-body">
                        <h4 className="d-flex align-items-center">
                          <i className="ti ti-file-invoice me-2 text-secondary fs-24" />
                          Billing Details
                        </h4>
                      </div>
                    </div>
                    <div className="row border-bottom mb-3">
                      <div className="col-lg-3 col-sm-12">
                        <div className="mb-3">
                          <h6 className="mb-1">Rent &amp; Service Billing</h6>
                          <p>Add extra services for your rental</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Base Kilometers (Per Day)
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Kilometers Extra Price
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Expenses</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Delivery price
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row border-bottom mb-3">
                      <div className="col-lg-3 col-sm-12">
                        <div className="d-flex">
                          <div className="form-check form-check-md form-switch me-2">
                            <label className="form-check-label form-label mt-0 mb-0">
                              <input
                                className="form-check-input form-label me-2"
                                type="checkbox"
                                role="switch"
                                defaultChecked
                              />
                            </label>
                          </div>
                          <div className="mb-3">
                            <h6 className="mb-1">Insurance</h6>
                            <p>Add Insurance of Your Ride</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label className="form-check-label ms-2 ps-4">
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Full Premium Insurance
                                  </span>
                                  <Link to="#" className="d-block text-info">
                                    +4 Benefits{" "}
                                    <i className="ti ti-info-small rounded-circle bg-gray-500 text-white" />
                                  </Link>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Onetime Ride</p>
                                  <h6>$200</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label className="form-check-label ms-2 ps-4">
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Satellite Radio
                                  </span>
                                  <Link to="#" className="d-block text-info">
                                    +6 Benefits{" "}
                                    <i className="ti ti-info-small rounded-circle bg-gray-500 text-white" />
                                  </Link>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Onetime Ride</p>
                                  <h6>$250</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-3 col-sm-12">
                        <div className="d-flex">
                          <div className="form-check form-check-md form-switch me-2">
                            <label className="form-check-label form-label mt-0 mb-0">
                              <input
                                className="form-check-input form-label me-2"
                                type="checkbox"
                                role="switch"
                                defaultChecked
                              />
                            </label>
                          </div>
                          <div className="mb-3">
                            <h6 className="mb-1">Invoice Settings</h6>
                            <p>Add Invoice Settings</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-sm-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Tax Type <span className="text-danger">*</span>
                              </label>

                              <CustomSelect
                                options={TaxType}
                                className="select d-flex"
                                placeholder="Select"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Add Tax Value{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-end">
                        <div className="field-btns">
                          <button
                            className="btn btn-light wizard-prev-btn me-2"
                            type="button"
                            onClick={handlePrev}
                          >
                            <i className="ti ti-chevron-left me-1" />
                            Back to Info
                          </button>
                        </div>
                        <div className="field-btns">
                          <Link
                            className="btn btn-primary wizard-next-btn"
                            to={all_routes.adminQuotationsList}
                          >
                            Finish &amp; Save
                            <i className="ti ti-chevron-right ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </fieldset>
          )}
        </div>
      </div>

      <BookingModal />
    </>
  );
};

export default AddQuotation;
