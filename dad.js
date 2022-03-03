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
punchLine.onclick = function() {
  document.getElementById('joke').textContent = 'Hi ' + name + ' Im dad!';
}
document.getElementById('name').textContent = name;
