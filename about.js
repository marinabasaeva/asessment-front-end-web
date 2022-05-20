console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let catImg = document.getElementById('image');

function giveCompliment() {
	alert('You are awesome!')
}

catImg.addEventListener('mouseover',giveCompliment)