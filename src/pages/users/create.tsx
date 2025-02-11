import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FieldError, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from "../../components/form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
  nome: string;
  email: string;
  password: string;
  password_confirmation: string;
}

type TypeFieldError = {
  nome?: FieldError;
  email?: FieldError;
  password?: FieldError;
  password_confirmation?: FieldError;
}

//regras de validação criadas pelo yup
const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'Minimo de 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const router = useRouter();

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const reponse = await api.post('users', {
      user: {
        ...user,
        created_at: new Date(),
      }
    })

    return reponse.data.user;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });
  const { errors } = formState;

  const handleCreateUser = async (values) => {
    await createUser.mutateAsync(values);

    router.push('/users')
  }

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth='1480' mx='auto' px='6'>
        <Sidebar />

        <Box as='form' onSubmit={handleSubmit(handleCreateUser)} flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Heading size='lg' fontWeight='normal' >Criar usuário</Heading>
          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>

              <Input
                name='name'
                label='Nome
                Completo'
                {...register('name')}
                error={errors.name}
              />

              <Input
                name='email'
                type='email'
                label='E-mail'
                {...register('email')}
                error={errors.email}
              />

            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>

              <Input
                name='password'
                type='password'
                label='Senha'
                {...register('password')}
                error={errors.password}
              />

              <Input
                name='password_confirmation'
                type='password'
                label='Confirmação
                de
                senha'
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />

            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='8'>
              <Link href='/users'>
                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
              <Button colorScheme='pink' isLoading={formState.isSubmitting} type='submit'>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex >
    </Box>
  )
}