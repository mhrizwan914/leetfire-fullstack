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
              <p className="text-center mt-5 max-w-[1100px] mx-auto">
                Welcome to Leet Lab! — your ultimate space for solving real-world coding challenges
                inspired by LeetCode. Whether you're aiming for Big Tech interviews or just want to
                level up your problem-solving skills, Leet Lab is your companion for daily
                challenges, guided solutions, and deep-dive explanations.
              </p>
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
