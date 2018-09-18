var utils = {
    //iterator:(value: T, index: number, obj_arr: Object|T[]) => boolean|void 
    each: function (obj_arr, iterator) {
        if (obj_arr == null)
            return;
        if (Object.prototype.toString.call(obj_arr) === '[object Array]') {
            for (var i in obj_arr) {
                if (iterator.call(null, obj_arr[i], Number(i), obj_arr) === false) {
                    return false;
                }
            }
        }
        else {
            if (Object.prototype.toString.call(obj_arr) === '[object Object]') {
                for (var k in obj_arr) {
                    if (iterator.call(null, obj_arr[k], k, obj_arr) === false) {
                        return false;
                    }
                }
            }
        }
    },
    // true 覆盖 false 不覆盖
    extend: function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        var args = arguments;
        var notVover = this.isBoolean(args[args.length - 1]) ? args[args.length - 1] : false;
        var len = this.isBoolean(args[args.length - 1]) ? args.length - 1 : args.length;
        var ar = this.toArray(args).slice(1, len);
        // const ar = Array.from(arg).slice(1, len);  // ts 中不支持 from 方法
        for (var i in ar) {
            var cur = ar[i];
            for (var k in cur) {
                if (!notVover || !arg[0].hasOwnProperty(k)) {
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
    deepExtend: function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        var args = arguments;
        var notVover = this.isBoolean(args[args.length - 1]) ? args[args.length - 1] : false;
        var len = this.isBoolean(args[args.length - 1]) ? args.length - 1 : args.length;
        var ar = this.toArray(args).slice(1, len);
        for (var i in ar) {
            var cur = ar[i];
            for (var k in cur) {
                if (!notVover || !arg[0].hasOwnProperty(k)) {
                    // 判断 当前的是否是对象和源对象存在的相同的属性进行递归
                    if (this.isObject(arg[0][k]) && this.isObject(cur[k])) {
                        this.deepExtend(arg[0][k], cur[k], notVover);
                    }
                    else {
                        arg[0][k] = cur[k];
                    }
                }
            }
        }
        return arg[0];
    },
    clone: function (source) {
        var target = {};
        this.extend(target, source);
        return target;
    },
    copy: function (source) {
        if (typeof source !== 'object')
            return source;
        if (typeof source === 'function')
            return null;
        return JSON.parse(JSON.stringify(source));
    },
    toArray: function (arg) {
        try {
            console.log(arg);
            return Array.prototype.slice.call(arg);
        }
        catch (e) {
            var arr = [];
            for (var i = 0, len = arg.length; i < len; i++) {
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
utils.each([{ name1: '1' }, 1, 2], function (v, k, o) {
    console.log(v, k, o);
});
var source = {
    key1: {
        key2: 'value2'
    },
    key3: 'value3'
};
// var obj ={};
// utils.extend(obj, source);
// console.log(obj);
// var obj1 = utils.clone(source);
// console.log(obj1);
var obj2 = utils.copy(source);
console.log(obj2);
