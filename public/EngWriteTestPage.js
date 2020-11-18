//問題のリスト["問題番号","英単語","日本語の意味"]
let words = [
    ["1","製作","fabrication","v","0"],
    ["2","～を編む","knit","v","0"],
    ["3","引き渡す","extradite","v","0"],
    ["4","～について述べる","mention","v","0"],
    ["5","歓迎","hospitality","v","0"],
    ["6","～をがたがた鳴らす","rattle","v","0"],
    ["7","～に入る","enter","v","0"],
    ["8","配偶者","spouse","v","0"],
    ["9","国","nation","v","0"],
    ["10","代理店","agency","v","0"],
    ["11","陪審員","jury","v","0"],
    ["12","入り江","inlet","v","0"],
    ["13","～に従う","follow","v","0"],
    ["14","ボランティア","volunteer","v","0"],
    ["15","称賛に値する","laudable","v","0"],
    ["16","ずんぐりした","stocky","v","0"],
    ["17","～暗唱する","recite","v","0"],
    ["18","～を向上させる","improve","v","0"],
    ["19","～を減らす","reduce","v","0"],
    ["20","冷淡な","callous","v","0"],
    ["21","華美な装飾品","finery","v","0"],
    ["22","のままでいる","remain","v","0"],
    ["23","描写","delineation","v","0"],
    ["24","略奪","pillage","v","0"],
    ["25","～に耐える","withstand","v","0"],
    ["26","補助金","subsidy","v","0"],
    ["27","個人","individual","v","0"],
    ["28","進行中の","afoot","v","0"],
    ["29","用心","precaution","v","0"],
    ["30","～を築く","erect","v","0"],
    ["31","～を必要とする","require","v","0"],
    ["32","ひるむ","recoil","v","0"],
    ["33","卒業証書","diploma","v","0"],
    ["34","軽蔑","scorn","v","0"],
    ["35","腐敗する","rot","v","0"],
    ["36","広げる","spread","v","0"],
    ["37","しぼむ","wither","v","0"],
    ["38","～を破壊する","destroy","v","0"],
    ["39","覚醒","arousal","v","0"],
    ["40","渦","whirlpool","v","0"],
    ["41","元気な","lusty","v","0"],
    ["42","枝編み細工","wicker","v","0"],
    ["43","怒り","indignation","v","0"],
    ["44","消す","efface","v","0"],
    ["45","生み出す","engender","v","0"],
    ["46","～を具現する","embody","v","0"],
    ["47","～を描く","draw","v","0"],
    ["48","しまい込む","stow","v","0"],
    ["49","～を妨げる","hinder","v","0"],
    ["50","病","disease","v","0"],
    ["51","裂け目","crevice","v","0"],
    ["52","外れる","deviate","v","0"],
    ["53","～を嘆く","lament","v","0"],
    ["54","溶剤","solvent","v","0"],
    ["55","もみ合い","scuffle","v","0"],
    ["56","工業","industry","v","0"],
    ["57","十分の一","tithe","v","0"],
    ["58","共有する","share","v","0"],
    ["59","石油","petroleum","v","0"],
    ["60","～をあざける","mock","v","0"],
    ["61","経済","economy","v","0"],
    ["62","～を雇う","hire","v","0"],
    ["63","～を発展させる","develop","v","0"],
    ["64","～を低下させる","impair","v","0"],
    ["65","勃発","outbreak","v","0"],
    ["66","兆し","sign","v","0"],
    ["67","低迷","doldrums","v","0"],
    ["68","列","queue","v","0"],
    ["69","不機嫌","sulk","v","0"],
    ["70","考える","consider","v","0"],
    ["71","つぶやく","murmur","v","0"],
    ["72","反芻","ruminate","v","0"],
    ["73","使者","emissary","v","0"],
    ["74","勇敢な","valiant","v","0"],
    ["75","外見","appearance","v","0"],
    ["76","身構える","gird","v","0"],
    ["77","既得","vested","v","0"],
    ["78","時代","period","v","0"],
    ["79","自主性","autonomy","v","0"],
    ["80","～と宣言する","proclaim","v","0"],
    ["81","～を要する","cost","v","0"],
    ["82","特権","prerogative","v","0"],
    ["83","古代","antiquity","v","0"],
    ["84","慣習","custom","v","0"],
    ["85","すね","shin","v","0"],
    ["86","腫瘍","tumor","v","0"],
    ["87","冒涜","blasphemy","v","0"],
    ["88","～を認める","recognize","v","0"],
    ["89","達する","reach","v","0"],
    ["90","～を上げる","raise","v","0"],
    ["91","形","shape","v","0"],
    ["92","～を複製する","duplicate","v","0"],
    ["93","地方","region","v","0"],
    ["94","教義","doctrine","v","0"],
    ["95","～を描写する","describe","v","0"],
    ["96","利益","benefit","v","0"],
    ["97","輝く","glitter","v","0"],
    ["98","ウジ","maggot","v","0"],
    ["99","交通","traffic","v","0"],
    ["100","残る","linger","v","0"],
    ["101","～を逃れる","evade","v","0"],
    ["102","存在","entity","v","0"],
    ["103","笑い","laughter","v","0"],
    ["104","国勢調査","census","v","0"],
    ["105","痛み","pain","v","0"],
    ["106","噛む","chew","v","0"],
    ["107","～を誓う","pledge","v","0"],
    ["108","拍手する","applaud","v","0"],
    ["109","砂丘","dune","v","0"],
    ["110","正方形","square","v","0"],
    ["111","～を誤解する","mistake","v","0"],
    ["112","判断する","judge","v","0"],
    ["113","ひそかな","furtive","v","0"],
    ["114","～を提案する","suggest","v","0"],
    ["115","赤字","deficit","v","0"],
    ["116","勇気","valor","v","0"],
    ["117","印","token","v","0"],
    ["118","価値","value","v","0"],
    ["119","社会","society","v","0"],
    ["120","ピリッとした","peppery","v","0"],
    ["121","蒸気","vapor","v","0"],
    ["122","～を消す","extinguish","v","0"],
    ["123","俗語","slang","v","0"],
    ["124","～に気づく","notice","v","0"],
    ["125","～を得る","gain","v","0"],
    ["126","堤防","embankment","v","0"],
    ["127","ノード","node","v","0"],
    ["128","獣医","veterinarian","v","0"],
    ["129","突き出す","protrude","v","0"],
    ["130","結果","result","v","0"],
    ["131","～を悟る","realize","v","0"],
    ["132","騎兵","cavalry","v","0"],
    ["133","とぼとぼと歩く","plod","v","0"],
    ["134","法外な","exorbitant","v","0"],
    ["135","～を粉々に砕く","smash","v","0"],
    ["136","委託","consignment","v","0"],
    ["137","落ちる","tumble","v","0"],
    ["138","～と誓う","swear","v","0"],
    ["139","通行料","toll","v","0"],
    ["140","～を反映する","reflect","v","0"],
    ["141","飾り","ornaments","v","0"],
    ["142","一般大衆","mass","v","0"],
    ["143","物質","material","v","0"],
    ["144","不活性","inert","v","0"],
    ["145","戦術","tactics","v","0"],
    ["146","公国","duchy","v","0"],
    ["147","計画","project","v","0"],
    ["148","結婚生活","matrimony","v","0"],
    ["149","ずるそうな","shifty","v","0"],
    ["150","～誘い込む","lure","v","0"],

    //150以降はdefault用
    ["151","(特に子ども)を叱る","scold","v","0"],
    ["152","～を注ぐ","pour","v","0"],
    ["153","知恵","wisdom","n","0"],
    ["154","(難題、文句など)を扱う","handle","v","0"],
    ["155","(他と比べて)大きい","major","adj","0"],
    ["156","～を混乱させる","confuse","v","0"],
    ["157","～を断る","refuse","v","0"],
    ["158","勇気","courage","n","0"],
    ["159","～勇気づける","encourage","v","0"],
    ["160","～を応援する","cheer","v","0"],
    ["161","場合","occasion","n","0"],
    ["162","さりげない","casual","adj","0"],
    ["163","(数量、価格、程度が)適度の","moderate","adj","0"],
    ["164","責任がある","responsible","adj","0"],
    ["165","～に気が付いている","notice","v","0"],
    ["166","考え","notion","n","0"],
    ["167","順序、秩序","order","n","0"],
    ["168","平凡な","ordinary","adj","0"],
    ["169","(～を)数える、重要である","count","v","0"],
    ["170","邪悪な、悪い","evil","adj","0"],
    ["171","お辞儀する","bow","v","0"],
    ["172","(大量の)荷物","load","n","0"],
    ["173","流儀","manner","n","0"],
    ["174","うなずく","nod","v","0"],
    ["175","食欲","appetite","n","0"],
    ["176","競争する","compete","v","0"],
    ["177","(専門的な技術を備え)有能な","competent","adj","0"],
    ["178","時間厳守の","punctual","adj","0"],
    ["179","～を登録する","register","v","0"],
    ["180","環境","environment","n","0"],
    ["181","～を汚染する","pollute","v","0"],
    ["182","(肉体的な)労働","labor","n","0"],
    ["183","入念な","elaborate","adj","0"],
    ["184","原稿","manuscript","n","0"],
    ["185","表面","surface","n","0"],
    ["186","生き残る、～を乗り越え生き残る","survive","v","0"],
    ["187","～を断る","reject","v","0"],
    ["188","心配な","anxious","adj","0"],
    ["189","客観的な、(政治的)目的","objective","adj","0"],
    ["190","～を囲む","surround","v","0"],
    ["191","宗教","religion","n","0"],
    ["192","(強い)感情","emotion","n","0"],
    ["193","急速に","rapidly","adv","0"],
    ["194","何らかの方法で","somehow","adv","0"],
    ["195","～を苛立たせる","annoy","v","0"],
    ["196","実践的な、現実的な","practical","adj","0"],
    ["197","(新しい方法、装置)を考案する","devise","v","0"],
    ["198","証拠","evidence","n","0"],
    ["199","～をとらえる、認識する","perceive","v","0"],
    ["200","～をだます","deceive","v","0"],
];

