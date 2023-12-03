import { LoginForm } from './LoginForm';

export function Login() {
  return (
    <main className="bg-adoptgram-blue-800 h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl mb-4">Adoptgram - Administrativo</h1>
      <h2 className="text-white text-2xl mb-2">Login</h2>

      <LoginForm />
    </main>
  );
}
