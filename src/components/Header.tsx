import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { navBarList } from "@/constants";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  return (
    <header className="w-full h-20 bg-accentWhite border-b-[1px] border-b-lightText/50">
      <Container className="h-full flex items-center justify-between gap-5 lg:gap-10">
        <Logo />
        <SearchInput />
        <div className="hidden md:inline-flex items-center gap-7">
          {navBarList?.map((item) => (
            <Link key={item.key} href={item?.link} className="navBarItem">
              {item?.title}
            </Link>
          ))}
          <Link href={"/signin"} className="navBarItem">
            Sign in
          </Link>
          <Link href={"/Lorem"} className="navBarItem">
            Lorem
          </Link>
        </div>
        <HiMenuAlt2 className="inline-flex md:hidden hover:text-darkGoldHover text-2xl hoverEffect cursor-pointer" />
      </Container>
    </header>
  );
};

export default Header;
