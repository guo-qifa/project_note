function extend() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object 
			for ( name in options ) {
				// 目标对象上是否有这个属性
				src = target[ name ];
				// 扩展的对象属性
				copy = options[ name ];
				console.log(target, copy);
				console.log(target == copy);
				// Prevent never-ending loop  防止无休止的循环
				if ( target === copy ) {
					console.log(target, copy);
					continue;
				}

				// Recurse if we're merging plain objects or arrays  递归属性，深度扩展
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

				//	Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

 var obj = {name: 1};
 var obj1 = {name: {name: 1}};
 var obj2 = {name1: 2}
extend(true, obj, obj1, obj2);
console.log(obj)