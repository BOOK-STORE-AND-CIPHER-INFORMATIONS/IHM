'use client';

import React, { useEffect, useState } from 'react';

// === Types ===
interface LoginResponse {
  token: string;
}

interface Book {
  id: string;
  title: string;
  author: string;
  [key: string]: any;
}

interface ApiBooksGetCollection200Response {
  'hydra:member': Book[];
  [key: string]: any;
}

// === Config ===
const API_URL = 'http://localhost:8080';
const HARDCODED_USERNAME = 'user';
const HARDCODED_PASSWORD = 'user';

// === Composant React simplifié ===
export default function TestApiPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const loginAndFetchBooks = async () => {
      try {
        setMessage('Connexion en cours...');

        const loginPayload = {
          username: HARDCODED_USERNAME,
          password: HARDCODED_PASSWORD,
        };

        const loginResponse = await fetch(`${API_URL}/api/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginPayload),
        });

        if (!loginResponse.ok) {
          throw new Error(`Erreur login: ${loginResponse.status}`);
        }

        const { token }: LoginResponse = await loginResponse.json();

        if (!token) {
          throw new Error('Token JWT manquant');
        }

        setMessage('Connexion réussie, récupération des livres...');

        const booksResponse = await fetch(`${API_URL}/api/books?page=1`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/ld+json',
          },
        });

        if (!booksResponse.ok) {
          throw new Error(`Erreur fetchBooks: ${booksResponse.status}`);
        }

        const data: ApiBooksGetCollection200Response =
          await booksResponse.json();
        setBooks(data['hydra:member'] || []);
        setMessage(`Livres récupérés : ${data['hydra:member']?.length || 0}`);
      } catch (error: any) {
        setMessage(`Erreur : ${error.message || error.toString()}`);
      }
    };

    loginAndFetchBooks();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Test API Auto Login</h1>
      <p>{message}</p>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author || 'Auteur inconnu'}
          </li>
        ))}
      </ul>
    </div>
  );
}
