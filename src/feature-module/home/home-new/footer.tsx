import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath'

const NewFooter = () => {
  return (
    <footer className="footer footer-four">
  {/* Footer Top */}
  <div className="footer-top aos" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="footer-contact footer-widget">
            <div className="footer-logo">
              <ImageWithBasePath
                src="assets/img/logo-white.svg"
                className="img-fluid aos"
                alt="logo"
              />
            </div>
            <div className="footer-contact-info">
              <p>
                We offer a diverse fleet of vehicles to suit every need,
                including compact cars, sedans, SUVs and luxury vehicles.{" "}
              </p>
            </div>
            <div className="d-flex align-items-center gap-1 app-icon">
              <Link to="#">
                <ImageWithBasePath
                  src="assets/img/icons/gpay.svg"
                  className="img-fluid"
                  alt="logo"
                />
              </Link>
              <Link to="#">
                <ImageWithBasePath
                  src="assets/img/icons/app.svg"
                  className="img-fluid"
                  alt="logo"
                />
              </Link>
            </div>
            <ul className="social-icon">
              <li>
                <Link to="#">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-behance" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-twitter" />{" "}
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">Quick Links</h5>
                <ul>
                  <li>
                    <Link to="#">My account</Link>
                  </li>
                  <li>
                    <Link to="#">Campaigns</Link>
                  </li>
                  <li>
                    <Link to="#">Dreams rent Dealers</Link>
                  </li>
                  <li>
                    <Link to="#">Deals and Incentive</Link>
                  </li>
                  <li>
                    <Link to="#">Financial Services</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">Pages</h5>
                <ul>
                  <li>
                    <Link to={all_routes.aboutUs}>About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Become a Partner</Link>
                  </li>
                  <li>
                    <Link to={all_routes.faq}>Faq’s</Link>
                  </li>
                  <li>
                    <Link to={all_routes.testimonial}>Testimonials</Link>
                  </li>
                  <li>
                    <Link to={all_routes.contactUs}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">Useful Links</h5>
                <ul>
                  <li>
                    <Link to="#">My account</Link>
                  </li>
                  <li>
                    <Link to="#">Campaigns</Link>
                  </li>
                  <li>
                    <Link to="#">Dreams rent Dealers</Link>
                  </li>
                  <li>
                    <Link to="#">Deals and Incentive</Link>
                  </li>
                  <li>
                    <Link to="#">Financial Services</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Footer Top */}
  {/* Footer Bottom */}
  <div className="footer-bottom">
    <div className="container">
      {/* Copyright */}
      <div className="copyright">
        <div className="row align-items-center row-gap-3">
          <div className="col-lg-4">
            <div className="copyright-text">
              <p>Copyright © 2025 Dreams Rent. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="payment-list">
              <Link to="#">
                <ImageWithBasePath src="assets/img/icons/payment-01.svg" alt="img" />
              </Link>
              <Link to="#">
                <ImageWithBasePath src="assets/img/icons/payment-02.svg" alt="img" />
              </Link>
              <Link to="#">
                <ImageWithBasePath src="assets/img/icons/payment-03.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <ul className="privacy-link">
              <li>
                <Link to={all_routes.privacyPolicy}>Privacy</Link>
              </li>
              <li>
                <Link to={all_routes.termsConditions}>Terms &amp; Condition</Link>
              </li>
              <li>
                <Link to="#">Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Copyright */}
    </div>
  </div>
  {/* /Footer Bottom */}
</footer>

  )
}

export default NewFooter