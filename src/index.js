//作用域，防止全局污染
// for(let i=0;i<10;i++){
// 	console.log('循环体中--'+i)
// }
// console.log('循环体外--'+i

//作用域
// var a=2;
// {let a=10}
// console.log(a)


//解构赋值
// let [a,b,c]=[1,2,3];
// console.log(a);
// console.log(b);
// console.log(c);

//结构默认值
// let [foo=true] = [];
// console.log(foo)

// let [a,b="jspang"] = ['技术胖',null];
// console.log(a,b)

// let {foo,bar} = {foo:'jspang',bar:'技术胖'};
// document.write(foo,bar)

// const [a,b,c,d,e,f]="JSPang";
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// function jspang(...arg){
// 	console.log(arg[0]);
// 	console.log(arg[1]);
// 	console.log(arg[2]);
// 	console.log(arg[3]);
// }
// jspang(1)

// let arr1=['www','jspang','com'];
// //let arr2=arr1;
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('shengHongYu');
// console.log(arr2);
// console.log(arr1);


// function jspang(first,...arg){
// 	for(let a of arg){
// 		console.log(a);
// 	}
// }
// jspang(1,2,3,4,5)


//字符串拼接
// let jspang='技术胖';
// let blog = `非常高兴你能看到这篇文章，我是你的老朋友'${jspang}'。这节课我们学习字符串模版。`;
// //document.write(blog.includes(jspang));
// document.write(blog.startsWith(jspang));

// let a=11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('jspang'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// let json={
// 	'0':'jspang',
// 	'1':'jsp',
// 	'2':'jpang',
	//length:3
// };

// let arr=Array.from(json)
// console.log(arr);

//把一个字符串转换为数组类似于,JSON.parse();
// let arr =Array.of('技术胖','jspang','大胖逼逼叨');
// for(let i=0;i<arr.length;i++){
// 	console.log(arr[i])
// }

//find方法

// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function(value,index,arr){
//     return value > 5;
// }))

//fill方法
// let arr=[0,1,2,3,4,5,6,7,8,9];
// arr.fill('jspang',2,5);
// console.log(arr);


//for of 方法，输出数组的每一项
// let arr=[0,1,2,3,4,5,6,7,8,9];

// for(let item of arr){
// 	console.log(item);
// }


//for of索引


// let arr=['hello','boy','girl'];
// for(let index of arr.keys()){
// 	console.log(index)
// }

//输出索引和值
// let arr=['jspang','技术胖','大胖逼逼叨']
// for (let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

// function add(a,b){
// 	return a+b;
// }
// console.log(add(1,2))

// function add1(a,b=1){
// 	return a+b;
// }
// add1(2)



// function add2(a,b=1){
// 	if(a==0){
// 		throw new Error('error');
// 	}
// return a+b;
// }
// console.log(add2(0));

//箭头函数
// var add3=(a,b=1) => {
// 	return a+b;
// }
// console.log(add3(10));


// setTimeout(() => {
          
//           console.log('aaa')
//           //此时的this指向是该vue组件，不管在哪个地方使用，指向都是该vue组件。
//         }, 1000)



// let json = {
//     a:'jspang',
//     b:'技术胖'
// }
// function fun({a,b='jspang'}){
//     console.log(a,b);
// }
// fun(json);


// let arr=['hello','jspang','deg'];
// function fun(a,b,c){
// 	console.log(a,b,c)
// }
// fun(...arr);

// let obj={
// 	a:'hello',
// 	b:'world'
// };
// console.log('a' in obj)


//forEach方法
// let arr=['jspang','技术胖','前端教程'];
 
// arr.forEach((val,index)=>console.log(index,val));

//fillter
// let arr=['jspang','技术胖','前端教程'];
 
// arr.filter(x=>console.log(x));

//some
//map
// let arr=[1,2,4];
 
// console.log(arr.map(x=>x+2));

//把变量转换为对象
// let name="jspang";
// let age= 20;
// var obj= {name,age};
// console.log(obj);


// let key='skill';
// var obj={
//     [key]:'web'
// }
// console.log(obj.skill);

// var obj={
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));  //3

//Symbol
// var a = new String;
// var b = new Number;
// var c = new Boolean;
// var d = new Array;
// var e = new Object; 
// var f= Symbol();
// console.log(typeof(d));

// var g = Symbol('jspang');
// console.log(g);
// document.write(g.toString());


//Sybol保护数据

// let obj={name:'jspang',skill:'web'};
// let age=Symbol();
// obj[age]=18;
// for (let item in obj){
//     console.log(obj[item]);
// } 
// console.log(obj)

// let obj={name:'liwenj',age:20};
// let skill=Symbol();
// Symbol[skill]='web';
// for(let item in obj){
// 	console.log(obj[item]);
// }
// console.log(obj)

// let json={
// 	name:'liwenj',
// 	skill:'web'
// }
// console.log(json.name);

// var map=new Map();
// map.set(json,'iam');
// console.log(map);

//map的增删改查
// let json={
// 	name:'liwenj',
// 	age:20
// }
// var map=new Map();
//map的增加
//map.set(json,'hello')
//map的查找
//// console.log(map.get(json.name));
//map的删除
//map.delete(json);
//console.log(map);

// var map=new Map();
// map.set('one',1);
// map.set('two',2);
// map.set('three',3);
// console.log(map)

// var map2=new Map([['one',1],['two',2],['three',3]]);
// console.log(map2)
// console.log(map2.length)
// console.log(map2.size);
// for(let item of map2){
// 	console.log(item);
// }

// var map = new Map();
//     map.set(Number('aa111'), 'isNaN');
//     map.set(Number('bb222'), 'also is NaN');
//     var n=map.get(NaN); 
//     console.log(n)


// var obj={
// 	add:function(val){
// 		return val+100;
// 	},
// 	name:'liwenj'
// };
// console.log(obj.name);
// console.log(obj.add(1));

// var pro=new Proxy({
// 	add:function(val){
// 		return val+100;
// 	},
// 	name:'liwenj'
// },
// 	{
// 		get:function(target,key,property){
// 			console.log('come in get');
// 			return target[key];
// 		}
// 	})
// console.log(pro.name);

//promise
// let state=1;

// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭--完成');
//     }else{
//         reject('洗菜做饭--出错');
//     }
// }


// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭--完成');
//     }else{
//         reject('坐下来吃饭--出错');
//     }
// }


// function step3(resolve,reject){
//     console.log('3.开始-收拾桌子洗完');
//      if(state==1){
//         resolve('收拾桌子洗完--完成');
//     }else{
//         reject('收拾桌子洗完--出错');
//     }
// }

// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);

// }).then(function(val){
//      console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
//     return val;
// });


//类

// class Coder{
//     name(val){
//         console.log(val);
//     }
// }
 
// let jspang= new Coder;
// jspang.name('jspang');

class Coder{
	name(val){
		console.log(val);
		return val;
	}
	skill(val){
		console.log(this.name('liwenj')+':'+'skill:'+val);

	}
}

// let jspang=new Coder;
// jspang.name('jspang');
// jspang.skill('web');

class htmler extends Coder{
 
}
 
let pang=new htmler;
pang.name('技术胖');