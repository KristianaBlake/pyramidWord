const checkPyramid = (str) => {


	if (str.length < 0) {

		// arrange the letters in increasing frequency starting with one 
		// and continuing without gaps - don't count spaces 
		// and without duplicates 

		let word = " ";
		let wordArr = [];
		let newStr = "";

		// looping over the string 
		for (let i = 0; i < str.length; i++){
			// if the character inside the string does not equal a space, it will be stored in the variable "word"
			if (str[i] != " "){
				// creating new word with no spaces
				word += str[i]
			} else {
				// if the charcter does equal a space, it is pushed into the wordArr
				wordArr.push(word)
				// this is emptying out the variable "word"
				word = " ";
			}
		}
		// this pushes the last letter from the word variable into
		// variable wordArr
		wordArr.push(word)
		// checks the frequency of the letter
		for (let i = 0; i < wordArr.length; i++) {
			// rearrange the letters in a string in order of 
			// frequency (in variable word)

			//frequency:
			// if (word[i]) is falsey (undefined, 0, null) 
			// then the value of that index
			// has been encountered and counted previously, otherwise, 
			// we initialize it 

			if (wordArr[i]) {
				wordArr[i]++;
			} else {
				wordArr[i] = 1;
			}

		}

		// this pushes the last letter into newStr
		newStr.push(wordArr)

		for (let i = 0; i < newStr.length; i++){
			// and without duplicates: 
			//duplicates:
			// make sure there are multiple numbers of 
			// that one index (not 1 b and 1 d )

			if (newStri.includes())


		}

	} else {
	 	return false
	} 

} 

//calling function 
checkPyramid()
	