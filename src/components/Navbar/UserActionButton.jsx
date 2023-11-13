import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "signout" : "signin";

  return (
    <div className="flex justify-between items-center gap-3">
      {!user ? null : <Link href="/user/dashboard">Dashboard</Link>}
      <Link
        href={`/api/auth/${actionURL}`}
        className="bg-color-dark text-color-accent py-2 px-3 rounded-lg"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
