import { HStack, Image } from "@chakra-ui/react";
// import logo  from "../assets/logo.jpeg";
import logo from "../../assets/fire.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import styles from "./NavBar.module.scss";
import SearchInput from "./SearchInput";
export const NavBar = () => {
  return (
    <HStack className={styles.navBarContainer}>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
