var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.querySelectorAll('li');

listItems.forEach(function(e){
	var button=document.createElement('button');
	button.appendChild(document.createTextNode('Delete'));
	e.appendChild(button)
	button.addEventListener('click',deleteItem)
	e.addEventListener('click',toggleOnClick)
});


function toggleOnClick(){

	this.classList.toggle('done')
}


//Delete the list element
function deleteItem(){

	 this.parentNode.remove()
}



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var inlineButton=document.createElement('button');
	inlineButton.appendChild(document.createTextNode('Delete'))
	ul.appendChild(li)
	li.appendChild(inlineButton);
	input.value = "";
	inlineButton.addEventListener('click',deleteItem)
	li.addEventListener('click',toggleOnClick)
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);