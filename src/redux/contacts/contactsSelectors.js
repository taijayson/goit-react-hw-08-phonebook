import { createSelector } from "@reduxjs/toolkit";

const getAllContacts = (state) => state.contacts.contacts;

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getFilter, getAllContacts],
  (filter, contacts) => {
    const normFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normFilter)
    );
  }
);

export { getAllContacts, getLoading, getFilter, getFilteredContacts };
