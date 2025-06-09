import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";

import { FaRegSun, FaRegMoon } from "react-icons/fa6";

const Header = () => {
  return (
    <Navbar
      isBordered
      isBlurred
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md"
    >
      <NavbarBrand>
        <span className="font-bold text-xl">Deepak Roy</span>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link color="foreground" href="/#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Blog">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary">
            <FaRegSun className="w-5 h-5" /> <FaRegMoon className="w-5 h-5" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
