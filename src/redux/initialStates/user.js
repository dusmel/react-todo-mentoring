export default {
  currentUser: {
    isAuthenticated: !!localStorage.token,
    details: {},
    error: {},
    loading: false,
  },
  login: {
    error: {},
    loading: false,
  },
  logout: {
    error: {},
    loading: false,
  },
};
