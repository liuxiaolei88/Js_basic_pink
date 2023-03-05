### Q1：变量
#### 实现效果1：弹窗输入名字，得到名字弹窗输出
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  var myName = prompt('请输入您的名字')
  alert(myName)

</script>
</body>
</html>
```
#### 实现效果2：交换两个变量的值
```javascript
var apple1 = 'a1'
var apple2 = 'a2'

var temp = apple1
apple1 = apple2
apple2 = temp

console.log(apple1,apple2)
```
#### 总结
- 只声明不赋值，输出undefined

### Q2：数据类型
#### 总结
1. 数据类型
   - 简单数据类型
     - Number、String、Boolean、Undefined、Null
   - 复杂数据类型
     - Object

2. 判断一个变量是否为非数字的类型
    ```javascript
    console.log(isNaN('我是文本'))//true
    console.log(isNaN(9))// false
    ```

3. 转义符
   - 换行 \n

4. 字符串长度
   - str.length

5. 字符串拼接
   - \+

6. undefined 和数字相加得到NaN，和文字相加就是undefined拼接文字。null和数字相加相当于0和数字相加，和文字相加相当于null拼接文字。

7. **检测数据类型：typeof**

   ```javascript
   console.log(typeof 999)
   console.log(typeof 'str')
   ```

8. 字面量
    - 字面量是源代码中一个固定值的表示法
    - 有数字字面量、字符串字面量、布尔字面量

9. 数据类型转换
   - 转换字符串
     ```javascript
     //转换字符串
     // 方法1：toSring（）
     var num = 9
     console.log(typeof num.toString())
     // 方法2：String（）
     console.log(typeof String(num))
     // 方法3：加号拼接
     var str = 'str'
     console.log(typeof (str + num))
     ```
   - 转换数字
        ```javascript
         //转换数字型
        // 方法一：
        var str = '9'
        console.log(typeof parseInt(str))
        // 方法二：
        console.log(typeof parseFloat(str))
        // 方法三：
        console.log(typeof Number(str))
        // 方法四：js隐式转换：- * / ，但+不行
        console.log(typeof (str - 1))
      ```

   - 转换布尔值
     ```javascript
       // 代表为空/否定的值会转换为false，如0，''，NAN，null，undefined，其他值都为true
       //转换方法
       var n = 0
       console.log(typeof Boolean(n))
     ```
     

10. 解释型语言和编译型语言
    1. 边解释边执行
    2. 全部解释再执行

### Q3:运算符

#### 总结

##### 1:算数运算符

##### 2:表达式和返回值

### Q4:流程控制

#### 实现效果1:判断闰年

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    var year = Number(prompt('请输入您的年份'))
    // 判断闰年：能被4整除且不能被100整除，或者能被400整除
    if((year%4===0&&year%100!==0)||year%400==0){
        alert('这是闰年')
    }else {
        alert('这不是闰年')
    }
</script>
</body>
</html>
```

#### 实现效果2:判断成绩

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    var grade = Number(prompt('请输入您的分数'))
    if(grade>90){
        alert('A')
    }else if(80<=grade&&grade<90){
        alert('B')
    }else if(70<=grade&&grade<80){
        alert('C')
    }else if(60<=grade&&grade<70){
        alert('D')
    }else {
        alert('E')
    }
</script>
</body>
</html>
```

#### 实现效果3:三元表达式

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    var num = Number(prompt('请输入您的数字'))
    var res = num<10 ? '0' + String(num) : num
    alert(res)
</script>
</body>
</html>
```

实现效果4:判断水果价钱

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    var fruit =prompt('请输入您的水果')
    switch (fruit){
        case '苹果':
            alert('3.5元')
            break
        case '香蕉':
            alert('3元')
            break
        default:
            alert('没有这个水果')
            break
    }
</script>
</body>
</html>
```

#### 实现效果4:成绩计算

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    var num =Number(prompt('请输入班级人数'))
    var  sum = 0
   for(var i = 0;i<num;i++){
       sum +=Number(prompt('请输入第'+i+1+'个同学第成绩'))
   }
   alert('平均分 '+ String(sum/num))
</script>
</body>
</html>
```

