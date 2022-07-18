import { HStack, Icon } from "@chakra-ui/react";
import { IconBase } from "react-icons";
import { RiNotification2Line, RiUserAddLine } from "react-icons/ri";

export function Notifications() {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py='1'
      color='gray.500'
      borderRightWidth={1}
      borderColor='gray.700'
    >
      <Icon as={RiNotification2Line} />
      <Icon as={RiUserAddLine} />
    </HStack>
  )
}