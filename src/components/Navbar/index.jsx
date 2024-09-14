import Link from "next/link";
import InputSearch from "./InputSeach";

const Navbar = () => {
  return (
    <header className="bg-purple-900  ">
      <div className="flex md:flex-row flex-col justify-between md:item-center p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          Animepedia
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
