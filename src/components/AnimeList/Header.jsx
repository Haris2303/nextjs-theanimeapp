import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-color-primary">{title}</h1>
      {!(linkHref && linkTitle) ? null : (
        <Link
          href={linkHref}
          className="text-sm px-4 py-2 bg-gray-900 rounded-lg no-underline text-color-primary hover:text-color-accent transition-all"
        >
          {linkTitle}
        </Link>
      )}
    </div>
  );
};

export default Header;
