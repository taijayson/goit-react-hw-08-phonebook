import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { filterContact } from "../../redux/contacts/contactsActions";

export default function Filter() {
  const dispatch = useDispatch();
  const handleFilterContact = (event) => {
    dispatch(filterContact(event.target.value));
  };
  return (
    <div className={styles.filter_wrap}>
      <p className={styles.filter_title}>Find contacts by name</p>
      <input
        className={styles.filter_input}
        type="text"
        onChange={handleFilterContact}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  filterContact: PropTypes.func,
};
