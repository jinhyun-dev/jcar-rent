import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import PredefinedDateRanges from "../../common/range-picker/datePicker";
import ReactApexChart from "react-apexcharts";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 53.470692,
  lng: -2.220328,
};

// Define the type for location data
interface Location {
  id: number;
  lat: number;
  lng: number;
  carName: string;
  speciality: string;
  profile_link: string;
  image: string;
}

const locations: Location[] = [
  {
    id: 1,
    carName: "Ford Endeavour",
    speciality: "Speed : 20/Kms",
    lat: 53.470692,
    lng: -2.220328,
    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-01.jpg",
  },
  {
    id: 2,
    carName: "Ferrari 458 MM",
    speciality: "Speed : 25/Kms",
    lat: 53.469189,
    lng: -2.199262,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-02.jpg",
  },
  {
    id: 3,
    carName: "Ford Mustang ",
    speciality: "Speed : 19/Kms",
    lat: 53.468665,
    lng: -2.189269,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-03.jpg",
  },
  {
    id: 4,
    carName: "Toyota Tacoma 4",
    speciality: "Speed : 20/Kms",
    lat: 53.463894,
    lng: -2.17788,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-04.jpg",
  },
  {
    id: 5,
    carName: "Chevrolet Pick Truck",
    speciality: "Speed : 20/Kms",
    lat: 53.466359,
    lng: -2.213314,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-05.jpg",
  },
  {
    id: 6,
    carName: "Etios Carmen",
    speciality: "Speed : 20/Kms",
    lat: 53.463906,
    lng: -2.213271,
    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-06.jpg",
  },
  {
    id: 7,
    carName: "Kia Soul 2016",
    speciality: "Speed : 20/Kms",
    lat: 53.461974,
    lng: -2.210661,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-07.jpg",
  },
  {
    id: 8,
    carName: "Chevrolet Camaro",
    speciality: "Speed : 20/Kms",
    lat: 53.458785,
    lng: -2.188532,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-08.jpg",
  },
  {
    id: 9,
    carName: "Toyota Camry SE 350",
    speciality: "Speed : 20/Kms",
    lat: 53.4558571,
    lng: -2.1950372,

    profile_link: all_routes.carDetails,
    image: "assets/admin/img/car/car-09.jpg",
  },
];
const AdminDashboard = () => {
  const [reservationChart] = useState<any>({
    series: [
      {
        name: "Net Profit",
        data: [9, 4, 7, 7, 4, 9, 8],
      },
    ],
    options: {
      chart: {
        type: "bar",
        width: 70,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#f7a1a1",
        },
        sparkline: {
          enabled: !0,
        },
      },
      markers: {
        size: 0,
        colors: ["#f7a1a1"],
        strokeColors: "#f7a1a1",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: !0,
        width: 4.5,
        curve: "smooth",
      },
      colors: ["#D0E3E6"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        labels: {
          show: false,
        },
      },
      tooltip: {
        show: false,
        theme: "light",
        fixed: {
          enabled: false,
        },
        x: {
          show: true,
        },

        marker: {
          show: true,
        },
      },
    },
  });
  const [earningChart] = useState<any>({
    series: [
      {
        name: "Net Profit",
        data: [9, 4, 7, 7, 4, 9, 8],
      },
    ],
    options: {
      chart: {
        type: "bar",
        width: 70,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#f7a1a1",
        },
        sparkline: {
          enabled: !0,
        },
      },
      markers: {
        size: 0,
        colors: ["#f7a1a1"],
        strokeColors: "#f7a1a1",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: !0,
        width: 4.5,
        curve: "smooth",
      },
      colors: ["#FFF3EB"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        labels: {
          show: false,
        },
      },
      tooltip: {
        show: false,
        theme: "light",
        fixed: {
          enabled: false,
        },
        x: {
          show: true,
        },

        marker: {
          show: true,
        },
      },
    },
  });
  const [carChart] = useState<any>({
    series: [
      {
        name: "Net Profit",
        data: [9, 4, 7, 7, 4, 9, 8],
      },
    ],
    options: {
      chart: {
        type: "bar",
        width: 70,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#f7a1a1",
        },
        sparkline: {
          enabled: !0,
        },
      },
      markers: {
        size: 0,
        colors: ["#f7a1a1"],
        strokeColors: "#f7a1a1",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: !0,
        width: 4.5,
        curve: "smooth",
      },
      colors: ["#F0ECFF"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        labels: {
          show: false,
        },
      },
      tooltip: {
        show: false,
        theme: "light",
        fixed: {
          enabled: false,
        },
        x: {
          show: true,
        },

        marker: {
          show: true,
        },
      },
    },
  });
  const [salesStatistics] = useState<any>({
    series: [
      {
        name: "Revenue",
        data: [22, 22, 28, 25, 15, 22, 20],
      },
      {
        name: "Expenses",
        data: [-9, -25, -5, -10, -10, -25, -5],
      },
    ],
    options: {
      grid: {
        padding: {
          top: 5, // Adds space on the left
          right: 5, // Adds space on the right
        },
      },
      colors: ["#FFA633", "#FFDBAD"],
      chart: {
        type: "bar",
        height: 290,
        stacked: true,
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 280,
          options: {
            legend: {
              position: "bottom",
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: (val: any) => {
            return val / 1 + "K";
          },
        },
        min: -30,
        max: 30,
        tickAmount: 6,
      },
      xaxis: {
        categories: [
          " 25 Jan ",
          "26 Jan",
          "27 Jan",
          "28 Jan",
          "29 Jan",
          "30 Jan",
          "31 Jan",
        ],
      },
      legend: { show: false },
      fill: {
        opacity: 1,
      },
    },
  });
  const [statistics_chart] = useState<any>({
    series: [
      {
        name: "08 AM",
        data: [
          {
            x: "25 Jan",
            y: 0,
          },
          {
            x: "26 Jan",
            y: 0,
          },
          {
            x: "27 Jan",
            y: 2,
          },
          {
            x: "28 Jan",
            y: 0,
          },
          {
            x: "29 Jan",
            y: 0,
          },
          {
            x: "30 Jan",
            y: 3,
          },
        ],
      },
      {
        name: "10 Am",
        data: [
          {
            x: "25 Jan",
            y: 2,
          },
          {
            x: "26 Jan",
            y: 0,
          },
          {
            x: "27 Jan",
            y: 4,
          },
          {
            x: "28 Jan",
            y: 3,
          },
          {
            x: "29 Jan",
            y: 0,
          },
          {
            x: "30 Jan",
            y: 0,
          },
        ],
      },
      {
        name: "12 PM",
        data: [
          {
            x: "25 Jan",
            y: 0,
          },
          {
            x: "26 Jan",
            y: 0,
          },
          {
            x: "27 Jan",
            y: 3,
          },
          {
            x: "28 Jan",
            y: 0,
          },
          {
            x: "29 Jan",
            y: 0,
          },
          {
            x: "30 Jan",
            y: 2,
          },
        ],
      },
      {
        name: "02 PM",
        data: [
          {
            x: "25 Jan",
            y: 0,
          },
          {
            x: "26 Jan",
            y: 1,
          },
          {
            x: "27 Jan",
            y: 0,
          },
          {
            x: "28 Jan",
            y: 5,
          },
          {
            x: "29 Jan",
            y: 0,
          },
          {
            x: "30 Jan",
            y: 0,
          },
        ],
      },
      {
        name: "04 PM",
        data: [
          {
            x: "25 Jan",
            y: 2,
          },
          {
            x: "26 Jan",
            y: 0,
          },
          {
            x: "27 Jan",
            y: 0,
          },
          {
            x: "28 Jan",
            y: 0,
          },
          {
            x: "29 Jan",
            y: 3,
          },
          {
            x: "30 Jan",
            y: 0,
          },
        ],
      },
      {
        name: "06 PM",
        data: [
          {
            x: "25 Jan",
            y: 2,
          },
          {
            x: "26 Jan",
            y: 0,
          },
          {
            x: "27 Jan",
            y: 0,
          },
          {
            x: "28 Jan",
            y: 0,
          },
          {
            x: "29 Jan",
            y: 3,
          },
          {
            x: "30 Jan",
            y: 0,
          },
        ],
      },
      {
        name: "08 PM",
        data: [
          {
            x: "25 Jan",
            y: 0,
          },
          {
            x: "26 Jan",
            y: 4,
          },
          {
            x: "27 Jan",
            y: 0,
          },
          {
            x: "28 Jan",
            y: 0,
          },
          {
            x: "29 Jan",
            y: 0,
          },
          {
            x: "30 Jan",
            y: 1,
          },
        ],
      },
      {
        name: "10 PM",
        data: [
          {
            x: "25 Jan",
            y: 0,
          },
          {
            x: "26 Jan",
            y: 0,
          },
          {
            x: "27 Jan",
            y: 0,
          },
          {
            x: "28 Jan",
            y: 0,
          },
          {
            x: "29 Jan",
            y: 3,
          },
          {
            x: "30 Jan",
            y: 3,
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "heatmap",
        height: 360,
      },
      plotOptions: {
        heatmap: {
          radius: 100,
          enableShades: false,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 0,
                color: "#E7F1F3",
              },
              {
                from: 1,
                to: 20,
                color: "#127384",
              },
            ],
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        colors: ["#fff"],
      },
      grid: {
        show: false,
        borderColor: "#333",
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: -30,
          bottom: 0,
          left: 0,
          right: -20, // Minimize padding around the heatmap
        },
      },
      xaxis: {
        axisBorder: { show: false },
        axisTicks: { show: false }, // ❌ Removes axis ticks
      },
      yaxis: {
        labels: {
          offsetX: -15, // Adjust horizontal alignment
        },
      },
    },
  });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD6adZVdzTvBpE2yBRK8cDfsss8QXChK0I", // Replace with your API key
  });

  const [selectedMarker, setSelectedMarker] = useState<Location | null>(
    locations[0]
  );
  if (!isLoaded) return <div>Loading Map...</div>;
  return (
    <div className="content pb-0">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Dashboard</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to={all_routes.adminDashboard}>Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Admin Dashboard
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="input-icon-start position-relative topdatepicker mb-2">
            <span className="input-icon-addon">
              <i className="ti ti-calendar" />
            </span>
            <PredefinedDateRanges />
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      <div className="row">
        <div className="col-xl-8 d-flex flex-column">
          {/* Welcome Wrap */}
          <div className="card flex-fill">
            <div className="card-body">
              <div className="row align-items-center row-gap-3">
                <div className="col-sm-7">
                  <h4 className="mb-1">Welcome, Andrew </h4>
                  <p>400+ Budget Friendly Cars Available for the rents </p>
                  <div className="d-flex align-items-center flex-wrap gap-4 mb-3">
                    <div>
                      <p className="mb-1">Total No of Cars</p>
                      <h3>564</h3>
                    </div>
                    <div>
                      <p className="d-flex align-items-center mb-2">
                        <span className="line-icon bg-violet me-2" />
                        <span className="fw-semibold text-gray-9 me-1">80</span>
                        In Rental
                      </p>
                      <p className="d-flex align-items-center">
                        <span className="line-icon bg-orange me-2" />
                        <span className="fw-semibold text-gray-9 me-1">
                          96
                        </span>{" "}
                        Upcoming
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <Link
                      to={all_routes.adminReservationsList}
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <i className="ti ti-eye me-1" />
                      Reservations
                    </Link>
                    <Link
                      to={all_routes.addCar}
                      className="btn btn-dark d-flex align-items-center"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New Car
                    </Link>
                  </div>
                </div>
                <div className="col-sm-5">
                  <ImageWithBasePath
                    src="assets/admin/img/icons/car.svg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Welcome Wrap */}
          <div className="row">
            {/* Total Reservations */}
            <div className="col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-body pb-1">
                  <div className="border-bottom mb-0 pb-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-secondary-100 text-secondary me-2">
                        <i className="ti ti-calendar-time fs-14" />
                      </span>
                      <p>Total Reservations</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="py-2">
                      <h5 className="mb-1">68</h5>
                      <p>
                        <span className="text-success fw-semibold">+45%</span>{" "}
                        Last Week
                      </p>
                    </div>
                    <ReactApexChart
                      options={reservationChart.options}
                      series={reservationChart.series}
                      type="bar"
                      width={60}
                      height={45}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Total Reservations */}
            {/* Total Earnings */}
            <div className="col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-body pb-1">
                  <div className="border-bottom mb-0 pb-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-orange-100 text-orange me-2">
                        <i className="ti ti-moneybag fs-14" />
                      </span>
                      <p>Total Earnings</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="py-2">
                      <h5 className="mb-1">$565545</h5>
                      <p>
                        <span className="text-success fw-semibold">+22%</span>{" "}
                        Last Week
                      </p>
                    </div>
                    <ReactApexChart
                      options={earningChart.options}
                      series={earningChart.series}
                      type="bar"
                      width={60}
                      height={45}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Total Earnings */}
            {/* Total Cars */}
            <div className="col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-body pb-1">
                  <div className="border-bottom mb-0 pb-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-violet-100 text-violet me-2">
                        <i className="ti ti-car fs-14" />
                      </span>
                      <p>Total Cars</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="py-2">
                      <h5 className="mb-1">658</h5>
                      <p>
                        <span className="text-danger fw-semibold">-42%</span>{" "}
                        Last Week
                      </p>
                    </div>
                    <ReactApexChart
                      options={carChart.options}
                      series={carChart.series}
                      type="bar"
                      width={60}
                      height={45}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Total Cars */}
          </div>
        </div>
        {/* Newly Added Cars */}
        <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <h5>Newly Added Cars</h5>
                <Link
                  to={all_routes.adminCarsList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              <div className="mb-2">
                <ImageWithBasePath
                  src="assets/admin/img/car/car.jpg"
                  alt="img"
                  className="rounded w-100"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <div>
                  <p className="fs-13 mb-1">Sedan</p>
                  <h6 className="fs-14 fw-semibold">
                    1.5 Eco Sports ST-Line 115CV
                  </h6>
                </div>
                <h6 className="fs-14 fw-semibold">
                  $280 <span className="fw-normal text-gray-5">/day</span>
                </h6>
              </div>
              <div className="row g-2 justify-content-center mb-3">
                <div className="col-sm-4 col-6 d-flex">
                  <div className="bg-light border p-2 br-5 flex-fill text-center">
                    <h6 className="fs-14 fw-semibold">Fuel Type</h6>
                    <span className="fs-13">Petrol</span>
                  </div>
                </div>
                <div className="col-sm-4 col-6 d-flex">
                  <div className="bg-light border p-2 br-5 flex-fill text-center">
                    <h6 className="fs-14 fw-semibold">Passengers</h6>
                    <span className="fs-13">03</span>
                  </div>
                </div>
                <div className="col-sm-4 col-6 d-flex">
                  <div className="bg-light border p-2 br-5 flex-fill text-center">
                    <h6 className="fs-14 fw-semibold">Driving Type</h6>
                    <span className="fs-13">Self</span>
                  </div>
                </div>
              </div>
              <Link
                to={all_routes.carDetails}
                className="btn btn-white d-flex align-items-center justify-content-center"
              >
                View Details
                <i className="ti ti-chevron-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
        {/* /Newly Added Cars */}
      </div>
      <div className="row">
        {/* Live Tracking */}
        <div className="col-xl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                <h5 className="mb-1">Live Tracking</h5>
                <div className="dropdown mb-1">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-map-pin me-1" />
                    Washington
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-2">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Washington
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Chicago
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Houston
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Las Vegas
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="map-wrap position-relative">
                <div id="map" className="tracking-map w-100 z-1">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                    options={{
                      scrollwheel: false,
                      mapTypeId: "roadmap",
                    }}
                  >
                    {locations.map((location) => (
                      <Marker
                        key={location.id}
                        position={{ lat: location.lat, lng: location.lng }}
                        onClick={() => setSelectedMarker(location)}
                        icon="/react/template/assets/admin/car-map.png"
                      />
                    ))}

                    {selectedMarker && (
                      <InfoWindow
                        position={{
                          lat: selectedMarker.lat,
                          lng: selectedMarker.lng,
                        }}
                        onCloseClick={() => setSelectedMarker(null)}
                      >
                        <div>
                          <div
                            className="card border-0 mb-0"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="card-body pt-0 p-2 d-flex align-items-center justify-content-between gap-3">
                              <div className="d-flex align-items-center">
                                <Link
                                  to="${marker.profile_link}"
                                  className="avatar flex-shrink-0 me-2avatar-rounded"
                                  tabIndex={0}
                                  target="_blank"
                                >
                                  <ImageWithBasePath
                                    className="img-fluid"
                                    alt={selectedMarker.carName}
                                    src={selectedMarker.image}
                                  />
                                </Link>
                                <div className="ms-2">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    <Link
                                      to={selectedMarker.profile_link}
                                      tabIndex={0}
                                    >
                                      {selectedMarker.carName}
                                    </Link>
                                  </h6>
                                  <p className="fs-13">
                                    {selectedMarker.speciality}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <Link
                                  to={selectedMarker.profile_link}
                                  tabIndex={0}
                                  className="text-decoration-underline fw-medium link-violet"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </InfoWindow>
                    )}
                  </GoogleMap>
                </div>
                <div className="position-absolute top-0 start-0 w-100 z-2 p-3">
                  <div className="input-icon-start position-relative">
                    <span className="input-icon-addon">
                      <i className="ti ti-search" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by Car Name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Live Tracking */}
        {/* Recent Reservations */}
        <div className="col-xl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                <h5>Recent Reservations</h5>
                <Link
                  to={all_routes.adminReservationsList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table custom-table1">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-01.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <p className="d-flex align-items-center fs-13 text-default mb-1">
                              3 Days
                              <i className="ti ti-circle-filled text-primary fs-5 mx-1" />
                              Self
                            </p>
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Ford Endeavour
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1 mb-1">
                          <h6 className="fs-14 fw-semibold">Newyork</h6>
                          <span className="connect-line" />
                          <h6 className="fs-14 fw-semibold">Las Vegas</h6>
                        </div>
                        <p className="fs-13 text-default">
                          15 Jan 2025, 01:00 PM
                        </p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <h6 className="fs-14 fw-semibold">
                            $280{" "}
                            <span className="fw-normal text-default">/day</span>
                          </h6>
                          <Link to="#" className="avatar avatar-sm">
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-05.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-02.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <p className="d-flex align-items-center fs-13 text-default mb-1">
                              4 Days
                              <i className="ti ti-circle-filled text-primary fs-5 mx-1" />
                              Self
                            </p>
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Ferrari 458 MM
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1 mb-1">
                          <h6 className="fs-14 fw-semibold">Chicago</h6>
                          <span className="connect-line" />
                          <h6 className="fs-14 fw-semibold">Houston</h6>
                        </div>
                        <p className="fs-13 text-default">
                          07 Feb 2025, 10:25 AM
                        </p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <h6 className="fs-14 fw-semibold">
                            $225{" "}
                            <span className="fw-normal text-default">/day</span>
                          </h6>
                          <Link to="#" className="avatar avatar-sm">
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-22.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-03.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <p className="d-flex align-items-center fs-13 text-default mb-1">
                              5 Days
                              <i className="ti ti-circle-filled text-primary fs-5 mx-1" />
                              Self
                            </p>
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Ford Mustang{" "}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1 mb-1">
                          <h6 className="fs-14 fw-semibold">Los Angeles </h6>
                          <span className="connect-line" />
                          <h6 className="fs-14 fw-semibold">New York</h6>
                        </div>
                        <p className="fs-13 text-default">
                          14 Feb 2025, 04:40 PM
                        </p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <h6 className="fs-14 fw-semibold">
                            $259{" "}
                            <span className="fw-normal text-default">/day</span>
                          </h6>
                          <Link to="#" className="avatar avatar-sm">
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-23.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-04.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <p className="d-flex align-items-center fs-13 text-default mb-1">
                              6 Days
                              <i className="ti ti-circle-filled text-primary fs-5 mx-1" />
                              Self
                            </p>
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Toyota Tacoma 4
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1 mb-1">
                          <h6 className="fs-14 fw-semibold">Phoenix</h6>
                          <span className="connect-line" />
                          <h6 className="fs-14 fw-semibold">San Antonio</h6>
                        </div>
                        <p className="fs-13 text-default">
                          08 Jan 2025, 09:25 AM
                        </p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <h6 className="fs-14 fw-semibold">
                            $180{" "}
                            <span className="fw-normal text-default">/day</span>
                          </h6>
                          <Link to="#" className="avatar avatar-sm">
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-23.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-05.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <p className="d-flex align-items-center fs-13 text-default mb-1">
                              1 Week
                              <i className="ti ti-circle-filled text-primary fs-5 mx-1" />
                              Self
                            </p>
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Chevrolet Truck
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1 mb-1">
                          <h6 className="fs-14 fw-semibold">Newyork </h6>
                          <span className="connect-line" />
                          <h6 className="fs-14 fw-semibold">Chicago</h6>
                        </div>
                        <p className="fs-13 text-default">
                          17 Feb 2025, 11:45 AM
                        </p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <h6 className="fs-14 fw-semibold">
                            $300{" "}
                            <span className="fw-normal text-default">/day</span>
                          </h6>
                          <Link to="#" className="avatar avatar-sm">
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-06.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Recent Reservations */}
      </div>
      <div className="row">
        {/* Customers */}
        <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                <h5>Customers</h5>
                <Link
                  to={all_routes.adminCustomerList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table custom-table1">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/customer/customer-01.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.customerDetails}>
                                Reuben Keen
                              </Link>
                            </h6>
                            <span className="badge badge-sm bg-secondary-transparent rounded-pill">
                              Client
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">
                          No of Bookings
                        </p>
                        <h6 className="fs-14 fw-semibold">89</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/customer/customer-02.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.customerDetails}>
                                William Jones
                              </Link>
                            </h6>
                            <span className="badge badge-sm bg-violet-transparent rounded-pill">
                              Company
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">
                          No of Bookings
                        </p>
                        <h6 className="fs-14 fw-semibold">45</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/customer/customer-04.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.customerDetails}>
                                Adam Bolden
                              </Link>
                            </h6>
                            <span className="badge badge-sm bg-secondary-transparent rounded-pill">
                              Client
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">
                          No of Bookings
                        </p>
                        <h6 className="fs-14 fw-semibold">32</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/customer/customer-05.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.customerDetails}>
                                Harvey Jimenez
                              </Link>
                            </h6>
                            <span className="badge badge-sm bg-violet-transparent rounded-pill">
                              Company
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">
                          No of Bookings
                        </p>
                        <h6 className="fs-14 fw-semibold">21</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/customer/customer-06.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.customerDetails}>
                                William Ward
                              </Link>
                            </h6>
                            <span className="badge badge-sm bg-secondary-transparent rounded-pill">
                              Client
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">
                          No of Bookings
                        </p>
                        <h6 className="fs-14 fw-semibold">16</h6>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Customers */}
        {/* Income & Expenses */}
        <div className="col-xl-8 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-0">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                <h5 className="mb-1">Income &amp; Expenses</h5>
                <div className="chart-icon d-flex align-items-center gap-4 mb-1">
                  <p className="mb-0 d-flex align-items-center">
                    <span className="chart-color bg-primary me-1" />
                    Income
                  </p>
                  <p className=" d-flex align-items-center mb-0">
                    <span className="chart-color bg-primary-300 me-1" />
                    Expense
                  </p>
                </div>
                <div className="dropdown mb-1">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-calendar me-1" />
                    This Week
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-2">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        This Week
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last Week
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        This Month
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center flex-wrap gap-4">
                <div className="border br-5 p-2">
                  <p className="mb-1">Income This Week</p>
                  <h5>
                    $96896
                    <span className="fs-13 fw-semibold text-success ms-2">
                      +34%
                    </span>
                  </h5>
                </div>
                <div className="border br-5 p-2">
                  <p className="mb-1">Expenses This Week</p>
                  <h5>
                    $12489
                    <span className="fs-13 fw-semibold text-danger ms-2">
                      +34%
                    </span>
                  </h5>
                </div>
              </div>
              <ReactApexChart
                options={salesStatistics.options}
                series={salesStatistics.series}
                type="bar"
                height={290}
              />
            </div>
          </div>
        </div>
        {/* /Income & Expenses */}
      </div>
      <div className="row">
        {/* Maintenance */}
        <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                <h5>Maintenance</h5>
                <Link
                  to={all_routes.adminMaintenanceList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table custom-table1">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-01.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Ford Endeavour
                              </Link>
                            </h6>
                            <p className="fs-13 text-default">Sedan</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">Odometer</p>
                        <h6 className="fs-14 fw-semibold">8656 KM</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-02.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Ferrari 458 MM
                              </Link>
                            </h6>
                            <p className="fs-13 text-default">SUV</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">Odometer</p>
                        <h6 className="fs-14 fw-semibold">565 KM</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-03.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Ford Mustang{" "}
                              </Link>
                            </h6>
                            <p className="fs-13 text-default">Sedan</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">Odometer</p>
                        <h6 className="fs-14 fw-semibold">698 KM</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-04.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Toyota Tacoma 4
                              </Link>
                            </h6>
                            <p className="fs-13 text-default">Minivans</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">Odometer</p>
                        <h6 className="fs-14 fw-semibold">855 KM</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-05.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Chevrolet Truck
                              </Link>
                            </h6>
                            <p className="fs-13 text-default">Hatchbacks</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">Odometer</p>
                        <h6 className="fs-14 fw-semibold">5889 KM</h6>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Maintenance */}
        {/* Reservation Statistics */}
        <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-0">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                <h5 className="mb-1">Reservation Statistics</h5>
                <Link
                  to={all_routes.adminReservationsList}
                  className="text-decoration-underline fw-medium mb-1"
                >
                  View All
                </Link>
              </div>
              <ReactApexChart
                options={statistics_chart.options}
                series={statistics_chart.series}
                type="heatmap"
                height={360}
              />
            </div>
          </div>
        </div>
        {/* /Reservation Statistics */}
        {/* Drivers */}
        <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                <h5>Drivers</h5>
                <Link
                  to={all_routes.adminDriversList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table custom-table1">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/admin/img/drivers/driver-01.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to="#">William Jones</Link>
                            </h6>
                            <p className="fs-13 text-default">
                              No of Raids : 90
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          In Ride
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/admin/img/drivers/driver-02.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to="#">Leonard Jandreau</Link>
                            </h6>
                            <p className="fs-13 text-default">
                              No of Raids : 64
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          In Ride
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/admin/img/drivers/driver-03.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to="#">Adam Bolden</Link>
                            </h6>
                            <p className="fs-13 text-default">
                              No of Raids : 36
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          In Ride
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/admin/img/drivers/driver-04.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to="#">Harvey Jimenez</Link>
                            </h6>
                            <p className="fs-13 text-default">
                              No of Raids : 24
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          In Ride
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/admin/img/drivers/driver-05.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to="#">William Jones</Link>
                            </h6>
                            <p className="fs-13 text-default">
                              No of Raids : 40
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="badge badge-md bg-danger-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          Not Booked
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Drivers */}
      </div>
      <div className="row">
        {/* Recent Invoices */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                <h5 className="mb-1">Recent Invoices</h5>
                <Link
                  to={all_routes.adminInvoicesList}
                  className="text-decoration-underline fw-medium mb-1"
                >
                  View All
                </Link>
              </div>
              <div className="custom-table table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>INVOICE NO</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>CREATED DATE</th>
                      <th>DUE DATE</th>
                      <th>INVOICE AMOUNT</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link
                          to={all_routes.admininvoiceDetails}
                          className="fs-12 fw-medium"
                        >
                          #12345
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-20.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.customerDetails}>
                                Andrew Simons{" "}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>andrew@example.com</td>
                      <td>24 Jan 2025</td>
                      <td>24 Jan 2025</td>
                      <td>$120.00</td>
                      <td>
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          Paid
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          to={all_routes.admininvoiceDetails}
                          className="fs-12 fw-medium"
                        >
                          #12346
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-21.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.customerDetails}>
                                David Steiger
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>david@example.com</td>
                      <td>19 Dec 2024</td>
                      <td>19 Dec 2024</td>
                      <td>$85.00</td>
                      <td>
                        <span className="badge badge-md bg-info-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          to={all_routes.admininvoiceDetails}
                          className="fs-12 fw-medium"
                        >
                          #12347
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-12.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.customerDetails}>
                                Virginia Phu
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>phu@example.com</td>
                      <td>11 Dec 2024</td>
                      <td>11 Dec 2024</td>
                      <td>$250.00</td>
                      <td>
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          Paid
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          to={all_routes.admininvoiceDetails}
                          className="fs-12 fw-medium"
                        >
                          #12348
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-03.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.customerDetails}>
                                Walter Hartmann
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>walter@example.com</td>
                      <td>29 Nov 2024</td>
                      <td>229 Nov 2024</td>
                      <td>$175.00</td>
                      <td>
                        <span className="badge badge-md bg-purple-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          Overdue
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          to={all_routes.admininvoiceDetails}
                          className="fs-12 fw-medium"
                        >
                          #12349
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.customerDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-07.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.customerDetails}>
                                Andrea Jermaine
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>jermaine@example.com</td>
                      <td>03 Nov 2024</td>
                      <td>03 Nov 2024</td>
                      <td>$200.00</td>
                      <td>
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          Paid
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Recent Invoices */}
      </div>
    </div>
  );
};

export default AdminDashboard;
