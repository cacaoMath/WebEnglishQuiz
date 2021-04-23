let name = "";
let quizPattern = "";

// form要素を取得
let element = document.getElementById("QuizPattern") ;

// form要素内のラジオボタングループ(name="drone")を取得
let radioNodeList = element.drone ;
if(getParam().length !== 0){
    name = getParam()[0][1];
    document.getElementById("name").value = name;
}

//問題ページに移動
function testStart() {
    quizPattern = radioNodeList.value ; 
    name = document.getElementById("name").value;
    if(name != "" && quizPattern != ""){
        location.href = "./EngWriteTestPage.html" +"?name="+name+"?quizPattern="+quizPattern;
    }else{
        alert("Please input your name or check quiz pattern.")
    }
    
}

function selectTestStart() {
    quizPattern = radioNodeList.value ; 
    name = document.getElementById("name").value;
    if(name != "" && quizPattern != ""){
        location.href = "./EngSelectTestPage.html" +"?name="+name+"?quizPattern="+quizPattern;
    }else{
        alert("Please input your name or check quiz pattern.")
    }
    
}

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