#### 实现效果5：打印n行m列*

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    var row = Number(prompt())
    var col = Number(prompt())
    for(var i = 0;i<row;i++){
        var str = ''
        for(var j=0;j<col;j++){
            str += '*'
        }
        str += '\n'
        console.log(str)
    }
</script>
</body>
</html>
```

#### 实现效果6:打印倒三角

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    var row = Number(prompt())
    for(var i = row;i>=1;i--){
        var str = ''
        for(var j = i;j>=1;j--){
            str += '*'
        }
        str += '\n'
        console.log(str)
    }
</script>
</body>
</html>
```

### Q5:数组

#### 实现效果1：遍历数组

```js
// 遍历数组
var arr = [1,2,3,4,5,6,7]
var sum = 0
for(var i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum)
```

#### 实现效果2：寻找数组最大值

```js
var arr = [1,2,3,4,5,6,7,6,5,4,3,2,1]
var max = arr[0]
for(var i=1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max)
```

#### 实现效果3：新增元素

```js
var arr = ['aaa','bbb','ccc']
arr[3] = 'ddd'
console.log(arr)
```

#### 实现效果4：数组筛选

```js
var arr = [0,1,2,3,4,10,11,12]
var res = []
var index = 0
for(var i=0;i<arr.length;i++){
    if(arr[i]>10){
        res[index] = arr[i]
        index++;
    }
}
console.log(res)
```

#### 实现效果5：数组翻转

```js
var arr = [0,1,2,3,4,10,11,12,3,4,5]
var res = []
for(var i =0 ;i<arr.length;i++){
    res[i] = arr[arr.length-i-1]
}
console.log(res)

```

#### 实现效果6：冒泡排序

```js
var arr = [0,1,2,3,4,10,11,12,3,4,5]
var res = []
for(var i =0 ;i<arr.length;i++){
    for(j=0;j<arr.length-i-1;j++){
        // 冒泡：相邻两个元素比较
        // 小于：降序，大于升序
        if(arr[j]<arr[j+1]){
            var temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr)

```

### Q6:函数

#### 总结

##### 1:arguments

当不确定有多少个参数传递的时候，可以使用arguments获取。展现形式是一个伪数组，可以遍历。

- 具有length属性
- 按索引方式存储数据
- 不具有push pop 方法

### Q7:作用域

- 作用域：代码名字在某个范围内起作用，为了提高程序可靠性
- 作用域分类：es6之前，分为局部作用域和全局作用域
  - 全局作用域：整个script标签或者是一个单独的js文件
  - 局部作用域（函数作用域）：在函数内部就是局部作用域
- 变量的作用域
  - 全局变量
  - 局部变量
- 作用域链
  - 内部函数可以访问外部函数的机制，用链式查找决定哪些数据可以被内部函数访问，就称为作用域链。

### Q8:预解析

- var和function会提升到当前作用域的最前面
- 先变量提升，后函数提升

### Q9:对象

- 对象的创建

  - 方法1:花括号

    ```js
    var obj = {
        name : 'name',
        eat: function () {
            console.log('hh')
        }
    }
    obj.eat()
    ```

  - 方法2:new Object

    ```js
    var obj2 = new Object()
    obj2.name = 'name'
    obj2.eat = function () {
        console.log('hh')
    }
    obj2.eat()
    ```

  - 方法3:构造函数

    ​      利用函数方法，函数封装对象，把相同属性和方法抽象出来封装到函数里 

    ```js
    function Star(uName,age,sex) {
        this.name = uName
        this.age = age
        this.sex = sex
    }
    var star1 = new Star('熊大',18,'女')
    console.log(star1)
    ```

- new关键字的执行过程

  - 在内存创建了一个空对象
  - this指向这个空对象
  - 执行构造函数给空对象添加属性和方法
  - 返回对象

