import React from "react";
import { Navigate } from "react-router";
import { all_routes } from "./all_routes";

import SignUp from "../authentication/signup";
import Login from "../authentication/login";
import ForgotPassword from "../authentication/forgotpassword";
import ResetPassword from "../authentication/resetpassword";
import ListingGrid from "../listings/listing-grid";
import Listingslist from "../listings/listing-list";
import Faq from "../pages/faq/faq";
import Gallerys from "../pages/gallery";
import Pricing from "../pages/pricing/pricing";
import BlogList from "../blog/bloglist";
import BlogGrid from "../blog/bloggrid";
import BlogDetails from "../blog/blogdetails";
import BookingCheckout from "../booking/booking-checkout";
import Booking from "../booking/booking";
import ListingDetails from "../listings/listingDetails";
import Testimonials from "../pages/testimonial/testimonials";
import TermsCondition from "../pages/termscondition/termscondition";
import Maintenance from "../pages/maintenance/maintenance";
import Error404 from "../pages/errorpages/error404";
import Error500 from "../pages/errorpages/error500";
import Contact from "../contact/contact";
import UserSettings from "../user/settings/usersettings";
import UserDashboard from "../user/userdashboard";
import UserIntegration from "../user/userintegration";
import UserSecurity from "../user/settings/usersecurity";
import UserPreferences from "../user/settings/userpreferences";
import UserNotification from "../user/settings/usernotification";
import UserWishList from "../user/wishlist/userwishlist";
import UserMessages from "../user/usermessages";
import UserReview from "../user/userreview";
import UserBookingCancelled from "../user/userbookingcancelled";
import UserBookings from "../user/userbookings";
import UserBookingUpcoming from "../user/user-booking-upcoming";
import UserBookingComplete from "../user/user-booking-complete";
import { UserBookingInprogress } from "../user/user-booking-inprogress";
import UserPayment from "../user/userpayment";
import BookingAddon from "../booking/booking-addon";
import BookingDetail from "../booking/booking-detail";
import BookingPayment from "../booking/booking-payment";
import BookingSuccess from "../booking/booking-success";
import HomeOne from "../home/home-one/home-one";
import HomeTwo from "../home/home-two/home-two";
import HomeThree from "../home/home-three/home-three";
import OurTeam from "../pages/ourteam/ourTeam";
import ComingSoon from "../pages/comingsoon/comingsoon";
import UserWallet from "../user/wallet/userwallet";
import PrivacyPolicy from "../pages/privacypolicy/privacypolicy";
import AboutUs from "../pages/aboutus";
import InvoiceDetails from "../booking/invoice";
import BookingCalendar from "../user/bookings-calendar";
import BookingCompleteCalendar from "../user/booking-complete-calendar";
import BookingCancelledCalendar from "../user/booking.cancelled-calendar";
import BookingInprogressCalendar from "../user/booking-inprogress-calendar";
import BookingUpcomingCalendar from "../user/booking-upcoming-calendar";
import ListingMap from "../listings/listing-map";
import HomeNew from "../home/home-new/homeNew";
import AddListing from "../listings/add-listing";
import AdminDashboard from "../admin/pages/dashboard/adminDashboard";
import AdminLogin from "../admin/auth/login";
import ReservationsList from "../admin/pages/bookings/reservations/reservationsList";
import AdminForgotPassword from "../admin/auth/forgot-password";
import AdminOtp from "../admin/auth/otp";
import AdminResetPassword from "../admin/auth/reset-password";
import QuotationsList from "../admin/pages/bookings/quotations/quotationsList";
import EnquiriesList from "../admin/pages/bookings/enquiries/enquiriesList";
import CustomersList from "../admin/pages/manage/customersList";
import CustomersCompaniesList from "../admin/pages/manage/customersCompaniesList";
import DriversList from "../admin/pages/manage/driversList";
import LocationsList from "../admin/pages/manage/locationsList";
import CarsList from "../admin/pages/rentals/cars/carsList";
import BrandsList from "../admin/pages/rentals/car-attributes/brandsList";
import TypesList from "../admin/pages/rentals/car-attributes/typesList";
import ModelsList from "../admin/pages/rentals/car-attributes/modelsList";
import TransmissionsList from "../admin/pages/rentals/car-attributes/transmissionsList";
import FuelList from "../admin/pages/rentals/car-attributes/fuelList";
import ColorList from "../admin/pages/rentals/car-attributes/colorList";
import SteeringList from "../admin/pages/rentals/car-attributes/steeringList";
import SeatsList from "../admin/pages/rentals/car-attributes/seatsList";
import CylindersList from "../admin/pages/rentals/car-attributes/cylindersList";
import DoorsList from "../admin/pages/rentals/car-attributes/doorsList";
import FeaturesList from "../admin/pages/rentals/car-attributes/featuresList";
import SafetyFeaturesList from "../admin/pages/rentals/car-attributes/safetyFeaturesList";
import Calender from "../admin/pages/bookings/calender/calender";
import ExtraServicesList from "../admin/pages/rentals/extraServicesList";
import PricingList from "../admin/pages/rentals/pricingList";
import InspectionsList from "../admin/pages/rentals/inspectionsList";
import MaintenanceList from "../admin/pages/rentals/maintenanceList";
import ReviewsList from "../admin/pages/rentals/reviewsList";
import InvoicesList from "../admin/pages/finance/invoicesList";
import AddReservation from "../admin/pages/bookings/reservations/addReservation";
import EditReservation from "../admin/pages/bookings/reservations/editReservation";
import ClipBoard from "../admin/pages/uiInterface/advanced-ui/clipboard";
import Counter from "../admin/pages/uiInterface/advanced-ui/counter";
import DragAndDrop from "../admin/pages/uiInterface/advanced-ui/dragdrop";
import Timeline from "../admin/pages/uiInterface/advanced-ui/timeline";
import TextEditor from "../admin/pages/uiInterface/advanced-ui/texteditor";
import Scrollbar from "../admin/pages/uiInterface/advanced-ui/uiscrollbar";
import Apexchart from "../admin/pages/uiInterface/charts/apexcharts";
import FeatherIcons from "../admin/pages/uiInterface/icons/feathericon";
import FontawesomeIcons from "../admin/pages/uiInterface/icons/fontawesome";
import MaterialIcons from "../admin/pages/uiInterface/icons/materialicon";
import PE7Icons from "../admin/pages/uiInterface/icons/pe7icons";
import SimplelineIcons from "../admin/pages/uiInterface/icons/simplelineicon";
import ThemifyIcons from "../admin/pages/uiInterface/icons/themify";
import TypiconIcons from "../admin/pages/uiInterface/icons/typicons";
import BasicInputs from "../admin/pages/uiInterface/forms/formelements/basic-inputs";
import WeatherIcons from "../admin/pages/uiInterface/icons/weathericons";
import CheckboxRadios from "../admin/pages/uiInterface/forms/formelements/checkbox-radios";
import InputGroup from "../admin/pages/uiInterface/forms/formelements/input-group";
import GridGutters from "../admin/pages/uiInterface/forms/formelements/grid-gutters";
import FormSelect from "../admin/pages/uiInterface/forms/formelements/form-select";
import FormMask from "../admin/pages/uiInterface/forms/formelements/form-mask";
import FileUpload from "../admin/pages/uiInterface/forms/formelements/fileupload";
import FormHorizontal from "../admin/pages/uiInterface/forms/formelements/layouts/form-horizontal";
import FormVertical from "../admin/pages/uiInterface/forms/formelements/layouts/form-vertical";
import FloatingLabel from "../admin/pages/uiInterface/forms/formelements/layouts/floating-label";
import FormValidation from "../admin/pages/uiInterface/forms/formelements/layouts/form-validation";
import FormSelect2 from "../admin/pages/uiInterface/forms/formelements/layouts/form-select2";
import FormWizard from "../admin/pages/uiInterface/forms/formelements/form-wizard";
import DataTables from "../admin/pages/uiInterface/table/data-tables";
import TablesBasic from "../admin/pages/uiInterface/table/tables-basic";
import IonicIcons from "../admin/pages/uiInterface/icons/ionicicons";
import Placeholder from "../admin/pages/uiInterface/base-ui/placeholder";
import Alert from "../admin/pages/uiInterface/base-ui/alert";
import Tooltips from "../admin/pages/uiInterface/base-ui/tooltips";
import Ribbon from "../admin/pages/uiInterface/advanced-ui/ribbon";
import Swiperjs from "../admin/pages/uiInterface/base-ui/swiper";
import TablerIcons from "../admin/pages/uiInterface/icons/tablericons";
import BootstrapIcons from "../admin/pages/uiInterface/icons/bootstrapicons";
import RemixIcons from "../admin/pages/uiInterface/icons/remixIcons";
import FormPikers from "../admin/pages/uiInterface/forms/formpickers";
import Leaflet from "../admin/pages/uiInterface/map/leaflet";
import Accordion from "../admin/pages/uiInterface/base-ui/accordion";
import Avatar from "../admin/pages/uiInterface/base-ui/avatar";
import Badges from "../admin/pages/uiInterface/base-ui/badges";
import Borders from "../admin/pages/uiInterface/base-ui/borders";
import Breadcrumb from "../admin/pages/uiInterface/base-ui/breadcrumb";
import Buttons from "../admin/pages/uiInterface/base-ui/buttons";
import ButtonsGroup from "../admin/pages/uiInterface/base-ui/buttonsgroup";
import Cards from "../admin/pages/uiInterface/base-ui/cards";
import Carousel from "../admin/pages/uiInterface/base-ui/carousel";
import Colors from "../admin/pages/uiInterface/base-ui/colors";
import Dropdowns from "../admin/pages/uiInterface/base-ui/dropdowns";
import Grid from "../admin/pages/uiInterface/base-ui/grid";
import Images from "../admin/pages/uiInterface/base-ui/images";
import Lightboxes from "../admin/pages/uiInterface/base-ui/lightbox";
import Media from "../admin/pages/uiInterface/base-ui/media";
import Modals from "../admin/pages/uiInterface/base-ui/modals";
import NavTabs from "../admin/pages/uiInterface/base-ui/navtabs";
import Offcanvas from "../admin/pages/uiInterface/base-ui/offcanvas";
import Pagination from "../admin/pages/uiInterface/base-ui/pagination";
import Popovers from "../admin/pages/uiInterface/base-ui/popover";
import RangeSlides from "../admin/pages/uiInterface/advanced-ui/rangeslider";
import Progress from "../admin/pages/uiInterface/base-ui/progress";
import Spinner from "../admin/pages/uiInterface/base-ui/spinner";
import Typography from "../admin/pages/uiInterface/base-ui/typography";
import Video from "../admin/pages/uiInterface/base-ui/video";
import Toasts from "../admin/pages/uiInterface/base-ui/toasts";
import Sortable from "../admin/pages/uiInterface/base-ui/ui-sortable";
import SweetAlert from "../admin/pages/uiInterface/base-ui/sweetAlerts";
import ChartJs from "../admin/pages/uiInterface/charts/chartjs";
import FlagIcons from "../admin/pages/uiInterface/icons/flagicons";
import PaymentsList from "../admin/pages/finance/paymentsList";
import CouponsList from "../admin/pages/others/couponsList";
import NewslettersList from "../admin/pages/others/newslettersList";
import ProfileSettings from "../admin/pages/settings/account-settings/profileSettings";
import SecuritySetting from "../admin/pages/settings/account-settings/securitySetting";
import NotificationsSetting from "../admin/pages/settings/account-settings/notificationsSetting";
import IntegrationsSettings from "../admin/pages/settings/account-settings/integrationsSettings";
import TrackerSetting from "../admin/pages/settings/account-settings/trackerSetting";
import PluginManagers from "../admin/pages/settings/website-settings/pluginManagers";
import AiConfiguration from "../admin/pages/settings/website-settings/aiConfiguration";
import LoginSetting from "../admin/pages/settings/website-settings/loginSetting";
import MaintenanceMode from "../admin/pages/settings/website-settings/maintenanceMode";
import Language2Setting from "../admin/pages/settings/website-settings/language2Setting";
import LanguageSetting from "../admin/pages/settings/website-settings/languageSetting";
import SeoSetup from "../admin/pages/settings/website-settings/seoSetup";
import Prefixes from "../admin/pages/settings/website-settings/prefixes";
import LocalizationSetting from "../admin/pages/settings/website-settings/localizationSetting";
import CompanySetting from "../admin/pages/settings/website-settings/companySetting";
import RentalSetting from "../admin/pages/settings/rental-settings/rentalSetting";
import InsuranceSetting from "../admin/pages/settings/rental-settings/insuranceSetting";
import CustomFields from "../admin/pages/settings/app-settings/customFields";
import SignaturesSetting from "../admin/pages/settings/app-settings/signaturesSetting";
import InvoiceTemplate from "../admin/pages/settings/app-settings/invoiceTemplate";
import InvoiceSetting from "../admin/pages/settings/app-settings/invoiceSetting";
import GdprCookies from "../admin/pages/settings/system-settings/gdprCookies";
import SmsGateways from "../admin/pages/settings/system-settings/smsGateways";
import EmailTemplates from "../admin/pages/settings/system-settings/emailTemplates";
import EmailSetting from "../admin/pages/settings/system-settings/emailSetting";
import Currencies from "../admin/pages/settings/finance-settings/currencies";
import TaxRates from "../admin/pages/settings/finance-settings/taxRates";
import BankAccounts from "../admin/pages/settings/finance-settings/bankAccounts";
import PaymentMethods from "../admin/pages/settings/finance-settings/paymentMethods";
import SystemUpdate from "../admin/pages/settings/other-settings/systemUpdate";
import DatabaseBackup from "../admin/pages/settings/other-settings/databaseBackup";
import SystemBackup from "../admin/pages/settings/other-settings/systemBackup";
import Cronjob from "../admin/pages/settings/other-settings/cronjob";
import Storage from "../admin/pages/settings/other-settings/storage";
import ClearCache from "../admin/pages/settings/other-settings/clearCache";
import Sitemap from "../admin/pages/settings/other-settings/sitemap";
import PagesList from "../admin/pages/cms/pagesList";
import MenuManagementList from "../admin/pages/cms/menuManagementList";
import BlogsList from "../admin/pages/cms/blogs/blogsList";
import BlogCategoriesList from "../admin/pages/cms/blogs/blogCategoriesList";
import BlogCommentsList from "../admin/pages/cms/blogs/blogCommentsList";
import BlogTagsList from "../admin/pages/cms/blogs/blogTagsList";
import CountriesList from "../admin/pages/cms/locations/countriesList";
import StateList from "../admin/pages/cms/locations/stateList";
import CityList from "../admin/pages/cms/locations/cityList";
import TestimonialsList from "../admin/pages/cms/testimonialsList";
import FaqList from "../admin/pages/cms/faqList";
import FaqCategoryList from "../admin/pages/cms/faqCategoryList";
import ContactMessagesList from "../admin/pages/support/contactMessagesList";
import AnnouncementsList from "../admin/pages/support/announcementsList";
import TicketsList from "../admin/pages/support/ticketsList";
import UsersList from "../admin/pages/user-management/usersList";
import RolesPermissionsList from "../admin/pages/user-management/rolesPermissionsList";
import IncomeReportList from "../admin/pages/reports/incomeReportList";
import EarningsReportList from "../admin/pages/reports/earningsReportList";
import RentalReportList from "../admin/pages/reports/rentalReportList";
import AddQuotation from "../admin/pages/bookings/quotations/addQuotation";
import EditQuotation from "../admin/pages/bookings/quotations/editQuotation";
import AddCar from "../admin/pages/rentals/cars/addCar";
import EditCar from "../admin/pages/rentals/cars/editCar";
import ReservationDetails from "../admin/pages/bookings/reservations/reservationDetails";
import AdminInvoiceDetails from "../admin/pages/finance/adminInvoiceDetails";
import CustomerDetails from "../admin/pages/manage/customerDetails";
import CompanyDetails from "../admin/pages/manage/companyDetails";
import QuotationDetails from "../admin/pages/bookings/quotations/quotationDetails";
import CarDetails from "../admin/pages/rentals/cars/carDetails";
import PermissionsList from "../admin/pages/user-management/permissionsList";
import EditMenu from "../admin/pages/cms/editMenu";
import AddBlog from "../admin/pages/cms/blogs/addBlog";
import EditBlog from "../admin/pages/cms/blogs/editBlog";
import AddPages from "../admin/pages/cms/addPages";
import EditPages from "../admin/pages/cms/editPages";
import AdminChat from "../admin/pages/others/adminChat";
import AddInvoice from "../admin/pages/finance/addInvoice";
import EditInvoice from "../admin/pages/finance/editInvoice";
import TrackingMap from "../admin/pages/rentals/trackingMap";
import AdminBlogDetails from "../admin/pages/cms/blogs/blogDetails";
// import BookingCalendar from "../user/bookings-calendar";

