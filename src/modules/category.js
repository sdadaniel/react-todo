import produce from "immer";
import { createAction, handleActions } from "redux-actions";

const moduleName = "counter";

const SET_SELECTED_CATEGORY = `${moduleName}/SET_SELECTED_CATEGORY`;
const SET_CATEGORY_DATA = `${moduleName}/SET_CATEGORYDATA`;
const SET_SUBMENU_INDEX = `${moduleName}/SET_SUBMENUINDEX`;

export const setSelectedCategory = createAction(
  SET_SELECTED_CATEGORY,
  (payload) => payload
);
export const setSubMenuIndex = createAction(
  SET_SUBMENU_INDEX,
  (payload) => payload
);

export const setCategoryData = createAction(
  SET_CATEGORY_DATA,
  (payload) => payload
);

const initialState = {
  selectedCategory: "best",
  categoryData: {},
  subMenuIndex: 0,
};

const category = handleActions(
  {
    [SET_SELECTED_CATEGORY]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.selectedCategory = payload;
      }),
    [SET_CATEGORY_DATA]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.categoryData = payload;
      }),
    [SET_SUBMENU_INDEX]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.subMenuIndex = payload;
      }),
  },
  initialState
);

export default category;
