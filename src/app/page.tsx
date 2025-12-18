import React from 'react';

// Rust APIから取得するデータの型定義
interface ApiData {
  text: string;
}

export default async function Home() {
  let data: ApiData | null = null;
  let error: string | null = null;

  try {
    // サーバーサイドでRust APIにリクエストを送る
    // コンテナ同士の通信ではなく、ブラウザから見た localhost:8000 を叩く
    const res = await fetch('http://backend_api:8000/api/hello', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch');
    data = await res.json();
  } catch (e) {
    error = 'Rust APIに接続できませんでした';
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Ackunity Project</h1>

      <div className="p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700">
        <h2 className="text-xl mb-2 text-gray-400">Backend Response:</h2>
        {error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          <p className="text-2xl font-mono text-green-400">
            {data ? data.text : '読み込み中...'}
          </p>
        )}
      </div>

      <p className="mt-8 text-gray-500 text-sm">
        Next.js (3000) --- fetch ---&gt; Rust Axum (8000)
      </p>
    </main>
  );
}
