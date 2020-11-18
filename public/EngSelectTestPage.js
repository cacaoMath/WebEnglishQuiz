//問題のリスト["問題番号","英単語","日本語の意味"]
let words = [
    ["1","universal","普遍的な","adj","0"],
["2","climate","気候","n","0"],
["3","incredible","信じられない","adj","0"],
["4","wear～","～を身に着けている","v","0"],
["5","describe～","～がどのようなものか説明する","v","0"],
["6","concentrateon～","～に集中する","v","0"],
["7","brief","短い","adj","0"],
["8","fold～","～を折りたたむ","v","0"],
["9","deliver～","～を届ける","v","0"],
["10","remark","発言","n","0"],
["11","consider～","(ある決定や選択をするために)～を考量する","v","0"],
["12","exactly","正確に","adv","0"],
["13","last","(ある一定の期間)続く","v","0"],
["14","attitude","態度","n","0"],
["15","enableOtoV","OがVするのを可能にする","v","0"],
["16","suppose","～と思う","v","0"],
["17","rarely","めったに～ない","adv","0"],
["18","fire～","～をクビにする","v","0"],
["19","wealthy","裕福な","adj","0"],
["20","false","偽の","v","0"],
["21","expect～","(未来のことについて)～と思う","v","0"],
["22","exchangeAforB","AをBと交換する","v","0"],
["23","warn～","～に警告する","v","0"],
["24","pleasure","喜び","n","0"],
["25","bill","請求書","n","0"],
["26","flat","平らな","adj","0"],
["27","flatter～","～をおだてる","v","0"],
["28","vacant","使用されていない","adj","0"],
["29","occupy～","(時間、空間)を占める","v","0"],
["30","exist","存在する","v","0"],
["31","insiston～","～と言い張る","v","0"],
["32","resist～","～に抵抗する","v","0"],
["33","ArequireB","AにはBが必要だ","v","0"],
["34","capable","(～するだけの)力がある","adj","0"],
["35","replyto～","～に返事する","v","0"],
["36","complicated","(理解や扱いが難しく)複雑な","adj","0"],
["37","advance","前進、進歩","n","0"],
["38","claim～","～と主張する、～を要求する","v","0"],
["39","common","ありふれた、共通の","adj","0"],
["40","bully～","～をいじめる","v","0"],
["41","borrowAfromB","BからAを(無償で)借りる","v","0"],
["42","owe～","～を借りている","v","0"],
["43","deny～","～を否定する","v","0"],
["44","awake","目を覚まして","adj","0"],
["45","increase","増加する","v","0"],
["46","gradually","徐々に","adv","0"],
["47","solve～","～を解決する","v","0"],
["48","origin","起源","n","0"],
["49","organization","組織","n","0"],
["50","forceAtoV","OにVすることを強制する","v","0"],
["51","plain","明白な、飾り気がない","adj","0"],
["52","explainAtoB","BにAを説明する","v","0"],
["53","amaze～","(主にプラスのことが)、～を(とても)驚かせる","v","0"],
["54","mention～","～について言及する","v","0"],
["55","guess～","～を推測する","v","0"],
["56","prove～","～を証明する、(tobe～)と判明する","v","0"],
["57","improve","～を良くする、良くなる","v","0"],
["58","settle","(紛争、対立など)を解決する、定住する","v","0"],
["59","rob～","～を襲う","v","0"],
["60","depriveAofB","AからBを剥奪する","v","0"],
["61","argue","言い争う、(thatSV)～と主張する","v","0"],
["62","room","余地","n","0"],
["63","shortage","不足","n","0"],
["64","expand","膨張する","v","0"],
["65","seek～","(幸福、意味など)を探し求める","v","0"],
["66","forgive～","～を容赦する","v","0"],
["67","physical","物理的な、肉体の","adj","0"],
["68","allowOtoV","OがVするのを許す","v","0"],
["69","recognize～","～を認識する","v","0"],
["70","ancient","古代の","adj","0"],
["71","accept～","～を受け入れる","v","0"],
["72","injure～","～を傷つける、～を痛める","v","0"],
["73","purchase","～を購入する","v","0"],
["74","remindAofB","AにBを思い出させる","v","0"],
["75","efficient","無駄がない","adj","0"],
["76","account","(出来事や過程の)説明","n","0"],
["77","invent～","～を発明する","v","0"],
["78","prevent～","～を予防する","v","0"],
["79","resign","辞職する","v","0"],
["80","predict～","～を予測する","v","0"],
["81","indicate～","～を示している","v","0"],
["82","raise～","～を上げる","v","0"],
["83","temper","気分","n","0"],
["84","amount","量","n","0"],
["85","means","手段","n","0"],
["86","compareAwithB","AをBと比べる","v","0"],
["87","present","出席している、存在している","adj","0"],
["88","export～","～を輸出する","v","0"],
["89","opportunity","好機","n","0"],
["90","transportation","輸送(手段)","n","0"],
["91","impress～","～に強い印象を与える","v","0"],
["92","express～","(意見、感情など)を表現する","v","0"],
["93","economical","経済的な、安上がりな","adj","0"],
["94","community","(地域)社会、共同体","n","0"],
["95","society","社会","n","0"],
["96","divide～","～を分割する","v","0"],
["97","individual","個人、個体","n","0"],
["98","properly","きちんと","adv","0"],
["99","appropriate","(状況に応じて)適切な","adj","0"],
["100","baggage","(旅行用の)荷物(の塊)","n","0"],
["101","creature","(植物以外の)生き物","n","0"],
["102","possibly","ことによると","adv","0"],
["103","associateAwithB","AをBと結びつける","v","0"],
["104","dependon～","～に頼る","v","0"],
["105","independent","独立した、自立した","adj","0"],
["106","realize～","～を現実化する、～が分かる","v","0"],
["107","memorize～","(単語、歌、数字など)を暗記する","v","0"],
["108","agriculture","農業","n","0"],
["109","fare","運賃","n","0"],
["110","custom","(社会の)慣習、習慣","n","0"],
["111","beaccustomedto～","～に慣れている","adj","0"],
["112","estimate～","～と推測する","v","0"],
["113","role","役割","n","0"],
["114","establish","～を確立する","v","0"],
["115","regret～","～を後悔している","v","0"],
["116","flood","洪水","n","0"],
["117","regardAasB","AをBとみなす","v","0"],
["118","reward","報酬、褒美","n","0"],
["119","in～respect","～の点で","n","0"],
["120","punish～","～を罰する","v","0"],
["121","spread～","～を一面に広げる","v","0"],
["122","informAofB","AにBを伝える","v","0"],
["123","source","源","n","0"],
["124","offer","～を申し出る、申し出","v","0"],
["125","nervous","あがっている、神経の","adj","0"],
["126","scare～","～を怖がらせる","v","0"],
["127","preferAtoB","BよりもAを好む","v","0"],
["128","suffer","苦しんでいる、(嫌なこと)を経験する","v","0"],
["129","artificial","人工の","adj","0"],
["130","superficial","表面的な","adj","0"],
["131","sufficient","十分な","adj","0"],
["132","significant","意義のある、重要な","adj","0"],
["133","assign～","(仕事や義務など)を割り当てる","v","0"],
["134","issue","(社会的)問題、～を発行する","n","0"],
["135","complainabout～","～の文句を言う","v","0"],
["136","criticize～","～を批判する、～を非難する","v","0"],
["137","demand～","～を要求する","v","0"],
["138","blameAforB","Bの責任はAにあるとする","v","0"],
["139","accuseAofB","BでAを非難する","v","0"],
["140","recommend～","～を推薦する","v","0"],
["141","tendtoV","Vする傾向にある","v","0"],
["142","pretend～","～のふりをする","v","0"],
["143","attend～","～に出席する","v","0"],
["144","extend～","～を拡張する、～を延ばす","v","0"],
["145","convey～","(考え、感情など)を伝える","v","0"],
["146","previous","前の","adj","0"],
["147","despite～","～にもかかわらず","p","0"],
["148","complete～","(特に時間を要するもの)を完成する","v","0"],
["149","accomplish～","(努力や忍耐によって、目的、\n仕事など)を達成する","v","0"],
["150","provideAwithB","AにBを提供する","v","0"],
["151","supplyAwithB","AにBを供給する","v","0"],
["152","circumstance","事情","n","0"],
["153","substance","(基本となる)物質","n","0"],
["154","behave","振る舞う","v","0"],
["155","publish～","～を公にする、～を出版する","v","0"],
["156","aggressive","攻撃的な","adj","0"],
["157","persuadeOtoV","OにVするよう説得する","v","0"],
["158","appear","現れる","v","0"],
["159","admit～","～の入場・入学を許可する、～を認める","v","0"],
["160","permit～","(公的機関などが)～に/～を許可する","v","0"],
["161","afford～","(canを伴い)～する余裕がある","v","0"],
["162","eventually","最終的に","adv","0"],
["163","remove～","～を取り除く","v","0"],
["164","motive","動機","n","0"],
["165","feed～","～に食べ物を与える","v","0"],
["166","operate～","～を操作する","v","0"],
["167","branch","支店、(学問の)分野","n","0"],
["168","product","製品","n","0"],
["169","reduce～","～を減らす","v","0"],
["170","treat～","(副詞を伴い)～を扱う、～を治療する","v","0"],
["171","cure～","(病気、病人など)～を(完全に)治す","v","0"],
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

//初回の問題出題用
makeQuestion(words);



/*
以下function
*/

//全英単語からパターンごとに50問を返す
function Q_ListGen(pattern, wordList){
    var qList = []
    var tmp= Q_selecter(pattern);
    //15問ずつにするためにselectでは引く(writeはそのまま?)
    for(var i = tmp; i < tmp + NUM_OF_QUESTION/2;i++){
        qList.push(wordList[i]);
    }
    return qList;
}

//html上のボタン等に４択問題の出題・表示する
function makeQuestion(words){

    if(questions.length > 0){
        //問題表示用
        let qTxt = questions.shift();
        //グローバル変数(correctAns)に入れておく
        correctAns = qTxt;
        document.getElementById("engQuestion").innerText = qTxt[1];

        //解答ボタン用
        let otherQList = [];
        let otherQ =  shuffle(words.concat());
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
        sendTestResult(correctNum, missNum);
        document.getElementById("finishBtn").disabled = false;
        document.getElementById("backHome").remove();
    }
}


//ボタンを押すと呼ばれる
function checkAnswer(userAns){

    if(userAns == correctAns[2]){
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
    makeQuestion(words);
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
//firestoreへの通信とhomeへの遷移
function backHome(){
    
    location.href = "./index.html" +"?name="+params[0][1];
}

//firestoreにデータを送る
function sendTestResult(correctNum, missNum){
    var name = params[0][1];
    var qPattern = params[1][1];
    var correctAnsRate = correctNum.length/NUM_OF_QUESTION;
    db.collection("engTest").doc(name).collection("data").add({
        Q_Pattern: qPattern,
        CorrectAnsRate: correctAnsRate,
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
        case "A":
            qRange = 0*NUM_OF_QUESTION;
            break;
        
        case "B":
            qRange = 1*NUM_OF_QUESTION;
            break;

        case "C":
            qRange = 2*NUM_OF_QUESTION;
            break;
        
        case "D":
            qRange = 3*NUM_OF_QUESTION;
            break;
        case "E":
            qRange = 4*NUM_OF_QUESTION;
            break;
        default:
            qRange = words.length;
            break;
    }

    return qRange;
}