import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "./UseGame";
import { IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface props {
  platforms: Platform[];
}

export const PlatformIconList = ({ platforms = [] }: props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    placestation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={IconMap[platform.slug]}
          color={"gray.500"}
          spacing={"10px"}
        />
      ))}
    </HStack>
  );
};
