import bar from './bar.js';

function foo (invoker) {
	console.log(invoker + 'invoke foo.js');

	bar('foo.js');
}

export default foo;