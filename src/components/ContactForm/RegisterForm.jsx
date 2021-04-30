import styles from "./ContactForm.module.css";

const RegisterForm = ({
  name,
  email,
  password,
  addName,
  addEmail,
  addPassword,
  handleSubmit,
}) => {
  return (
    <div className={styles.wrap}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="name"
            name="name"
            value={name}
            onChange={addName}
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={addEmail}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={addPassword}
          />
        </label>
        <button type="submit" className={styles.button}>
          Enjoy
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
