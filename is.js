;(function (name, definition) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = definition();
    } else if (typeof window !== 'undefined') {
        // Browser
        this[name] = definition();
    }
})('is', function () {
	/**
	 * Object#toString()
	 */
	var toString = Object.prototype.toString;

	/**
	 * Object#hasOwnProperty()
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Array#isArray()
	 */
	var isArray = Array.isArray;

	/**
	 * Generator Function
	 */
	var generator = function* () {};

	function is () {
		if (!(this instanceof is)) return new is;
	}

	/**
	 * Five Primitive Data Types
	 */
	is.prototype.Null = function (obj) {
		return obj === null;
	};

	is.prototype.Undefined = function (obj) {
		return obj === void 0;
	};

	is.prototype.Boolean = function (obj) {
		return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
	};

	is.prototype.Number = function (obj) {
	  	return !isNaN(parseFloat(obj)) && isFinite(obj);
	};

	is.prototype.String = function (obj) {
		return toString.call(obj) == '[object String]';
	};

	/**
	 * Type check utilities
	 */
	is.prototype.Object = function (obj) {
		return obj === Object(obj);
	};

	is.prototype.Array = isArray || function (obj) {
		return toString.call(obj) == '[object Array]';
	};

	is.prototype.regex = function (obj) {
		return toString.call(obj) === '[object RegExp]';
	};

	if (typeof (/./) !== 'function') {
		is.prototype.Function = function (obj) {
			return typeof obj === 'function';
		};
	}

	if (!is.prototype.Arguments) {
		is.prototype.Arguments = function (obj) {
			return !!(obj && hasOwnProperty.call(obj, 'callee'))
		};
	}

	is.prototype.Element = function (obj) {
		return !!(obj && obj.nodeType === 1);
	};

	is.prototype.Empty = function (obj) {
		if (obj == null) return true;
		if (is.prototype.Array(obj) || is.prototype.String(obj)) return obj.length === 0;
		for (var key in obj) if (hasOwnProperty(obj, key)) return false;
		return true;
	};

	is.prototype.Finite = function (obj) {
		return isFinite(obj) && !isNaN(parseFloat(obj));
	};

	is.prototype.Generator = function (obj) {
		return typeof obj.next === 'function' && typeof obj.throw === 'function';
	};

	is.prototype.GeneratorFunction = function (obj) {
		return obj && obj.constructor === generator.constructor;
	};

	is.prototype.ArrayLike = function (obj) {
		var length = obj.length;
		if (obj.nodeType === 1 && length) return true;
		if (obj && typeof obj === 'object' && this.Finite(length) &&
			length >= 0 && length === Math.floor(length) && length < 4294967296) return true;
		return false;
	}

	/**
	 * For Browser
	 */
	is.prototype.Node = function (obj) {
		return (
			typeof Node === 'object' ? obj instanceof Node :
			obj && typeof obj === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string'
		);
	};

	is.prototype.Element = function (obj) {
		return (
			typeof HTMLElement === 'object' ? obj instanceof HTMLElement :
			obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string'
		);
	};

	is.prototype.Window = function (obj) {
		return obj != null && obj === obj.window;
	};


	/**
	 * Environment Check Utilities
	 */
	if (typeof window !== 'undefined') {
		var hasNavigator = 'navigator' in window;
		var	vendor = hasNavigator && navigator.vendor || '';
		var	userAgent = hasNavigator && navigator.userAgent || '';
		var	appVersion = hasNavigator && navigator.appVersion || '';

		/**
		 * Browser Check 
		 */
		is.prototype.Chrome = function () {
			return /chrome|chromium/i.test(userAgent) && /google inc/i.test(vendor);
		};

		is.prototype.Firefox = function () {
			return /firefox/i.test(userAgent);
		};

		is.prototype.Opera = function () {
			return /opr/i.test(userAgent);
		};

		is.prototype.Safari = function () {
			return /safari/i.test(userAgent) && /apple computer/i.test(vendor);
		};

		is.prototype.ie = function (version) {
			if (typeof version === 'undefined') return /msie/i.test(userAgent);
			return new RegExp('msie ' + version, "i").test(userAgent);
		};

		/**
		 * Mobile Device Check
		 */
		is.prototype.Mobile = function () {
			return this.iphone() || this.ipod() || this.AndroidPhone() || this.BlackBerry || this.WindowsPhone;
		};

		is.prototype.Tablet = function () {
			return this.ipad() || this.AndroidTablet() || this.WindowsTablet();
		};

		is.prototype.iphone = function () {
			return /iphone/i.test(userAgent);
		};

		is.prototype.ipad = function () {
			return /ipad/i.test(userAgent);
		};

		is.prototype.ipod = function () {
			return /ipod/i.test(userAgent);
		};

		is.prototype.ios = function () {
			return this.iphone() || this.ipad() || this.ipod();
		};

		is.prototype.Android = function () {
			return /android/i.test(userAgent);
		};

		is.prototype.AndroidPhone = function () {
			return this.Android() && /mobile/i.test(userAgent);
		};

		is.prototype.AndroidTablet = function () {
			return this.Android() && /tablet/i.test(userAgent);
		};

		is.prototype.BlackBerry = function () {
			return /blackberry/i.test(userAgent);
		};

		is.prototype.WindowsPhone = function () {
			return this.Windows() && /phone/i.test(userAgent);
		};

		is.prototype.WindowsTablet = function () {
			return this.Windows() && /touch/i.test(userAgent) && !this.WindowsPhone();
		};

		/**
		 * Desktop Check
		 */
		is. prototype.Desktop = function () {
			return !this.Mobile() && !this.Tablet();
		};

		is.prototype.Windows = function () {
			return /win/i.test(appVersion);
		};

		is.prototype.Mac = function () {
			return /mac/i.test(appVersion);
		};

		is.prototype.Linux = function () {
			return /linux/i.test(appVersion);
		};
	}

	/**
	 * Useful Check Utilities
	 */
	is.prototype.inArray = function (val, arr) {
		if (!this.Array(arr)) return false;
		for (var i = 0; i <  arr.length; i++) {
			if (arr[i] === val) return true;
		}
		return false;
	};

	is.prototype.Equal = function (a, b) {
		return eq(a, b, [], []);
	};
	/*
	 * underscore.js
	 */
	var eq = function(a, b, aStack, bStack) {
		// Identical objects are equal. `0 === -0`, but they aren't identical.
		// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
		if (a === b) return a !== 0 || 1 / a == 1 / b;
		// A strict comparison is necessary because `null == undefined`.
		if (a == null || b == null) return a === b;
		// Compare `[[Class]]` names.
		var className = toString.call(a);
		if (className != toString.call(b)) return false;
		switch (className) {
		  // Strings, numbers, dates, and booleans are compared by value.
		  case '[object String]':
		    // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
		    // equivalent to `new String("5")`.
		    return a == String(b);
		  case '[object Number]':
		    // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
		    // other numeric values.
		    return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
		  case '[object Date]':
		  case '[object Boolean]':
		    // Coerce dates and booleans to numeric primitive values. Dates are compared by their
		    // millisecond representations. Note that invalid dates with millisecond representations
		    // of `NaN` are not equivalent.
		    return +a == +b;
		  // RegExps are compared by their source patterns and flags.
		  case '[object RegExp]':
		    return a.source == b.source &&
		           a.global == b.global &&
		           a.multiline == b.multiline &&
		           a.ignoreCase == b.ignoreCase;
		}
		if (typeof a != 'object' || typeof b != 'object') return false;
		// Assume equality for cyclic structures. The algorithm for detecting cyclic
		// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
		var length = aStack.length;
		while (length--) {
		  // Linear search. Performance is inversely proportional to the number of
		  // unique nested structures.
		  if (aStack[length] == a) return bStack[length] == b;
		}
		// Objects with different constructors are not equivalent, but `Object`s
		// from different frames are.
		var aCtor = a.constructor, bCtor = b.constructor;
		if (aCtor !== bCtor && !(is.prototype.Function(aCtor) && (aCtor instanceof aCtor) &&
		                         is.prototype.Function(bCtor) && (bCtor instanceof bCtor))
		                    && ('constructor' in a && 'constructor' in b)) {
		  return false;
		}
		// Add the first object to the stack of traversed objects.
		aStack.push(a);
		bStack.push(b);
		var size = 0, result = true;
		// Recursively compare objects and arrays.
		if (className == '[object Array]') {
		  // Compare array lengths to determine if a deep comparison is necessary.
		  size = a.length;
		  result = size == b.length;
		  if (result) {
		    // Deep compare the contents, ignoring non-numeric properties.
		    while (size--) {
		      if (!(result = eq(a[size], b[size], aStack, bStack))) break;
		    }
		  }
		} else {
		  // Deep compare objects.
		  for (var key in a) {
		    if (hasOwnProperty.call(a, key)) {
		      // Count the expected number of properties.
		      size++;
		      // Deep compare each member.
		      if (!(result = hasOwnProperty.call(b, key) && eq(a[key], b[key], aStack, bStack))) break;
		    }
		  }
		  // Ensure that both objects contain the same number of properties.
		  if (result) {
		    for (key in b) {
		      if (hasOwnProperty.call(b, key) && !(size--)) break;
		    }
		    result = !size;
		  }
		}
		// Remove the first object from the stack of traversed objects.
		aStack.pop();
		bStack.pop();
		return result;
	};

	return new is;
});