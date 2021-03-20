import {utilsFunctionModule, utilsArrayModule} from './libs/utils.js';

const {myInstanceof,deepClone} = utilsFunctionModule;



let aaa = { age: 18 };
function test() {
  console.log(this);
  console.log(arguments);
}
test.apply(aaa, ["hh", "cc"]);
console.log("-------------------");
test.myApply(aaa, [1,'c']);

// let obj = {
//   age:20
// }
// function test(...name){
//   this.c = '3'
//   console.log(this);
//   console.log(arguments);
//   console.log(name+'的年龄是：'+this.age);
// }
// test.prototype.say = function (){
//   console.log('哈哈');
// }
//
//
// const t = test.myBind(obj,'jack')
// console.log(t('mack'));
// const newT = new t()
// console.log(newT);
// console.log(newT.say());


// 测试 myInstanceof
// console.log(myInstanceof([],Array));
// console.log(myInstanceof([],Object));
// console.log(myInstanceof([],Function));

let arr = [{name: 'jack', age: 18}, {name: 'mark', age: 19}, {name: 'zed', age: 20}];
let arr2 = [{name: 'jack', age: 18}, {name: 'mark', age: 19}, {name: 'zed', age: 20}];
let obj = {a: 1};

// 测试 myForEach
// arr.myForEach(function (item,index,arr){
//   console.log(item,index,arr);
//   console.log(this.a);
// },obj)
// console.log('-------------------');
// arr.forEach(function (item,index,arr){
//   console.log(item,index,arr);
//   console.log(this.a);
// },obj)

// 测试 myMap
// let newArr = arr.map(function (item,index,array){
//   console.log(item,index,array);
//   item.age += 100
//   return index
//
// })
// console.log(newArr);
//
// console.log('--------------------------------');
//
// let newArr2 = arr2.myMap(function (item,index,array){
//   console.log(item,index,array);
//   item.age += 100
//   return index
// })
// console.log(newArr2);

// 测试 myFilter
// let newArr = arr.filter(function (item,index,arr){
//   return item.age < 20
// })
// console.log(newArr);
//
// let newArr2 = arr2.myFilter(function (item,index,arr){
//   return item.age < 20
// })
// console.log(newArr2);

// 测试 myEvery
// let newArr = arr.every(function (item,index,arr){
//   return item.age < 20
// })
// console.log(newArr);
// console.log('---------------------');
// let newArr2 = arr2.myEvery(function (item,index,arr){
//   return item.age < 20
// })
// console.log(newArr2);

// 测试 mySome
// let newArr = arr.some(function (item,index,arr){
//   return item.age < 20
// })
// console.log(newArr);
// console.log('---------------------');
// let newArr2 = arr2.mySome(function (item,index,arr){
//   return item.age < 20
// })
// console.log(newArr2);


// 测试 myReduce
// let initialValue = [{name: 'zzz', age: 16}];
// let newArr = arr.reduce(function (prev, item, index, arr) {
//   item.age >= 16 && prev.push(item);
//   return prev;
// }, initialValue);
// console.log(newArr);
//
// console.log('---------------------');
//
// let initialValue2 = [{name: 'zzz', age: 16}];
// let newArr2 = arr2.myReduce(function (prev, item, index, arr) {
//   item.age >= 16 && prev.push(item);
//   return prev;
// }, initialValue2);
// console.log(newArr2);

// 测试 myReduceRight
// let initialValue = [{name: 'zzz', age: 16}];
// let newArr = arr.reduceRight(function (prev, item, index, arr) {
//   item.age >= 16 && prev.push(item);
//   return prev;
// }, initialValue);
// console.log(newArr);
//
// console.log('---------------------');
//
// let initialValue2 = [{name: 'zzz', age: 16}];
// let newArr2 = arr2.myReduceRight(function (prev, item, index, arr) {
//   item.age >= 16 && prev.push(item);
//   return prev;
// }, initialValue2);
// console.log(newArr2);


// 测试  深拷贝 deepClone
// let object = {name:'zed',age:18,hobby:{play:1,eat:2}}
// let newObject = deepClone(object)
// newObject.hobby.eat = 3
// console.log(object);
// console.log(newObject);