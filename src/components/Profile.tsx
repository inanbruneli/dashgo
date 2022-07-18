import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showData?: boolean;
}

export function Profile({ showData }: ProfileProps) {
  return (
    <Flex align='center'>

      {showData &&
        <Box mr='4' textAlign='right'>
          <Text color='gray.300' fontSize='small'>Inan Brunelli</Text>
          <Text>inanbruneli@gmail.com</Text>
        </Box>
      }
      <Avatar size='md' name='Inan Brunelli' src='https://github.com/inanbruneli.png' />

    </Flex>
  )
}