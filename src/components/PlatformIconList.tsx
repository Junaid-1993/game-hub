import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import Platform from "../entities/Platform";

interface PlatformIconsListProps {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: PlatformIconsListProps) => {
  // This object has any number of 'keys' of type 'string', name of the key can be anything and each key is mapped to a value of
  // type 'IconType'.
  const iconsMap: { [key: string]: IconType } = {
    // slug --> icon
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        // Passing icon component.
        <Icon as={iconsMap[platform.slug]} color="gray.500" key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
