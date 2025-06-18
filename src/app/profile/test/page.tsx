'use client';

import React, { useEffect, useState } from 'react';

interface LoginResponse {
  token: string;
}

const API_URL = 'http://127.0.0.1:8080'; // ou https selon ta config

export default function TestApiLogin() {
  const [token, setToken] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('Connexion non lancée');

  useEffect(() => {
    const login = async () => {
      setMessage('Connexion en cours...');
      try {
        const response = await fetch(`${API_URL}/api/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: 'user',
            password: 'user',
          }),
          redirect: 'follow', // suivre redirections (308)
        });

        if (!response.ok) {
          throw new Error(`Erreur login: ${response.status}`);
        }

        const data: LoginResponse = await response.json();

        if (!data.token) {
          throw new Error('Token JWT manquant');
        }

        setToken(data.token);
        setMessage('Connexion réussie');
      } catch (error: any) {
        setMessage(`Erreur : ${error.message || error.toString()}`);
      }
    };

    login();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Test Connexion API</h1>
      <p>{message}</p>
      {token && (
        <pre
          style={{
            background: '#eee',
            padding: 10,
            borderRadius: 5,
            wordBreak: 'break-all',
          }}
        >
          {token}
        </pre>
      )}
    </div>
  );
}
