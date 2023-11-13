import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "signout" : "signin";

  return (
    <div>
      {!user ? null : <Link href="/user/dashboard">Dashboard</Link>}
      <Link href={`/api/auth/${actionURL}`}>{actionLabel}</Link>
    </div>
  );
};

export default UserActionButton;
