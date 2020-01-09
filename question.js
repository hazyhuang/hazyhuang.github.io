
var data = {}

var questions = document.getElementsByClassName("section-container-spacer");
for(i=0;i<questions.length;i++){
	console.log(i);
	
    var answerInpt = questions[i].getElementsByClassName("answerInpt");
    var name = answerInpt[0].name;
	var answer = questions[i].getAttribute('value');
	data[name] = {answer:answer,choose:"",isCorrect:false}
	console.log(name);
	console.log(data[name]);
}


var qest = {Number:1, answer:"A", choose:""};
var question_group = [];

function getResult(obj){
	amount = 0;
	for(i=0;i<questions.length;i++){
		console.log("序号:"+i);
		var key = i+1;
        console.log("关键字:"+data[key+""].answer +" 用户选择："+ data[key+""].choose
         +"  "+data[key+""].isCorrect);
		if(data[key+""].isCorrect == false){
			questions[i].style.display='block';

		}else{
			questions[i].style.display='none';
			amount++;
		}
		
	}
	score = amount/questions.length;
	score = (score.toFixed(2))*100;
	var result = document.getElementsByClassName("result");
	result[0].innerText = "得分："+score+"%";
	console.log("得分："+score+"%");
}

function chooseSubmit(obj){
	console.log(obj.value);
	console.log(obj.name);
	obj.checked = "true";
	var name = obj.name;
    console.log(data[name].answer);
    data[name].choose = obj.value;
    if(data[name].answer == obj.value){
    	console.log("答对了");
    	data[name].isCorrect=true;
    }
	



}


function lastQuestion(obj){
	console.log('last');
	var prevElement=obj.parentElement.previousElementSibling;
	if(prevElement!=null){
		obj.parentElement.style.display='none';
		prevElement.style.display='block';
	}
}

function answerQuestion(obj){
	console.log('answer');
	if(obj.parentElement.children[8].style.display == 'block'){
		obj.parentElement.children[8].style.display='none';
	}else{
		obj.parentElement.children[8].style.display='block';
	}

}

function nextQuestion(obj){
	console.log('next');
	var nextElement=obj.parentElement.nextElementSibling;
	if(nextElement!=null){
		obj.parentElement.style.display='none';
		nextElement.style.display='block';
	}
}



/*var questions = document.getElementsByClassName("section-container-spacer");
for(i=0;i<questions.length;i++){
	console.log(i);
	var lastBotton = questions[i].children[5];
	var answerBotton = questions[i].children[6];
	var nextBotton = questions[i].children[7];

	lastBotton.addEventListener("click",function(){
		console.log("last");

	})

	answerBotton.addEventListener("click",function(){
		console.log("answer");
        console.log(questions);
          console.log(i);

		questions[i].children[8].style.display='block';
	})

	nextBotton.addEventListener("click",function(){
		console.log("next");
	})
}*/

