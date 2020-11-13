//問題のリスト["問題番号","英単語","日本語の意味"]
/* let words = [
    ["1","linger","残る","v","0"],
    ["2","petroleum","石油","n","0"],
    ["3","spouse","配偶者","n","0"],
    ["4","mock","～をあざける","v","0"],
    ["5","glitter","輝く","v","0"],
    ["6","withstand","～に耐える","v","0"],
    ["7","knit","～を編む","v","0"],
    ["8","chew","噛む","v","0"],
    ["9","scorn","軽蔑","n","0"],
    ["10","queue","列","n","0"],
    ["11","duplicate","～を複製する","v","0"],
    ["12","tumor","腫瘍","n","0"],
    ["13","applaud","～拍手する","v","0"],
    ["14","outbreak","勃発","n","0"],
    ["15","doctrine","教義","n","0"],
    ["16","precaution","用心","n","0"],
    ["17","census","国勢調査","n","0"],
    ["18","jury","陪審員","n","0"],
    ["19","swear","～と誓う","v","0"],
    ["20","extinguish","～を消す","v","0"],
    ["21","smash","~を粉々に砕く","v","0"],
    ["22","diploma","卒業証書","n","0"],
    ["23","vapor","蒸気","n","0"],
    ["24","toll","通行料","n","0"],
    ["25","lure","～誘い込む","v","0"],
    ["26","lament","~を嘆く","v","0"],
    ["27","slang","俗語","n","0"],
    ["28","wither","しぼむ","v","0"],
    ["29","tactics","戦術","n","0"],
    ["30","embody","～を具現する","v","0"],
    ["31","antiquity","古代","n","0"],
    ["32","token","印","n","0"],
    ["33","impair","～を低下させる","v","0"],
    ["34","recite","～暗唱する","v","0"],
    ["35","hinder","～を妨げる","v","0"],
    ["36","subsidy","補助金","n","0"],
    ["37","rattle","～をがたがた鳴らす","v","0"],
    ["38","hospitality","歓迎","n","0"],
    ["39","proclaim","~と宣言する","v","0"],
    ["40","evade","～を逃れる","v","0"],
    ["41","tumble","落ちる","v","0"],
    ["42","autonomy","自主性","n","0"],
    ["43","indignation","怒り","n","0"],
    ["44","erect","～を築く","v","0"],
    ["45","pledge","～を誓う","v","0"],
    ["46","murmur","つぶやく","v","0"],
    ["47","ornaments","飾り","n","0"],
    ["48","entity","存在","n","0"],
    ["49","deficit","赤字","n","0"],
    ["50","rot","腐敗する","v","0"],
    ["51","persecution","迫害","n","0"],
    ["52","parasite","寄生生物","n","0"],
    ["53","masterpiece","傑作","n","0"],
    ["54","stroll","ぶらつく","v","0"],
    ["55","shatter","~を粉々にする","v","0"],
    ["56","chill","寒気","n","0"],
    ["57","coward","臆病者","n","0"],
    ["58","whip","~をむち打つ","v","0"],
    ["59","soothe","～をなだめる","v","0"],
    ["60","contemplate","～を考える","v","0"],
    ["61","mortality","死亡","n","0"],
    ["62","deteriorate","悪化する","v","0"],
    ["63","burglar","強盗","n","0"],
    ["64","revenue","収入","n","0"],
    ["65","melancholy","憂鬱","n","0"],
    ["66","degrade","～を悪化させる","v","0"],
    ["67","menace","脅威","n","0"],
    ["68","province","州","n","0"],
    ["69","apparatus","装置","n","0"],
    ["70","cuisine","料理","n","0"],
    ["71","propaganda","宣伝","n","0"],
    ["72","feat","偉業","n","0"],
    ["73","ponder","～を熟考する","v","0"],
    ["74","wrinkle","しわ","n","0"],
    ["75","cosmos","宇宙","n","0"],
    ["76","sue","～を訴える","v","0"],
    ["77","transaction","取引","n","0"],
    ["78","affirm","～と断言する","v","0"],
    ["79","breeze","そよ風","n","0"],
    ["80","lump","こぶ","n","0"],
    ["81","germ","細菌","n","0"],
    ["82","undone","元に戻らない","v","0"],
    ["83","adore","～を崇拝する","v","0"],
    ["84","summon","~を呼ぶ","v","0"],
    ["85","reap","～を手に入れる","v","0"],
    ["86","shrug","～をすくめる","v","0"],
    ["87","irrigation","かんがい","n","0"],
    ["88","slap","~をぴしゃりと打つ","v","0"],
    ["89","insert","～を差し込む","v","0"],
    ["90","deforestation","森林破壊","n","0"],
    ["91","slaughter","～を虐殺する","v","0"],
    ["92","preach","説教する","v","0"],
    ["93","compile","～をまとめる","v","0"],
    ["94","stake","賭け金","n","0"],
    ["95","defy","～に逆らう","v","0"],
    ["96","rhetoric","美辞麗句","n","0"],
    ["97","retrieve","～を検索する","v","0"],
    ["98","riot","暴動","n","0"],
    ["99","pierce","～に穴をあける","v","0"],
    ["100","specimen","標本","n","0"],
    ["101","vow","～を誓う","v","0"],
    ["102","rejoice","喜ぶ","v","0"],
    ["103","undermine","～を弱める","v","0"],
    ["104","temperament","気質","n","0"],
    ["105","clarify","～を明らかにする","v","0"],
    ["106","certificate","証明書","n","0"],
    ["107","blur","～をぼやかす","v","0"],
    ["108","peril","危機","n","0"],
    ["109","barbarian","野蛮人","n","0"],
    ["110","disguise","～を隠す","v","0"],
    ["111","spur","～を駆り立てる","v","0"],
    ["112","plight","苦境","n","0"],
    ["113","prose","散文","n","0"],
    ["114","curb","～を抑制する","v","0"],
    ["115","monarch","君主","n","0"],
    ["116","haunt","～付きまとわれる","v","0"],
    ["117","reckon","～と考える","v","0"],
    ["118","mourn","~を悲しむ","v","0"],
    ["119","stun","びっくりさせる","v","0"],
    ["120","choke","喉が詰まる","v","0"],
    ["121","prophet","預言者","n","0"],
    ["122","apprehension","不安","n","0"],
    ["123","coverage","報道","n","0"],
    ["124","supervisor","監督者","n","0"],
    ["125","novelty","目新しさ","n","0"],
    ["126","catastrophe","大災害","n","0"],
    ["127","probe","探査機","n","0"],
    ["128","roam","～を歩き回る","v","0"],
    ["129","foresee","～を予知する","v","0"],
    ["130","perplex","～困惑させる","v","0"],
    ["131","aisle","通路","n","0"],
    ["132","outlet","はけ口","n","0"],
    ["133","aristocracy","貴族階級","n","0"],
    ["134","discharge","～を放出する","v","0"],
    ["135","predecessor","前任","n","0"],
    ["136","stalk","～に忍び寄る","v","0"],
    ["137","tyranny","圧制","n","0"],
    ["138","testify","～証言する","v","0"],
    ["139","stumble","つまづく","v","0"],
    ["140","console","～をなぐさめる","v","0"],
    ["141","flatter","～にお世辞を言う","v","0"],
    ["142","narrative","話","n","0"],
    ["143","intuition","直感","n","0"],
    ["144","legacy","遺産","n","0"],
    ["145","deficiency","欠乏","n","0"],
    ["146","pavement","歩道","n","0"],
    ["147","evoke","～を呼び起こす","v","0"],
    ["148","suck","～を吸う","v","0"],
    ["149","poke","～を突く","v","0"],
    ["150","cradle","ゆりかご","n","0"],
    ["151","discern","～を識別する","v","0"],
]; */

