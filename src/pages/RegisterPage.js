import RegisterForm from "../components/ContactForm/RegisterForm";

const LoginPage = ({
  name,
  email,
  password,
  addName,
  addEmail,
  addPassword,
  handleSubmit,
}) => {
  return (
    <RegisterForm
      name={name}
      email={email}
      password={password}
      addName={addName}
      addEmail={addEmail}
      addPassword={addPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPage;
