import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import styles from "./MainPage.module.css";

const ContactsPage = () => (
  <>
    <div>
      <h2 className={styles.title}>Contacts</h2>
      <ContactForm />
      <ContactList />
      <Filter />
    </div>
  </>
);

export default ContactsPage;