- 对象的遍历

  ```js
  function Star(uName,age,sex) {
      this.name = uName
      this.age = age
      this.sex = sex
      this.eat = function () {
          console.log('eat')
      }
  }
  var star1 = new Star('熊大',18,'女')
  
  for(var k in star1){
      console.log(star1[k])
  }
  ```

  

###  Q10:内置对象

- 自带的一些对象
- 常见：Math、Date、Array、String

#### Math对象

			- 最大值：``` Math.max([一个数组]) ```

#### Array对象

- 创建

  - 字面量[]
  - new  Array()

- 检测是否是数组

  ```js
  // 方法1
  var arr = []
  console.log(arr instanceof Array)
  //方法2
  console.log(Array.isArray(arr))
  ```

- 添加和删除数组

  ```js
  var arr = [1,2,3]
  //push（）推入数组末尾
  // push完毕返回数组长度
  console.log(arr.push(5))//4
  console.log(arr)
  
  // unshift在数组首添加
  // unshift完毕返回数组长度
  arr.unshift(6)
  console.log(arr)
  
  //pop 删除数组最后一个元素
  // 返回删除元素
  console.log(arr.pop())
  console.log(arr)
  
  //shift删除数组第一个
  // 返回删除元素
  arr.shift()
  console.log(arr)
  ```

- 翻转数组

  - arr.reverse()

- 数组排序

  ```js
  var arr = [1,2,3,5,3,2,1]
  // 生序
  arr.sort(function (a, b){return a-b})
  console.log(arr)
  // 降序
  arr.sort(function (a, b){return b-a})
  console.log(arr)
  ```

- 数组索引

  ```js
  var arr = [1,2,3,5,3,2,1]
  // 索引从0开始，重复元素返回第一个
  // 如果不存在返回-1
  // 从前往后找
  console.log(arr.indexOf(1))
  // 从后往前找，但是下标还是从0开始
  console.log(arr.lastIndexOf(1))
  ```

- 数组去重

  ```js
  var arr = [1,2,3,5,3,2,1]
  var res = []
  for(var i =0;i<arr.length;i++){
      if(res.indexOf(arr[i])===-1){
          res.push(arr[i])
      }
  }
  console.log(res)
  ```

- 数组转换字符串

  ```js
  var arr = [1,2,3,5,3,2,1]
  // toString默认分隔符为，
  console.log(arr.toString())
  // join 里面是分隔符
  console.log(arr.join(''))
  ```

  #### String

  - 基本包装类型

    - 特殊引用类型：String、Number、Boolean
    - 基本包装类型就是把简单数据类型包装成复杂数据类型，这样就有了属性和方法

  - 返回字符串位置

    ```js
    var str = '我在吃饭'
    console.log(str.indexOf('饭'))
    console.log(str.lastIndexOf('饭'))
    ```

  - 实现效果1:查找所有o出现的位置和次数

    ```js
    var str = 'shjaakdqowdasdqodfsddosa'
    var sum = 0
    var index = str.indexOf('o')
    var res = []
    while(index!=-1){
        res.push(index)
        // 若找到o，则更新index，并且从下一个字母继续找
        index = str.indexOf('o',index+1)
        sum++
    
    }
    console.log(res)
    console.log(sum)
    ```

  - 根据位置返回字符

    ```js
    var str = 'shjaakdqowdasdqodfsddosa'
    // 返回字符
    console.log(str.charAt(3))
    console.log(str[3])
    // 返回字符阿斯克码
    console.log(str.charCodeAt(3))
    
    ```

  - 统计出现字符最多的次数

    ```js
    var str = 'shjaakdqowdasdqodfsddosa'
    var obj = {}
    for(var i = 0;i<str.length;i++){
        var chars = str.charAt(i)
        if(obj[chars]){
            obj[chars]++
        }else {
            obj[chars] = 1
        }
    }
    var max_char = ''
    var max = 0
    for(var key in obj){
        if(obj[key]>max){
            max = obj[key]
            max_char = key
        }
    }
    console.log(obj)
    console.log(max_char)
    console.log(max)
    ```

  - 字符串的操作

    ```js
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
    ```

    
