import LoginForm from "../components/ContactForm/LoginForm";

const LoginPage = ({
  email,
  password,
  addEmail,
  addPassword,
  handleSubmit,
}) => {
  return (
    <LoginForm
      email={email}
      password={password}
      addEmail={addEmail}
      addPassword={addPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPage;
