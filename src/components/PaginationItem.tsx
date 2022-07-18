import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  valor: number;
  active?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ valor, active = false, onPageChange }: PaginationItemProps) {
  return (
    <>
      {active ? (
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          colorScheme='pink'
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default'
          }}>{valor}</Button>
      ) : (
        <Button
          onClick={() => onPageChange(valor)}
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.700'
          _disabled={{
            bg: 'pink.500',
            cursor: 'default'
          }}>{valor}</Button>
      )}
    </>
  )
}