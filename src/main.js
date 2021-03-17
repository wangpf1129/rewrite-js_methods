import utilsModule from './libs/utils.js';

let obj = {
  age:20
}
function test(...name){
  this.c = '3'
  console.log(this);
  console.log(arguments);
  console.log(name+'的年龄是：'+this.age);
}
test.prototype.say = function (){
  console.log('哈哈');
}


const t = test.myBind(obj,'jack')
console.log(t('mack'));
const newT = new t()
console.log(newT);
console.log(newT.say());
