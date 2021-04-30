import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import contactOperations from "../../redux/contacts/contactsOperations";
import { getAllContacts } from "../../redux/contacts/contactsSelectors";
// import { v4 as uuidv4 } from "uuid";
// import contactActions from "../../redux/contacts/contactsActions";
// import comboDispatchFunc from "../../redux/contacts/contactsActions";

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

// componentDidMount() {
//   try {
//     const contacts = JSON.parse(localStorage.getItem("contacts"));
//     if (contacts) {
//       this.props.dbUploadContacts(contacts);
//     }
//   } catch (error) {}
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.props.contacts !== prevProps.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
//   }
//   console.log(prevProps);
// }

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addName = (event) => {
    setName(event.target.value);
  };
  const addNumber = (event) => {
    setNumber(event.target.value);
  };

  // handleChange = (event) => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });

  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(contactOperations.addContact({ name, number }));
    setName("");
    setNumber("");

    const checkContact = (name) => {
      return contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );
    };
    if (checkContact(name)) {
      alert(`Contact with name "${name}" already in base`);
      return;
    }

    // const newContact = {
    //   name: name,
    //   number: number,
    //   id: uuidv4(),
    // };

    // this.props.onSubmit({ name, number });
    // this.setState({ name: "", number: "" });
  };

  // render() {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        className={styles.input}
        value={name}
        onChange={addName}
      />
      <label className={styles.label}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
        className={styles.input}
        value={number}
        onChange={addNumber}
      />
      <button
        className={styles.button}
        type="submit"
        // onSubmit={this.handleAddContact}
      >
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     contacts: getAllContacts(state),
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   // dbUploadContacts: (contacts) =>
//   //   dispatch(comboDispatchFunc.uploadContacts(contacts)),
//   onSubmit: (contact) => dispatch(contactOperations.addContact(contact)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
