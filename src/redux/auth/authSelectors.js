const isAuth = (state) => state.auth.isAuth;
const getUsername = (state) => state.auth.user.name;

export { isAuth, getUsername };
