# webpack开发 与 使用webpack-dev-server 的区别

webpack会每次都生成一个bundle.js文件，而webpack-dev-server只是将打包结果放在内存中，并不会写入实际的bundle.js，每次webpack-dev-server接收到请求时都只是将内存中的打包结果返回给浏览器。

# Browserify

一个运行在Nodejs环境下的模块打包工具，它可以将CommonJS模块打包为浏览器可以运行的单个文件，这意味着客户端的代码也可以遵循CommonJS标准来编写了。

# CommonJS里的module对象

模块会有一个module对象用来存放其信息，这个对象中有一个属性loaded用于记录该模块是否被加载过。它的值默认为false，当模块第一次被加载和执行过后会置为true，后面再次加载时检查到module.loaded为true，则不会再次执行模块代码

# CommonJS 与 ES6 Module的区别

前者建立模块依赖关系是在运行时，后者是在编译时；在模块导入方面，CommonJS导入的是值拷贝，ES6 Module导入的是只读的变量映射；ES6 Module通过其静态特性可以进行编译过程的优化，并且具备处理循环依赖的能力。