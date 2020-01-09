
var qest = {Number:1, answer:"A", choose:""};

function chooseSubmit(obj){
	console.log(obj.value);
	obj.checked = "true";

}


function lastQuestion(obj){
	console.log('last');
	var prevElement=obj.parentElement.previousElementSibling;
	if(prevElement!=null){
		obj.parentElement.style.display='none';
		prevElement.style.display='block';
	}
}

function answer(obj){
	console.log('answer');
	obj.parentElement.children[8].style.display='block';

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

