import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface props {
  sortOrder: string | null;
  onSelect: (sortOrder: string) => void;
}

export const SortSelector = ({ sortOrder, onSelect }: props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find((item) => item.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`sort by: ${currentSortOrder?.label || "Relevance"}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem key={sort.label} onClick={() => onSelect(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
