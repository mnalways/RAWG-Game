import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { usePlatforms } from "../../Hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

export const PlatformSelector = () => {
    const {data, error} = usePlatforms();

    if(error) return;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>

    );
}