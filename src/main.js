import {utilsFunctionModule,utilsArrayModule} from './libs/utils.js';
const {myInstanceof} = utilsFunctionModule

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
console.log(myInstanceof([],Array));
console.log(myInstanceof([],Object));
console.log(myInstanceof([],Function));


// 测试 myForEach
// let arr = [{name:'jack',age:18},{name:'mark',age:19},{name:'zed',age:20}]
// let obj = {a:1}
// arr.myForEach(function (item,index,arr){
//   console.log(item,index,arr);
//   console.log(this.a);
// },obj)
// console.log('-------------------');
// arr.forEach(function (item,index,arr){
//   console.log(item,index,arr);
//   console.log(this.a);
// },obj)