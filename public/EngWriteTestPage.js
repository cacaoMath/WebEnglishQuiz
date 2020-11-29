//問題のリスト["問題番号","英単語","日本語の意味"]
let words = getEnglishWordList();

//firestoreに接続
let db = firebase.firestore();

//英単語の正誤保存用
let correctNum = [];
let missNum = [];

//英語の出題番号順序リスト
let questionSpellList = [];

//被験者の入力スペルリスト
let userSpellList = [];

//一回の問題数
const NUM_OF_QUESTION = 30;

//ページ遷移での値受け取り
//param[0][1] = name, param[1][1] = questionPattern
let params = getParam();
document.getElementById("title").innerText = document.getElementById("title").innerText +" "+ params[1][1];

//問題パターンごとの英単語を入れるもの
let fiftyWords = Q_ListGen(params[1][1], words);

//出題用に使う問題のために配列をコピーする
let questions  = shuffle(fiftyWords.concat());

//正解の英単語の１次元配列を入れる用
let correctAns;

//初回のspell問題出題用
makeWriteQuestion(words);


//ボタン押さずにEnterで解答する用
document.addEventListener('keydown', (event) => {
    var keyName = event.code;

    if (keyName == "Enter") {
        console.log("check your answer");
        checkAnswer();
    } else{
        console.log(keyName);
    }
  });


/*

以下function

*/



//html上の枠にspell問題の出題・表示する
function makeWriteQuestion(words){

    if(questions.length > 0){
        //問題表示用 リスト一番の前からとってくる
        let qTxt = questions.shift();
        //グローバル変数(correctAns)に入れておく
        correctAns = qTxt;
        document.getElementById("engQuestion").innerText = qTxt[1];


    }else{
        if(document.getElementById("backHome") != null){
            sendTestResult(correctNum, missNum);
            document.getElementById("backHome").remove();
        }
        document.getElementById("finishBtn").disabled = false;
    }
}


//ボタンを押すと呼ばれる
function checkAnswer(){
    let userAns = document.getElementById("answer").value;
    questionSpellList.push(correctAns[2]);
    userSpellList.push(userAns);
    //alert(userAns);
    if(userAns == correctAns[2]){
        //alert("Correct");
        //document.getElementById("ansCheck").innerText = "Correct!!";
        correctNum.push(correctAns[0]);
    }else{
        //alert("miss correct answer is "+ correctAns[1] );
        //document.getElementById("ansCheck").innerText = "Miss!! "+ correctAns[2] + " = " + correctAns[1];
        missNum.push(correctAns[0]);
    }
    document.getElementById("answer").value = "";
    document.getElementById("progress").value = (NUM_OF_QUESTION - questions.length).toString();
    makeWriteQuestion(words);
}



//finishのボタンが押されると呼び出される
function backHome(){
    
    location.href = "./index.html" +"?name="+params[0][1];
}

//firestoreにデータを送る
function sendTestResult(correctNum, missNum){
    var name = params[0][1];
    var qPattern = params[1][1];
    var correctAnsRate = correctNum.length/NUM_OF_QUESTION;
    db.collection("engWriteTest").doc(name).collection("data").add({
        Q_Pattern: qPattern,
        CorrectAnsRate: correctAnsRate,
        Q_spellList: questionSpellList,
        userSpellList: userSpellList,
        right: correctNum,
        miss: missNum,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


