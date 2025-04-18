import { ConnectionResponse } from "../../../../../types/customer/Connection";
import {
  mplsConnectionUrl,
  mplsSearchUrl,
} from "../../../../../utils/url-properties/urls/customer/service";
import globalPageAction from "../../../../actions/globalPageAction";
import globalSearchPageAction from "../../../../actions/globalSearchPageAction";
import PageSliceActionType from "../../../../types/PageActionType";
import SearchPageSliceActionType from "../../../../types/SearchActionType";
import getPageSlice from "../../../config/globalPageSlice";

const mplsConnectionPageSlice =
  getPageSlice<ConnectionResponse>("mplsConnectionPage");

const { request, success, reject, searchRequest, searchSuccess } =
  mplsConnectionPageSlice.actions;

const pageActionTypes: PageSliceActionType<ConnectionResponse> = {
  request,
  success,
  reject,
};

const searchActionTypes: SearchPageSliceActionType<ConnectionResponse> = {
  request: searchRequest,
  success: searchSuccess,
  reject,
};

export const mplsConnectionPageAction = (page: number, pageSize: number) =>
  globalPageAction(page, pageSize, mplsConnectionUrl, pageActionTypes);

export const mplsSearchAction = (key: string) =>
  globalSearchPageAction(key, mplsSearchUrl, searchActionTypes);

export const {
  reset: mplsConnectionPageReset,
  create: mplsConnectionAddOneToList,
  update: mplsConnectionUpdateOneInList,
} = mplsConnectionPageSlice.actions;

export default mplsConnectionPageSlice.reducer;
