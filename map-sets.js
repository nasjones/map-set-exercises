/* 
new Set([1,1,2,2,3,4])
//this code returns the newly created set
 */

/* 
[...new Set("referee")].join("")
//this code will return the string 'ref'
 */

/* 
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//[[[1,2,3],true],[[1,2,3],false]]
 */

/* 
let hasDuplicate = (arr) => new Set(arr).size !== arr.length;
console.log(hasDuplicate([1, 3, 2, 1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false
 */

let vowelCount = (str) => {
	str = str.toLowerCase();
	let vowelMap = new Map();
	for (const i in str) {
		if ("aeiou".includes(str[i])) {
			if (vowelMap.has(str[i]))
				vowelMap.set(str[i], vowelMap.get(str[i]) + 1);
			else vowelMap.set(str[i], 1);
		}
	}
	return vowelMap;
};
console.log(vowelCount("awesome")); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount("Colt")); // Map { 'o' => 1 }
