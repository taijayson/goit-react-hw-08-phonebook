import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ContactList.module.css";
import contactOperations from "../../redux/contacts/contactsOperations";
import {
  getLoading,
  getFilteredContacts,
} from "../../redux/contacts/contactsSelectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const loading = useSelector(getLoading);
  const onRemoveContact = (id) => {
    dispatch(contactOperations.deleteContact(id));
  };
  useEffect(() => {
    dispatch(contactOperations.uploadContacts());
  }, [dispatch]);
  return (
    <>
      {loading && <h1>...</h1>}
      <ul className={styles.list}>
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              {name}: {number}
              <button
                className={styles.delete_btn}
                onClick={() => {
                  onRemoveContact(id);
                }}
              >
                del
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
