import { Box, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { SidebarLink } from "./SidebarLink";

export function SidebarNav() {


  return (
    <Stack spacing='12' align='flex-start'>
      <Box>
        <Text fontWeight='bold' color='gray.400' fontSize='small'>GERAL</Text>
        <Stack spacing='4' mt='8' align='stretch'>

          <SidebarLink href="/dashboard" icon={RiDashboardLine} children='Dashboard' />
          <SidebarLink href="/users" icon={RiContactsLine} children='Usuários' />
        </Stack>
      </Box>

      {/* <Box>
        <Text fontWeight='bold' color='gray.400' fontSize='small'>AUTOMAÇÃO</Text>
        <Stack spacing='4' mt='8' align='stretch'>
          <SidebarLink href="forms" icon={RiInputMethodLine} children='Formulários' />
          <SidebarLink href='automation' icon={RiGitMergeLine} children='Automação' />
        </Stack>
      </Box> */}


    </Stack>
  )
}