import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { filterContact } from "../../redux/contacts/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelectors";
// import comboDispatchFunc from "../../redux/contacts/contactsActions";

const Filter = ({ filter, filterContact }) => {
  // console.log(filter);
  // console.log(filterContact);
  return (
    <div className={styles.filter_wrap}>
      <p className={styles.filter_title}>Find contacts by name</p>
      <input
        className={styles.filter_input}
        type="text"
        value={filter}
        onChange={filterContact}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return (
    console.log(state.contacts.filter),
    {
      filter: getFilter(state),
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterContact: (event) => dispatch(filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
