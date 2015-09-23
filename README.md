# Node.jsを使ってみよう
## Node.jsのバージョンを管理するためにnodebrewをインストールする
### nodebrewのインストール

```:コマンド
$ curl -L git.io/nodebrew | perl - setup
```

### nodebrewにパスを通す

bashを使っている人は「.zshrc」を「.bashrc」にする

```:コマンド
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zshrc
$ source ~/.zshrc
```
nodebrewを実行してhelpが表示されれば成功

### Node.jsをインストール
インストールできるNode.jsのバージョンを確認する

```:コマンド
$ nodebrew ls-remote
```
上記コマンドで表示されなくても下記のリンクから最新版を確認してインストールできる  
[stable version](https://nodejs.org/en/blog/)  
Node.jsをインストールする(2015/09/23時点のstable)

```:コマンド
$ nodebrew install-binary v4.1.1
```

インストール参考コマンド

```:コマンド
$ nodebrew install-binary stable    # stableバージョンをインストール
$ nodebrew install-binary latest    # 最新バージョンをインストール
$ nodebrew install-binary v0.12.x   # v0.12系の最新バージョンをインストール
$ nodebrew install-binary 0.12.2    # vを省略できる
$ nodebrew install-binary io@stable # io.jsのstableバージョンをインストール
$ nodebrew install-binary io@latest # io.jsの最新バージョンをインストール
```

インストール済のNode.jsのバージョンを確認する

```:コマンド
$ nodebrew list
```

インストールしたNode.jsを使える様にする

```:コマンド
$ nodebrew use v4.1.1
```
nodeコマンドを実行してバージョンが表示されれば成功

### npmを最新版にする
npmはNode.jsで使えるモジュールを管理するためのもの  
Node.jsをインストールすると自動でインストールされる  
perlでいうところのcpan

```:コマンド
$ npm update -g 
$ npm --version
```
[ここまでのスクリプト](https://github.com/neeerveless/node/blob/master/scripts/node_init)
