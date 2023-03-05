var str1 = 'shjaakdqowdasdqodfsddosa'
var str2 = 'uuuu'
//拼接：concat
var str3 = str1.concat(str2)
console.log(str3)

//截取：substr（截取开始的位置，截取多少个字符）
var str4 = str1.substring(0,2)
console.log(str4)

//替换：replace（被替换的字符，替换的字符）,只会替换第一个字符
var str5 = str2.replace('u','a')
console.log(str5)

//字符转换数组：split（分隔符）
var str6 = str1.split('')
console.log(str6)