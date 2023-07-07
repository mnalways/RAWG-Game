import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { usePlatforms } from "../../Hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "./UseGame";

interface props {
    onSelect: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

export const PlatformSelector = ({selectedPlatform, onSelect}: props) => {
    const {data, error} = usePlatforms();

    if(error) return;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || "Platform"}
            </MenuButton>
            <MenuList>
                {data.map((platform) => <MenuItem key={platform.id} onClick={() => onSelect(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>

    );
}