// All routes
import public_routes from "./public_routes";
import private_routes from "./private_routes";
import admin_routes from "./admin_routes";
import fallback_routes from "./fallback_routes";
// React router
import { useRoutes } from "react-router";
// Utils
import Auth_Guard from "@/utils/auth_guard";
import Auth_Admin_Guard from "@/utils/auth_admin_guard";
// Store
import { use_auth_store } from "@/store/use_auth_store";

export default function App_Routes() {
  const { auth_user, is_checking_auth } = use_auth_store();
  const handle_parse_routes = (routes, is_private, is_admin) => {
    return routes.map((route) => ({
      path: route.path,
      element: is_private ? (
        <Auth_Guard>
          {is_admin ? <Auth_Admin_Guard>{route.element}</Auth_Admin_Guard> : route.element}
        </Auth_Guard>
      ) : (
        route.element
      ),
    }));
  };

  const public_routes_obj = handle_parse_routes(
    public_routes(auth_user, is_checking_auth),
    false,
    false,
  );
  const private_routes_obj = handle_parse_routes(private_routes, true, false);
  const admin_routes_obj = handle_parse_routes(admin_routes, true, true);
  const fallback_routes_obj = handle_parse_routes(fallback_routes, false, false);

  return useRoutes([
    ...public_routes_obj,
    ...private_routes_obj,
    ...admin_routes_obj,
    ...fallback_routes_obj,
  ]);
}
