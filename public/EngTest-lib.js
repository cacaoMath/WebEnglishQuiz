//英単語リストから問題のパターンを絞る用
function Q_selecter(pattern,NUM_OF_QUESTION){
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



//全英単語からパターンごとに問題数分を返す
function Q_ListGen(pattern, wordList){
    var qList = []
    var tmp= Q_selecter(pattern, NUM_OF_QUESTION);
    for(var i = tmp; i < tmp + NUM_OF_QUESTION;i++){
        qList.push(wordList[i]);
    }
    return qList;
}

//array shuffle https://www.nxworld.net/tips/js-array-shuffle.html より
function shuffle(array){
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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

function getEnglishWordList(){
    const WORD = [
        ["1","scriptural","聖書","adv","0"],
        ["2","seaworthy","航海に適した","adv","0"],
        ["3","billionth","10億分の1","n","0"],
        ["4","herbivore","草食動物","n","0"],
        ["5","dampness","湿気","n","0"],
        ["6","chancy","危険な","n","0"],
        ["7","gauche","不器用な","n","0"],
        ["8","porpoise","ネズミイルカ","n","0"],
        ["9","implied","暗黙の","v","0"],
        ["10","gastronomy","美食","adv","0"],
        ["11","cannery","缶詰工場","n","0"],
        ["12","drawn","描かれた","n","0"],
        ["13","liturgy","典礼","n","0"],
        ["14","yuk","不潔なもの","n","0"],
        ["15","pursuing","追求","v","0"],
        ["16","disaffected","不満","v","0"],
        ["17","erratum","誤字","adv","0"],
        ["18","gouge","えぐる","n","0"],
        ["19","matrimonial","結婚の","adv","0"],
        ["20","virological","ウイルス学的な","adv","0"],
        ["21","hustings","hustings","n","0"],
        ["22","rueful","悲しそうな","adv","0"],
        ["23","unperturbed","動じない","adv","0"],
        ["24","heliocentric","太陽中心の","adv","0"],
        ["25","shoestring","靴ひも","v","0"],
        ["26","toothache","歯痛","n","0"],
        ["27","contrive","考案する","v","0"],
        ["28","splendour","素晴らしさ","n","0"],
        ["29","misconstrue","misconstrue","n","0"],
        ["30","downspout","縦樋","n","0"],
        ["31","pliant","しなやかな","n","0"],
        ["32","afterword","後書き","n","0"],
        ["33","tracker","追跡者","n","0"],
        ["34","inviolable","不可侵の","adv","0"],
        ["35","transcendence","超越","n","0"],
        ["36","panhandler","乞食","n","0"],
        ["37","disputation","論争","n","0"],
        ["38","flaxen","亜麻色の","n","0"],
        ["39","chard","フダンソウ","n","0"],
        ["40","cagey","用心深い","adv","0"],
        ["41","petrochemical","石油化学製品","n","0"],
        ["42","doer","やり手","n","0"],
        ["43","polemical","論争の","adv","0"],
        ["44","quintuplet","五つ子","n","0"],
        ["45","evanescent","はかない","n","0"],
        ["46","doleful","悲しげな","adv","0"],
        ["47","steeplechase","障害物競走","n","0"],
        ["48","chortle","声高に笑う","n","0"],
        ["49","gasbag","おしゃべりな人","n","0"],
        ["50","imbibe","吸収する","n","0"],
        ["51","hardiness","頑健さ","n","0"],
        ["52","aflame","燃えて","n","0"],
        ["53","bluish","青みがかった","adv","0"],
        ["54","volitional","意志の","adv","0"],
        ["55","leger","元帳","n","0"],
        ["56","gallows","絞首台","n","0"],
        ["57","warble","さえずり","adv","0"],
        ["58","yonder","彼方","n","0"],
        ["59","surefire","確実な","n","0"],
        ["60","childcare","育児","n","0"],
        ["61","ethnography","民族誌","n","0"],
        ["62","pram","乳母車","n","0"],
        ["63","palaver","無駄話","n","0"],
        ["64","erector","建設作業員","n","0"],
        ["65","exhume","掘り出す","v","0"],
        ["66","arbitrage","裁定取引","n","0"],
        ["67","matchmaker","仲人","n","0"],
        ["68","dumpy","みすぼらしい","n","0"],
        ["69","eugenics","優生学","n","0"],
        ["70","battered","ぼろぼろの","v","0"],
        ["71","upturn","好転","adv","0"],
        ["72","venerate","あがめる","n","0"],
        ["73","crackerjack","極上品","n","0"],
        ["74","disabuse","捨てさせる","n","0"],
        ["75","lubrication","潤滑","n","0"],
        ["76","hominy","ひき割りトウモロコシ","n","0"],
        ["77","headliner","天井","n","0"],
        ["78","generalissimo","総統","n","0"],
        ["79","enslave","奴隷にする","v","0"],
        ["80","stated","述べた","v","0"],
        ["81","intermarry","結婚する","adv","0"],
        ["82","tranquilizer","精神安定剤","n","0"],
        ["83","virulently","敵意に満ちて","adv","0"],
        ["84","neurology","神経学","adv","0"],
        ["85","resound","鳴り響く","adv","0"],
        ["86","camellia","ツバキ","n","0"],
        ["87","hydroponic","水耕の","n","0"],
        ["88","bristly","剛毛の","adv","0"],
        ["89","unapproved","承認されていない","adv","0"],
        ["90","dispirit","がっかりさせる","n","0"],
        ["91","collarbone","鎖骨","n","0"],
        ["92","legation","公使館","n","0"],
        ["93","barrister","弁護士","n","0"],
        ["94","peritonitis","腹膜炎","n","0"],
        ["95","tendril","巻きひげ","n","0"],
        ["96","gastronomic","美食の","adv","0"],
        ["97","songbird","歌姫","n","0"],
        ["98","floorboard","床板","n","0"],
        ["99","laxative","下剤","adv","0"],
        ["100","lessee","賃借人","n","0"],
        ["101","load","荷物","n","0"],
        ["102","manner","流儀","n","0"],
        ["103","nod","うなずく","v","0"],
        ["104","appetite","食欲","n","0"],
        ["105","compete","競争する","v","0"],
        ["106","competent","有能な","adj","0"],
        ["107","punctual","時間厳守の","adj","0"],
        ["108","register","登録する","v","0"],
        ["109","environment","環境","n","0"],
        ["110","pollute","汚染する","v","0"],
        ["111","labor","労働","n","0"],
        ["112","elaborate","入念な","adj","0"],
        ["113","manuscript","原稿","n","0"],
        ["114","surface","表面","n","0"],
        ["115","survive","生き残る","v","0"],
        ["116","objectto","に反対する","v","0"],
        ["117","reject","断る","v","0"],
        ["118","anxious","心配な","adj","0"],
        ["119","objective","客観的な","adj","0"],
        ["120","surround","囲む","v","0"],
        ["121","relyon","信頼する","v","0"],
        ["122","religion","宗教","n","0"],
        ["123","emotion","感情","n","0"],
        ["124","rapidly","急速に","adv","0"],
        ["125","somehow","何らかの方法で","adv","0"],
        ["126","annoy","苛立たせる","v","0"],
        ["127","practical","実践的な","adj","0"],
        ["128","devise","工夫する","v","0"],
        ["129","evidence","証拠","n","0"],
        ["130","perceive","とらえる","v","0"],
        ["131","deceive","だます","v","0"],
        ["132","temporary","一時的な","adj","0"],
        ["133","contemporary","同時代の","adj","0"],
        ["134","glance","ちらっと見る","v","0"],
        ["135","particular","ある特定な","adj","0"],
        ["136","whisper","ささやく","v","0"],
        ["137","wander","さまよう","v","0"],
        ["138","develop","発達する","v","0"],
        ["139","offend","の気分を害する","v","0"],
        ["140","similar","似ている","adj","0"],
        ["141","simultaneous","同時の","adj","0"],
        ["142","ideal","理想の","adj","0"],
        ["143","influence","に影響を及ぼす","v","0"],
        ["144","fluent","流れるような","adj","0"],
        ["145","besides","その上","adv","0"],
        ["146","accompany","に同伴する","v","0"],
        ["147","literature","文学","n","0"],
        ["148","intellectual","知的な","adj","0"],
        ["149","trust","信頼する","v","0"],
        ["150","embarrass","当惑させる","v","0"],
        ["151","harm","害","n","0"],
        ["152","insurance","保険","n","0"],
        ["153","effect","影響","n","0"],
        ["154","affect","に影響を及ぼす","v","0"],
        ["155","affection","愛情","n","0"],
        ["156","legend","伝説","n","0"],
        ["157","distribute","分配する","v","0"],
        ["158","voluntary","自発的な","adj","0"],
        ["159","vote","投票する","v","0"],
        ["160","devoteAtoB","AをBに捧げる","v","0"],
        ["161","mature","成熟した","adj","0"],
        ["162","decade","10年間","n","0"],
        ["163","tribe","部族","n","0"],
        ["164","trivial","取るに足らない","adj","0"],
        ["165","reflexes","反射神経","n","0"],
        ["166","obvious","明白な","adj","0"],
        ["167","bother","に迷惑をかける","v","0"],
        ["168","disturb","邪魔する","v","0"],
        ["169","suburb","郊外","n","0"],
        ["170","grasp","つかむ","v","0"],
        ["171","relationship","関係","n","0"],
        ["172","engage","従事する","v","0"],
        ["173","burden","負担","n","0"],
        ["174","value","価値","n","0"],
        ["175","luxury","贅沢","n","0"],
        ["176","fortune","大金","n","0"],
        ["177","verbal","言葉による","adj","0"],
        ["178","characteristic","特徴","n","0"],
        ["179","character","特徴","n","0"],
        ["180","imitate","真似る","v","0"],
        ["181","doubtful","疑わしい","adj","0"],
        ["182","suspect","ではないかと疑う","v","0"],
        ["183","aspect","見方","n","0"],
        ["184","spectator","観客","n","0"],
        ["185","audience","聴衆","n","0"],
        ["186","term","言葉","n","0"],
        ["187","determine","を決める","v","0"],
        ["188","phenomenon","現象","n","0"],
        ["189","tissue","組織","n","0"],
        ["190","vary","様々だ","v","0"],
        ["191","admire","高く評価する","v","0"],
        ["192","absorb","吸収する","v","0"],
        ["193","severe","ひどい","adj","0"],
        ["194","persevere","頑張り通す","v","0"],
        ["195","discipline","しつけ","n","0"],
        ["196","acknowledge","認める","v","0"],
        ["197","ultimate","最終的な","adj","0"],
        ["198","budget","予算","n","0"],
        ["199","synthetic","合成の","adj","0"],
        ["200","analysis","分析","n","0"],
    ];

    return WORD;
}