import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCount: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const siblingsCount = 1;
function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCount,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalCount / registerPerPage);
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];


  return (
    <Stack
      direction={['column', 'row']}
      mt='8'
      justify='space-between'
      alignItems='center'
      spacing='6'
    >

      <Box>
        <strong>0</strong>- <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction='row' spacing='2'>

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} valor={1} />
            {currentPage > (2 + siblingsCount) && (
              <Text color='gray.500' width='8' textAlign='center'>...</Text>
            )}
          </>

        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} valor={page} />
        })}

        <PaginationItem onPageChange={onPageChange} active={true} valor={currentPage} />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} valor={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text color='gray.500' width='8' textAlign='center'>...</Text>
            )}
            <PaginationItem onPageChange={onPageChange} valor={lastPage} />
          </>

        )}

      </Stack>
    </Stack>
  )
}