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
  const onRemoveContact = (event) => {
    dispatch(contactOperations.deleteContact(event.target.id));
  };
  useEffect(() => {
    if (!contacts.length) {
      dispatch(contactOperations.uploadContacts());
    }
  }, [dispatch, contacts.length]);
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
                onClick={(event) => onRemoveContact(id)}
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
// class ContactList extends Component {
//   state = {};

//   componentDidMount() {
//     this.props.getContacts();
//   }

// render() {
//
// const mapStateToProps = (state) => ({
//   contacts: getFilteredContacts(state),
//   loading: getLoading(state),
//   //   contacts.filter((contact) =>
//   // contact.name.toLowerCase().includes(filter.toLowerCase())
//   // ),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onRemoveContact: (contactId) =>
//   dispatch(contactOperations.deleteContact(contactId)),
//   getContacts: () => dispatch(contactOperations.uploadContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
