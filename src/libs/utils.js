const utilsFunctionModule = ((Function) => {
  Function.prototype.myCall = function (context) {
    context = context ? Object(context) : window;
    let uniqueKey = new Date().getTime().toString();
    context[uniqueKey] = this;
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
      args.push('arguments[' + i + ']');
    }

    const result = eval('context[uniqueKey](' + args + ')');
    delete context[uniqueKey];
    return result;
  };

  Function.prototype.myApply = function (context, args) {
    context = context ? Object(context) : window;
    let uniqueKey = new Date().getTime().toString();
    context[uniqueKey] = this;
    if (typeof args === 'number' || typeof args === 'string' || typeof args === 'boolean') {
      throw  new TypeError('CreateListFromArrayLike called on non-object');
    }
    if (!args || Array.isArray(args) === false) {
      return context[uniqueKey]();
    }

    // 证明args是一个数组了，
    let result = eval('context[uniqueKey](' + args + ')');
    delete context[uniqueKey];
    return result;
  };

  Function.prototype.myBind = function (context) {
    let _this = this,
      // bind()传的参数列表
      args = [].slice.call(arguments, 1), // 去掉第一个，因为第一个是this
      _tempFn = function () {};

    let newFn = function () {
      // 返回的新函数的参数列表
      let newArgs = [].slice.call(arguments);
      return _this.apply(this instanceof newFn ? this : context, args.concat(newArgs));
    };
    // newFn.prototype = this.prototype  // 这个共用了一个原型，不太好
    _tempFn.prototype = this.prototype;
    newFn.prototype = new _tempFn();
    return newFn;
  };

  function myInstanceof(target, type) {
    target = target.__proto__;
    type = type.prototype;
    while (true) {
      if (target === null) {
        return false;
      }
      if (target === type) {
        return true;
      }
      target = target.__proto__;
    }
  }

  return {myInstanceof};
})(Function);


const utilsArrayModule = ((Array) => {
  Array.prototype.myForEach = function (callback) {
    let arg2 = arguments[1] || window;
    for (let i = 0; i < this.length; i++) {
      callback.apply(arg2, [this[i], i, this]);
    }
  };

  Array.prototype.myMap = function (callback) {
    let arg2 = arguments[1] || window;
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      // 这里需要对对象进行深拷贝，这里就简单写了
      newArr.push(callback.apply(arg2, [this[i], i, this]));
    }

    return newArr;
  };

  Array.prototype.myFilter = function (callback) {
    let arg2 = arguments[1] || window;
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      callback.apply(arg2, [this[i], i, this]) ? newArr.push(this[i]) : newArr;
    }
    return newArr;
  };

  Array.prototype.myEvery = function (callback) {
    let arg2 = arguments[1] || window;
    let gate = true;
    for (let i = 0; i < this.length; i++) {
      if (!callback.apply(arg2, [this[i], i, this])) {
        gate = false;
        break;
      }
    }
    return gate;
  };

  Array.prototype.mySome = function (callback) {
    let arg2 = arguments[1] || window;
    let gate = false;
    for (let i = 0; i < this.length; i++) {
      if (callback.apply(arg2, [this[i], i, this])) {
        gate = true;
        break;
      }
    }
    return gate;
  };

  Array.prototype.myReduce = function (callback, initialValue) {
    for (let i = 0; i < this.length; i++) {
      initialValue = callback(initialValue, this[i], i, this);
    }
    return initialValue;
  };

})(Array);
export {utilsFunctionModule, utilsArrayModule};