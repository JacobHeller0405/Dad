var answerList = [
		'tired',
    'hungry',
    'sad',
    'home',
    'depressed',
    'not feeling well',
	];

var randomNumber = Math.floor(Math.random() * answerList.length);

var name = answerList[randomNumber];

document.getElementById('name').textContent = name;

reRoll.onclick = function() {
	var randomNumber = Math.floor(Math.random() * answerList.length);
	var name = answerList[randomNumber];
	document.getElementById('name').textContent = name;
	if (document.getElementById('joke').textContent !== '') {
		document.getElementById('joke').textContent = "Hi " + name + ' Im dad!';
	}

	punchLine.onclick = function() {
	  document.getElementById('joke').textContent = 'Hi ' + name + ' Im dad!';
	}
}
