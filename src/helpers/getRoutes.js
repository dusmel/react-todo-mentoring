export default (routes = []) => ({
  protectedRoutes: routes.filter(route => route.protected),
  unprotectedRoutes: routes.filter(route => !route.protected),
});
