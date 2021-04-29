// import { db } from "../../db/request";
// import {
//   UPLOADCONTACTS,
//   ADDCONTACT,
//   FILTERCONTACT,
//   DELETECONTACT,
// } from "./contactsConstanse";
// import { v4 as uuidv4 } from "uuid";

// export const uploadContacts = createAction(UPLOADCONTACTS);

// export const addContact = createAction(ADDCONTACT, ({ name, number }) => ({
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// }));

// export const filterContact = createAction(FILTERCONTACT, (event) => ({
//   payload: event.target.value,
// }));

// export const deleteContact = createAction(DELETECONTACT);

// const comboDispatchFunc = {
//   uploadContacts,
//   addContact,
//   filterContact,
//   deleteContact,
// };
// export default comboDispatchFunc;

import { createAction } from "@reduxjs/toolkit";

const loadContactsRequest = createAction("contacts/loadContactsRequest");
const loadContactsSuccess = createAction("contacts/loadContactsSuccess");
const loadContactsError = createAction("contacts/loadContactsError");

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

const filterContact = createAction("contact/filter");

export {
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
};
