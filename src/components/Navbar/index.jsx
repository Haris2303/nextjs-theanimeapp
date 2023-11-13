import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <nav className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between items-center p-4">
        <Link href="/" className="text-white text-xl font-bold">
          TheAnimeList
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </nav>
  );
};

export default Navbar;
