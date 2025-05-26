import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../router/all_routes";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import VideoModal from "../../../common/modal/videoModal";

const CarDetails = () => {
  const [open1, setOpen1] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/1trvO6dqQUI";

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="content me-0">
      <Lightbox
        open={open1}
        close={() => setOpen1(false)}
        slides={[
          { src: "/assets/admin/img/car/car-lg-02.jpg" },
          { src: "/assets/admin/img/car/car-lg-03.jpg" },
          { src: "/assets/admin/img/car/car-lg-04.jpg" },
        ]}
      />
      <div className="mb-3">
        <Link
          to={all_routes.adminCarsList}
          className="d-inline-flex align-items-center fw-medium"
        >
          <i className="ti ti-arrow-left me-1" />
          Cars
        </Link>
      </div>
      <div className="mb-4 pb-4 border-bottom">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div>
            <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
              <h4 className="me-2">Car ID : #RT5658</h4>
              <span className="badge badge-md badge-success-transparent d-inline-flex align-items-center badge-sm">
                <i className="ti ti-point-filled me-1" />
                Active
              </span>
              <span className="badge badge-md bg-secondary-transparent">
                Rent in Progress
              </span>
            </div>
            <p>Created / Updated at : 25 Jan 2025, 06:45 AM</p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <Link
              to={all_routes.editCar}
              className="btn btn-dark btn-md d-flex align-items-center"
            >
              <i className="ti ti-edit me-1" />
              Edit Car
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Car Details */}
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="border-bottom mb-3 pb-3">
                <h5>Car Details</h5>
              </div>
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="d-flex align-items-center">
                  <span className="avatar avatar-lg me-3">
                    <ImageWithBasePath
                      src="assets/admin/img/car/car-01.jpg"
                      alt="img"
                    />
                  </span>
                  <div>
                    <h6>Acura Sport </h6>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 me-2">Sedan</p>
                      <p className="mb-0 d-flex align-items-center">
                        <i className="ti ti-circle-filled text-secondary fs-5 me-2" />
                        $60/day
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-wrap gap-3">
                  <span className="badge badge-md bg-info-transparent">
                    VIN : ABC123456
                  </span>
                  <span className="badge badge-md bg-orange-transparent">
                    Plate Number : ABC 1234
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4 mb-xl-0">
            <div className="card-header py-0">
              <ul className="nav nav-tabs nav-tabs-bottom tab-dark">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="#car-info"
                    data-bs-toggle="tab"
                  >
                    Car Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#car-price"
                    data-bs-toggle="tab"
                  >
                    Pricing &amp; Tarrif
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#car-service"
                    data-bs-toggle="tab"
                  >
                    Extra Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#car-gallery"
                    data-bs-toggle="tab"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#car-damages"
                    data-bs-toggle="tab"
                  >
                    Damages
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                {/* Car Info */}
                <div className="tab-pane fade active show" id="car-info">
                  <div className="border-bottom mb-3 pb-3">
                    <div className="row">
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Color</h6>
                          <p className="d-inline-flex align-items-center fs-13">
                            <i className="ti ti-square-filled text-warning me-1" />
                            Yellow
                          </p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Brand</h6>
                          <p className="fs-13">Ford</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Model</h6>
                          <p className="fs-13">Endeavour</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Type</h6>
                          <p className="fs-13">Sedan</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Year</h6>
                          <p className="fs-13">2001</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Passengers</h6>
                          <p className="fs-13">04</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">VIN Number</h6>
                          <p className="fs-13">ABC123456</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">
                            Plate Number
                          </h6>
                          <p className="fs-13">ABC 1234</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Mileage</h6>
                          <p className="fs-13">45 km</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">
                            Transmission
                          </h6>
                          <p className="fs-13">Auto</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">
                            No of Seats
                          </h6>
                          <p className="fs-13">04</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">
                            No of Air Bags
                          </h6>
                          <p className="fs-13">06</p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <Link
                          to={all_routes.editCar}
                          className="link-violet text-decoration-underline fw-medium"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom mb-3 pb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Documents</h6>
                      <Link to={all_routes.editCar} className="link-default">
                        <i className="ti ti-edit" />
                      </Link>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-4">
                      <div className="d-flex align-items-center">
                        <span className="me-2">
                          <ImageWithBasePath
                            src="assets/admin/img/icons/pdf-icon.svg"
                            alt="img"
                          />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium">Insurance_car3546</h6>
                          <p className="fs-13">24.45 KB</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2">
                          <ImageWithBasePath
                            src="assets/admin/img/icons/pdf-icon.svg"
                            alt="img"
                          />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium">Reg_car3546</h6>
                          <p className="fs-13">24.45 KB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3">Features &amp; Amenities</h6>
                    <div className="row gy-2">
                      <div className="col-lg-4 col-sm-6">
                        <div className="d-flex flex-column gap-2">
                          <p className="d-flex align-items-center mb-0">
                            <i className="ti ti-square-check-filled text-success me-2" />
                            Push-button Start
                          </p>
                          <p className="d-flex align-items-center mb-0">
                            <i className="ti ti-square-check-filled text-success me-2" />
                            Panoramic Sunroof
                          </p>
                          <p className="d-flex align-items-center mb-0">
                            <i className="ti ti-square-check-filled text-success me-2" />
                            Parking Sensors
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="d-flex flex-column gap-2">
                          <p className="d-flex align-items-center mb-0">
                            <i className="ti ti-square-check-filled text-success me-2" />
                            Bluetooth
                          </p>
                          <p className="d-flex align-items-center mb-0">
                            <i className="ti ti-square-check-filled text-success me-2" />
                            Forward Collision Warning
                          </p>
                          <p className="d-flex align-items-center mb-0">
                            <i className="ti ti-square-check-filled text-success me-2" />
                            Adaptive Cruise Control
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="d-flex flex-column gap-2">
                          <p className="d-flex align-items-center mb-0">
                            <i className="ti ti-square-check-filled text-success me-2" />
                            Rearview Camera
                          </p>
                          <p className="d-flex align-items-center mb-0">
                            <i className="ti ti-square-check-filled text-success me-2" />
                            USB
                          </p>
                          <p className="d-flex align-items-center mb-0">
                            <i className="ti ti-square-check-filled text-success me-2" />
                            Push Back Seat
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Car Info */}
                {/* Car Price */}
                <div className="tab-pane fade" id="car-price">
                  <div className="border-bottom mb-3 pb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Pricing</h6>
                      <Link to="#" className="link-default">
                        <i className="ti ti-edit" />
                      </Link>
                    </div>
                    <div className="row">
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Per Day</h6>
                          <p className="fs-13">$200</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Weekly</h6>
                          <p className="fs-13">$400</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Monthly</h6>
                          <p className="fs-13">$400</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Yearly</h6>
                          <p className="fs-13">$6000</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">
                            Base Kilometers
                          </h6>
                          <p className="fs-13">45</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">
                            Extra Price Per KM
                          </h6>
                          <p className="fs-13">$21</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Tarrif</h6>
                      <Link to={all_routes.editCar} className="link-default">
                        <i className="ti ti-edit" />
                      </Link>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
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
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
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
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
                        <div>
                          <h6 className="fs-14 fw-semibold mb-1">
                            3 to 8 Days
                          </h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap">
                            <p className="fs-13 fw-medium border-end pe-2 mb-0">
                              Daily Price :{" "}
                              <span className="text-gray-9">$56</span>
                            </p>
                            <p className="fs-13 fw-medium border-end pe-2 mb-0">
                              Base Kilometers :{" "}
                              <span className="text-gray-9">54</span>
                            </p>
                            <p className="fs-13 fw-medium mb-0">
                              Kilometers Extra Price :{" "}
                              <span className="text-gray-9">$120</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap bg-light gap-3 br-5 p-20">
                        <div>
                          <h6 className="fs-14 fw-semibold mb-1">
                            4 to 8 Days
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
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Car Price */}
                {/* Extra Services */}
                <div className="tab-pane fade" id="car-service">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <h6>Extra Services</h6>
                    <Link to={all_routes.editCar} className="link-default">
                      <i className="ti ti-edit" />
                    </Link>
                  </div>
                  <div className="row gy-2">
                    <div className="col-lg-4 col-sm-6">
                      <div className="d-flex flex-column gap-2">
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Navigation
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Fuel Pre-Purchase
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          USB Charger
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="d-flex flex-column gap-2">
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Wi-Fi Hotspot
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Roadside Assistance
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Express Check-in/out
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="d-flex flex-column gap-2">
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Child Safety Seats
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Satellite Radio
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Toll Pass
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Extra Services */}
                {/* Gallery */}
                <div className="tab-pane fade" id="car-gallery">
                  <div className="border-bottom mb-3 pb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Gallery</h6>
                      <Link to={all_routes.editCar} className="link-default">
                        <i className="ti ti-edit" />
                      </Link>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-3">
                      <div className="gallery-wrap">
                        <Link
                          to="#"
                          onClick={() => setOpen1(true)}
                          data-fancybox="gallery"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/car/car-02.jpg"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="gallery-wrap">
                        <Link
                          to="#"
                          onClick={() => setOpen1(true)}
                          data-fancybox="gallery"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/car/car-07.jpg"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="gallery-wrap">
                        <Link
                          to="#"
                          onClick={() => setOpen1(true)}
                          data-fancybox="gallery"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/car/car-04.jpg"
                            alt="img"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Video</h6>
                      <Link to={all_routes.editCar} className="link-default">
                        <i className="ti ti-edit" />
                      </Link>
                    </div>
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
                {/* /Gallery */}
                {/* Damages */}
                <div className="tab-pane fade" id="car-damages">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <h6>Damages</h6>
                    <Link to={all_routes.editCar} className="link-default">
                      <i className="ti ti-edit" />
                    </Link>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <div className="bg-white p-20 br-5 border">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-xxl-8 col-md-7">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h6 className="fs-14 fw-medium">Scratch</h6>
                            <span className="badge bg-pink-transparent badge-sm">
                              Interior
                            </span>
                          </div>
                          <p className="fs-13">
                            Minor surface marks, often from keys, branches, or
                            road debris.
                          </p>
                        </div>
                        <div className="col-xxl-4 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                            <p className="mb-0">Added on : 15 Jan 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-20 br-5 border">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-xxl-8 col-md-7">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h6 className="fs-14 fw-medium">
                              Dashboard Damage
                            </h6>
                            <span className="badge bg-secondary-transparent badge-sm">
                              Exterior
                            </span>
                          </div>
                          <p className="fs-13">
                            Cracks, scratches, or faded surfaces due to heat
                            exposure.
                          </p>
                        </div>
                        <div className="col-xxl-4 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                            <p className="mb-0">Added on : 15 Jan 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-20 br-5 border">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-xxl-8 col-md-7">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h6 className="fs-14 fw-medium">
                              Torn/Dirty Upholstery
                            </h6>
                            <span className="badge bg-pink-transparent badge-sm">
                              Interior
                            </span>
                          </div>
                          <p className="fs-13">
                            Seats, door panels, or carpets with stains, rips, or
                            burns.
                          </p>
                        </div>
                        <div className="col-xxl-4 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                            <p className="mb-0">Added on : 15 Jan 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-20 br-5 border">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-xxl-8 col-md-7">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h6 className="fs-14 fw-medium">
                              Electrical Issues
                            </h6>
                            <span className="badge bg-pink-transparent badge-sm">
                              Interior
                            </span>
                          </div>
                          <p className="fs-13">
                            Non-functional windows, AC, or infotainment system
                            damage.
                          </p>
                        </div>
                        <div className="col-xxl-4 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                            <p className="mb-0">Added on : 15 Jan 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Damages */}
              </div>
            </div>
          </div>
        </div>
        {/* /Car Details */}
        {/* Rent Summary */}
        <div className="col-xl-4 theiaStickySidebar">
          <div className="card mb-0">
            <div className="card-body">
              <div className="border-bottom mb-3 pb-3">
                <h5>Summary</h5>
              </div>
              <div className="summary-wrap">
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">23</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">
                      Feb, 2025
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Active</h6>
                    <p className="fs-13">
                      Car status Changes as{" "}
                      <span className="text-gray-9 fw-medium">
                        Active for Booking
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">22</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">
                      Feb, 2025
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Damage</h6>
                    <p className="fs-13">
                      Damage is added on the{" "}
                      <span className="text-gray-9 fw-medium">Exterior</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">21</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">
                      Feb, 2025
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Maintainance</h6>
                    <p className="fs-13">
                      Car status Changes as{" "}
                      <span className="text-gray-9 fw-medium">
                        Maintainance
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">20</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">
                      Feb, 2025
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Car Return</h6>
                    <p className="fs-13">
                      Car has been{" "}
                      <span className="text-gray-9 fw-medium">Returned</span> by
                      Customer
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">19</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">
                      Feb, 2025
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Booking</h6>
                    <p className="fs-13">
                      Car is Booked By{" "}
                      <span className="text-gray-9 fw-medium">
                        James Anderson
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">11</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">
                      Feb, 2025
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">User</h6>
                    <p className="fs-13">
                      User logged in &amp;{" "}
                      <span className="text-gray-9 fw-medium">
                        Details Updated
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">09</h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 d-inline-block rounded-1 text-gray-9">
                      Feb, 2025
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Car Added</h6>
                    <p className="fs-13">
                      Car has been added by{" "}
                      <span className="text-gray-9 fw-medium">Admin</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Rent Summary */}
        <VideoModal
          show={showModal}
          handleClose={handleCloseModal}
          videoUrl={videoUrl}
        />
      </div>
    </div>
  );
};

export default CarDetails;
