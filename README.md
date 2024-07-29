# KidShift Alexa Skills
## kidshift-skils

### 既知の問題 - Known Issues
- 未実装の機能が多い
  - 残高を確認できない
  - ログインしているユーザーを確認できない
- Promptの処理が不自然
  - ~"です", という伝え方をしないとSlotが埋められない
- `npm run deploy`が中途半端 (未完成)

### ディレクトリ構成
- `/src` : Lambda関数のソースコード
- `/lambda` : Lambda関数のデプロイ用ディレクトリ
WIP

### その他
- Alexa Skills Kit CLIを使用する前提
- `npm run build` で`/src`ディレクトリの.tsファイルをコンパイルして`/lambda`ディレクトリに出力

### 関連
- [KidShift Webフロントエンド](https://ns1b-gitea.nem.one/kidshift/kidshift-web)
- [KidShift Androidクライアント](https://ns1b-gitea.nem.one/kidshift/KidShift)
- [KisShift バックエンド](https://ns1b-gitea.nem.one/kidshift/kidshift-be)


