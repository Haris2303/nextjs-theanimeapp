import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="flex md:flex-row flex-col justify-between p-4">
        <Link href="/" className="text-white text-xl font-bold">
          TheAnimeList
        </Link>
        <InputSearch />
      </div>
    </nav>
  );
};

export default Navbar;
