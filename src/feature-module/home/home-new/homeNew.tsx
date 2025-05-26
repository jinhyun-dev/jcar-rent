import React, { useEffect, useState } from 'react'
import NewHeader from './header'
import NewFooter from './footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';
import { Dropdown } from "primereact/dropdown";
import { DatePicker } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath';
const HomeNew = () => {
    const CustomNextArrow = ({ onClick }: any) => (
        <div className="owl-nav right-nav">
        <button type="button" role="presentation" className="owl-next"  onClick={onClick}>
            <i className="fa-solid fa-arrow-right" />
        </button>
        </div>

      );
      
      const CustomPrevArrow = ({ onClick }: any) => (
        <div className="owl-nav">
        <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
            <i className="fa-solid fa-arrow-left" />
        </button>
        </div>
      );
    const imgslideroption = {
        dots: true,
        nav: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      const Brands = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
            },
          },
         
        ],
       
      };
      const Cars = {
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
            },
          },
         
        ],
       
      };
     const [selectedLocation, setSelectedLocation] = useState(null);
     const [selectedDropLocation, setSelectedDropLocation] = useState(null);

      const locations = [
        { name: 'New York' },
        { name: 'Dallas' },
        { name: 'Chicago' },
        { name: 'San Diego' }
      ];

      const dropLocations = [
        { name: 'San Francisco' },
        { name: 'Austin' },
        { name: 'Boston' },
        { name: 'Chicago' }
      ];
      useEffect(() => {
        AOS.init({ duration: 1200, once: true });
      }, []);
  return (
    <>
    <NewHeader/>
    <>
  {/* Banner */}
  <section className="banner-section-four">
    <div className="container">
      <div className="home-banner">
        <div className="row align-items-center">
          <div className="col-lg-5" data-aos="fade-down">
            <div className="banner-content">
              <h1>
                Explore our <span>Verified &amp; Professional</span> Cars
              </h1>
              <p>
                Modern design sports cruisers for those who crave adventure
                &amp; grandeur Cars for relaxing with your loved ones.
              </p>
              <div className="customer-list">
                <div className="users-wrap">
                  <ul className="users-list">
                    <li>
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-11.jpg"
                        className="img-fluid aos"
                        alt="bannerimage"
                      />
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-15.jpg"
                        className="img-fluid aos"
                        alt="bannerimage"
                      />
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        className="img-fluid aos"
                        alt="bannerimage"
                      />
                    </li>
                  </ul>
                  <div className="customer-info">
                    <h4>6K + Customers</h4>
                    <p>has used our renting services </p>
                  </div>
                </div>
                <div className="view-all d-flex align-items-center gap-3">
                  <Link
                    to={all_routes.listingGrid}
                    className="btn btn-primary d-inline-flex align-items-center"
                  >
                    Rent a Car
                    <i className="bx bx-right-arrow-alt ms-1" />
                  </Link>
                  <Link
                    to={all_routes.addListing}
                    className="btn btn-secondary d-inline-flex align-items-center"
                  >
                    <i className="bx bxs-plus-circle me-1" />
                    Add Your Car
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="banner-image">
              <div className="banner-img" data-aos="fade-down">
                <div className="amount-icon">
                  <span className="day-amt">
                    <p>Starts From</p>
                    <h6>
                      $650 <span> /day</span>
                    </h6>
                  </span>
                </div>
                <span className="rent-tag">
                  <i className="bx bxs-circle" /> Available for Rent
                </span>
                <ImageWithBasePath
                  src="assets/img/banner/banner.png"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-search new-home-banner">
        <form
          action={all_routes.listingGrid}
          className="form-block d-flex align-items-center"
        >
          <div className="search-input">
            <div className="input-block">
              <label>Pickup Location</label>
              <Dropdown
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.value)}
                options={locations}
                optionLabel="name"
                placeholder="Choose Location"
                className="w-100 bg-transparent border-0"
                />
            </div>
          </div>
          <div className="search-input">
            <div className="input-block">
              <label>Drop Location</label>
              <Dropdown
                value={selectedDropLocation}
                onChange={(e) => setSelectedDropLocation(e.value)}
                options={dropLocations}
                optionLabel="name"
                placeholder="Choose Location"
                className="w-100 bg-transparent border-0" 
                />
            </div>
          </div>
          <div className="search-input">
            <div className="input-block">
              <label>Pickup Date &amp; time</label>
              <div className="input-wrap">
                
                <DatePicker
                    format="YYYY-MM-DD hh:mm A"
                    className="form-control flatpickr-datetime"
                    showTime={{ use12Hours: true }}
                    />
                <span className="input-icon">
                  <i className="bx bx-chevron-down" />
                </span>
              </div>
            </div>
          </div>
          <div className="search-input input-end">
            <div className="input-block">
              <label>Drop Date &amp; time</label>
              <div className="input-wrap">
              <DatePicker
                    format="YYYY-MM-DD hh:mm A"
                    className="form-control flatpickr-datetime"
                    showTime={{ use12Hours: true }}
                    />
                <span className="input-icon">
                  <i className="bx bx-chevron-down" />
                </span>
              </div>
            </div>
          </div>
          <div className="search-btn">
            <Link to={all_routes.listingGrid} className="btn btn-primary" type="submit">
              <i className="bx bx-search-alt" />
            </Link>
          </div>
        </form>
      </div>
    </div>
    <div className="banner-bgs">
      <ImageWithBasePath
        src="assets/img/bg/banner-bg-01.png"
        className="bg-01 img-fluid"
        alt="img"
      />
    </div>
  </section>
  {/* /Banner */}
  {/* Category  Section */}
  <section className="category-section-four">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Heading title*/}
          <div className="section-heading heading-four" data-aos="fade-down">
            <h2>Featured Categories</h2>
            <p>
              Know what you’re looking for? Browse our extensive selection of
              cars
            </p>
          </div>
          {/* /Heading title */}
          <div className="row row-gap-4">
            {/* Category Item */}
            <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div className="category-item flex-fill">
                <div className="category-info d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="title">
                      <Link to={all_routes.listingGrid}>Sports Coupe</Link>
                    </h6>
                    <p>14 Cars</p>
                  </div>
                  <Link to={all_routes.listingGrid} className="link-icon">
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
                <div className="category-img">
                  <ImageWithBasePath
                    src="assets/img/category/category-01.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* /Category Item */}
            {/* Category Item */}
            <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div className="category-item flex-fill">
                <div className="category-info d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="title">
                      <Link to={all_routes.listingGrid}>Sedan</Link>
                    </h6>
                    <p>12 Cars</p>
                  </div>
                  <Link to={all_routes.listingGrid} className="link-icon">
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
                <div className="category-img">
                  <ImageWithBasePath
                    src="assets/img/category/category-02.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* /Category Item */}
            {/* Category Item */}
            <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div className="category-item flex-fill">
                <div className="category-info d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="title">
                      <Link to={all_routes.listingGrid}>Sports Car</Link>
                    </h6>
                    <p>35 Cars</p>
                  </div>
                  <Link to={all_routes.listingGrid} className="link-icon">
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
                <div className="category-img">
                  <ImageWithBasePath
                    src="assets/img/category/category-03.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* /Category Item */}
            {/* Category Item */}
            <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div className="category-item flex-fill">
                <div className="category-info d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="title">
                      <Link to={all_routes.listingGrid}>Pickup</Link>
                    </h6>
                    <p>35 Cars</p>
                  </div>
                  <Link to={all_routes.listingGrid} className="link-icon">
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
                <div className="category-img">
                  <ImageWithBasePath
                    src="assets/img/category/category-04.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* /Category Item */}
            {/* Category Item */}
            <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div className="category-item flex-fill">
                <div className="category-info d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="title">
                      <Link to={all_routes.listingGrid}>Family MPV</Link>
                    </h6>
                    <p>35 Cars</p>
                  </div>
                  <Link to={all_routes.listingGrid} className="link-icon">
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
                <div className="category-img">
                  <ImageWithBasePath
                    src="assets/img/category/category-05.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* /Category Item */}
            {/* Category Item */}
            <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
              <div className="category-item flex-fill">
                <div className="category-info d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="title">
                      <Link to={all_routes.listingGrid}>Crossover</Link>
                    </h6>
                    <p>30 Cars</p>
                  </div>
                  <Link to={all_routes.listingGrid} className="link-icon">
                    <i className="bx bx-right-arrow-alt" />
                  </Link>
                </div>
                <div className="category-img">
                  <ImageWithBasePath
                    src="assets/img/category/category-06.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* /Category Item */}
          </div>
          <div className="view-all-btn text-center aos" data-aos="fade-down">
            <Link to={all_routes.listingGrid} className="btn btn-secondary">
              View All
              <i className="bx bx-right-arrow-alt ms-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Category  Section */}
  {/* Feature Section */}
  <section className="feature-section pt-0">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="feature-img">
            <div
              className="section-heading heading-four text-start"
              data-aos="fade-down"
            >
              <h2>Best Platform for Car Rental</h2>
              <p>
                Why do we choose relax rent bikes generally if we travel in a un
                known cities with a bike in our hand we feel which is like a
                home town
              </p>
            </div>
            <ImageWithBasePath
              src="assets/img/cars/car.png"
              alt="img"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row row-gap-4">
            {/* Feature Item */}
            <div className="col-md-6 d-flex">
              <div className="feature-item flex-fill">
                <span className="feature-icon">
                  <i className="bx bxs-info-circle" />
                </span>
                <div>
                  <h6 className="mb-1">Best Deal</h6>
                  <p>Dreams Rent offers a fleet of high-quality </p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-md-6 d-flex">
              <div className="feature-item flex-fill">
                <span className="feature-icon">
                  <i className="bx bx-exclude" />
                </span>
                <div>
                  <h6 className="mb-1">Doorstep Delivery</h6>
                  <p>Dreams Rent offers a fleet of high-quality </p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-md-6 d-flex">
              <div className="feature-item flex-fill">
                <span className="feature-icon">
                  <i className="bx bx-money" />
                </span>
                <div>
                  <h6 className="mb-1">Low Security Deposit</h6>
                  <p>Dreams Rent offers a fleet of high-quality </p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-md-6 d-flex">
              <div className="feature-item flex-fill">
                <span className="feature-icon">
                  <i className="bx bxs-car-mechanic" />
                </span>
                <div>
                  <h6 className="mb-1">Latest Cars</h6>
                  <p>Dreams Rent offers a fleet of high-quality</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-md-6 d-flex">
              <div className="feature-item flex-fill">
                <span className="feature-icon">
                  <i className="bx bx-support" />
                </span>
                <div>
                  <h6 className="mb-1">Customer Support</h6>
                  <p>Dreams Rent offers a fleet of high-quality</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-md-6 d-flex">
              <div className="feature-item flex-fill">
                <span className="feature-icon">
                  <i className="bx bxs-coin" />
                </span>
                <div>
                  <h6 className="mb-1">No Hidden Charges</h6>
                  <p>Dreams Rent offers a fleet of high-quality</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Feature Section */}
  {/* Car Section */}
  <section className="car-section">
    <div className="container">
      <div className="section-heading heading-four" data-aos="fade-down">
        <h2>Explore Most Popular Cars</h2>
        <p>Here&apos;s a list of some of the most popular cars globally</p>
      </div>
      <div className="row">
        {/* Car List */}
        <div className="col-lg-4 col-md-6">
          <div className="listing-item listing-item-two">
            <div className="listing-img">
                <div className="img-slider ">
                <Slider {...imgslideroption} >
                <div className="slide-images">
                  <Link to={all_routes.listingDetails}>
                    <ImageWithBasePath
                      src="assets/img/cars/car-11.jpg"
                      className="img-fluid"
                      alt="Toyota"
                    />
                  </Link>
                </div>
                <div className="slide-images">
                  <Link to={all_routes.listingDetails}>
                    <ImageWithBasePath
                      src="assets/img/cars/car-12.jpg"
                      className="img-fluid"
                      alt="Toyota"
                    />
                  </Link>
                </div>
                <div className="slide-images">
                  <Link to={all_routes.listingDetails}>
                    <ImageWithBasePath
                      src="assets/img/cars/car-11.jpg"
                      className="img-fluid"
                      alt="Toyota"
                    />
                  </Link>
                </div>
              </Slider>
                </div>
              
              <div className="fav-item">
                <div className="d-flex align-items-center gap-2">
                  <span className="featured-text">Toyota</span>
                  <span className="availability">Available</span>
                </div>
                <Link to="#" className="fav-icon selected">
                  <i className="feather icon-heart" />
                </Link>
              </div>
              <span className="location">
                <i className="bx bx-map me-1" />
                Lasvegas
              </span>
            </div>
            <div className="listing-content">
              <div className="listing-features d-flex align-items-center justify-content-between">
                <div className="list-rating">
                  <h3 className="listing-title">
                    <Link to={all_routes.listingDetails}>Toyota Camry SE 350</Link>
                  </h3>
                  <div className="list-rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span>(4.0) 138 Reviews</span>
                  </div>
                </div>
                <div>
                  <h4 className="price">
                    $160 <span>/ Day</span>
                  </h4>
                </div>
              </div>
              <div className="listing-details-group">
                <ul>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-01.svg" alt="Auto" />
                    <p>Auto</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-02.svg" alt="10 KM" />
                    <p>10 KM</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-03.svg" alt="Petrol" />
                    <p>Diesel</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-05.svg" alt={'2018'} />
                    <p>2018</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Car List */}
        {/* Car List */}
        <div className="col-lg-4 col-md-6">
          <div className="listing-item listing-item-two">
            <div className="listing-img">
              <Link to={all_routes.listingDetails}>
                <ImageWithBasePath
                  src="assets/img/cars/car-12.jpg"
                  className="img-fluid"
                  alt="Toyota"
                />
              </Link>
              <div className="fav-item">
                <div className="d-flex align-items-center gap-2">
                  <span className="featured-text">Toyota</span>
                  <span className="availability">Available</span>
                </div>
                <Link to="#" className="fav-icon selected">
                  <i className="feather icon-heart" />
                </Link>
              </div>
              <span className="location">
                <i className="bx bx-map me-1" />
                Lasvegas
              </span>
            </div>
            <div className="listing-content">
              <div className="listing-features d-flex align-items-center justify-content-between">
                <div className="list-rating">
                  <h3 className="listing-title">
                    <Link to={all_routes.listingDetails}>Audi A3 2019 new</Link>
                  </h3>
                  <div className="list-rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span>(4.0) 150 Reviews</span>
                  </div>
                </div>
                <div>
                  <h4 className="price">
                    $45 <span>/ Day</span>
                  </h4>
                </div>
              </div>
              <div className="listing-details-group">
                <ul>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-01.svg" alt="Auto" />
                    <p>Auto</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-02.svg" alt="10 KM" />
                    <p>10 KM</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-03.svg" alt="Petrol" />
                    <p>Diesel</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-05.svg" alt={'2018'} />
                    <p>2019</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Car List */}
        {/* Car List */}
        <div className="col-lg-4 col-md-6">
          <div className="listing-item listing-item-two">
            <div className="listing-img">
              <Link to={all_routes.listingDetails}>
                <ImageWithBasePath
                  src="assets/img/cars/car-13.jpg"
                  className="img-fluid"
                  alt="Toyota"
                />
              </Link>
              <div className="fav-item">
                <div className="d-flex align-items-center gap-2">
                  <span className="featured-text">Toyota</span>
                  <span className="availability">Available</span>
                </div>
                <Link to="#" className="fav-icon">
                  <i className="feather icon-heart" />
                </Link>
              </div>
              <span className="location">
                <i className="bx bx-map me-1" />
                Lasvegas
              </span>
            </div>
            <div className="listing-content">
              <div className="listing-features d-flex align-items-center justify-content-between">
                <div className="list-rating">
                  <h3 className="listing-title">
                    <Link to={all_routes.listingDetails}>Ford Mustang 4.0 AT</Link>
                  </h3>
                  <div className="list-rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span>(4.0) 170 Reviews</span>
                  </div>
                </div>
                <div>
                  <h4 className="price">
                    $90 <span>/ Day</span>
                  </h4>
                </div>
              </div>
              <div className="listing-details-group">
                <ul>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-01.svg" alt="Auto" />
                    <p>Auto</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-02.svg" alt="10 KM" />
                    <p>10 KM</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-03.svg" alt="Petrol" />
                    <p>Petrol</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-05.svg" alt={'2018'} />
                    <p>2021</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Car List */}
        {/* Car List */}
        <div className="col-lg-4 col-md-6">
          <div className="listing-item listing-item-two">
            <div className="listing-img">
              <div className="img-slider ">
              <Slider {...imgslideroption} >
                <div className="slide-images">
                  <Link to={all_routes.listingDetails}>
                    <ImageWithBasePath
                      src="assets/img/cars/car-14.jpg"
                      className="img-fluid"
                      alt="Toyota"
                    />
                  </Link>
                </div>
                <div className="slide-images">
                  <Link to={all_routes.listingDetails}>
                    <ImageWithBasePath
                      src="assets/img/cars/car-13.jpg"
                      className="img-fluid"
                      alt="Toyota"
                    />
                  </Link>
                </div>
                <div className="slide-images">
                  <Link to={all_routes.listingDetails}>
                    <ImageWithBasePath
                      src="assets/img/cars/car-16.jpg"
                      className="img-fluid"
                      alt="Toyota"
                    />
                  </Link>
                </div>
                </Slider>
              </div>
              <div className="fav-item">
                <div className="d-flex align-items-center gap-2">
                  <span className="featured-text">Toyota</span>
                  <span className="availability">Available</span>
                </div>
                <Link to="#" className="fav-icon">
                  <i className="feather icon-heart" />
                </Link>
              </div>
              <span className="location">
                <i className="bx bx-map me-1" />
                Spain
              </span>
            </div>
            <div className="listing-content">
              <div className="listing-features d-flex align-items-center justify-content-between">
                <div className="list-rating">
                  <h3 className="listing-title">
                    <Link to={all_routes.listingDetails}>Chevrolet Picker</Link>
                  </h3>
                  <div className="list-rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span>(4.0) 165 Reviews</span>
                  </div>
                </div>
                <div>
                  <h4 className="price">
                    $48 <span>/ Day</span>
                  </h4>
                </div>
              </div>
              <div className="listing-details-group">
                <ul>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-01.svg" alt="Auto" />
                    <p>Manual</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-02.svg" alt="10 KM" />
                    <p>18 KM</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-03.svg" alt="Petrol" />
                    <p>Diesel</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-05.svg" alt={'2018'} />
                    <p>2018</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Car List */}
        {/* Car List */}
        <div className="col-lg-4 col-md-6">
          <div className="listing-item listing-item-two">
            <div className="listing-img">
              <Link to={all_routes.listingDetails}>
                <ImageWithBasePath
                  src="assets/img/cars/car-15.jpg"
                  className="img-fluid"
                  alt="Toyota"
                />
              </Link>
              <div className="fav-item">
                <div className="d-flex align-items-center gap-2">
                  <span className="featured-text">Toyota</span>
                  <span className="availability">Available</span>
                </div>
                <Link to="#" className="fav-icon">
                  <i className="feather icon-heart" />
                </Link>
              </div>
              <span className="location">
                <i className="bx bx-map me-1" />
                Lasvegas
              </span>
            </div>
            <div className="listing-content">
              <div className="listing-features d-flex align-items-center justify-content-between">
                <div className="list-rating">
                  <h3 className="listing-title">
                    <Link to={all_routes.listingDetails}>Ferrari 458 MM Special</Link>
                  </h3>
                  <div className="list-rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span>(4.0) 160 Reviews</span>
                  </div>
                </div>
                <div>
                  <h4 className="price">
                    $95 <span>/ Day</span>
                  </h4>
                </div>
              </div>
              <div className="listing-details-group">
                <ul>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-01.svg" alt="Auto" />
                    <p>Auto</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-02.svg" alt="10 KM" />
                    <p>16 KM</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-03.svg" alt="Petrol" />
                    <p>Petrol</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-05.svg" alt={'2018'} />
                    <p>2021</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Car List */}
        {/* Car List */}
        <div className="col-lg-4 col-md-6">
          <div className="listing-item listing-item-two">
            <div className="listing-img">
              <Link to={all_routes.listingDetails}>
                <ImageWithBasePath
                  src="assets/img/cars/car-16.jpg"
                  className="img-fluid"
                  alt="Toyota"
                />
              </Link>
              <div className="fav-item">
                <div className="d-flex align-items-center gap-2">
                  <span className="featured-text">Toyota</span>
                  <span className="availability">Available</span>
                </div>
                <Link to="#" className="fav-icon">
                  <i className="feather icon-heart" />
                </Link>
              </div>
              <span className="location">
                <i className="bx bx-map me-1" />
                Newyork, USA
              </span>
            </div>
            <div className="listing-content">
              <div className="listing-features d-flex align-items-center justify-content-between">
                <div className="list-rating">
                  <h3 className="listing-title">
                    <Link to={all_routes.listingDetails}>2018 Chevrolet Camaro</Link>
                  </h3>
                  <div className="list-rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span>(4.0) 150 Reviews</span>
                  </div>
                </div>
                <div>
                  <h4 className="price">
                    $120 <span>/ Day</span>
                  </h4>
                </div>
              </div>
              <div className="listing-details-group">
                <ul>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-01.svg" alt="Auto" />
                    <p>Auto</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-02.svg" alt="10 KM" />
                    <p>10 KM</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-03.svg" alt="Petrol" />
                    <p>Diesel</p>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/car-parts-05.svg" alt={'2018'} />
                    <p>2019</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Car List */}
      </div>
      <div className="view-all-btn text-center aos" data-aos="fade-down">
        <Link
          to={all_routes.listingGrid}
          className="btn btn-secondary d-inline-flex align-items-center"
        >
          View More Cars
          <i className="bx bx-right-arrow-alt ms-1" />
        </Link>
      </div>
    </div>
  </section>
  {/* /Car Section */}
  {/* Brand Section */}
  <section className="brand-section">
    <div className="container">
      <div className="section-heading heading-four" data-aos="fade-down">
        <h2 className="text-white">Rent by Brands</h2>
        <p>Here&apos;s a list of some of the most popular cars globally</p>
      </div>
      <Slider {...Brands} className="brands-slider">
        <div className="brand-wrap">
          <ImageWithBasePath src="assets/img/brand/brand-09.svg" alt="img" />
          <p>Chevrolet</p>
        </div>
        <div className="brand-wrap">
          <ImageWithBasePath src="assets/img/brand/brand-10.svg" alt="img" />
          <p>Chevrolet</p>
        </div>
        <div className="brand-wrap">
          <ImageWithBasePath src="assets/img/brand/brand-11.svg" alt="img" />
          <p>Chevrolet</p>
        </div>
        <div className="brand-wrap">
          <ImageWithBasePath src="assets/img/brand/brand-12.svg" alt="img" />
          <p>Chevrolet</p>
        </div>
        <div className="brand-wrap">
          <ImageWithBasePath src="assets/img/brand/brand-13.svg" alt="img" />
          <p>Chevrolet</p>
        </div>
        <div className="brand-wrap">
          <ImageWithBasePath src="assets/img/brand/brand-14.svg" alt="img" />
          <p>Chevrolet</p>
        </div>
      </Slider>
      <div className="brand-img text-center">
        <ImageWithBasePath src="assets/img/bg/brand.png" alt="img" className="img-fluid" />
      </div>
    </div>
  </section>
  {/* /Brand Section */}
  {/* Rental Section */}
  <section className="rental-section-four">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <div className="rental-img">
            <ImageWithBasePath
              src="assets/img/about/rent-car.png"
              alt="img"
              className="img-fluid"
            />
            <div className="grid-img">
              <ImageWithBasePath
                src="assets/img/about/car-grid.png"
                alt="img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="rental-content">
            <div
              className="section-heading heading-four text-start"
              data-aos="fade-down"
            >
              <h2>Rent Our Cars in 3 Steps</h2>
              <p>Check how it Works to Rent Cars in DreamsRent</p>
            </div>
            <div className="step-item d-flex align-items-center">
              <span className="step-icon bg-primary me-3">
                <i className="bx bx-calendar-heart" />
              </span>
              <div>
                <h5>Choose Date &amp; Locations</h5>
                <p>
                  Determine the date &amp; location for your car rental.
                  Consider factors such as your travel itinerary,
                  pickup/drop-off locations
                </p>
              </div>
            </div>
            <div className="step-item d-flex align-items-center">
              <span className="step-icon bg-secondary-100 me-3">
                <i className="bx bxs-edit-location" />
              </span>
              <div>
                <h5>Select Pick-Up &amp; Drop Locations</h5>
                <p>
                  Check the availability of your desired vehicle type for your
                  chosen dates and location. Ensure that the rental rates,
                  taxes, fees, and any additional charges.
                </p>
              </div>
            </div>
            <div className="step-item d-flex align-items-center">
              <span className="step-icon bg-dark me-3">
                <i className="bx bx-coffee-togo" />
              </span>
              <div>
                <h5>Book your Car</h5>
                <p>
                  Determine the date &amp; location for your car rental.
                  Consider factors such as your travel itinerary,
                  pickup/drop-off locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="count-sec">
        <div className="row row-gap-4">
          <div className="col-lg-3 col-md-6 d-flex">
            <div className="count-item flex-fill">
              <h3>
                <span className="counterUp">16</span>K+
              </h3>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <div className="count-item flex-fill">
              <h3>
                <span className="counterUp">2547</span>K+
              </h3>
              <p>Count of Cars</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <div className="count-item flex-fill">
              <h3>
                <span className="counterUp">625</span>K+
              </h3>
              <p>Locations to Pickup</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <div className="count-item flex-fill">
              <h3>
                <span className="counterUp">15000</span>K+
              </h3>
              <p>Total Kilometers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Rental Section */}
  {/* Popular Section */}
  <section className="popular-section-four">
    <div className="container">
      {/* Section Header */}
      <div className="section-heading heading-four" data-aos="fade-down">
        <h2>Popular Cars On Recommendations</h2>
        <p>Here are some versatile options that cater to different needs</p>
      </div>
      {/* /Section Header */}
      <Slider {...Cars} className="car-slider owl-carousel ">
        {/* Car Item */}
        <div className="car-item">
          <h6>FORD</h6>
          <h2 className="display-1">MUSTANG</h2>
          <div className="car-img">
            <ImageWithBasePath
              src="assets/img/cars/car-15.png"
              alt="img"
              className="img-fluid"
            />
            <div className="amount-icon">
              <span className="day-amt">
                <p>Starts From</p>
                <h6>
                  $650 <span> /day</span>
                </h6>
              </span>
            </div>
          </div>
          <div className="spec-list">
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-01.svg" alt="img" />
              Auto
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-02.svg" alt="img" />
              Power
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-03.svg" alt="img" />
              30 K
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-04.svg" alt="img" />
              AC
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />
              Diesel
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />5 Persons
            </span>
          </div>
          <Link to={all_routes.listingDetails} className="btn btn-primary">
            Rent Now
          </Link>
        </div>
        {/* /Car Item */}
        {/* Car Item */}
        <div className="car-item">
          <h6>AUDI</h6>
          <h2 className="display-1">A3 2024 New</h2>
          <div className="car-img">
            <ImageWithBasePath
              src="assets/img/cars/car-16.png"
              alt="img"
              className="img-fluid"
            />
            <div className="amount-icon">
              <span className="day-amt">
                <p>Starts From</p>
                <h6>
                  $650 <span>/day</span>
                </h6>
              </span>
            </div>
          </div>
          <div className="spec-list">
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-01.svg" alt="img" />
              Auto
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-02.svg" alt="img" />
              Power
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-03.svg" alt="img" />
              60 K
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-04.svg" alt="img" />
              AC
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />
              Gas
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />4 Persons
            </span>
          </div>
          <Link to={all_routes.listingDetails} className="btn btn-primary">
            Rent Now
          </Link>
        </div>
        {/* /Car Item */}
        {/* Car Item */}
        <div className="car-item">
          <h6>TOYOTO</h6>
          <h2 className="display-1">CAMREY SE 350</h2>
          <div className="car-img">
            <ImageWithBasePath
              src="assets/img/cars/car-17.png"
              alt="img"
              className="img-fluid"
            />
            <div className="amount-icon">
              <span className="day-amt">
                <p>Starts From</p>
                <h6>
                  $799 <span>/day</span>
                </h6>
              </span>
            </div>
          </div>
          <div className="spec-list">
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-01.svg" alt="img" />
              Auto
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-02.svg" alt="img" />
              Power
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-03.svg" alt="img" />
              80 K
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-04.svg" alt="img" />
              AC
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />
              Petrol
            </span>
            <span>
              <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />6 Persons
            </span>
          </div>
          <Link to={all_routes.listingDetails} className="btn btn-primary">
            Rent Now
          </Link>
        </div>
        {/* /Car Item */}
      </Slider>
    </div>
  </section>
  {/* /Popular Section */}
  {/* Testimonial Section */}
  <section className="testimonial-section">
    <div className="container">
      <div className="section-heading heading-four" data-aos="fade-down">
        <h2>Our Clients Feedback</h2>
        <p>
          Provided by customers about&nbsp;their&nbsp;experience with a product
          or service.
        </p>
      </div>
      <div className="row row-gap-4 justify-content-center">
        {/* Testimonial Item */}
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="testimonial-item testimonial-item-two flex-fill">
            <div className="user-img">
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <p>
              Renting a car from Dreams rent made my vacation so much smoother!
              The process was quick
            </p>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
            </div>
            <div className="user-info">
              <h6>Kyle Roberts DVM</h6>
              <p>Newyork, USA</p>
            </div>
          </div>
        </div>
        {/* /Testimonial Item */}
        {/* Testimonial Item */}
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="testimonial-item testimonial-item-two flex-fill">
            <div className="user-img">
              <ImageWithBasePath
                src="assets/img/profiles/avatar-18.jpg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <p>
              Their wide selection of vehicles, convenient locations, and
              competitive prices
            </p>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
            </div>
            <div className="user-info">
              <h6>Hardley Vanessa</h6>
              <p>Newyork, USA</p>
            </div>
          </div>
        </div>
        {/* /Testimonial Item */}
        {/* Testimonial Item */}
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="testimonial-item testimonial-item-two flex-fill">
            <div className="user-img">
              <ImageWithBasePath
                src="assets/img/profiles/avatar-15.jpg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <p>
              The spacious SUV we rented comfortably fit our family and all our
              luggage
            </p>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
            </div>
            <div className="user-info">
              <h6>Wilson</h6>
              <p>Nevada, USA</p>
            </div>
          </div>
        </div>
        {/* /Testimonial Item */}
      </div>
      <div className="view-all-btn text-center aos" data-aos="fade-down">
        <Link to={all_routes.listingGrid} className="btn btn-secondary">
          View All
          <i className="bx bx-right-arrow-alt ms-1" />
        </Link>
      </div>
      <Slider {...Brands} className="client-slider owl-carousel">
        <div>
          <ImageWithBasePath src="assets/img/clients/client-01.svg" alt="img" />
        </div>
        <div>
          <ImageWithBasePath src="assets/img/clients/client-02.svg" alt="img" />
        </div>
        <div>
          <ImageWithBasePath src="assets/img/clients/client-03.svg" alt="img" />
        </div>
        <div>
          <ImageWithBasePath src="assets/img/clients/client-04.svg" alt="img" />
        </div>
        <div>
          <ImageWithBasePath src="assets/img/clients/client-05.svg" alt="img" />
        </div>
        <div>
          <ImageWithBasePath src="assets/img/clients/client-06.svg" alt="img" />
        </div>
      </Slider>
    </div>
  </section>
  {/* /Testimonial Section */}
  {/* Price Section */}
  <section className="pricing-section-four">
    <div className="container">
      <div className="section-heading heading-four" data-aos="fade-down">
        <h2>Best Pricing in Rental</h2>
        <p>Choose the Right Plan for Your Business</p>
      </div>
      <div className="row">
        {/* Price Item */}
        <div className="col-lg-3 col-md-6 d-flex">
          <div className="price-item price-item-two flex-fill">
            <div className="price-head">
              <h6>Stater</h6>
              <div className="price-level">
                <div>
                  <h3>$299</h3>
                  <p>Per Month</p>
                </div>
                <span className="offer-tag bg-danger">30% Offer</span>
              </div>
            </div>
            <div className="price-details">
              <ul>
                <li>50% Downpayment</li>
                <li>Insurance not Included</li>
                <li>Doorstep Not Included</li>
                <li>Roadside Assistance</li>
                <li>Minimal Insurance Coverage</li>
                <li>Additional Perks - GPS</li>
                <li>No Flexible timing &amp; extension</li>
              </ul>
              <Link to={all_routes.login} className="btn btn-secondary w-100">
                Choose Plan
                <i className="bx bx-right-arrow-alt ms-1" />
              </Link>
            </div>
          </div>
        </div>
        {/* /Price Item */}
        {/* Price Item */}
        <div className="col-lg-3 col-md-6 d-flex">
          <div className="price-item price-item-two flex-fill">
            <div className="price-head">
              <h6>Premium</h6>
              <div className="price-level">
                <div>
                  <h3>$1299</h3>
                  <p>Per Month</p>
                </div>
                <span className="offer-tag bg-pink">100% Offer</span>
              </div>
            </div>
            <div className="price-details">
              <ul>
                <li>25% Downpayment</li>
                <li>Insurance Included</li>
                <li>Doorstep Delivery Available</li>
                <li>Roadside Assistance</li>
                <li>Personal Injury Protection</li>
                <li>Additional Perks GPS, Car Seat</li>
                <li>Flexible timing &amp; extension</li>
              </ul>
              <Link to={all_routes.login} className="btn btn-secondary w-100">
                Choose Plan
                <i className="bx bx-right-arrow-alt ms-1" />
              </Link>
            </div>
          </div>
        </div>
        {/* /Price Item */}
        {/* Price Item */}
        <div className="col-lg-3 col-md-6 d-flex">
          <div className="price-item price-item-two recommend flex-fill">
            <span className="recommend-tag">
              <i className="bx bxs-star me-1" />
              Recommended
            </span>
            <div className="price-head">
              <h6>Enterprise</h6>
              <div className="price-level">
                <div>
                  <h3>$1599</h3>
                  <p>Per Month</p>
                </div>
              </div>
            </div>
            <div className="price-details">
              <ul>
                <li>0% Downpayment</li>
                <li>Insurance Included</li>
                <li>Doorstep Delivery Available</li>
                <li>Roadside Assistance</li>
                <li>Personal Injury Protection</li>
                <li>Additional Perks GPS, Car Seat</li>
                <li>Flexible timing &amp; extension</li>
              </ul>
              <Link to={all_routes.login} className="btn btn-secondary w-100">
                Choose Plan
                <i className="bx bx-right-arrow-alt ms-1" />
              </Link>
            </div>
          </div>
        </div>
        {/* /Price Item */}
        {/* Price Item */}
        <div className="col-lg-3 col-md-6 d-flex">
          <div className="price-item price-item-two active flex-fill">
            <div className="price-head">
              <h6>Custom</h6>
              <div className="price-level">
                <div>
                  <h3>Contact Us</h3>
                </div>
              </div>
            </div>
            <div className="price-details">
              <ul>
                <li>Weekend/Weekly Deals</li>
                <li>Membership Discounts</li>
                <li>Insurance Upgrades</li>
                <li>Personal Accident Insurance</li>
                <li>Minimal Insurance Coverage</li>
                <li>No Long term Commitment</li>
                <li>Refundable Deposit </li>
                <li>Priority Service</li>
              </ul>
              <Link to={all_routes.login} className="btn btn-secondary w-100">
                Choose Plan
                <i className="bx bx-right-arrow-alt ms-1" />
              </Link>
            </div>
          </div>
        </div>
        {/* /Price Item */}
      </div>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="view-all-btn text-center aos" data-aos="fade-down">
            <p>
              Whether you&apos;re a small startup or a large enterprise, our goal is
              to provide you with the most value and help you leverage the full
              potential of AI analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Price Section */}
  {/* Support Section */}
  <section className="support-section">
    <div
      className="horizontal-slide d-flex"
      data-direction="left"
      data-speed="slow"
    >
      <div className="slide-list d-flex">
        <div className="support-item">
          <h2>Best Rate Guarateed</h2>
        </div>
        <div className="support-item">
          <h2>Free Cancellation</h2>
        </div>
        <div className="support-item">
          <h2>Best Security</h2>
        </div>
        <div className="support-item">
          <h2>Latest Update of Bikes</h2>
        </div>
        <div className="support-item">
          <h2>Trusted Proof</h2>
        </div>
      </div>
    </div>
  </section>
  {/* /Support Section */}
  {/* Blog Section */}
  <section className="blog-section-four">
    <div className="container">
      <div className="section-heading heading-four" data-aos="fade-down">
        <h2>Insights and Innovations</h2>
        <p>
          Dive into our articles to stay ahead in the fast-paced world of
          technology.
        </p>
      </div>
      <div className="row row-gap-3 justify-content-center">
        {/* Blog Item */}
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="blog-item flex-fill">
            <div className="blog-img">
              <ImageWithBasePath
                src="assets/img/blog/blog-11.jpg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <div className="blog-content">
              <div className="d-flex align-center justify-content-between blog-category">
                <Link to="#" className="category">
                  Journey
                </Link>
                <p className="date d-inline-flex align-center">
                  <i className="bx bx-calendar me-1" />
                  October 6, 2022
                </p>
              </div>
              <h5 className="title">
                <Link to={all_routes.blogDetails}>
                  The 2025 Ford F-150 Raptor – A First Look you need to know
                </Link>
              </h5>
            </div>
          </div>
        </div>
        {/* /Blog Item */}
        {/* Blog Item */}
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="blog-item flex-fill">
            <div className="blog-img">
              <ImageWithBasePath
                src="assets/img/blog/blog-12.jpg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <div className="blog-content">
              <div className="d-flex align-center justify-content-between blog-category">
                <Link to="#" className="category">
                  Journey
                </Link>
                <p className="date d-inline-flex align-center">
                  <i className="bx bx-calendar me-1" />
                  October 7, 2022
                </p>
              </div>
              <h5 className="title">
                <Link to={all_routes.blogDetails}>
                  The 2025 Ford F-150 Raptor – A First Look you need to know
                </Link>
              </h5>
            </div>
          </div>
        </div>
        {/* /Blog Item */}
        {/* Blog Item */}
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="blog-item flex-fill">
            <div className="blog-img">
              <ImageWithBasePath
                src="assets/img/blog/blog-13.jpg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <div className="blog-content">
              <div className="d-flex align-center justify-content-between blog-category">
                <Link to="#" className="category">
                  Journey
                </Link>
                <p className="date d-inline-flex align-center">
                  <i className="bx bx-calendar me-1" />
                  October 8, 2022
                </p>
              </div>
              <h5 className="title">
                <Link to={all_routes.blogDetails}>
                  The 2025 Ford F-150 Raptor – A First Look you need to know
                </Link>
              </h5>
            </div>
          </div>
        </div>
        {/* /Blog Item */}
      </div>
      <div className="view-all-btn text-center aos" data-aos="fade-down">
        <Link
          to={all_routes.blogGrid}
          className="btn btn-secondary d-inline-flex align-center"
        >
          View More
          <i className="bx bx-right-arrow-alt ms-1" />
        </Link>
      </div>
      <div className="subscribe-sec">
        <div className="row align-items-end">
          <div className="col-md-6">
            <div className="subscribe-content">
              <h2>
                Subscribe To Get User Friendly <span>Mobile &amp; Web App</span>
              </h2>
              <p>
                Appropriately monetize one-to-one interfaces rather than
                cutting-edge. Competently disintermediate backward.
              </p>
              <div className="subscribe-form">
                <form action="#">
                  <span>
                    <i className="bx bx-mail-send" />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter You Email Here"
                  />
                  <button type="submit" className="btn btn-subscribe">
                    <i className="bx bx-send" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="subscribe-img">
              <ImageWithBasePath
                src="assets/img/about/web-app.png"
                alt="img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <ImageWithBasePath src="assets/img/bg/app-bg.svg" alt="icon" className="app-bg-01" />
      </div>
    </div>
  </section>
  {/* /Blog Section */}
  {/* FAQ Section */}
  <section className="faq-section-four pt-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="section-heading heading-four" data-aos="fade-down">
            <h2>Frequently asked questions</h2>
            <p>Explore to learn more about how can empower your business</p>
          </div>
          <div className="accordion faq-accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOne"
                  aria-expanded="true"
                  aria-controls="faqOne"
                >
                  How old do I need to be to rent a car?
                </button>
              </h2>
              <div
                id="faqOne"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    You can browse our selection online or contact us for
                    assistance in choosing the right vehicle for you
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqTwo"
                  aria-expanded="true"
                  aria-controls="faqTwo"
                >
                  What documents do I need to rent a car?
                </button>
              </h2>
              <div
                id="faqTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    You can browse our selection online or contact us for
                    assistance in choosing the right vehicle for you
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
                  data-bs-target="#faqThree"
                  aria-expanded="true"
                  aria-controls="faqThree"
                >
                  What types of vehicles are available for rent?
                </button>
              </h2>
              <div
                id="faqThree"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    You can browse our selection online or contact us for
                    assistance in choosing the right vehicle for you
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqFour"
                  aria-expanded="true"
                  aria-controls="faqFour"
                >
                  Can I rent a car with a debit card?
                </button>
              </h2>
              <div
                id="faqFour"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    You can browse our selection online or contact us for
                    assistance in choosing the right vehicle for you
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqFive"
                  aria-expanded="true"
                  aria-controls="faqFive"
                >
                  What is your fuel policy?
                </button>
              </h2>
              <div
                id="faqFive"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    You can browse our selection online or contact us for
                    assistance in choosing the right vehicle for you
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqSix"
                  aria-expanded="true"
                  aria-controls="faqSix"
                >
                  Can I add additional drivers to my rental agreement?
                </button>
              </h2>
              <div
                id="faqSix"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    You can browse our selection online or contact us for
                    assistance in choosing the right vehicle for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /FAQ Section */}
</>

    <NewFooter/>
    </>
  )
}

export default HomeNew