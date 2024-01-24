import Link from "next/link";

const NavLink = ({ title, path }) => {
  return (
    <Link
      href={path}
      className="block py-2 pl-3 pr-4 text-black sm:text-lg rounnded md:p-0 hover:text-slate-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
