let name = "";
let quizPattern = "def";

// form要素を取得
let element = document.getElementById("QuizPattern") ;

// form要素内のラジオボタングループ(name="drone")を取得
let radioNodeList = element.drone ;
if(getParam() != []){
    name = getParam()[0][1];
    document.getElementById("name").value = name;
}

//問題ページに移動
function testStart() {
    quizPattern = radioNodeList.value ; 
    name = document.getElementById("name").value;
    if(name != ""){
        location.href = "./EngWriteTestPage.html" +"?name="+name+"?quizPattern="+quizPattern;
    }else{
        alert("please input your name or quiz pattern")
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