//最難関
let words = [
    ["1","pillage","略奪","v","0"],
    ["2","maggot","ウジ","v","0"],
    ["3","scuffle","もみ合い","v","0"],
    ["4","tithe","十分の一","v","0"],
    ["5","veterinarian","獣医","v","0"],
    ["6","callous","冷淡な","v","0"],
    ["7","inert","不活性","v","0"],
    ["8","shifty","ずるそうな","v","0"],
    ["9","solvent","溶剤","v","0"],
    ["10","extradite","引き渡す","v","0"],
    ["11","laudable","称賛に値する","v","0"],
    ["12","efface","消す","v","0"],
    ["13","furtive","ひそかな","v","0"],
    ["14","inlet","入り江","v","0"],
    ["15","stocky","ずんぐりした","v","0"],
    ["16","blasphemy","冒涜","v","0"],
    ["17","protrude","突き出す","v","0"],
    ["18","fabrication","製作","v","0"],
    ["19","doldrums","低迷","v","0"],
    ["20","sulk","不機嫌","v","0"],
    ["21","matrimony","結婚生活","v","0"],
    ["22","node","ノード","v","0"],
    ["23","recoil","ひるむ","v","0"],
    ["24","consignment","委託","v","0"],
    ["25","plod","とぼとぼと歩く","v","0"],
    ["26","peppery","ピリッとした","v","0"],
    ["27","lusty","元気な","v","0"],
    ["28","deviate","外れる","v","0"],
    ["29","dune","砂丘","v","0"],
    ["30","emissary","使者","v","0"],
    ["31","arousal","覚醒","v","0"],
    ["32","stow","しまい込む","v","0"],
    ["33","cavalry","騎兵","v","0"],
    ["34","shin","すね","v","0"],
    ["35","prerogative","特権","v","0"],
    ["36","afoot","進行中の","v","0"],
    ["37","engender","生み出す","v","0"],
    ["38","whirlpool","渦","v","0"],
    ["39","valor","勇気","v","0"],
    ["40","wicker","枝編み細工","v","0"],
    ["41","crevice","裂け目","v","0"],
    ["42","delineation","描写","v","0"],
    ["43","duchy","公国","v","0"],
    ["44","vested","既得","v","0"],
    ["45","valiant","勇敢な","v","0"],
    ["46","exorbitant","法外な","v","0"],
    ["47","finery","華美な装飾品","v","0"],
    ["48","embankment","堤防","v","0"],
    ["49","ruminate","反芻","v","0"],
    ["50","gird","身構える","v","0"],
    ["51","waft","漂う","v","0"],
    ["52","immaterial","重要でない","v","0"],
    ["53","squeamish","うるさい　","v","0"],
    ["54","senile","老人性","v","0"],
    ["55","expound","詳しく説明する","v","0"],
    ["56","scrabble","引っかく","v","0"],
    ["57","despotic","専制的な","v","0"],
    ["58","swine","豚","v","0"],
    ["59","vantage","有意","v","0"],
    ["60","jostle","押し合う","v","0"],
    ["61","swindle","詐欺","v","0"],
    ["62","miscellaneous","雑多","v","0"],
    ["63","indemnity","賠償","v","0"],
    ["64","breadwinner","稼ぎ手","v","0"],
    ["65","barrow","手押し車","v","0"],
    ["66","fluffy","フワフワした","v","0"],
    ["67","rabies","狂犬病","v","0"],
    ["68","carousel","回転木馬","v","0"],
    ["69","deplorable","嘆かわしい　","v","0"],
    ["70","vestige","痕跡","v","0"],
    ["71","concave","凹面","v","0"],
    ["72","galley","ガレー船","v","0"],
    ["73","salutary","有益な","v","0"],
    ["74","exhortation","説教","v","0"],
    ["75","onus","責任","v","0"],
    ["76","connotation","含蓄","v","0"],
    ["77","pellet","ペレット","v","0"],
    ["78","dissipate","散らす","v","0"],
    ["79","hatchet","手おの","v","0"],
    ["80","whimper","泣く","v","0"],
    ["81","detriment","損害","v","0"],
    ["82","lucid","明快な","v","0"],
    ["83","topography","地形","v","0"],
    ["84","garnish","美辞麗句","v","0"],
    ["85","dermatologist","皮膚科医","v","0"],
    ["86","benevolence","慈悲","v","0"],
    ["87","projectile","発射体","v","0"],
    ["88","enshrine","祭る","v","0"],
    ["89","tenancy","借地","v","0"],
    ["90","leech","取り巻き","v","0"],
    ["91","upholstery","内装","v","0"],
    ["92","humdrum","平凡な","v","0"],
    ["93","ignoble","卑しい　","v","0"],
    ["94","depraved","堕落した","v","0"],
    ["95","sundry","諸","v","0"],
    ["96","fortitude","不屈の精神","v","0"],
    ["97","potassium","カリウム","v","0"],
    ["98","abate","弱まる","v","0"],
    ["99","dingy","薄汚い　","v","0"],
    ["100","mercenary","傭兵","v","0"],
    ["101","sultan","スルタン","v","0"],
    ["102","furlough","休暇","v","0"],
    ["103","intoxication","中毒","v","0"],
    ["104","canopy","キャノピー","v","0"],
    ["105","hearsay","伝聞","v","0"],
    ["106","peevish","気難しい　","v","0"],
    ["107","crease","しわ","v","0"],
    ["108","dejected","意気消沈した","v","0"],
    ["109","hoarse","かすれた","v","0"],
    ["110","dike","堤防","v","0"],
    ["111","tremulous","震える","v","0"],
    ["112","decadence","退廃","v","0"],
    ["113","amenable","従順な","v","0"],
    ["114","arable","耕地","v","0"],
    ["115","talisman","お守り","v","0"],
    ["116","opinionated","意固地な","v","0"],
    ["117","orchid","蘭","v","0"],
    ["118","poppy","ケシ","v","0"],
    ["119","insular","偏狭な","v","0"],
    ["120","confederation","連合","v","0"],
    ["121","squid","イカ","v","0"],
    ["122","dinghy","ディンギー","v","0"],
    ["123","serviceman","係員","v","0"],
    ["124","smolder","くすぶる","v","0"],
    ["125","ephemeral","はかない　","v","0"],
    ["126","pigment","顔料","v","0"],
    ["127","snooze","居眠り","v","0"],
    ["128","bile","胆汁","v","0"],
    ["129","articulation","関節","v","0"],
    ["130","squatter","無断居住者","v","0"],
    ["131","tentacle","触手","v","0"],
    ["132","wart","いぼ","v","0"],
    ["133","decoy","おとり","v","0"],
    ["134","outlay","支出","v","0"],
    ["135","escapade","いたずら","v","0"],
    ["136","consternation","仰天","v","0"],
    ["137","inadvertent","不注意な","v","0"],
    ["138","insurmountable","乗り越えられない","v","0"],
    ["139","serum","血清","v","0"],
    ["140","promiscuous","無差別","v","0"],
    ["141","carcinogen","発癌物質","v","0"],
    ["142","abhor","忌み嫌う","v","0"],
    ["143","overrate","高く評価し過ぎる","v","0"],
    ["144","mutiny","反乱","v","0"],
    ["145","incinerator","焼却炉","v","0"],
    ["146","adjunct","付属物","v","0"],
    ["147","aft","船尾に","v","0"],
    ["148","brevity","簡潔","v","0"],
    ["149","rummage","くまなく捜す","v","0"],
    ["150","disheveled","乱れた","v","0"],
    ["151","casket","棺","v","0"],
    ["152","negate","否定する","v","0"],
    ["153","nonchalant","無関心な","v","0"],
    ["154","grubby","汚い　","v","0"],
    ["155","plumage","羽","v","0"],
    ["156","impudent","厚かましい　","v","0"],
    ["157","encroach","侵害する","v","0"],
    ["158","lava","溶岩","v","0"],
    ["159","dab","軽くたたく","v","0"],
    ["160","decrepit","老朽化した","v","0"],
    ["161","antagonize","拮抗","v","0"],
    ["162","atheist","無神論者","v","0"],
    ["163","autism","自閉症","v","0"],
    ["164","suffrage","参政権","v","0"],
    ["165","acorn","ドングリ","v","0"],
    ["166","naught","無価値","v","0"],
    ["167","saturation","飽和","v","0"],
    ["168","pall","ポール","v","0"],
    ["169","eviction","立ち退き","v","0"],
    ["170","gully","深い溝","v","0"],
    ["171","terrestrial","地上の","v","0"],
    ["172","allay","和らげる","v","0"],
    ["173","welter","ごった返し","v","0"],
    ["174","xenophobia","外国人恐怖症","v","0"],
    ["175","leaden","鉛色の","v","0"],
    ["176","quay","岸壁","v","0"],
    ["177","wriggle","身をよじる","v","0"],
    ["178","daunt","威圧する","v","0"],
    ["179","municipality","市町村","v","0"],
    ["180","lenient","寛大な","v","0"],
    ["181","cursory","ぞんざいな","v","0"],
    ["182","wrest","奪い取る","v","0"],
    ["183","lethargic","無気力","v","0"],
    ["184","scowl","顔をしかめる","v","0"],
    ["185","attire","衣装","v","0"],
    ["186","molding","鋳型","v","0"],
    ["187","impertinent","生意気","v","0"],
    ["188","plumb","垂直","v","0"],
    ["189","subsistence","生存","v","0"],
    ["190","succinct","簡潔な","v","0"],
    ["191","rejoinder","返答","v","0"],
    ["192","trough","トラフ","v","0"],
    ["193","jeer","冷やかす","v","0"],
    ["194","chronology","年表","v","0"],
    ["195","polyglot","ポリグロット","v","0"],
    ["196","knell","弔鐘","v","0"],
    ["197","moot","議論の余地がある","v","0"],
    ["198","homogeneous","均質","v","0"],
    ["199","arbitration","仲裁","v","0"],
    ["200","bereaved","遺族","v","0"],

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
    for(var i = tmp; i < tmp + NUM_OF_QUESTION;i++){
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
