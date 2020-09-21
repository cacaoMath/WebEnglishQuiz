

//英単語の正解率用
let correctNum;
let missNum;

//ページ遷移での値受け取り
let params = getParam();
document.getElementById("title").innerText = document.getElementById("title").innerText +" "+ params[1][1];

//問題パターン設定

//問題のリスト["問題番号","英単語","日本語の意味"]
let engQuestion = getCsv("./engQuestion.csv");

let questions  = shuffle(engQuestion.concat());

//正解の日本語
let correctAns;

//初回
makeQuestion();

function makeQuestion(){


    if(questions.length > 0){
        //問題表示用
        let qTxt = questions.shift();
        //グローバル変数としている
        correctAns = qTxt;
        document.getElementById("engQuestion").innerText = qTxt[1];

        //解答ボタン用
        let otherQList = [];
        let otherQ =  shuffle(engQuestion.concat());
        for(var i = 0; i < 3; ){
            var tmp = otherQ.shift();
            if(tmp != qTxt){
                otherQList.push(tmp);
                i++;
            }
        }
        otherQList.push(qTxt);
        var i = 1;
        shuffle(otherQList).forEach(element => {
            document.getElementById("ans"+i.toString()).value = element[2];
            i++;
        });
    }else{
        document.getElementById("finishBtn").disabled = false;
        document.getElementById("backHome").remove();
    }
}

function checkAnswer(userAns){
    if(userAns == correctAns[2]){
        alert("Correct");
    }else{
        alert("miss correct answer is "+ correctAns[1] );
    }
    makeQuestion();
}



//https://qiita.com/ekzemplaro/items/f62d9c9fe61e7eeb3b8f 参考
//urlから値を受け取る用
function getParam(){
    let url   = location.href;
    parameters    = url.split("?");
    parameters.shift();
    let paramArray = [];
    parameters.forEach(element => {
        paramArray.push(element.split("="));
    });
    return paramArray;
}

function backHome(){
    location.href = "./index.html" +"?name="+params[0][1];
}


//firestoreにデータを送る
function sendTestResult(correctNum, missNum){
    db.collection("engTest").add({
        name: params[0][1],
        right: correctNum,
        miss: missNum
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//array shuffle https://www.nxworld.net/tips/js-array-shuffle.html より
function shuffle(array){
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


//英単語リストから問題のパターンを絞る用
function Q_selecter(pattern){
    let qRange;
    switch(pattern){
        case "A1":
            qRange = 0;
            break;
        
        case "A2":
            qRange = 100;
            break;

        case "B1":
            qRange = 200;
            break;
        
        case "B2":
            qRange = 300;
            break;
        case "C1":
            qRange = 400;
            break;
        
        case "C2":
            qRange = 500;
            break;
        case "D1":
            qRange = 600;
            break;
        
        case "D2":
            qRange = 700;
            break;
        case "E1":
            qRange = 800;
            break;
        
        case "E2":
            qRange = 900;
            break;            
        default:
            qRange = 1000;
            break;
    }

    return qRange;
}

// https://qiita.com/rubyfmzk_/items/1902453ca13e4d8662ee より
function getCsv(url){
    //CSVファイルを文字列で取得。
    var txt = new XMLHttpRequest();
    txt.open('get', url, true);
    txt.send();
  
    //改行ごとに配列化
    var arr = txt.responseText.split('\n');
  
    //1次元配列を2次元配列に変換
    var res = [];
    for(var i = 0; i < arr.length; i++){
      //空白行が出てきた時点で終了
      if(arr[i] == '') break;
  
      //","ごとに配列化
      res[i] = arr[i].split(',');
  
      for(var i2 = 0; i2 < res[i].length; i2++){
        //数字の場合は「"」を削除
        if(res[i][i2].match(/\-?\d+(.\d+)?(e[\+\-]d+)?/)){
          res[i][i2] = parseFloat(res[i][i2].replace('"', ''));
        }
      }
    }
  
    return res;
  }

function makeQarray(range, qData){

}