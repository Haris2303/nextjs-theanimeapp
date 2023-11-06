import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      {!(linkHref && linkTitle) ? null : (
        <Link
          href={linkHref}
          className="text-sm px-4 py-2 bg-gray-900 rounded-lg no-underline text-gray-200 hover:text-gray-500 transition-all"
        >
          {linkTitle}
        </Link>
      )}
    </div>
  );
};

export default Header;
