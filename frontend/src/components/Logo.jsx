// Media
import logo from "/logo.png";
// React router
import { Link } from "react-router";

export default function Logo({ href = "javascript:;" }) {
  return (
    <Link className="font-bold text-xl inline-flex items-center gap-2.5" to={href}>
      <img src={logo} alt="logo" className="max-w-[50px] h-auto" />
      <span>LeetFire</span>
    </Link>
  );
}
