import Login from "../containers/login";
import Dashboard from "../containers/dashboard";

const routes = [{
  component: Dashboard,
  path: "/dashboard",
  title: "Dashboard",
  to: "/",
  type: "private"
}, {
  component: Login,
  path: "/",
  title: "Login",
  to: "/dashboard",
  type: "public"
}, {
  component: Login,
  path: "*",
  title: "Login",
  to: "/dashboard",
  type: "public"
}];

export default routes;