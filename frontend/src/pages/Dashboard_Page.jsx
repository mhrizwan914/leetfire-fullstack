// Store
import { use_auth_store } from "@/store/use_auth_store";
// Layouts
import Private from "@/layouts/private";

export default function Dashboard_Page() {
  const { auth_user } = use_auth_store();
  return (
    <Private>
      <section>
        <div className="pt-10">
          <div className="container">
            <div>
              <h2 className="font-bold text-2xl text-center">
                Welcome to the Leet Lab! {auth_user && auth_user.user.username.toUpperCase()}
              </h2>
              {auth_user && !auth_user.user.is_verified && (
                <p className="p-2 text-sm bg-red-600 w-max mx-auto mt-5">
                  Please verify your email address
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Private>
  );
}
