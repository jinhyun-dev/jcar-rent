import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter } from 'react-router-dom';
import 'aos/dist/aos.css';
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import store from './core/data/redux/store';
import '../src/style/icons/feather/css/iconfont.css'
// import '../src/style/scss/main.scss'
import './../src/index.scss'
import '../src/style/icons/boxicons/css/boxicons.min.css'
import { base_path } from "./environment";
import AllRoutes from "./feature-module/router/router";



const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store} >
        <BrowserRouter basename={base_path}>
          <AllRoutes />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
