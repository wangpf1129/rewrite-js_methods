const utilsModule = ((Function) => {
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

})(Function);

export default utilsModule;