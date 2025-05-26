import React, { useState } from "react";
import CarBookingModal from "../../../common/modal/carBookingModal";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../router/all_routes";
import { DatePicker, Select } from "antd";
import CustomSelect from "../../../common/select/commonSelect";
import {
  Brand,
  CarModal,
  CarType,
  Doors,
  Fuel,
  MainLocation,
  Platform,
  Seater,
  Transmission,
} from "../../../common/json/selectOption";
import VideoModal from "../../../common/modal/videoModal";

const EditCar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isImage1, setImage1] = useState(true);
  const [isImage2, setImage2] = useState(true);
  const [isImage3, setImage3] = useState(true);
  const videoUrl = "https://www.youtube.com/embed/1trvO6dqQUI";

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const options = [
    {
      label: "Red",
      value: "Red",
      bg: "danger",
    },
    {
      label: "Green",
      value: "Green",
      bg: "success",
    },
    {
      label: "Blue",
      value: "Blue",
      bg: "info",
    },
  ];
  return (
    <>
      <div className="content me-0">
        <div className="mb-3">
          <Link
            to={all_routes.adminCarsList}
            className="d-inline-flex align-items-center fw-medium"
          >
            <i className="ti ti-arrow-left me-1" />
            Back to List
          </Link>
        </div>
        <div className="card mb-0">
          <div className="card-body">
            <div className="add-wizard car-steps">
              <ul className="nav d-flex align-items-center flex-wrap gap-3">
                <li
                  className={`nav-item ${
                    currentStep === 1
                      ? "active"
                      : currentStep > 1
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-info-circle me-1" />
                    Basic
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    currentStep === 2
                      ? "active"
                      : currentStep > 2
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-flame me-1" />
                    Features
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    currentStep === 3
                      ? "active"
                      : currentStep > 3
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-files me-1" />
                    Pricing
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    currentStep === 4
                      ? "active"
                      : currentStep > 4
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-float-center me-1" />
                    Extra Services
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    currentStep === 5
                      ? "active"
                      : currentStep > 5
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-file-invoice me-1" />
                    Uploads
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    currentStep === 6
                      ? "active"
                      : currentStep > 6
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-id me-1" />
                    Damages
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    currentStep === 7
                      ? "active"
                      : currentStep > 7
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-question-mark me-1" />
                    FAQ
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    currentStep === 8
                      ? "active"
                      : currentStep > 8
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-seo me-1" />
                    SEO
                  </Link>
                </li>
              </ul>
              {currentStep === 1 && (
                <fieldset id="first-field">
                  <form action="#">
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-info-circle text-secondary me-2" />
                        Basic Info
                      </h4>
                      <div className="dropdown flag-dropdown">
                        <Link
                          className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/flags/gb.svg"
                            alt="Language"
                            className="img-fluid me-1"
                          />
                          English
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/gb.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              English
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/sa.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              Arabic
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-bottom mb-4 pb-4">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Featured Image</h6>
                          <p>Upload Featured Image</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="d-flex align-items-center flex-wrap row-gap-3 upload-pic">
                            <div className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 border rounded-circle frames">
                              <ImageWithBasePath
                                src="assets/admin/img/car/car-02.jpg"
                                className="img-fluid rounded-circle"
                                alt="brands"
                              />
                              <Link
                                to="#"
                                className="upload-img-trash trash-end btn btn-sm rounded-circle"
                              >
                                <i className="ti ti-trash fs-12" />
                              </Link>
                            </div>
                            <div>
                              <div className="drag-upload-btn btn btn-md btn-dark d-inline-flex align-items-center mb-2">
                                <i className="ti ti-photo me-1" />
                                Change
                                <input
                                  type="file"
                                  className="form-control image-sign"
                                  multiple
                                />
                              </div>
                              <p>Recommended size is 500px x 500px</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-2">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Car Info</h6>
                          <p>Add Information About Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="mb-3">
                            <label className="form-label">
                              Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              defaultValue="Acura Sport"
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Permalink</label>
                            <input
                              type="text"
                              defaultValue="https://www.example.com/cars/"
                              className="form-control"
                              placeholder="https://www.example.com/cars/"
                            />
                            <p className="fs-13 fw-medium mt-1">
                              Preview :{" "}
                              <Link to="#" className="link-info">
                                https://www.example.com/cars/
                              </Link>
                            </p>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="d-flex align-items-center justify-content-between">
                                  <label className="form-label">
                                    Car Type{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Link
                                    to="#"
                                    className="link-info mb-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_type"
                                  >
                                    Add New
                                  </Link>
                                </div>
                                <CustomSelect
                                  options={CarType}
                                  defaultValue={CarType[1]}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="d-flex align-items-center justify-content-between">
                                  <label className="form-label">
                                    Brand <span className="text-danger">*</span>
                                  </label>
                                  <Link
                                    to="#"
                                    className="link-info mb-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_brand"
                                  >
                                    Add New
                                  </Link>
                                </div>
                                <CustomSelect
                                  options={Brand}
                                  defaultValue={Brand[1]}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="d-flex align-items-center justify-content-between">
                                  <label className="form-label">
                                    Model <span className="text-danger">*</span>
                                  </label>
                                  <Link
                                    to="#"
                                    className="link-info mb-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_model"
                                  >
                                    Add New
                                  </Link>
                                </div>

                                <CustomSelect
                                  options={CarModal}
                                  defaultValue={CarModal[1]}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Category{" "}
                                  <span className="text-danger">*</span>
                                </label>

                                <CustomSelect
                                  options={CarModal}
                                  defaultValue={CarModal[1]}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Plate Number
                                </label>
                                <input
                                  type="text"
                                  defaultValue="ABC 1234"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">VIN Number</label>
                                <input
                                  type="text"
                                  defaultValue="ABC12345"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Main Location{" "}
                                  <span className="text-danger">*</span>
                                </label>

                                <CustomSelect
                                  options={MainLocation}
                                  defaultValue={MainLocation[1]}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3 select-search">
                                <label className="form-label ">
                                  Link Other Location
                                </label>
                                <Select
                                  showSearch
                                  allowClear
                                  className="select w-100"
                                  placeholder="Select a Location"
                                  optionFilterProp="label"
                                  options={[
                                    {
                                      value: "jack",
                                      label: "Evans Dealer Car Zone",
                                    },
                                    {
                                      value: "lucy",
                                      label: "Allen Dealer Parking Lot",
                                    },
                                    {
                                      value: "tom",
                                      label: "Walker Auto Trade Yard",
                                    },
                                  ]}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Fuel</label>
                                <CustomSelect
                                  options={Fuel}
                                  defaultValue={Fuel[1]}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Odometer</label>
                                <input
                                  type="text"
                                  defaultValue="45000"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Color <span className="text-danger">*</span>
                                </label>
                                <Select
                                  style={{ width: "100%" }}
                                  placeholder="select one Color"
                                  className="Select"
                                  defaultValue={["Red"]}
                                  options={options}
                                  optionRender={(option) => (
                                    <>
                                      <span>
                                        <span
                                          className={`color-icon bg-${option.data.bg}`}
                                        ></span>
                                        {option.data.label}
                                      </span>
                                    </>
                                  )}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Year of Car{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="input-icon-end position-relative">
                                  <DatePicker
                                    picker="year"
                                    className="form-control datetimepicker"
                                    placeholder="yyyy"
                                  />
                                  <span className="input-icon-addon">
                                    <i className="ti ti-calendar" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Transmission
                                </label>

                                <CustomSelect
                                  options={Transmission}
                                  defaultValue={Transmission[1]}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Mileage</label>
                                <input
                                  type="text"
                                  defaultValue="45 km"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Passengers</label>
                                <input
                                  type="text"
                                  defaultValue="04"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  No of Seats
                                </label>
                                <CustomSelect
                                  options={Seater}
                                  defaultValue={Seater[1]}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  No of Doors
                                </label>
                                <CustomSelect
                                  options={Doors}
                                  defaultValue={Doors[1]}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  No of Air Bags
                                </label>
                                <input
                                  type="text"
                                  defaultValue="02"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <button
                        type="button"
                        className="btn btn-light d-flex align-items-center me-2"
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Cancel
                      </button>
                      <button
                        className="btn btn-primary wizard-next d-flex align-items-center"
                        type="button"
                        onClick={handleNext}
                      >
                        Add Features
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}
              {currentStep === 2 && (
                <fieldset style={{ display: "block" }}>
                  <form action="#">
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-flame text-secondary me-2" />
                        Features &amp; Amenities
                      </h4>
                      <div className="dropdown flag-dropdown">
                        <Link
                          className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/flags/gb.svg"
                            alt="Language"
                            className="img-fluid me-1"
                          />
                          English
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/gb.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              English
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/sa.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              Arabic
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-2 amenity-wrap">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Features &amp; Amenities</h6>
                          <p>Add Information About Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-3">
                                <div className="form-check mb-0">
                                  <input
                                    className="form-check-input select-all"
                                    type="checkbox"
                                    id="select-all1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity"
                                  >
                                    Check All
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity"
                                  >
                                    Air Condition
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity1"
                                  >
                                    Climate Control
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity2"
                                  >
                                    Climate Control Two Zones
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity3"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity3"
                                  >
                                    Luxury Climate Control
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity4"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity4"
                                  >
                                    Sunroof
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity5"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity5"
                                  >
                                    Panoramic Sunroof
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity6"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity6"
                                  >
                                    Moonroof
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity7"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity7"
                                  >
                                    Push-button Start
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity8"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity8"
                                  >
                                    Keyless Access
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity9"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity9"
                                  >
                                    Rear Parking Sensors
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity10"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity10"
                                  >
                                    Parking Sensors
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity11"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity11"
                                  >
                                    Built-in Sat Nav
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity12"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity12"
                                  >
                                    Mobile Phone Technology
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity13"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity13"
                                  >
                                    Bluetooth
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity14"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity14"
                                  >
                                    Usb
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity15"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity15"
                                  >
                                    Qi Wireless Charging
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity16"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity16"
                                  >
                                    Audio/ipod
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity17"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity17"
                                  >
                                    Cruise Control
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity18"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity18"
                                  >
                                    Adaptive Cruise Control
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity19"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity19"
                                  >
                                    Apple Carplay
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity20"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity20"
                                  >
                                    Android Auto
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity21"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity21"
                                  >
                                    Forward Collision Warning
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity22"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity22"
                                  >
                                    Lane Departure Warning
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity23"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity23"
                                  >
                                    Automatic Emergency Braking
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity24"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity24"
                                  >
                                    Active Parking Assist
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity25"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity25"
                                  >
                                    Automatic High Beams
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity26"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity26"
                                  >
                                    Adaptive Headlights
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity27"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity27"
                                  >
                                    360-degree Camera
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity29"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity29"
                                  >
                                    Rearview Camera
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity30"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity30"
                                  >
                                    Towing Hook
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity31"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity31"
                                  >
                                    Leather Interior
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity32"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity32"
                                  >
                                    Fabric Interior
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <button
                        type="button"
                        className="btn btn-outline-light border wizard-prev me-2"
                        onClick={handlePrev}
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-primary wizard-next d-flex align-items-center"
                      >
                        Add Tariff &amp; Pricing
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}
              {currentStep === 3 && (
                <fieldset style={{ display: "block" }}>
                  <form>
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-files text-secondary me-2" />
                        Pricing &amp; Tariff{" "}
                      </h4>
                      <div className="dropdown flag-dropdown">
                        <Link
                          className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/flags/gb.svg"
                            alt="Language"
                            className="img-fluid me-1"
                          />
                          English
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/gb.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              English
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/sa.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              Arabic
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-bottom mb-4 pb-2 unlimited-price">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Pricing</h6>
                          <p>Add Pricing for Cars</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-3">
                                <label className="form-label">
                                  Pricing Type{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="d-flex align-items-center flex-wrap gap-3">
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="price"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="price"
                                    >
                                      Daily
                                    </label>
                                  </div>
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="price1"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="price1"
                                    >
                                      Weekly
                                    </label>
                                  </div>
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="price2"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="price2"
                                    >
                                      Monthly
                                    </label>
                                  </div>
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="price3"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="price3"
                                    >
                                      Yearly
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Daily Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  defaultValue=""
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Weekly Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  defaultValue="200"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Monthly Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  defaultValue="400"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Yearly Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  defaultValue="6000"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="mb-3">
                                <div className="d-flex align-items-center justify-content-between">
                                  <label className="form-label">
                                    Base Kilometers (Per Day){" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="form-check unlimited-checkbox mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="unlimited"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="unlimited"
                                    >
                                      Unlimited
                                    </label>
                                  </div>
                                </div>
                                <input
                                  type="text"
                                  defaultValue="45"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="mb-3 unlimited-wrap">
                                <label className="form-label">
                                  Kilometers Extra Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  defaultValue="50"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-4 pb-2">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Tarrif</h6>
                          <p>Add Tariff Pricing for Cars</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                            <Link
                              to="#"
                              className="btn btn-dark btn-md d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#add-tarrif"
                            >
                              <i className="ti ti-plus me-1" />
                              Add New Tarrif Rate
                            </Link>
                          </div>
                          <div className="empty-data bg-light text-center mb-3">
                            <p className="fw-medium">No Data Added</p>
                          </div>
                          <div className="card bg-light mb-3">
                            <div className="card-body pb-3">
                              <h6 className="mb-3">Total Tariffs : 21</h6>
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
                                <div>
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    4 to 5 Days
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Daily Price :{" "}
                                      <span className="text-gray-9">$50</span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Base Kilometers :{" "}
                                      <span className="text-gray-9">25</span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Kilometers Extra Price :{" "}
                                      <span className="text-gray-9">$200</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center icon-list">
                                  <Link
                                    to="#"
                                    className="edit-icon me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-tarrif"
                                  >
                                    <i className="ti ti-edit" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="trash-icon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tarrif"
                                  >
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border p-20 br-5 mb-1">
                                <div>
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    5 to 8 Days
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Daily Price :{" "}
                                      <span className="text-gray-9">$80</span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Base Kilometers :{" "}
                                      <span className="text-gray-9">15</span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Kilometers Extra Price :{" "}
                                      <span className="text-gray-9">$150</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center icon-list">
                                  <Link
                                    to="#"
                                    className="edit-icon me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-tarrif"
                                  >
                                    <i className="ti ti-edit" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="trash-icon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tarrif"
                                  >
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-2">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Seasonal Pricing</h6>
                          <p>Add Seasonal Pricing for Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                            <Link
                              to="#"
                              className="btn btn-dark btn-md d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#select_price"
                            >
                              <i className="ti ti-plus me-1" />
                              Select Seasonal Pricing
                            </Link>
                            <Link
                              to="#"
                              className="text-info"
                              data-bs-toggle="modal"
                              data-bs-target="#add_price"
                            >
                              Add New
                            </Link>
                          </div>
                          <div className="empty-data bg-light text-center mb-3">
                            <p className="fw-medium">No Data Added</p>
                          </div>
                          <div className="card bg-light mb-3">
                            <div className="card-body pb-3">
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
                                <div>
                                  <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                                    Halloween
                                    <span className="badge bg-secondary-transparent ms-2">
                                      01 Oct 2025 - 31 Oct 2025{" "}
                                    </span>
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Daily Rate :{" "}
                                      <span className="text-gray-9">$200</span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Weekly Rate :{" "}
                                      <span className="text-gray-9">$1400</span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Monthly Rate :{" "}
                                      <span className="text-gray-9">$4800</span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0 pe-2 mb-0">
                                      Late Fee :{" "}
                                      <span className="text-gray-9">$200</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center icon-list">
                                  <Link
                                    to="#"
                                    className="edit-icon me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_seasonal_price"
                                  >
                                    <i className="ti ti-edit" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="trash-icon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_price"
                                  >
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-2">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Insurance</h6>
                          <p>Add Insurance for Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                            <Link
                              to="#"
                              className="btn btn-dark btn-md d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#select_insurance"
                            >
                              <i className="ti ti-plus me-1" />
                              Select New Insurance
                            </Link>
                          </div>
                          <div className="empty-data bg-light text-center mb-3">
                            <p className="fw-medium">No Data Added</p>
                          </div>
                          <div className="card bg-light mb-3">
                            <div className="card-body pb-3">
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
                                <div>
                                  <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                                    Full Premium Insurance
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Price :{" "}
                                      <span className="text-gray-9">$200</span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Benefits :{" "}
                                      <span className="text-gray-9">04</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center icon-list">
                                  <Link
                                    to="#"
                                    className="edit-icon me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_insurance"
                                  >
                                    <i className="ti ti-edit" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="trash-icon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_insurance"
                                  >
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
                                <div>
                                  <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                                    Roadside Assistance{" "}
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Price :{" "}
                                      <span className="text-gray-9">$250</span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Benefits :{" "}
                                      <span className="text-gray-9">06</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center icon-list">
                                  <Link
                                    to="#"
                                    className="edit-icon me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_insurance"
                                  >
                                    <i className="ti ti-edit" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="trash-icon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_insurance"
                                  >
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <button
                        type="button"
                        className="btn btn-outline-light border wizard-prev me-2"
                        onClick={handlePrev}
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-primary wizard-next d-flex align-items-center"
                      >
                        Add Extra Services
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}
              {currentStep === 4 && (
                <fieldset style={{ display: "block" }}>
                  <form>
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-float-center text-secondary me-2" />
                        Extra Services
                      </h4>
                      <div className="dropdown flag-dropdown">
                        <Link
                          className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/flags/gb.svg"
                            alt="Language"
                            className="img-fluid me-1"
                          />
                          English
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/gb.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              English
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/sa.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              Arabic
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-1 extra-service">
                      <div className="text-end">
                        <Link
                          to="#"
                          className="link-purple text-decoration-underline fw-medium d-inline-block"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_price"
                        >
                          Edit Price
                        </Link>
                      </div>
                      <div className="row">
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-gps" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Navigation
                                </h6>
                                <p className="fs-13">Using GPS while travel</p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-wifi-2" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Wi-Fi Hotspot
                                </h6>
                                <p className="fs-13">
                                  Constant portable internet
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">One time</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill active">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-baby-carriage" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Child Safety Seats
                                </h6>
                                <p className="fs-13">
                                  Secure infant/toddler car seat
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-fill flex-wrap gap-3 active">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-baby-carriage" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Fuel Pre-Purchase
                                </h6>
                                <p className="fs-13">
                                  Full tank, return hassle-free
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-user-star" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Roadside Assistance
                                </h6>
                                <p className="fs-13">
                                  24/7 emergency car support
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-satellite" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Satellite Radio
                                </h6>
                                <p className="fs-13">
                                  {" "}
                                  Unlimited premium music
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-usb" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  USB Charger
                                </h6>
                                <p className="fs-13">
                                  Fast charging for devices
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill active">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-checkup-list" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Express Check-in/out
                                </h6>
                                <p className="fs-13">
                                  Fast pickup &amp; return process
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-tallymark-2" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Toll Pass
                                </h6>
                                <p className="fs-13">Skip toll booth lines</p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-file-pencil" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Insurance
                                </h6>
                                <p className="fs-13">
                                  Full coverage protection
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-camera" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Dash Cam
                                </h6>
                                <p className="fs-13">
                                  Records trips extra security
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <button
                        type="button"
                        className="btn btn-outline-light border wizard-prev me-2"
                        onClick={handlePrev}
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-primary wizard-next d-flex align-items-center"
                      >
                        Upload Documents
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}
              {currentStep === 5 && (
                <fieldset style={{ display: "block" }}>
                  <form>
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-file-invoice text-secondary me-2" />
                        Documents
                      </h4>
                      <div className="dropdown flag-dropdown">
                        <Link
                          className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/flags/gb.svg"
                            alt="Language"
                            className="img-fluid me-1"
                          />
                          English
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/gb.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              English
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/sa.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              Arabic
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-bottom mb-4 pb-3">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Car Documents</h6>
                          <p>Add Important Documents of your Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="row">
                            <div className="col-xxl-8 col-lg-10">
                              <h6 className="mb-3">Upload Document</h6>
                              <div className="document-upload text-center bg-light br-5 mb-3">
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
                              <div className="mb-3">
                                <p className="fs-13 mb-1">
                                  Upload Insurance, Car Registration, Documents
                                </p>
                                <p className="fs-13">Formats PDF, Word</p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <ImageWithBasePath
                                      src="assets/admin/img/icons/pdf-icon.svg"
                                      alt="img"
                                    />
                                  </span>
                                  <div className="ms-2">
                                    <h6 className="fs-14 fw-medium">
                                      Insurance_car3546
                                    </h6>
                                    <p className="fs-13">24.45 KB</p>
                                  </div>
                                </div>
                                <div className="progress-wrap">
                                  <div
                                    className="progress progress-sm"
                                    role="progressbar"
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <div
                                      className="progress-bar bg-success"
                                      style={{ width: "25%" }}
                                    />
                                  </div>
                                </div>
                                <div className="icon-list">
                                  <Link to="#" className="trash-icon">
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <ImageWithBasePath
                                      src="assets/admin/img/icons/pdf-icon.svg"
                                      alt="img"
                                    />
                                  </span>
                                  <div className="ms-2">
                                    <h6 className="fs-14 fw-medium">
                                      Reg_car3546
                                    </h6>
                                    <p className="fs-13">20.45 KB</p>
                                  </div>
                                </div>
                                <div className="progress-wrap d-none">
                                  <div
                                    className="progress"
                                    role="progressbar"
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <div
                                      className="progress-bar bg-success"
                                      style={{ width: "25%" }}
                                    />
                                  </div>
                                </div>
                                <div className="icon-list">
                                  <Link to="#" className="trash-icon">
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-4 pb-3">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Policies</h6>
                          <p>Add policies of your Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="row">
                            <div className="col-xxl-8 col-lg-10">
                              <h6 className="mb-3">Upload Document</h6>
                              <div className="document-upload text-center bg-light br-5 mb-3">
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
                              <div className="mb-3">
                                <p className="fs-13 mb-1">
                                  Upload Car Policy Documents
                                </p>
                                <p className="fs-13">Formats PDF, Word</p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <ImageWithBasePath
                                      src="assets/admin/img/icons/pdf-icon.svg"
                                      alt="img"
                                    />
                                  </span>
                                  <div className="ms-2">
                                    <h6 className="fs-14 fw-medium">
                                      Insurance_car3546
                                    </h6>
                                    <p className="fs-13">24.45 KB</p>
                                  </div>
                                </div>
                                <div className="progress-wrap">
                                  <div
                                    className="progress progress-sm"
                                    role="progressbar"
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <div
                                      className="progress-bar bg-success"
                                      style={{ width: "25%" }}
                                    />
                                  </div>
                                </div>
                                <div className="icon-list">
                                  <Link to="#" className="trash-icon">
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-4 pb-4">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Video</h6>
                          <p>Add Video About Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="row">
                            <div className="col-xxl-8 col-lg-10">
                              <h6 className="mb-3">Upload Document</h6>
                              <div className="document-upload text-center bg-light br-5 mb-3">
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
                                  accept="image/*"
                                />
                              </div>
                              <div className="uploaded-images d-flex align-items-center flex-wrap gap-3">
                                {isImage1 && (
                                  <div className="uploaded-img">
                                    <ImageWithBasePath
                                      src="assets/admin/img/car/car-02.jpg"
                                      alt="img"
                                    />
                                    <Link
                                      to="#"
                                      className="trash-icon fs-12"
                                      onClick={() => setImage1(false)}
                                    >
                                      <i className="ti ti-trash" />
                                    </Link>
                                  </div>
                                )}
                                {isImage2 && (
                                  <div className="uploaded-img">
                                    <ImageWithBasePath
                                      src="assets/admin/img/car/car-07.jpg"
                                      alt="img"
                                    />
                                    <Link
                                      to="#"
                                      className="trash-icon fs-12"
                                      onClick={() => setImage2(false)}
                                    >
                                      <i className="ti ti-trash" />
                                    </Link>
                                  </div>
                                )}
                                {isImage3 && (
                                  <div className="uploaded-img">
                                    <ImageWithBasePath
                                      src="assets/admin/img/car/car-08.jpg"
                                      alt="img"
                                    />
                                    <Link
                                      to="#"
                                      className="trash-icon fs-12"
                                      onClick={() => setImage3(false)}
                                    >
                                      <i className="ti ti-trash" />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-4">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Video</h6>
                          <p>Add Video About Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="mb-4">
                                <label className="form-label">
                                  Platform{" "}
                                  <span className="text-danger">*</span>
                                </label>

                                <CustomSelect
                                  options={Platform}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="mb-4">
                                <label className="form-label">Video Link</label>
                                <input
                                  type="text"
                                  defaultValue=""
                                  className="form-control"
                                  placeholder="https://www.youtube.com/cars_add/"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="uploaded-video">
                                <ImageWithBasePath
                                  src="assets/admin/img/car/car-lg-01.jpg"
                                  alt="img"
                                />
                                <Link
                                  to="#"
                                  data-fancybox=""
                                  className="play-icon"
                                  onClick={handleOpenModal}
                                >
                                  <i className="ti ti-player-play-filled" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="btn btn-outline-light border wizard-prev me-2"
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-primary wizard-next d-flex align-items-center"
                      >
                        Add Damage
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}
              {currentStep === 6 && (
                <fieldset style={{ display: "block" }}>
                  <form>
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-id text-secondary me-2" />
                        Damages
                      </h4>
                      <div className="dropdown flag-dropdown">
                        <Link
                          className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/flags/gb.svg"
                            alt="Language"
                            className="img-fluid me-1"
                          />
                          English
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/gb.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              English
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/sa.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              Arabic
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-4">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Damages</h6>
                          <p>Add Damages On Car</p>
                        </div>
                        <div className="col-xl-9">
                          <Link
                            to="#"
                            className="btn btn-dark btn-md d-inline-flex align-items-center mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#add-damage"
                          >
                            <i className="ti ti-plus me-1" />
                            Add Damage
                          </Link>
                          <div className="card border-0 bg-light mb-0">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                <h6>Total Damages : 04</h6>
                                <div className="dropdown flag-dropdown">
                                  <Link
                                    className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                                    data-bs-toggle="dropdown"
                                    to="#"
                                  >
                                    All Damages
                                  </Link>
                                  <ul className="dropdown-menu p-2">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item d-flex align-items-center"
                                      >
                                        All Damages
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item d-flex align-items-center"
                                      >
                                        Interior
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item d-flex align-items-center"
                                      >
                                        Exterior
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="bg-white p-20 br-5 border mb-2">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-xxl-8 col-md-7">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <h6 className="fs-14 fw-medium">
                                        Scratch
                                      </h6>
                                      <span className="badge bg-pink-transparent badge-sm">
                                        Interior
                                      </span>
                                    </div>
                                    <p className="fs-13">
                                      Minor surface marks, often from keys,
                                      branches, or road debris.
                                    </p>
                                  </div>
                                  <div className="col-xxl-4 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                                      <p className="mb-0">
                                        Added on : 15 Jan 2025
                                      </p>
                                      <div className="icon-list d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="edit-icon me-2"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-damage"
                                        >
                                          <i className="ti ti-edit" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="trash-icon"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete_damage"
                                        >
                                          <i className="ti ti-trash" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white p-20 br-5 border mb-2">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-xxl-8 col-md-7">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <h6 className="fs-14 fw-medium">Dent</h6>
                                      <span className="badge bg-secondary-transparent badge-sm">
                                        Exterior
                                      </span>
                                    </div>
                                    <p className="fs-13">
                                      Cracks, scratches, or faded surfaces due
                                      to heat exposure.
                                    </p>
                                  </div>
                                  <div className="col-xxl-4 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                                      <p className="mb-0">
                                        Added on : 15 Jan 2025
                                      </p>
                                      <div className="icon-list d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="edit-icon me-2"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-damage"
                                        >
                                          <i className="ti ti-edit" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="trash-icon"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete_damage"
                                        >
                                          <i className="ti ti-trash" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white p-20 br-5 border mb-2">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-xxl-8 col-md-7">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <h6 className="fs-14 fw-medium">Crack</h6>
                                      <span className="badge bg-pink-transparent badge-sm">
                                        Interior
                                      </span>
                                    </div>
                                    <p className="fs-13">
                                      Seats, door panels, or carpets with
                                      stains, rips, or burns.
                                    </p>
                                  </div>
                                  <div className="col-xxl-4 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                                      <p className="mb-0">
                                        Added on : 15 Jan 2025
                                      </p>
                                      <div className="icon-list d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="edit-icon me-2"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-damage"
                                        >
                                          <i className="ti ti-edit" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="trash-icon"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete_damage"
                                        >
                                          <i className="ti ti-trash" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white p-20 br-5 border mb-0">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-xxl-8 col-md-7">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                      <h6 className="fs-14 fw-medium">Clip</h6>
                                      <span className="badge bg-pink-transparent badge-sm">
                                        Interior
                                      </span>
                                    </div>
                                    <p className="fs-13">
                                      Non-functional windows, AC, or
                                      infotainment system damage.
                                    </p>
                                  </div>
                                  <div className="col-xxl-4 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                                      <p className="mb-0">
                                        Added on : 15 Jan 2025
                                      </p>
                                      <div className="icon-list d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="edit-icon me-2"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-damage"
                                        >
                                          <i className="ti ti-edit" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="trash-icon"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete_damage"
                                        >
                                          <i className="ti ti-trash" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="btn btn-outline-light border wizard-prev me-2"
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-primary wizard-next d-flex align-items-center"
                      >
                        Add Faq
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}
              {currentStep === 7 && (
                <fieldset style={{ display: "block" }}>
                  <form>
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-question-mark text-secondary me-2" />
                        FAQ
                      </h4>
                      <div className="dropdown flag-dropdown">
                        <Link
                          className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/flags/gb.svg"
                            alt="Language"
                            className="img-fluid me-1"
                          />
                          English
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/gb.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              English
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/sa.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              Arabic
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-4">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">FAQ</h6>
                          <p>Add FAQ of your Car</p>
                        </div>
                        <div className="col-xl-9">
                          <Link
                            to="#"
                            className="btn btn-dark btn-md d-inline-flex align-items-center mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#add-faq"
                          >
                            <i className="ti ti-plus me-1" />
                            Add FAQ
                          </Link>
                          <div className="card border-0 bg-light mb-0">
                            <div className="card-body">
                              <h6 className="mb-3">Total FAQ : 04</h6>
                              <div
                                className="custom-accordion-icon"
                                id="faqaccordion"
                              >
                                <div className="accordion-item">
                                  <h2 className="accordion-header">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#faq-one"
                                      aria-expanded="false"
                                      aria-controls="faq-one"
                                    >
                                      <span className="faq-icon">
                                        <i className="ti ti-grip-vertical" />
                                      </span>
                                      What are the requirements to rent a car?
                                    </button>
                                  </h2>
                                  <div
                                    id="faq-one"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqaccordion"
                                  >
                                    <div className="accordion-body">
                                      <p className="fs-13">
                                        You must be at least 21 years old, have
                                        a valid driver’s license, and a credit
                                        card for payment.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2 className="accordion-header">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#faq-two"
                                      aria-expanded="false"
                                      aria-controls="faq-two"
                                    >
                                      <span className="faq-icon">
                                        <i className="ti ti-grip-vertical" />
                                      </span>
                                      What are the requirements to rent a car?
                                    </button>
                                  </h2>
                                  <div
                                    id="faq-two"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqaccordion"
                                  >
                                    <div className="accordion-body">
                                      <p className="fs-13">
                                        You must be at least 21 years old, have
                                        a valid driver’s license, and a credit
                                        card for payment.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2 className="accordion-header">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#faq-three"
                                      aria-expanded="false"
                                      aria-controls="faq-three"
                                    >
                                      <span className="faq-icon">
                                        <i className="ti ti-grip-vertical" />
                                      </span>
                                      What are the requirements to rent a car?
                                    </button>
                                  </h2>
                                  <div
                                    id="faq-three"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqaccordion"
                                  >
                                    <div className="accordion-body">
                                      <p className="fs-13">
                                        You must be at least 21 years old, have
                                        a valid driver’s license, and a credit
                                        card for payment.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2 className="accordion-header">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#faq-four"
                                      aria-expanded="false"
                                      aria-controls="faq-four"
                                    >
                                      <span className="faq-icon">
                                        <i className="ti ti-grip-vertical" />
                                      </span>
                                      What are the requirements to rent a car?
                                    </button>
                                  </h2>
                                  <div
                                    id="faq-four"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqaccordion"
                                  >
                                    <div className="accordion-body">
                                      <p className="fs-13">
                                        You must be at least 21 years old, have
                                        a valid driver’s license, and a credit
                                        card for payment.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="btn btn-outline-light border wizard-prev me-2"
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-primary wizard-next d-flex align-items-center"
                      >
                        Add Seo
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}
              {currentStep === 8 && (
                <fieldset style={{ display: "block" }}>
                  <form>
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-question-mark text-secondary me-2" />
                        SEO
                      </h4>
                      <div className="dropdown flag-dropdown">
                        <Link
                          className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/flags/gb.svg"
                            alt="Language"
                            className="img-fluid me-1"
                          />
                          English
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/gb.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              English
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item d-flex align-items-center"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/flags/sa.svg"
                                alt=""
                                height={16}
                                className="me-1"
                              />
                              Arabic
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-2">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">SEO</h6>
                          <p>Add SEO Meta of the car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="mb-3">
                            <label className="form-label">
                              Meta Title <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Keywords <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Description <span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="btn btn-outline-light border wizard-prev me-2"
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Back
                      </button>
                      <Link
                        to={all_routes.adminCarsList}
                        className="btn btn-primary d-flex align-items-center"
                      >
                        Save &amp; Exit
                        <i className="ti ti-chevron-right ms-1" />
                      </Link>
                    </div>
                  </form>
                </fieldset>
              )}
            </div>
          </div>
        </div>
      </div>
      <VideoModal
        show={showModal}
        handleClose={handleCloseModal}
        videoUrl={videoUrl}
      />
      <CarBookingModal />
    </>
  );
};

export default EditCar;
