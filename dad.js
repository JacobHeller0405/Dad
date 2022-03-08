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
}

	punchLine.onclick = function() {
		var name = document.getElementById('name').textContent;
    if (document.getElementById('joke').textContent == '') {
		document.getElementById('joke').textContent = 'Hi ' + name + ' Im dad!';
		document.getElementById('punchLine').textContent = 'Hide joke';
	} else if (document.getElementById('joke').textContent !== '') {
		document.getElementById('joke').textContent = '';
		document.getElementById('punchLine').textContent = 'See joke';
	}
	}
