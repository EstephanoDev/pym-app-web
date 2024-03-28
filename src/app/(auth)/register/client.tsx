
'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/../public/logo.jpeg'; // Asegúrate de que esta ruta sea correcta
import { pb } from '@/lib/db';

interface Props {
    token: string;
    id: string;
}

function RegisterClientPage(props:Props) {
    const route = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [oldPassword, setOldPassword] = useState<string>('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Add this line
  
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true); // Set loading to true when submit starts
        try {
     const response = await pb.collection('users').update(props.id,
        {
            'verificado': true,
            'password': password,
            'passwordConfirm': password,
            'oldPassword': oldPassword,
        });
          if (response.id){
                route.push('/')
          } else {
            throw new Error('Usuario no identificado'); // Throw an error if response is not null
          } 
        }  catch (err) {
          setError(JSON.stringify(err)); // Set the error message from the thrown error
        } finally {
          setIsLoading(false); // Set loading to false when submit ends
        }
      };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-900 to-white">
      <div className="flex flex-col items-center justify-center bg-white bg-opacity-90 p-10 rounded-md shadow-lg">
        <Image src={Logo} alt="Logo" width={150} height={150} />
        <form onSubmit={onSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Contraseña Anterior</label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Ingresa tu Ultima Contraseña"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Ingresa tu Nueva Contraseña"
            />
          </div>
          <button
      type="submit"
      className="w-full bg-blue-800 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
      disabled={isLoading}
    >
      {isLoading ? 'Cargando...' : 'Login'} 
    </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default RegisterClientPage;
