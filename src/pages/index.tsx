import { Flex, Button, Stack, Image, Text } from '@chakra-ui/react';
import { Input } from '../components/form/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import NextLink from "next/link";

type SignInFormData = {
  email: string;
  password: string;
}

//regras de validação criadas pelo yup
const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  return (
    <Flex w='100vw' h='100vh' overflow='hidden'>

      <Flex w={['0%', '50%']} h='100%' justifyContent='center' alignItems='center' >
        <Image
          src='https://inanbruneli.github.io/Parallax/imagens/un (6).svg'
          boxSize={'50%'}
        ></Image>
      </Flex>

      <Flex w={['100%', '50%']} h='100%' bg='gray.800' justifyContent='center' alignItems='center' flexDir='column'>

        <Stack spacing='20'>

          <Flex textAlign='center'>
            <Text
              fontSize={['3xl', '5xl']}
              fontWeight='bold'
              letterSpacing='tight'
              w='64'>
              dashgo
              <Text color='pink.500' as='span' ml='1'>.</Text>
            </Text>
          </Flex>

          <Flex as='form' w='100%' borderRadius='8' flexDir='column' onSubmit={handleSubmit(handleSignIn)} >
            <Stack spacing='4'>

              <Input

                type='email'
                name='email'
                label='E-mail'
                {...register('email')}
                error={errors.email}

              />

              <Input
                type='password'
                name='password'
                label='Password'
                {...register('password')}
                error={errors.password}
              />

            </Stack>

            <NextLink href='dashboard' passHref>
              <Button type='submit' mt='6' colorScheme='pink' size='lg' isLoading={formState.isSubmitting}>Entrar</Button>
            </NextLink>
          </Flex>

        </Stack>
      </Flex>



    </Flex>
  )
}