const routes = all_routes;

export const publicRoutes = [
  {
    path: routes.homeOne,
    element: <HomeNew />,
  },
  {
    path: routes.homeTwo,
    element: <HomeOne />,
  },
  {
    path: routes.homeThree,
    element: <HomeThree />,
  },
  {
    path: routes.homeFour,
    element: <HomeTwo />,
  },

  {
    path: "/",
    element: <Navigate to="/index" />,
  },
  {
    path: "*",
    element: <Navigate to="/index" />,
  },

  {
    path: routes.contactUs,
    element: <Contact />,
  },
];

export const listingroutes = [
  {
    path: routes.listingGrid,
    element: <ListingGrid />,
  },
  {
    path: routes.listingList,
    element: <Listingslist />,
  },
  {
    path: routes.listingDetails,
    element: <ListingDetails />,
  },
  {
    path: routes.listingMap,
    element: <ListingMap />,
  },
  {
    path: routes.addListing,
    element: <AddListing />,
  },
];

export const pageroutes = [
  {
    path: routes.aboutUs,
    element: <AboutUs />,
  },
  {
    path: routes.pricing,
    element: <Pricing />,
  },
  {
    path: routes.faq,
    element: <Faq />,
  },
  {
    path: routes.gallery,
    element: <Gallerys />,
  },
  {
    path: routes.bookingCheckout,
    element: <BookingCheckout />,
  },
  {
    path: routes.booking,
    element: <Booking />,
  },
  {
    path: routes.invoiceDetails,
    element: <InvoiceDetails />,
  },
  {
    path: routes.ourTeam,
    element: <OurTeam />,
  },
  {
    path: routes.testimonial,
    element: <Testimonials />,
  },
  {
    path: routes.termsConditions,
    element: <TermsCondition />,
  },
  {
    path: routes.privacyPolicy,
    element: <PrivacyPolicy />,
  },
  {
    path: routes.bookingAddon,
    element: <BookingAddon />,
  },
  {
    path: routes.bookingCheckout,
    element: <BookingCheckout />,
  },
  {
    path: routes.bookingDetail,
    element: <BookingDetail />,
  },
  {
    path: routes.bookingPayment,
    element: <BookingPayment />,
  },
  {
    path: routes.bookingSuccess,
    element: <BookingSuccess />,
  },
];

