"use strict"
// let name="adarsh";
// let age=22;
// age =23;
// console.log(`My name is ${name} and my age is ${age}`)
// const name="Adarsh"
// const age=33
// console.table([name,age,age,name]);
// let number =33; number
// let number =33n  //bigint
// let name = "adarsh"// string
// let char= 'a'//string
// let sym= Symbol("123");
// let isloggedIN = true;
// // console.(typeof(number),typeof(name),typeof isloggedIN,typeof char,typeof(sym));
// let str="33";
// console.log(typeof(str));
// let num = Number(str);
// console.log(typeof(num),num);
// let num=4444545;
// let str= String(num);
// console.log(str.length);
// let num=3
// let negnum=-num;
// console.log(negnum)
// console.log(1+2)//3
// console.log(1+"2");//12
// console.log(1+"2"+"2");//122
// console.log("2"+2+3)//223
// console.log(4+6+8+"3"+3+true);//18334//1833true
// console.log("3"+"3"+5);//335
// console.log(4+5+"7");//97

// let num=33;
// let str="33"
// console.log(num==str)//true
// console.log(num===str)//false

// // console.log("2">1)//true
// // console.log("44a">=5)//false 

// // console.log(null>=0)
// // let first_no ="44";
// // let second_n0="3";
// // let check = first_no*second_n0;
// // console.log(check, typeof check)//132 number

// const heros=[5,6,5,343,3,5];
// heros[4]=9;
// console.log(heros);
// const am=4;


// function printname(){
//     console.log("Adarsh");

// }
// printname()

// const printname=()=>{
//     console.log("adarsh");
// }
// printname()

// let myobj={
//     name:"Adarsh",
//     age:34,
//     islogged:true
// }
// console.log(Object.entries(myobj));

// let str="Adarsh Maurya"
// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.charAt(3))
// console.log(str.indexOf('r'))
// console.log(str.trim(str).length)
// console.log(str.split(" "))
// console.log(str.slice(1,5))
// console.log(str.includes('a'));
// console.log(str.substring(1,9));
// console.log(str.replace('a','t'))
// console.log(str);

// const num=1000;
// let str=num.toString();
// console.log(str)
// console.log(typeof num)
// // console.log(typeof str)
// const num1=32534.3426;
// console.log(num1.toFixed(2));

// const num=10000000000;
// console.log(num.toLocaleString());

// const num =5.56;
// console.log(Math.round(num));

// const num =5.16;
// console.log(Math.ceil(num));
// const num =5.96;
// console.log(Math.floor(num));

// // console.log(Math.abs(9-22));

// console.log(Math.floor(Math.random()*10+1))

//10-20
// console.log(Math.floor(Math.random()*(20-10)+1)+10)
// console.log(Math.pow(3,2));
// console.log(Math.sqrt(1567).toFixed(2))
// console.log(Math.min(55,6))
// console.log(Math.max(55,6))
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)

// let todayDate= new Date();
// console.log(todayDate.getDay())
// console.log(todayDate.getFullYear())

// let myDate = new Date('10-24-2001');
// console.log(myDate);

// let timestamp=Date.now();
// console.log(Math.floor(timestamp/1000/60/60/24/365))

let arr=[];
// console.log(typeof arr)
// arr.push(1);
// arr.push(2)
// arr.push(3)
// arr.push(4)
// arr.push(6)
// arr.push(8)
// console.log(arr)
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr)

// arr.unshift(1)
// arr.unshift(2)
// arr.unshift(3)
// arr.unshift(4)
// arr.unshift(5)
// // console.log(arr);
// // arr.shift()
// // console.log(arr);


// console.log(arr.length)
// console.log(arr.includes(5))
// console.log(arr[3]);

// let arr1=[1,2,3,4,5,6];
// let arr2=[7,8,9,10];
// arr2.push(arr1);
// let arr3= (arr1+arr2); //1,2,3,4,5,67,8,9,10
// console.log(arr2); [1,2,3,4,5,6,[7,8,9,10]]
// let arr3=arr1.concat(arr2);
// console.log(arr3);

// let arr3=[...arr1,...arr2]
// console.log(arr3)

// let newarr=[1,2,3,4,[5,6,7,8],[4,4,5,[4,54,5,6,]]];
// let flatarr=newarr.flat(2);
// console.log(flatarr);
// let x="jsdlkjf";
// console.log(Array.isArray(x))
// console.log(Array.from(x));
// let a=3,b=4,c=6;
// console.log(Array.of(a,b,c));

 let sym=Symbol('2342')
// console.log(typeof sym);

let obj1={
    name:"Adarsh",
    age:33,
    "full name":"Adarsh maurya",
    [sym]:"key1",
    greeting: function(){
        console.log(`hello ${this.name}`);
        
    }
}
// obj1.greeting()

// obj1.greeting();


//Object.freeze(obj1);
// obj1.age=44;
// console.log(obj1);

const user= new Object({
    'name':"adarsh",
    'age':33,
    'lang':"Hindi"
})
console.log(user["name"]);
console.log(user["lang"])
//my name is adarsh maurya


