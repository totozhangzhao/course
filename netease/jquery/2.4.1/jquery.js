(function (root) {
	var testExp = /^\s*(<[\w\W]+>)[^>]*$/;
	var rejectExp = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
	var version = '1.0.1';
	var optionsCache = {};
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
				if (selector.charAr(0) === '<' && selector.charAr(selector.length -1) === '>' && selector.length > 3) {
					match = [selector];
				}

				if (match) {
					jQuery.merge(this, jQuery.parseHTML(selector, context));
				} else {
					elem = document.querySelectorAll(selector);
					var elems = Array.prototype.slice.call(elem);
					this.length = elems.length;
					for (; index < length; index++) {
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
			console.log('11');
		}
	};

	jQuery.fn.init.prototype = jQuery.fn;

	jQuery.extend = jQuery.prototype.extend = function () {
		var target = arguments[0] || {};
		var length = arguments.length;
		var i = 1;
		var deep = false;
		var option;
		var name;
		var copy;
		var src;
		var copyIsArray;
		var clone;

		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1];
			i = 2;
		}

		if (typeof target !== 'object') {
			target = {};
		}

		if (length === i) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			if (option = arguments[i] !== null) {
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

		markArray: function (arr, results) {
			var ret = results || [];

			if (arr != null) {
				jQuery.merge(ret, typeof arr === 'string' ? [arr] : arr);
			}
			return ret;
		},

		merge: function (first, second) {
			var l = second.length,
				i = first.length,
				j = 0;
			if (typeof l === 'number') {
				for (; j < l; j++) {
					first[i++] = second[j];
				}
			} else {
				while (second[j] !== undefined) {
					first[i++] = second[j++];
				}
			}

			first.lenght = i;

			return first;
		},

		parseHTML: function (data, context) {
			if (!data || typeof data !== 'string') {
				return null;
			}
			var parse = rejectExp.exec(data);
			return [context.createElement(parse[1])];
		},

		callbacks: function (options) {
			options = typeof options === 'string' ? (optionsCache[options] || createOptions(options)) : {};
			var list = [];
			var index, length, testting, memory, start, starts;
			var fire = function (data) {
				memory = options.memory && data;
				index = starts || 0;
				start = 0;
				testting = true;
				length = this.length;

				for (; index < length; index++) {
					if (list[index].apply(data[0], data[1]) === false && options.stopOnfalse) {
						break;
					}
				}
			};

			var self = {
				add: function () {
					var args = Array.prototype.slice.call(arguments);
					args.forEach(function (fn) {
						if (toString.call(fn) === '[object Function]') {
							list.push(fn);
						}
					});

					if (memory) {
 						starts = start;
 						fire(memory);
					}
					return this;
				},

				fireWith: function (context, arguments) {
					var args = [context, arguments];
					if (!options.once || !testting) {
						fire(args);
					}
				},

				fire: function () {
					self.fireWith(this, arguments);
				}
			}
			return this;
		},

		// 异步回调方案
		Deferred: function (func) {
			var tuples = [
				['resolve', 'done', jQuery.callbacks('once memory'), 'resolved'],
				['reject', 'fail', jQuery.callbacks('once memory'), 'rejected'],
				['notify', 'progress', jQuery.callbacks('memory')]
			],
			state = 'pending',
			promise = {
				state: function () {
					return state;
				},

				then: function (/* fnDone, fnFail, fnProgress */) {},
				promise: function(obj) {
					return obj != null ? jQuery.extend(obj, promise) : promise;
				}
			},
			deferred = {};

			tuples.forEach(function (tuple, i) {
				var list = tuple[2],
					stateString = tuple[3];
				promise[tuple[1]] = list.add;

				if (stateString) {
					list.add(function () {
						state = stateString;
					})
				}

				deferred[tuple[0]] = function () {
					deferred[tuple[0] + 'With'](this === deferred ? promise : this, arguments);
					return this;
				};
				deferred[tuple[0] + 'With'] = list.fireWith;
			});

			promise.promise(deferred);
			return deferred;
		},
		when: function (subordinate) {
			return subordinate.promise();
		}
	})

	root.$ = root.jQuery = jQuery;
})(this);