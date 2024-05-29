<!-- プロジェクト名を記載 -->
ネズミ好きなカフェのホームページ【MouseCafe】のフロントエンドリポジトリ

## Mouse Cafe/ホームページデザイン【ポートフォリオ用】
![image](https://github.com/kohsukeve/2024P/assets/70362342/dffd4e64-ba4c-4fd0-9102-68470f9ec0f3)


<div id="top"></div>

<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/PostgreSQL-000000.svg?logo=postgresql&style=for-the-badge" />
</p>



## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [仕様技術一覧](#仕様技術一覧)
5. [UI/UXの選定](#UI/UXの選定)
6. [画像について](#画像について)
7. [他参考](#他参考)


<br />

<!-- プロジェクトについて -->

## プロジェクトについて
カフェやレストランなどの飲食店の顧客に対応したホームページ作成  
おおまかなテンプレートを作成することで、再利用可能にしたい

#### サービスURL
<!-- リンク(プロジェクトの概要を記載※Backlogなどもこちらに) -->
  <p align="left">
    <a href="https://2024-p-delta.vercel.app/moll"><strong>Mouse Cafeのホームページリンク »</strong></a>
    <br />

  <p align="left">
    <a href="https://second-blog-sage.vercel.app"><strong>技術メモアウトプット</strong></a>
    <br />

  <p align="left">
    <a href="https://2024-h.vercel.app"><strong>装飾系ホームページValeurのリンク</strong></a>
    <br />  

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| PostgreSQL            | 8.0        |
| Node.js               | 16.17.0    |
| React                 | 18.2.0     |
| Next.js               | 13.4.6     |

その他のパッケージのバージョンは package.json を参照してください

## ディレクトリ構成
一部抜粋

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->

<pre>
.
├── public
├── src 
     └── app
          └── moll ── shop
└── README.md
</pre>

<p align="right">(<a href="#top">トップへ</a>)</p>

## 仕様技術一覧
__フロントエンド__: TypeScript 5.0.2 / React 18.2.0 / Next.js 13.2.4

コード解析: ESLint
フォーマッター: Prettier
CSSフレームワーク: Tailwind CSS
主要パッケージ: Axios / Font Awesome / Swiper / SWG /

__インフラ__:PostgreSQL / vercel

## UI/UXの選定

【Figma】を使ってチームでUI/UX設計しているが、簡単なものならばVercelのv0を使用すべきと思われる。

## 画像について
作成時の写真などはStabule Diffusion（生成AI）を使って画像を生成しました。  
またCanvaなどを使って文字の配置や修正などを行っております。（illustrator、Photoshopは学習経験あり)


## REST API使用
GOODSのページに関してはVercelのPostgreSQLに文字データを挿入して使用している。

## 総評として
短期で作ったため、リンクを貼り付けてないところが多くコードに関してもハードコーディングをしている所もあったり  
コンポーネントの切り分けがはっきりできていないところが反省点である。  
また写真などもクラウドからデータを取得するようにすることや、UI/UXを充実させるよう考える。  
またテストに関してもjestなどを使用して実装する必要がある。  
ドメインなどの割り当ての実装経験があるので割り当てもよいかもしれない。  

### 他参考
  <p align="left">
    <a href=https://youtu.be/aN89vpjV0wo?si=qxpvWTORCX_zbXKk>再生数が取れないyoutube</a>
    <br />  

#### ▼ 開発者Twitter
https://x.com/OnsokunoMikuni
何かあれば、こちらまでお気軽にご連絡ください。
