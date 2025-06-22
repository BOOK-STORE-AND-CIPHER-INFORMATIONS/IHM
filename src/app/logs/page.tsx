'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DatatableLogs } from '../_features/datatableLogs/datatableLogs';
import { LogApi } from '../../../services';
import type { Log } from '../_features/datatableLogs/schemas/Log';

export default function Rents() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [logs, setLogs] = useState<Log[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination serveur
  const [page, setPage] = useState(1); // 1-based pour l'API
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (!t) return router.replace('/');
    setToken(t);
    setCheckingAuth(false);
  }, [router]);

  useEffect(() => {
    if (!token) return;

    const fetchLogs = async () => {
      setIsLoading(true);
      try {
        const api = new LogApi();
        const res = await api.logsGetCollection(page, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLogs(res.data.member);

        // pagination: récupère la dernière page depuis view.last
        const lastUrl = res.data.view.last as string;
        const p = new URL(lastUrl, window.location.origin).searchParams.get(
          'page'
        );
        setTotalPages(p ? parseInt(p, 10) : 1);
      } catch (err: any) {
        setError(err?.response?.data?.detail || 'Erreur de récupération');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogs();
  }, [token, page]);

  if (checkingAuth) {
    return <div>Vérification…</div>;
  }

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Logs</h1>
      {error && <p className='text-red-600 mb-4'>{error}</p>}

      {isLoading ? (
        <div className='text-muted-foreground text-center py-12'>
          Chargement des logs…
        </div>
      ) : (
        <DatatableLogs
          data={logs}
          page={page - 1} // 0-based pour react-table
          pageCount={totalPages}
          onPageChange={(idx) => setPage(idx + 1)}
        />
      )}
    </div>
  );
}
