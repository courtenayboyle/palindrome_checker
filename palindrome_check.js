function isPalindrome(str) {
	//let re = /[^a-z0-9]/g;
	//let newStr = str.toLowerCase().replace(re, '');
	//let reverseStr = newStr.split('').reverse().join('');
	//return reverseStr === newStr;
	const cleanedString = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
	return cleanedString === cleanedString.split('').reverse().join('');
}
//console.log(palindrome("eye"))

function checkPalindrome() {
	const inputString = document.getElementById('inputString').value;
	const resultElement = document.getElementById('responseText');

	if (isPalindrome(inputString)) {
		resultElement.textContent = `Yes! "${inputString}" is a palindrome!`;
	} else {
		resultElement.textContent = `Sorry, "${inputString}" is not a palindrome.`;
	}
	openModal();
}
function openModal() {
	document.getElementById('responseModal').style.display = 'block';
}
function closeModal() {
	document.getElementById('responseModal').style.display = 'none';
}