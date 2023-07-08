import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./NavBar.module.scss";

interface Props {
  onSearch: (searchString: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className={styles.searchBarContainer}
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(ref?.current?.value || "");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder={"Search Games..."}
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
