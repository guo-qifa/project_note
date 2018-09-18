

const  utils = {
  //iterator:(value: T, index: number, obj_arr: Object|T[]) => boolean|void 
  each<T>(obj_arr:Object|Array<T>, iterator: Function ): void|boolean {
    if(obj_arr==null) return;
    if(Object.prototype.toString.call(obj_arr) === '[object Array]') {
      for(const i in obj_arr) {
        if(iterator.call(null, obj_arr[i], Number(i), obj_arr) === false) {
           return false;
        }
      }
    } else {
      if(Object.prototype.toString.call(obj_arr) === '[object Object]') {
        for(const k in obj_arr) {
          if (iterator.call(null, obj_arr[k], k, obj_arr) === false) {
            return false;
          }
        }
      }
    }
  },
  // true 覆盖 false 不覆盖
  extend(...arg) {
    const args = arguments;
    const notVover = this.isBoolean(args[args.length - 1]) ? args[args.length - 1]: false;
    const len = this.isBoolean(args[args.length - 1]) ? args.length - 1 : args.length;
    const ar = this.toArray(args).slice(1, len);
    // const ar = Array.from(arg).slice(1, len);  // ts 中不支持 from 方法
    for(const i in ar) {
      const cur = ar[i];
      for(const k in cur) {
        if(!notVover || !arg[0].hasOwnProperty(k)) {
          arg[0][k] = cur[k];
        }
      }
    }
    // for (let i = 1; i < len; i++) {
    //   const x = args[i];
    //   for (const k in x) {
    //     if (!notVover || !arg[0].hasOwnProperty(k)) {
    //       arg[0][k] = x[k];
    //     }
    //   }
    // }
    return arg[0];
  },
  deepExtend(...arg) {
    const args = arguments;
    const notVover = this.isBoolean(args[args.length - 1]) ? args[args.length - 1]: false;
    const len = this.isBoolean(args[args.length - 1]) ? args.length - 1 : args.length;
    const ar = this.toArray(args).slice(1, len);
    for(const i in ar) {
      const cur = ar[i];
      for(const k in cur) {
        if(!notVover || !arg[0].hasOwnProperty(k)) {
          // 判断 当前的是否是对象和源对象存在的相同的属性进行递归
          if(this.isObject(arg[0][k]) && this.isObject(cur[k])) {
            this.deepExtend(arg[0][k], cur[k], notVover);
          } else {
            arg[0][k] = cur[k];
          }
        }
      }
    }
    return arg[0];
  },
  clone(source) {
    let target = {};
    this.extend(target,source);
    return target;
  },
  copy(source) {
    if (typeof source !== 'object') return source;
    if (typeof source === 'function') return null;
    return JSON.parse(JSON.stringify(source));

  },
  flatten(arr): number[] {
    let result:number[] = [];
    const  length = arr.length;
    let  i;
    for (i = 0; i < length; i++) {
      if (arr[i] instanceof Array) {
        result = result.concat(utils.flatten(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  },
  toArray<T>(arg:T[]):T[] {
    try {
      return Array.prototype.slice.call(arg);
    } catch (e) {
      let arr = [];
      for (let i = 0, len = arg.length; i < len; i++) {
        //arr.push(s[i]);  
        arr[i] = arg[i]; 
      }
      return arr;
    } 
  }
};
utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object', 'Boolean'], function (v) {
  utils['is' + v] = function typeCheck(obj) {
    return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
  };
});
utils.each([{name1:'1'},1,2],function(v , k, o){
  console.log(v,k,o)
});
const source = {
  key1: {
    key2: 'value2'
 },
key3: 'value3'
};
// const obj ={};
// utils.extend(obj, source);
// console.log(obj);

// const obj1 = utils.clone(source);
// console.log(obj1);

const obj2 = utils.copy(source);
console.log(obj2)
