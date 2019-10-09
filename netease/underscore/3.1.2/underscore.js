(function (root) {
	var push = Array.prototype.push;

	var _ = function (obj) {
		if (obj instanceof _) {
			return obj;
		}

		if (!(this instanceof _)) {
			return new _(obj);
		}

		this.wrapped = obj;
	};

	// 数组去重
	_.unique = function (arr, callback) {
		var ret = [];
		var target, i = 0;

		for (; i < arr.length; i++) {
			target = callback ? callback(arr[i]) : arr[i];

			if (ret.indexOf(target) === -1) {
				ret.push(target);
			}
		}

		return ret;
	};	

	// 开启链式调用
	_.chain = function (obj) {
		var instance = _(obj);
		instance._chain = true;
		return instance;
	};

	// 类型检测
	_.isArray = function (array) {
		return toString.call(array) === '[object Array]';
	};	

	_.prototype.value = function () {
		return this._wrapped;
	};

	_.functions = function (obj) {
		var result = [];
		var key;
		for (key in obj) {
			result.push(key);
		}
		return result;
	};

	// 循环
	_.each = function (target, callback) {
		var key, i = 0;

		if (_.isArray(target)) {
			var length = target.length;
			for (; i < length; i++) {
				callback.call(target, target[i], i);
			}
		} else {
			for (key in target) {
				callback.call(target, key, target[key]);
			}
		}
	};

	// 辅助函数 obj 数据结果
	var result = function (instance, obj) {
		return instance._chain ? _(obj).chain() : obj;
	};

	// mixin
	_.mixin = function (obj) {
		_.each(_.functions(obj), function(name) {
			var func = obj[name];

			_.prototype[name] = function () {
				var args = [this._wrapped];
				push.apply(args, arguments);
				return result(this, func.apply(this, args));
			};
		});
	};

	_.mixin = function (obj) {
		_.each(_.funtions(obj), function (name) {
			var func = obj[name];

			_.prototype[name] = function () {
				var args = [this._wrapped];
				push.apply(args, arguments);
				return result(this, func.apply(this, args));
			};
		});
	};

	_.mixin = function (obj) {
		_.each(_.functions(obj), function (name) {
			var func = obj[name];
			
			_.prototype[name] = function () {
				var args = [this._wrapped];
				push.apply(args, arguments);
				return result(this, func.apply(this, args));
			}
		});
	};

	_.mixin = function (obj) {
		_.each(_.functions(obj), function (name) {
			var func = obj[name];

			_.prototype[name] = function () {
				var args = [this._wrapped];
				push.apply(args, arguments);
				return result(this, func.apply(this, args));
			};
		});
	};

	root._ = _;
})(this);