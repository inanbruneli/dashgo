import { Icon, Link as CLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface SidebarLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function SidebarLink({ icon, children, href, ...rest }: SidebarLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <CLink display='flex' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>{children}</Text>
      </CLink>
    </ActiveLink>
  )
}