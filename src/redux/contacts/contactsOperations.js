import axios from "axios";

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
} from "./contactsActions";

const uploadContacts = () => (dispatch) => {
  dispatch(loadContactsRequest());
  return axios
    .get("/contacts")
    .then(({ data }) => dispatch(loadContactsSuccess(data)))
    .catch((err) => dispatch(loadContactsError(err.message)));
};

const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());
  return axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((err) => dispatch(addContactError(err.message)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());
  return axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((err) => dispatch(deleteContactError(err.message)));
};

const contactOperations = { uploadContacts, addContact, deleteContact };

export default contactOperations;
