import { Flex, Icon, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { RiMenuLine } from 'react-icons/ri';
import { useSideBarDrawer } from '../contexts/SidebarDrawerContext';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { Search } from './Search';

export function Header() {
  const { onOpen } = useSideBarDrawer();

  const isLg = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1400}
      h='28'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      {!isLg && (
        <IconButton
          aria-label='Open navigation'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        >

        </IconButton>
      )}

      <Link href='/dashboard'>
        <Text
          fontSize={['2xl', '3xl']}
          fontWeight='bold'
          letterSpacing='tight'
          w='64'
          as='a'
          cursor='pointer'>
          dashgo
          <Text color='pink.500' as='span' ml='1'>.</Text>
        </Text>
      </Link>

      {isLg && <Search />}

      <Flex align='center' ml='auto'>

        <Notifications />
        <Profile showData={isLg} />

      </Flex>
    </Flex >
  )
}