import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="flex md:flex-row flex-col justify-between p-4">
        <Link href="/" className="text-white text-xl font-bold">
          TheAnimeList
        </Link>
        <input type="text" placeholder="pencarian anime.." className="" />
      </div>
    </nav>
  );
};

export default Navbar;
