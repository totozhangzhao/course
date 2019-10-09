(function (root) {
	var jQuery = function () {
		return new jQuery.prototype.init();
	};

	jQuery.fn = jQuery.prototype = {
		init: function () {

		},
		css: function () {

		}
	};

	jQuery.fn.extend = jQuery.extend = function () {
		var target = arguments[0];
		var length = arguments.length;
		var i = 1;
		var option, name, clone, copy, deep, isArray;

		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1];
			i = 2;
		}

		if (typeof target != 'object') {
			target = {};
		}

		if (length === 1) {
			target = this;
			i--;
		}

		// 浅拷贝 深拷贝
		for (; i < length; i++) {
			if ((option = arguments[i]) != null) {
				for (name in option) {
					copy = option[name];
					src = target[name];

					if (deep && (jQuery.isPlainObject(copy) || (isArray = jQuery.isArray(copy)))) {
						if (isArray) {
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						target[name] = jQuery.extend(deep, clone, copy);
					} else {
						target[name] = option[name];
					}
				}
			}
		}

		return target;
	};

	jQuery.fn.init.prototype = jQuery.fn;

	jQuery.extend({
		isPlainObject: function (obj) {
			return toString.call(obj) === '[object Object]';
		},

		isArray: function (obj) {
			return toString.call(obj) === '[object Array]';
		}
	});

	root.$ = root.jQuery = jQuery;
})(this);