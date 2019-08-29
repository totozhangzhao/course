import foo from './foo.js';

let invoked = false;

function bar (invoker) {
	if (!invoked) {
		invoked = true;

		console.log(invoker + 'invoke bar.js');
		foo('bar.js');
	}
}

export default bar;