# ベースとなるイメージ（Node.jsのバージョン20、軽量版のalpineを使用）
FROM node:20-alpine

# コンテナ内での作業ディレクトリを /app に設定
WORKDIR /app

# まず package.json だけをコピーする
# (理由: ソースコードを変えるたびに npm install が走ると遅いので、
#  依存関係が変わったときだけインストールするようにキャッシュを利用するため)
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# 残りのソースコードを全てコピー
COPY . .

# 開発サーバーを起動 (npm run dev)
# Next.jsはデフォルトで3000番ポートで動きます
CMD ["npm", "run", "dev"]
