// Pages
import { Dashboard_Page, Single_Problem_Page } from "@/pages";

const private_routes = [
  {
    path: "/dashboard",
    element: <Dashboard_Page />,
  },
  {
    path: "/dashboard/problem/:id",
    element: <Single_Problem_Page />,
  },
];

export default private_routes;
