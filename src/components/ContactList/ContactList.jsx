import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./ContactList.module.css";
import contactOperations from "../../redux/contacts/contactsOperations";
import {
  getLoading,
  getFilteredContacts,
} from "../../redux/contacts/contactsSelectors";

class ContactList extends Component {
  state = {};

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <>
        {this.props.loading && <h1>...</h1>}
        <ul className={styles.list}>
          {this.props.contacts.length > 0 &&
            this.props.contacts.map(({ id, name, number }) => (
              <li key={id} className={styles.item}>
                {name}: {number}
                <button
                  className={styles.delete_btn}
                  onClick={() => this.props.onRemoveContact(id)}
                >
                  del
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
  loading: getLoading(state),
  //   contacts.filter((contact) =>
  // contact.name.toLowerCase().includes(filter.toLowerCase())
  // ),
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (contactId) =>
    dispatch(contactOperations.deleteContact(contactId)),
  getContacts: () => dispatch(contactOperations.uploadContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
// import contactActions from "../../redux/contacts/contactsActions";

// const ContactList = ({ contacts, onRemoveContact, uploadContacts }) => {
//   console.log(contacts);

//   return (
//     <ul className={styles.list}>
//       {contacts.map(({ name, id, number }) => {
//         return (
//           <li className={styles.item} key={id}>
//             {name + " : " + number}
//             <button
//               className={styles.delete_btn}
//               onClick={() => onRemoveContact(id)}
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
