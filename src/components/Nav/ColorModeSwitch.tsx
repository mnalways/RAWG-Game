import { HStack, Switch, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack whiteSpace={"nowrap"}>
      <Switch
        colorScheme={"green"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        padding="10px"
      />
      <label>Dark Mode</label>
    </HStack>
  );
};
