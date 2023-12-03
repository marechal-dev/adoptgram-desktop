import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { colors } from '../../theme';

const loginSchema = z.object({
  email: z.string().email('Digite um Email válido'),
  password: z.string().min(8, 'A senha tem que ter no mínimo 8 caracteres.'),
});

export type LoginFormOutput = z.output<typeof loginSchema>;

export function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormOutput>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmitLoginForm(data: LoginFormOutput) {
    console.log(data);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmitLoginForm)}>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl className="mb-3" isInvalid={!!error?.message}>
            <FormLabel htmlFor="email" className="text-white">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu Email"
              bg={colors.orange[500]}
              errorBorderColor={colors.error}
              size="lg"
              className="text-black placeholder:text-adoptgram-gray-50"
              value={value}
              onChange={onChange}
            />
            {error?.message ? (
              <FormErrorMessage>{error.message}</FormErrorMessage>
            ) : null}
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl className="mb-2" isInvalid={!!error?.message}>
            <FormLabel htmlFor="password" className="text-white">
              Senha
            </FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Digite sua Senha"
              bg={colors.orange[500]}
              errorBorderColor={colors.error}
              size="lg"
              className="text-black placeholder:text-adoptgram-gray-50"
              value={value}
              onChange={onChange}
            />
            {error?.message ? (
              <FormErrorMessage>{error.message}</FormErrorMessage>
            ) : null}
          </FormControl>
        )}
      />

      <Button
        title="Entrar"
        type="submit"
        isLoading={isSubmitting}
        bg={colors.orange[500]}
        width="100%"
      >
        Entrar
      </Button>
    </form>
  );
}
