import { StrictMode } from 'react'

import './index.css'

import {

  RouterProvider,
} from "react-router-dom";

import ReactDOM from 'react-dom/client';  // ✅ Correct import
import React from 'react';
import router from './Router/Router';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
