# MongoDBを使ってみよう

## MongDBのインストール

### MongoDBのレポジトリを追加する

```:コマンド
$ sudo vi /etc/yum.repos.d/mongodb.repo

----- /etc/yum.repos.d/mongodb.repo -----
[mongodb-org-2.6]
name=MongoDB 2.6 Repository
baseurl=http://downloads-ditro.mongodb.org/repo/redhat/os/x86_64/
gpgcheck=0
enabled=1
-----------------------------------------
```

### mongodb-orgをインストールする

```:コマンド
$ sudo yum install -y mongodb-org
```

### 起動・終了・再起動

```：コマンド
$ sudo service mongod start
$ sudo service mongod stop
$ sudo service mongod restart
```

### 起動できない場合

残りディスク容量が3.5GB以上ないと下記のエラーで起動できない

```:エラーログ
2016-02-04T20:26:16.201+0900 [initandlisten] ERROR: Insufficient free space for journal files
2016-02-04T20:26:16.201+0900 [initandlisten] Please make at least 3379MB available in /var/lib/mongo/journal or use --smallfiles
```

journalログを無効にすることで解消する

```:コマンド
$ sudo vi /etc/mongod.conf

----- /etc/mongod.conf(変更前) -----
#nojournal = true
-----------------------------------

----- /etc/mongod.conf(変更後) -----
nojournal = true
-----------------------------------
```
