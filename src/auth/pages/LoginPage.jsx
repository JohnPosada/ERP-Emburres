import React from 'react';
import { LoginForm } from '../components/LoginForm';

export const LoginPage = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="w-1/3 h-auto bg-MediumGrey shadow-3xl shadow-StrongGrey rounded-2xl p-6 flex flex-col gap-4 items-start">
        <h1 className="font-semibold text-black text-3xl font-mono">
          INICIAR SESIÓN
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};
