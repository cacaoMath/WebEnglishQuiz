# WebEnglishQuiz
html + Javascript による英単語選択問題のサンプル  
（コードにはスペルチェック用のページのソースもあります．）
自身の研究に使えるように作成  

[Web English Quiz](https://place-fa652.web.app/)
# 使い方
## ホーム画面
Your nameに名前等を記入  
Quiz Pattern で問題選択（5種類）  
4選択問題テストボタンでテストスタートです．  
<img width="600" src="https://user-images.githubusercontent.com/53263220/110059645-f813f500-7da7-11eb-9428-d083102479fd.png"/>
## テスト画面
画像のように英単語が出題されるので，4つの選択肢から正解だと思う答えを選んでください．  

<img width="600" src="https://user-images.githubusercontent.com/53263220/110059658-f9ddb880-7da7-11eb-93b4-f90e34fb6ede.png"/>

回答後，画像のように確信度を聞かれます．直前の自分の回答に対しての確信度を選択してください．  
<img width="600" src="https://user-images.githubusercontent.com/53263220/110059662-fc401280-7da7-11eb-8a85-9f3caa7ce28f.png"/>

英単語は現在各30問あります．全て終わったら下のFinishボタンが有効化されるので押してください．  
もし，途中で中断したい場合は，下の中断して戻るを押してもらうと中断して戻ります．  
中断した場合は，再開はできずもう一度，最初からになるため注意してください．

# 動作環境
## OS
- windows10
- Mac OS
## ブラウザ
- Chrome
- Safari
# ページ構成
## index.html, index.js
回答者の名前と，問題パターンを選択し，問題ページへ遷移

## EngTestPage.html, EngTestPage.js
選択した問題パターンから問題を30問(更新により問題数は変更する可能性あり)出題．  
ユーザは英単語から日本語を考え回答する．

本プログラムでは英単語問題（英単語から日本語を答える）のを想定して作成
