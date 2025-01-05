import { combineReducers } from "@reduxjs/toolkit";
import notification from "../slices/notificationSlice";
import sidenav from "../slices/sidenavSlice";
import vendor from "../slices/inventory/vendor/reducer";
import networkAssets from "../slices/inventory/networkAssets/reducer";
import mobileAssets from "../slices/inventory/mobileAssets/reducer";
import fixedAssets from "../slices/inventory/fixedAssets/reducer";
import customer from "../slices/customer/customer/reducer";
import cusRouter from "../slices/customer/cusrouter/reducer";
import connection from "../slices/customer/connection/reducer";
import manufacturer from "../slices/inventory/manufacturer/reducer";
import peConnection from "../slices/customer/peconnection/reducer";
import lastMileProvider from "../slices/customer/lastmile/provider/reducer";
import lastMileMedia from "../slices/customer/lastmile/media/reducer";
import location from "../slices/inventory/locations/reducer"
import type from "../slices/inventory/type/reducer";
import model from "../slices/inventory/model/reducer";
import status from "../slices/inventory/status/reducer";

const allReducers = combineReducers({
  sidenav,
  notification, 
  networkAssets,
  mobileAssets,
  fixedAssets,
  vendor,
  location,
  manufacturer,
  type,
  model,
  status,

  customer,
  cusRouter,
  connection,
  peConnection,

  lastMileProvider,
  lastMileMedia,
});

export default allReducers;
