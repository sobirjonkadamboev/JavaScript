//String methods

const text = 'Hi World';
const trashPass = '         dskfjd   ';

console.log('Length is', text.length); // length is property, starts from 1

//Methods
console.log(text.charAt(5));
console.log(text[5]);
console.log(text.charCodeAt(5));
console.log('Changing letters into uppercase', text.toUpperCase());
console.log(('Changing letters into lowercase', text.toLowerCase()));
console.log('Text Slice', text.slice(0, 4)); //by indexes from start to end
console.log('Text Substring', text.substring(0, 4));//you can't use -1,-2... indexes
console.log('Removing the spaces: ', trashPass.trim());
console.log('Trim Start: ', trashPass.trimStart());
console.log('Trim End: ', trashPass.trimEnd());

//Number Methods
const number = 19.8;
const width = '243.6px';

console.log(Math.round(number)); //sonni butun qilib beradi
console.log(Math.floor(number)); //eng yaqin sonni oladi
console.log(parseInt(width)); //from string to the integer number
console.log(parseFloat(width)); //from string to the closest number












