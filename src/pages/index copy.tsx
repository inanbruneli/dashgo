import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/form/input';
import { FieldValues, FormState, SubmitHandler, useForm } from 'react-hook-form';
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
  const { errors }: FormState<FieldValues> = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex as='form' w='100%' maxWidth='360px' bg='gray.800' p='8' borderRadius='8' flexDir='column' onSubmit={handleSubmit(handleSignIn)}>
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
    </Flex>
  )
}
