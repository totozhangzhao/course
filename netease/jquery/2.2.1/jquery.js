(function (root) {
	var rejectExp = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
	var version = '1.0.0';
	var jQuery = function (selector, context) {
		return new jQuery.prototype.init(selector, context);
	};

	jQuery.fn = jQuery.prototype = {
		length: 0,
		jquery: version,
		selector: '',
		init: function (selector, context) {
			context = context || document;
			var match, elem, index = 0;

			if (!selector) {
				return this;
			}

			if (typeof selector === 'string') {
				if (selector.charAt(0) === '<' && selector.charAt(selector.length -1) === '>' && selector.length >= 3) {
					match = [selector];
				}

				if (match) {
					jQuery.merge(this, jQuery.parseHTML(selector, context));
				} else {
					elem = document.querySelectorAll(selector);
					var elems = Array.prototype.slice.call(elem);
					this.length = elems.length;

					for (; index < elems.length; index++) {
						this[index] = elems[index];
					}

					this.context = context;
					this.selector = selector;
				}
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
			}
		},

		css: function () {
			console.log('ddd')
		}
	};

	jQuery.fn.init.prototype = jQuery.fn;

	jQuery.extend = jQuery.prototype.extend = function() {
		var target = arguments[0] || {}; 
		var length = arguments.length;
		var i = 1;
		var deep = false; //默认为浅拷贝 
		var option;
		var name;
		var copy;
		var src;
		var copyIsArray;
		var clone;

		if (typeof target === "boolean") { 
			deep = target;
			target = arguments[1]; 
			i = 2;
		}

		if (typeof target !== "object") {
			target = {};
		}

		if (length == i) {
			target = this;
			i--; //0   
		}
 
		for (; i < length; i++) {
			if ((option = arguments[i]) !== null) {
				for (name in option) {
					src = target[name]; 
					copy = option[name];
					if (deep && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) { 
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else { 
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
						target[name] = jQuery.extend(deep, clone, copy);
					} else if (copy !== undefined) {
						target[name] = copy; 
					}
				}
			}
		}
		return target;
	};

	jQuery.extend({
		isPlainObject: function (obj) {
			return toString.call(obj) === '[object Object]';
		},

		isArray: function (obj) {
			return toString.call(obj) === '[object Array]';
		},

		isFunction: function (fn) {
			return toString.call(fn) === '[object Function]';
		},

		merge: function (first, second) {
			var l = second.length,
				i = first.length,
				j = 0;

				console.log(first);//
				console.log(i);//
			
			if (typeof l === 'number') {
				for (; j < l; j++) {
					first[i++] = second[j];
				}
			} else {
				while (second[j] !== undefined) {
					first[i++] = second[j++];
				}
			}

			first.length = i;

			return first;
		},

		parseHTML: function (data, context) {
			if (!data || typeof data !== 'string') {
				return null;
			}

			var parse = rejectExp.exec(data);
			return [context.createElement(parse[1])];
		}
	});

	root.$ = root.jQuery = jQuery;
})(this);	