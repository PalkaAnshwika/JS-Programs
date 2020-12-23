function getNumStr(str){
console.log(str);
str = str.split('');
let strArr = str;
strArr = [...new Set(strArr)];
let count = [];
for(let i = 0; i< strArr.length; i++){
count.push(str.filter(x => x === strArr[i]).length);
}
for(let i = 0; i< count.length; i++){
strArr[i] = strArr[i] + count[i];
}
console.log(strArr.sort().join(''));
}

getNumStr('abababaaacccyyy');
