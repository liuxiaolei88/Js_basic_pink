var arr = [1,2,3,5,3,2,1]
// 生序
arr.sort(function (a, b){return a-b})
console.log(arr)
// 降序
arr.sort(function (a, b){return b-a})
console.log(arr)