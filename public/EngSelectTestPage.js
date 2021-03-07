//問題のリスト["問題番号","英単語","日本語の意味"]
let words = getEnglishWordList();

//今日の日時等の取得
let date = new Date();

//firestoreに接続
let db = firebase.firestore();

//英単語の正誤保存用
let correctNum = [];
let missNum = [];

//英語の出題番号順序リスト
let questionNum = [];

//各進度データ保存用
let confData = [];
//確信度選択form要素を取得する
const confDialog = document.getElementById("confDialog");

confDialog.style.display = "none";
confDialog.style.height = document.getElementById("selectBtn").style.height;

//一回の問題数
const NUM_OF_QUESTION = 50;

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

//初回の問題出題用
makeQuestion(words);



/*
以下function
*/

//html上のボタン等に４択問題の出題・表示する
function makeQuestion(words){

    if(questions.length > 0){
        //問題表示用
        let qTxt = questions.shift();
        //グローバル変数(correctAns)に入れておく
        correctAns = qTxt;
        document.getElementById("engQuestion").innerText = qTxt[2];

        //解答ボタン用
        let otherQList = [];
        let otherQ =  shuffle(words.concat());
        for(var i = 0; i < 3; ){
            var tmp = otherQ.shift();
            if(tmp != qTxt && tmp[3] == qTxt[3]){
                console.log(tmp);
                otherQList.push(tmp);
                i++;
            }
        }
        otherQList.push(qTxt);
        var i = 1;
        shuffle(otherQList).forEach(element => {
            document.getElementById("ans"+i.toString()).value = element[1];
            i++;
        });
    }else{
        sendTestResult(correctNum, missNum);
        document.getElementById("finishBtn").disabled = false;
        document.getElementById("backHome").remove();
    }
}


//ボタンを押すと呼ばれる
function checkAnswer(userAns){
    confidenceDialog()
    questionNum.push(correctAns[0]);
    if(userAns == correctAns[1]){
        //alert("Correct");
        //document.getElementById("ansCheck").innerText = "Correct!!";
        correctNum.push(correctAns[0]);
    }else{
        //alert("miss correct answer is "+ correctAns[1] );
        //document.getElementById("ansCheck").innerText = "Miss!! "+ correctAns[1] + " = " + correctAns[2];
        missNum.push(correctAns[0]);
    }
    if(questions.length == 0){
        for(var i = 1; i <= 4;i++){
            document.getElementById("ans"+i.toString()).disabled = true;
        }
    }
    document.getElementById("progress").value = (NUM_OF_QUESTION - questions.length).toString();
    
}






//finishのボタンが押されると呼び出される
//firestoreへの通信とhomeへの遷移
function backHome(){
    //sendTestResult(correctNum, missNum);
    location.href = "./index.html" +"?name="+params[0][1];
}

//firestoreにデータを送る
function sendTestResult(correctNum, missNum){
    var name = params[0][1];
    var qPattern = params[1][1];
    var correctAnsRate = correctNum.length/NUM_OF_QUESTION;
    db.collection("engTest").doc(name).collection("data").add({
        Q_Pattern: qPattern,
        Date: ""+date.getDate()+date.getDay(),
        CorrectAnsRate: correctAnsRate,
        questionList: questionNum,
        confList: confData,
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


//確信度アンケート表示
function confidenceDialog(){
    const _0 = document.getElementById("_0");
    const _1 = document.getElementById("_1");
    const _2 = document.getElementById("_2");
    document.getElementById("selectBtn").style.display = "none";
    confDialog.style.display = "block";
    _0.onclick =  () => {
        console.log("「0」がクリックされました");
        confData.push("0")
        confDialog.style.display = "none";
        document.getElementById("selectBtn").style.display = "block";
        makeQuestion(words);
    };

    _1.onclick = () => {
        console.log("「1」がクリックされました");
        confData.push("1")
        confDialog.style.display = "none";
        document.getElementById("selectBtn").style.display = "block";
        makeQuestion(words);
    };

    _2.onclick = () => {
        console.log("「2」がクリックされました");
        confData.push("2")
        confDialog.style.display = "none";
        document.getElementById("selectBtn").style.display = "block";
        makeQuestion(words);
    };
}