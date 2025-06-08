// Components
import Logo from "@/components/Logo";
// Shadcn ui
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home_Page() {
  return (
    <section>
      <div className="py-10">
        <div className="container">
          <div className="text-center max-w-[1050px] mx-auto">
            <Logo />
            <h1 className="text-xl font-bold mb-3 mt-3">Leetfire v1.0 is Live!</h1>
            <p>
              We’re building Leetfire to help developers master coding challenges in a fun and
              competitive way. Our first version is live now, and we're just getting started. Stay
              tuned as we roll out features, polish the experience, and take your feedback
              seriously.
            </p>
            <div className="flex items-center gap-2.5 justify-center mt-5">
              <Button asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/signup">Signup</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
