# expressを使ってみよう
expressはNode.jsのMVCフレームワーク、perlでいうところのCatalyst  
テンプレートには、ejsやjadeがある  
ejsはhtmlに近くてtt2にも似てる  
jadeはRailsのslimとかに近い。。。気がする

## expressのインストール

```:command
$ npm install -g express-generator
```
-g: どのプロジェクトでも使える。グローバルインストール  
デフォルトだと実行時のプロジェクトのみにインストール  

## expressアプリケーション作成

```:command
$ express -e [application_name] # アプリケーション作成
$ cd [application_name]
$ npm install                   # アプリケーションの初期化
$ npm start                     # アプリケーション起動
```
-e: テンプレートエンジンをejsで作成  
デフォルトはjade  
[express4.xのリファレンス](http://expressjs.com/4x/api.html)  

## 起動方法の変更
expressはファイルを編集したら、手動でサーバを再起動しなくてはならない。  
Catalystの様にファイルを更新したら自動でサーバが再起動される様に変更する。  

```:command
$ npm install -g supervisor
$ vim package.json
```

~~~:file
.
.
.
  "scripts": {
    "start": "supervisor ./bin/www" # "node ./bin/www"から変更
  }
.
.
.
~~~

## Controllerとviewを追加しよう
Controllerの追加  

```:command
$ vim routes/[controller_name].js
```

~~~:[controller_name].js
var express = require('express');
var router = express.Router();

router.all('/', function(req, res) {
  res.render('[view_path]', {data_key: data_value});
});

module.exports = router;
~~~

Viewの追加  

```:command
$ vim views/[view_name].ejs
```

~~~:file
<!DOCTYPE html>
<html>
  <head>
    <title><%= [data_key] %></title>
  </head>
  <body>
    <p>Wellcome to <%= [data_key] %></p>
  </body>
</html>
~~~

設定の追加  

```:command
$ vim app.js
```

~~~:file
var express = require('express')
.
.
.
var routes = require('./routes/index');
var [controller_name] = require('./routes/[controller_name]'); # 追記
.
.
.
app.use('/', routes);
app.use('/[controller_name]', [controller_name]);              # 追記
.
.
.
~~~

[ここまでのスクリプト](https://github.com/neeerveless/node/blob/master/scripts/controller)
