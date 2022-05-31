import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  selectedCategory: "best",
  categoryData: {},
  subMenuIndex: 0,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.selectedCategory = payload;
      });
    },
    setSubMenuIndex: (state, { payload }) =>
      produce(state, (draft) => {
        draft.subMenuIndex = payload;
      }),
    setCategoryData: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.categoryData = payload;
      });
    },
  },
});

export const { setSelectedCategory, setSubMenuIndex, setCategoryData } =
  categorySlice.actions;

export default categorySlice.reducer;