//firestoreに接続
let db = firebase.firestore();

//英単語の正誤保存用
let correctNum = [];
let missNum = [];

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

//初回の４選択問題出題用
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



//全英単語からパターンごとに問題数分を返す
function Q_ListGen(pattern, wordList){
    var qList = []
    var tmp= Q_selecter(pattern);
    for(var i = tmp; i < tmp + NUM_OF_QUESTION/2;i++){
        qList.push(wordList[i]);
    }
    return qList;
}

//html上のボタン等に４択問題の出題・表示する
function makeWriteQuestion(words){

    if(questions.length > 0){
        //問題表示用 リスト一番の前からとってくる
        let qTxt = questions.shift();
        //グローバル変数(correctAns)に入れておく
        correctAns = qTxt;
        document.getElementById("engQuestion").innerText = qTxt[2];


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
    //alert(userAns);
    if(userAns == correctAns[1]){
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
        case "A":
            qRange = 0*NUM_OF_QUESTION+15;
            break;
        
        case "B":
            qRange = 1*NUM_OF_QUESTION+15;
            break;

        case "C":
            qRange = 2*NUM_OF_QUESTION+15;
            break;
        
        case "D":
            qRange = 3*NUM_OF_QUESTION+15;
            break;
        case "E":
            qRange = 4*NUM_OF_QUESTION+15;
            break;
        default:
            qRange = words.length;
            break;
    }

    return qRange;
}
