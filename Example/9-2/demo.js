window.onload = function(){
	let firstP = document.querySelector('div > p');
	console.log(firstP.style);
	
	firstP.style.backgroundColor = 'pink';
	firstP.style.color = 'white';

	let allDivPs = document.querySelectorAll('div > p');
	allDivPs[1].style.cssText = 'background-color: purple; color: blue;'

	let allDivs = document.getElementsByTagName('div');
	//allDivs[4].style.cssText = 'background-color:gold; color:white;';
	//allDivs[5].style.cssText = 'background-color:gold; color:white;';
	//console.log(allDivs[4].classlist)
	allDivs[4].classList.add('gold');
	allDivs[5].classList.add('gold');
};

