# ベースとなるイメージ（Node.jsのバージョン20、軽量版のalpineを使用）
FROM node:20-alpine

# コンテナ内での作業ディレクトリを /app に設定
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN pnpm config set store-dir /app/.pnpm-store

COPY package.json pnpm-lock.yaml* ./

# 依存関係をインストール
RUN pnpm install

# 残りのソースコードを全てコピー
COPY . .

# 開発サーバーを起動 (pnpm run dev)
# Next.jsはデフォルトで3000番ポートで動きます
CMD ["pnpm", "run", "dev"]
