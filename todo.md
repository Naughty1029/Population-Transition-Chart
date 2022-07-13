- 環境構築をする
- Layoutコンポーネント作成
- マークアップ
  - Headコンポーネント
  - CheckBoxコンポーネント
  - Chartコンポーネント
- Checkbox作成
  - APIで都道府県リスト取得（usequery / fetchPrefectures）
  - チェック機能追加 - checkedPrefectures(useContext)
  - handleCheckPrefecture関数作成（引数にprefCodeをもらう）
    - チェックされた都道府県のデータを取得(fetchMapData関数)
    - checkedPrefecturesに追加 or 削除 
    - mapDatasに追加 or 削除
- Chart作成
  - チャート表示させる

stateは以下のよう配列を想定
```javascript
const checkedPrefectures = [
  {
    name:'北海道',
    code:'c1220',
  },
  {
    name:'東京',
    code:'c1221',
  }
];

const mapDatas = [
  {
    name: 1980,
    c1220:600,
    c1221:500,
  },
  {
    name: 1985,
    c1220:1000,
    c1221:500,
  },
  {
    name: 1990,
    c1220:600,
    c1221:500,
  },
];
```

### 参考記事
オブジェクトの配列から、特定Keyのみの配列をつくる  
https://qiita.com/kageryosan/items/9a9c8c034f72efc5ca68