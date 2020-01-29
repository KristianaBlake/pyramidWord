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
			if (str[i] != " "){
				// creating new word with no spaces
				word += str[i]
				// rearrange the letters in a string in order of frequency (in variable word)
				// and without duplicates: 
				// if (word[i]) is falsey (undefined, 0, null) then the value of that index
				// has been encountered and counted previously, otherwise, we initialize it 
				if (word[i]) {
					word[i]++;
				} else {
					word[i] = 1;
				}

				//make sure there are multiple numbers of that one index (not 1 b and 1 d )

				return true  

			} else {
				// if the charcter does equal a space, it is pushed into the wordArr
				wordArr.push(word)
				// this is emptying out the variable "word"
				word = "";
			}

			// this pushed the last word into wordArr
			wordArr.push(word)


		}
		

	} else {
	 	return false
	 } 

} 

//calling function 
checkPyramid()
	