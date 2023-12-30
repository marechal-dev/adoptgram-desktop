import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Digite um Email válido'),
  password: z.string().min(8, 'A senha tem que ter no mínimo 8 caracteres.'),
});

export type LoginFormOutput = z.output<typeof loginSchema>;

export function LoginForm() {
  const toastRef = useRef<Toast>(null);

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

  function onFailToSubmitForm() {
    const toast = toastRef.current;
    if (toast) {
      toast.show({
        severity: 'error',
        icon: 'pi pi-exclamation-circle',
        summary: 'Erro ao logar! Revise os campos e tente novamente',
      });
    }
  }

  return (
    <>
      <form
        className="flex flex-col gap-y-5 mt-3"
        onSubmit={handleSubmit(onSubmitLoginForm, onFailToSubmitForm)}
      >
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputText
              className={error?.message ? 'p-invalid' : ''}
              placeholder="Email"
              type="email"
              keyfilter="email"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Password
              className={error?.message ? 'p-invalid' : ''}
              placeholder="Senha"
              type="password"
              keyfilter="alphanum"
              value={value}
              onChange={onChange}
              feedback={false}
              toggleMask
            />
          )}
        />

        <Button
          label="Entrar"
          type="submit"
          icon="pi pi-sign-in"
          severity="success"
          rounded
        />
      </form>
      <Toast ref={toastRef} title="Erro" position="bottom-right" />
    </>
  );
}