export const blogroutes = [
  {
    path: routes.blogList,
    element: <BlogList />,
  },
  {
    path: routes.blogGrid,
    element: <BlogGrid />,
  },
  {
    path: routes.blogDetails,
    element: <BlogDetails />,
  },
];

export const authenticationRoute = [
  {
    path: routes.register,
    element: <SignUp />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.forgotPassword,
    element: <ForgotPassword />,
  },
  {
    path: routes.resetPassword,
    element: <ResetPassword />,
  },
  {
    path: routes.error404,
    element: <Error404 />,
  },
  {
    path: routes.error500,
    element: <Error500 />,
  },
  {
    path: routes.maintenance,
    element: <Maintenance />,
  },
  {
    path: routes.comingSoon,
    element: <ComingSoon />,
  },
];

export const usermodule = [
  {
    path: routes.userDashboard,
    element: <UserDashboard />,
  },
  {
    path: routes.userSettings,
    element: <UserSettings />,
  },
  {
    path: routes.userIntegration,
    element: <UserIntegration />,
  },
  {
    path: routes.userSecurity,
    element: <UserSecurity />,
  },
  {
    path: routes.preference,
    element: <UserPreferences />,
  },
  {
    path: routes.notification,
    element: <UserNotification />,
  },
  {
    path: routes.userWallet,
    element: <UserWallet />,
  },
  {
    path: routes.userWishlist,
    element: <UserWishList />,
  },
  {
    path: routes.userMessages,
    element: <UserMessages />,
  },
  {
    path: routes.userPayment,
    element: <UserPayment />,
  },
  {
    path: routes.userReviews,
    element: <UserReview />,
  },
  {
    path: routes.userBookingCancelled,
    element: <UserBookingCancelled />,
  },
  {
    path: routes.userBookingCancelled,
    element: <UserBookingCancelled />,
  },
  {
    path: routes.userBookings,
    element: <UserBookings />,
  },
  {
    path: routes.userBookingUpcoming,
    element: <UserBookingUpcoming />,
  },
  {
    path: routes.userBookingComplete,
    element: <UserBookingComplete />,
  },
  {
    path: routes.userBookingCancelled,
    element: <UserBookingCancelled />,
  },
  {
    path: routes.userBookingInprogress,
    element: <UserBookingInprogress />,
  },
  {
    path: routes.BookingCalendar,
    element: <BookingCalendar />,
  },
  {
    path: routes.BookingCompleteCalendar,
    element: <BookingCompleteCalendar />,
  },
  {
    path: routes.BookingCancelledCalendar,
    element: <BookingCancelledCalendar />,
  },
  {
    path: routes.BookingInprogressCalendar,
    element: <BookingInprogressCalendar />,
  },
  {
    path: routes.BookingUpcomingCalendar,
    element: <BookingUpcomingCalendar />,
  },
  // {
  //   path: routes.bookingCalendar,
  //   element: <BookingCalendar />,
  // },
];
export const adminRoutes = [
  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
  },
  {
    path: routes.adminReservationsList,
    element: <ReservationsList />,
  },
  {
    path: routes.adminQuotationsList,
    element: <QuotationsList />,
  },
  {
    path: routes.adminEnquiriesList,
    element: <EnquiriesList />,
  },
  {
    path: routes.adminCustomerList,
    element: <CustomersList />,
  },
  {
    path: routes.adminCustomersCompaniesList,
    element: <CustomersCompaniesList />,
  },
  {
    path: routes.adminDriversList,
    element: <DriversList />,
  },
  {
    path: routes.adminLocationsList,
    element: <LocationsList />,
  },
  {
    path: routes.adminCarsList,
    element: <CarsList />,
  },
  {
    path: routes.adminBrandsList,
    element: <BrandsList />,
  },
  {
    path: routes.adminTypesList,
    element: <TypesList />,
  },
  {
    path: routes.adminModelsList,
    element: <ModelsList />,
  },
  {
    path: routes.adminTransmissionsList,
    element: <TransmissionsList />,
  },
  {
    path: routes.adminFuelList,
    element: <FuelList />,
  },
  {
    path: routes.adminColorList,
    element: <ColorList />,
  },
  {
    path: routes.adminSteeringList,
    element: <SteeringList />,
  },
  {
    path: routes.adminSeatsList,
    element: <SeatsList />,
  },
  {
    path: routes.adminCylindersList,
    element: <CylindersList />,
  },
  {
    path: routes.adminDoorsList,
    element: <DoorsList />,
  },
  {
    path: routes.adminFeaturesList,
    element: <FeaturesList />,
  },
  {
    path: routes.adminSafetyFeaturesList,
    element: <SafetyFeaturesList />,
  },
  {
    path: routes.adminCalender,
    element: <Calender />,
  },
  {
    path: routes.adminExtraServicesList,
    element: <ExtraServicesList />,
  },
  {
    path: routes.adminPricingList,
    element: <PricingList />,
  },
  {
    path: routes.adminInspectionsList,
    element: <InspectionsList />,
  },
  {
    path: routes.adminMaintenanceList,
    element: <MaintenanceList />,
  },
  {
    path: routes.adminReviewsList,
    element: <ReviewsList />,
  },
  {
    path: routes.adminInvoicesList,
    element: <InvoicesList />,
  },
  {
    path: routes.adminAddReservations,
    element: <AddReservation />,
  },
  {
    path: routes.adminEditReservations,
    element: <EditReservation />,
  },
  {
    path: routes.adminPaymentsList,
    element: <PaymentsList />,
  },
  {
    path: routes.adminCouponsList,
    element: <CouponsList />,
  },
  {
    path: routes.adminNewslettersList,
    element: <NewslettersList />,
  },
  {
    path: routes.adminPagesList,
    element: <PagesList />,
  },
  {
    path: routes.adminMenuManagementList,
    element: <MenuManagementList />,
  },
  {
    path: routes.adminBlogsList,
    element: <BlogsList />,
  },
  {
    path: routes.adminBlogCategoriesList,
    element: <BlogCategoriesList />,
  },
  {
    path: routes.adminBlogCommentsList,
    element: <BlogCommentsList />,
  },
  {
    path: routes.adminBlogTagsList,
    element: <BlogTagsList />,
  },
  {
    path: routes.adminCountriesList,
    element: <CountriesList />,
  },
  {
    path: routes.adminStateList,
    element: <StateList />,
  },
  {
    path: routes.adminCityList,
    element: <CityList />,
  },
  {
    path: routes.adminTestimonialsList,
    element: <TestimonialsList />,
  },
  {
    path: routes.adminFaqList,
    element: <FaqList />,
  },
  {
    path: routes.adminFaqCategoryList,
    element: <FaqCategoryList />,
  },
  {
    path: routes.adminContactMessagesList,
    element: <ContactMessagesList />,
  },
  {
    path: routes.adminAnnouncementsList,
    element: <AnnouncementsList />,
  },
  {
    path: routes.adminTicketsList,
    element: <TicketsList />,
  },
  {
    path: routes.adminUsersList,
    element: <UsersList />,
  },
  {
    path: routes.adminRolesPermissionsList,
    element: <RolesPermissionsList />,
  },
  {
    path: routes.adminPermissionsList,
    element: <PermissionsList />,
  },
  {
    path: routes.adminIncomeReportList,
    element: <IncomeReportList />,
  },
  {
    path: routes.adminEarningsReportList,
    element: <EarningsReportList />,
  },
  {
    path: routes.adminRentalReportList,
    element: <RentalReportList />,
  },
  {
    path: routes.addQuotation,
    element: <AddQuotation />,
  },
  {
    path: routes.editQuotation,
    element: <EditQuotation />,
  },
  {
    path: routes.addCar,
    element: <AddCar />,
  },
  {
    path: routes.adminEditMenu,
    element: <EditMenu />,
  },
  {
    path: routes.adminAddBlog,
    element: <AddBlog />,
  },
  {
    path: routes.adminEditBlog,
    element: <EditBlog />,
  },
  {
    path: routes.adminAddPages,
    element: <AddPages />,
  },
  {
    path: routes.adminEditPages,
    element: <EditPages />,
  },
  {
    path: routes.editCar,
    element: <EditCar />,
  },
  {
    path: routes.reservationDetails,
    element: <ReservationDetails />,
  },
  {
    path: routes.admininvoiceDetails,
    element: <AdminInvoiceDetails />,
  },
  {
    path: routes.customerDetails,
    element: <CustomerDetails />,
  },
  {
    path: routes.companyDetails,
    element: <CompanyDetails />,
  },
  {
    path: routes.quotationDetails,
    element: <QuotationDetails />,
  },
  {
    path: routes.carDetails,
    element: <CarDetails />,
  },
  {
    path: routes.adminChat,
    element: <AdminChat />,
  },
  {
    path: routes.adminAddInvoice,
    element: <AddInvoice />,
  },
  {
    path: routes.adminEditInvoice,
    element: <EditInvoice />,
  },
  {
    path: routes.adminTrackingMap,
    element: <TrackingMap />,
  },
  {
    path: routes.adminblogDetails,
    element: <AdminBlogDetails />,
  },

]
export const adminAuth = [
  {
    path: routes.adminlogin,
    element: <AdminLogin />,
  },  
  {
    path: routes.adminForgotPassword,
    element: <AdminForgotPassword />,
  },
  {
    path: routes.adminOtp,
    element: <AdminOtp />,
  },
  {
    path: routes.adminResetPassword,
    element: <AdminResetPassword />,
  },

]
export const uiInterface = [
  {
    path: routes.clipboard,
    element: <ClipBoard />,
  },
  {
    path: routes.counter,
    element: <Counter />,
  },
  {
    path: routes.draganddrop,
    element: <DragAndDrop />,
  },
  {
    path: routes.texteditor,
    element: <TextEditor />,
  },
  {
    path: routes.timeline,
    element: <Timeline />,
  },
  {
    path: routes.scrollbar,
    element: <Scrollbar />,
  },
  {
    path: routes.apexchart,
    element: <Apexchart />,
  },
  {
    path: routes.chartjs,
    element: <ChartJs />,
  },
  {
    path: routes.feathericon,
    element: <FeatherIcons />,
  },
  {
    path: routes.fontawesome,
    element: <FontawesomeIcons />,
  },
  {
    path: routes.flagicons,
    element: <FlagIcons />,
  },
  {
    path: routes.materialicons,
    element: <MaterialIcons />,
  },
  {
    path: routes.pe7icons,
    element: <PE7Icons />,
  },
  {
    path: routes.simpleline,
    element: <SimplelineIcons />,
  },
  {
    path: routes.themifyicons,
    element: <ThemifyIcons />,
  },
  {
    path: routes.TablerIcon,
    element: <TablerIcons />,
  },
  {
    path: routes.typicons,
    element: <TypiconIcons />,
  },
  {
    path: routes.basicinput,
    element: <BasicInputs />,
  },
  {
    path: routes.iconweather,
    element: <WeatherIcons />,
  },
  {
    path: routes.checkboxradio,
    element: <CheckboxRadios />,
  },
  {
    path: routes.inputgroup,
    element: <InputGroup />,
  },
  {
    path: routes.gridgutters,
    element: <GridGutters />,
  },
  {
    path: routes.formselect,
    element: <FormSelect />,
  },
  {
    path: routes.formmask,
    element: <FormMask />,
  },
  {
    path: routes.fileupload,
    element: <FileUpload />,
  },
  {
    path: routes.formhorizontal,
    element: <FormHorizontal />,
  },
  {
    path: routes.formvertical,
    element: <FormVertical />,
  },
  {
    path: routes.floatinglabel,
    element: <FloatingLabel />,
  },
  {
    path: routes.formvalidation,
    element: <FormValidation />,
  },
  {
    path: routes.select2,
    element: <FormSelect2 />,
  },
  {
    path: routes.wizard,
    element: <FormWizard />,
  },
  {
    path: routes.datatable,
    element: <DataTables />,
  },
  {
    path: routes.tablebasic,
    element: <TablesBasic />,
  },
  {
    path: routes.ionicicons,
    element: <IonicIcons />,
  },
  {
    path: routes.placeholder,
    element: <Placeholder />,
  },
  {
    path: routes.alerts,
    element: <Alert />,
  },
  {
    path: routes.sweetalerts,
    element: <SweetAlert />,
  },
  {
    path: routes.tooltip,
    element: <Tooltips />,
  },
  {
    path: routes.ribbon,
    element: <Ribbon />,
  },
  {
    path: routes.SwiperJs,
    element: <Swiperjs />,
  },
  {
    path: routes.Sortable,
    element: <Sortable />,
  },

  {
    path: routes.BootstrapIcon,
    element: <BootstrapIcons />,
  },
  {
    path: routes.remixIcon,
    element: <RemixIcons />,
  },
  {
    path: routes.FormPicker,
    element: <FormPikers />,
  },
  {
    path: routes.Leaflets,
    element: <Leaflet />,
  },
  {
    path: routes.accordion,
    element: <Accordion />,
  },
  {
    path: routes.avatar,
    element: <Avatar />,
  },
  {
    path: routes.badges,
    element: <Badges />,
  },
  {
    path: routes.borders,
    element: <Borders />,
  },
  {
    path: routes.breadcrumb,
    element: <Breadcrumb />,
  },
  {
    path: routes.buttons,
    element: <Buttons />,
  },
  {
    path: routes.buttonsgroup,
    element: <ButtonsGroup />,
  },
  {
    path: routes.cards,
    element: <Cards />,
  },
  {
    path: routes.carousel,
    element: <Carousel />,
  },
  {
    path: routes.colors,
    element: <Colors />,
  },
  {
    path: routes.dropdowns,
    element: <Dropdowns />,
  },
  {
    path: routes.grid,
    element: <Grid />,
  },
  {
    path: routes.images,
    element: <Images />,
  },
  {
    path: routes.lightbox,
    element: <Lightboxes />,
  },
  {
    path: routes.media,
    element: <Media />,
  },
  {
    path: routes.modals,
    element: <Modals />,
  },
  {
    path: routes.navtabs,
    element: <NavTabs />,
  },
  {
    path: routes.offcanvas,
    element: <Offcanvas />,
  },
  {
    path: routes.pagination,
    element: <Pagination />,
  },
  {
    path: routes.popover,
    element: <Popovers />,
  },
  {
    path: routes.rangeslider,
    element: <RangeSlides />,
  },
  {
    path: routes.progress,
    element: <Progress />,
  },
  {
    path: routes.spinner,
    element: <Spinner />,
  },

  {
    path: routes.typography,
    element: <Typography />,
  },
  {
    path: routes.video,
    element: <Video />,
  },
  {
    path: routes.toasts,
    element: <Toasts />,
  },
]
export const settingsRoute = [
  {
    path: routes.profileSettings,
    element: <ProfileSettings />,
  },
  {
    path: routes.securitySetting,
    element: <SecuritySetting />,
  },
  {
    path: routes.notificationsSetting,
    element: <NotificationsSetting />,
  },
  {
    path: routes.integrationsSettings,
    element: <IntegrationsSettings />,
  },
  {
    path: routes.trackerSetting,
    element: <TrackerSetting />,
  },
  {
    path: routes.pluginManagers,
    element: <PluginManagers />,
  },
  {
    path: routes.aiConfiguration,
    element: <AiConfiguration />,
  },
  {
    path: routes.loginSetting,
    element: <LoginSetting />,
  },
  {
    path: routes.maintenanceMode,
    element: <MaintenanceMode />,
  },
  {
    path: routes.language2Setting,
    element: <Language2Setting />,
  },
  {
    path: routes.languageSetting,
    element: <LanguageSetting />,
  },
  {
    path: routes.seoSetup,
    element: <SeoSetup />,
  },
  {
    path: routes.prefixes,
    element: <Prefixes />,
  },
  {
    path: routes.localizationSetting,
    element: <LocalizationSetting />,
  },
  {
    path: routes.companySetting,
    element: <CompanySetting />,
  },
  {
    path: routes.insuranceSetting,
    element: <InsuranceSetting />,
  },
  {
    path: routes.rentalSetting,
    element: <RentalSetting />,
  },
  {
    path: routes.customFields,
    element: <CustomFields />,
  },
  {
    path: routes.signaturesSetting,
    element: <SignaturesSetting />,
  },
  {
    path: routes.invoiceTemplate,
    element: <InvoiceTemplate />,
  },
  {
    path: routes.invoiceSetting,
    element: <InvoiceSetting />,
  },
  {
    path: routes.gdprCookies,
    element: <GdprCookies />,
  },
  {
    path: routes.smsGateways,
    element: <SmsGateways />,
  },
  {
    path: routes.emailTemplates,
    element: <EmailTemplates />,
  },
  {
    path: routes.emailSetting,
    element: <EmailSetting />,
  },
  {
    path: routes.currencies,
    element: <Currencies />,
  },
  {
    path: routes.taxRates,
    element: <TaxRates />,
  },
  {
    path: routes.bankAccounts,
    element: <BankAccounts />,
  },
  {
    path: routes.paymentMethods,
    element: <PaymentMethods />,
  },
  {
    path: routes.systemUpdate,
    element: <SystemUpdate />,
  },
  {
    path: routes.databaseBackup,
    element: <DatabaseBackup />,
  },
  {
    path: routes.systemBackup,
    element: <SystemBackup />,
  },
  {
    path: routes.cronjob,
    element: <Cronjob />,
  },
  {
    path: routes.storage,
    element: <Storage />,
  },
  {
    path: routes.clearCache,
    element: <ClearCache />,
  },
  {
    path: routes.sitemap,
    element: <Sitemap />,
  },
]