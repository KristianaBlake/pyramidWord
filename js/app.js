const checkPyramid = (str) => {


	if (pyramid - return true) {

		// arrange the letters in increasing frequency starting with one 
		// and continuing without gaps - don't count spaces 
		// and without duplicates 
		
		let word = " ";
		let wordArr = [];
		// let newStr = "";

		// looping over the string 
		for (let i = 0; i < str.length; i++){
			// if the character inside the string does not equal a space, it will be stored in the variable "word"
			if(str[i] != " "){
				// creating new word with no spaces
				word += str[i]
				// rearrange the letters in a string in order of frequency
				// and without duplicates: 
				// if (word[i]) is falsey (undefined, 0, null) 
				// since we initialize the value of a matched character at 1
				// that if statement will only ever be entered if the 
				// character has been encountered and counted previously, otherwise, we initialize it 
				if (word[i]) {
					word[i]++;
				} else {
					word[i] = 1;
				}

				return true  

			} else {
				// if the charcter does equal a space, it is pushed into the wordArr
				wordArr.push(word)
				// this is emptying out the variable "word"
				word = "";
			}

			// this pushed the last word into wordArr
			wordArr.push(word)

			// check if it is a pyramid word? 
			// make sure there are no duplicates (not 1 b and 1 d )


		}
		

	} else {
	 	return false
	 } 

} 
	