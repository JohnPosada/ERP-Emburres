import { RegisterForm } from '../components/RegisterForm';

export const RegisterPage = () => {
  return (
    <div className="w-1/3 h-auto bg-MediumGrey shadow-3xl shadow-StrongGrey rounded-2xl p-6 flex flex-col gap-4 items-start">
      <h1 className="font-semibold text-black text-3xl font-mono">
        CREAR CUENTA
      </h1>
      <RegisterForm />
    </div>
  );
};
