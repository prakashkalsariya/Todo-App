import { createSlice } from "@reduxjs/toolkit";
import type { IDeleteUser } from "../../@types/redux.type.ts";

const initialState = {
  viewModal: {
    isOpen: false,
    title: "",
    description: "",
    date: "",
    time: "",
    _id: "",
  },

  deleteModal: {
    isOpen: false,
    title: "",
    _id: "",
  },
  listReset: false,
};

export const taskListSlice = createSlice({
  name: "task list",
  initialState,
  reducers: {
    setViewModal: (state, action) => {
      state.viewModal = {
        isOpen: action?.payload?.isOpen,
        title: action?.payload?.title,
        description: action?.payload?.description,
        date: action?.payload?.date,
        time: action?.payload?.time,
        _id: action?.payload?.id,
      };
    },

    setDeleteModal: (state, action: IDeleteUser) => {
      state.deleteModal = {
        isOpen: action?.payload?.isOpen,
        title: action?.payload?.title,
        _id: action?.payload?._id,
      };
    },

    resetList: (state) => {
      state.listReset = !state.listReset;
    },
  },
});

export const taskListAction = taskListSlice.actions;
export const taskListReducer = taskListSlice.reducer;
