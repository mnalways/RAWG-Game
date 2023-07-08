import { HStack, Image } from "@chakra-ui/react";
// import logo  from "../assets/logo.jpeg";
import logo from "../../assets/fire.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import styles from "./NavBar.module.scss";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchString: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack className={styles.navBarContainer}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
