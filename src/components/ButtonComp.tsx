import { Button } from "@chakra-ui/react";

interface ButtonCompType {
  competencia: string;
  currentCompetencia: string;
  onCompetenciaChange: (competencia: string) => void;
}

export function ButtonComp({ competencia, currentCompetencia, onCompetenciaChange }: ButtonCompType) {
  return (
    <>
      {currentCompetencia == competencia ? (
        <Button
          onClick={() => onCompetenciaChange(competencia)}
          size='sm'
          fontSize='xs'
          width='25'
          bg='pink.500'
          _disabled={{
            bg: 'pink.500',
            cursor: 'default'
          }}>
          {competencia}/2022
        </Button>

      ) : (
        <Button
          onClick={() => onCompetenciaChange(competencia)}
          size='sm'
          fontSize='xs'
          width='25'
          bg='gray.700'
          _disabled={{
            bg: 'pink.500',
            cursor: 'default'
          }}>
          {competencia}/2022
        </Button>
      )}

    </>
  )
}