// Store
import { use_auth_store } from "@/store/use_auth_store";
// Layouts
import Private from "@/layouts/private";
// React router
import { useParams } from "react-router-dom";

export default function Single_Problem_Page() {
  const { id } = useParams();

  return <Private>{id}</Private>;
}
