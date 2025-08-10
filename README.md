# React 19 (Vite) スターター

Node.js 22 以上前提。Vite + React 19 で .jsx を使い、最新の use* フックで構成した最小スターターです。

## 構成

- `index.html`: Viteのエントリ。`#root` を用意。
- `styles.css`: シンプルなスタイル。
- `src/main.jsx`: Reactエントリ。`createRoot` で `App` をマウント。
- `src/App.jsx`: Reactコンポーネント（useState使用）。
- `vite.config.js`: Vite設定（Reactプラグイン）。
- `package.json`: Node 22+ / React 19 指定とスクリプト。

## 動かし方

1. 依存をインストール

  Windows PowerShell で実行:

  ```powershell
  corepack enable
  npm i
  ```

1. 開発サーバー起動

  ```powershell
  npm run dev
  ```

1. 本番ビルド/プレビュー

  ```powershell
  npm run build
  npm run preview
  ```

## メモ

- React 19 のAPIに追随するため、.jsx + フック中心で実装しています。
- 将来的に型導入する場合は `npm i -D typescript @types/react @types/react-dom` でTS化も容易です。
