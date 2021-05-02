import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";

import {
  loadContactsRequest,
  loadContactsSuccess,
  loadContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
} from "./contactsActions";

const contacts = createReducer([], {
  [loadContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [loadContactsSuccess]: () => false,
  [loadContactsRequest]: () => true,
  [loadContactsError]: () => false,
  [addContactSuccess]: () => false,
  [addContactRequest]: () => true,
  [addContactError]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
});

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [loadContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  contacts,
  loading,
  filter,
  error,
});

export default contactsReducer;
