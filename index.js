let numBelow10 = Math.floor(Math.random()*10);
// console.log(numBelow10);
function prompt2() {
	
	if (numBelow10 >5){
		return 'big number';
	} else if (numBelow10 < 5){
		return 'small number';
	} else {
		return 'monkey';
	}

}
  console.log(prompt2());



/////////////////


const numBelow100 = Math.floor(Math.random()*100);
    console.log(numBelow100);
function prompt1() {
	
	if (numBelow100>50 ){
		
		return "That's a big number!";
	
	}
}

// test to see if it works:
console.log(prompt1());


//////


const formatPhoneNumber = (phoneNum) => {
	//  your code here
	number = phoneNum.toString()
	let areaCode = number.slice(0,3);
	let middle = number.slice(3, 6);
	let ending = number.slice(6);
	return `(${areaCode}) ${middle}-${ending}`

};


//Create an object representing a person with name, age, and city properties.

const person = {
	name: 'Jhon',
	age: 21 ,
	city: "Elsewhere"
};

/*
 *
 * Create an object for a movie with a title (string), genre (string), length
 * (number), and cast (array). Fill the cast array with characters from the
 * movie (strings).
 */

const movie = { 
	title: "Frozen",
	genre: "Anime", 
	length: 1.49,
	cast:["Anna", "Elsa","Olaf"],
};

/////


/**
 * LOOPS
 * Print out the numbers between 50 and 100 (non-inclusive).
 */
function loop() {
	
	for( let i = 51; i < 100; i++){
		console.log(i);
	}
}