'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginFormSchema, type LoginFormValues } from '../schemas/loginSchema';

const API_URL = 'http://127.0.0.1:8080';

interface LoginResponse {
  token: string;
  roles?: string[];
}

export function LoginForm() {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  async function onSubmit(values: LoginFormValues) {
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data: LoginResponse = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || 'Identifiants invalides');
      }

      if (!data.token || !data.roles) {
        throw new Error('Réponse invalide du serveur.');
      }

      const isAdmin = data.roles.includes('ROLE_ADMIN');
      if (!isAdmin) {
        throw new Error(
          "Vous n'avez pas l'autorisation d'accéder à cette interface."
        );
      }

      // ✅ Stocker le token seulement si ROLE_ADMIN
      localStorage.setItem('token', data.token);
      router.replace('/logs'); // ← évite l'historique inutile
      router.refresh(); // ← rafraîchit les composants côté client
    } catch (err: any) {
      setError(err.message || 'Erreur de connexion');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 max-w-md mx-auto mt-10'
      >
        <h1 className='text-2xl font-semibold text-center'>Connexion</h1>

        {error && (
          <div className='text-red-500 text-center font-medium'>{error}</div>
        )}

        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom d'utilisateur</FormLabel>
              <FormControl>
                <Input placeholder='username' disabled={!isReady} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='••••••••'
                  disabled={!isReady}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full' disabled={!isReady}>
          {isReady ? 'Connexion' : 'Veuillez patienter...'}
        </Button>
      </form>
    </Form>
  );
}
