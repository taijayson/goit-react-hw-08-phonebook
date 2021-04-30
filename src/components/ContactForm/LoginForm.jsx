import styles from "./ContactForm.module.css";

const LoginForm = ({
  email,
  password,
  addEmail,
  addPassword,
  handleSubmit,
}) => {
  return (
    <div className={styles.wrap}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
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
          Go
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
