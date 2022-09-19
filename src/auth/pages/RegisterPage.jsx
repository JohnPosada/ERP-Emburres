import { RegisterForm } from '../components/RegisterForm';

export const RegisterPage = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="w-1/3 h-auto bg-gray-800 rounded-2xl p-6 flex flex-col gap-4 items-start">
        <h1 className="font-semibold text-yellow-400 text-3xl font-mono">
          CREAR CUENTA
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
};
