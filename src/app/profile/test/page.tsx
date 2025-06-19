'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Configuration, LogApiAxiosParamCreator } from '../../../../services';

export default function SelfProfile() {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSelf = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Aucun token trouvé dans le localStorage');
        return;
      }

      try {
        const configuration = new Configuration({
          accessToken: token,
        });

        const paramCreator = LogApiAxiosParamCreator(configuration);
        const { url, options } = await paramCreator.logsGetCollection(1);

        const response = await axios.request({
          ...options,
          url: `http://127.0.0.1:8080${url}`, // adapte selon ton API
        });

        setProfile(response.data);
      } catch (err: any) {
        setError(
          err?.response?.data?.detail ||
            'Erreur lors de la récupération du profil'
        );
      }
    };

    fetchSelf();
  }, []);

  return (
    <div className='p-4 text-white'>
      <h1 className='text-2xl font-bold mb-4'>👤 Profil Utilisateur</h1>
      {error && <p className='text-red-500'>❌ {error}</p>}
      {profile ? (
        <pre className='bg-gray-800 p-4 rounded-lg overflow-x-auto'>
          {JSON.stringify(profile, null, 2)}
        </pre>
      ) : !error ? (
        <p>Chargement...</p>
      ) : null}
    </div>
  );
}
