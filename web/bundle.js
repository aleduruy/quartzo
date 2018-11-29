(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["quartzo"] = factory(require("react"), require("styled-components"));
	else
		root["quartzo"] = factory(root["react"], root["styled-components"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/styled-theming/index.js":
/*!**********************************************!*\
  !*** ./node_modules/styled-theming/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getThemeValue(name, props, values) {
  var value = (
    props.theme &&
    props.theme[name]
  );

  var themeValue;

  if (typeof value === 'function') {
    themeValue = value(values);
  } else {
    themeValue = values[value];
  }

  if (typeof themeValue === 'function') {
    return themeValue(props);
  } else {
    return themeValue;
  }
}

function theme(name, values) {
  return function(props) {
    return getThemeValue(name, props, values);
  };
}

theme.variants = function(name, prop, values) {
  return function(props) {
    var variant = props[prop] && values[props[prop]];
    return variant && getThemeValue(name, props, variant);
  };
};

module.exports = theme;


/***/ }),

/***/ "./src/assets/styles/border-radius.js":
/*!********************************************!*\
  !*** ./src/assets/styles/border-radius.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/styles/color.js":
/*!************************************!*\
  !*** ./src/assets/styles/color.js ***!
  \************************************/
/*! exports provided: color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
var color = {
  white: '#fff',
  black: '#000',
  blackTranslucid: 'rgba(0,0,0,0.8)',
  primary: {
    acom: '#e60014',
    suba: '#00adef',
    shop: '#ff6914'
  },
  secondary: {
    acom: '#ffeb3b',
    suba: '#ffcb05',
    shop: '#781ED2'
  },
  error: {
    light: {
      acom: '#FFEBEE',
      suba: '#f8bbd0',
      shop: '#FFCDD2'
    },
    medium: {
      acom: '#e60014',
      suba: '#FF2B4E',
      shop: '#e60014'
    }
  },
  success: {
    light: {
      acom: '#DCEDC9',
      suba: '#dcedc8',
      shop: '#dcedc8'
    },
    medium: {
      acom: '#40cd28',
      suba: '#40cd28',
      shop: '#8bc34a'
    },
    dark: {
      acom: '#01a630'
    }
  },
  warning: {
    light: {
      acom: '#fbeec1',
      suba: '#ffecb3',
      shop: '#ffecb3'
    },
    medium: {
      acom: '#F2C832',
      suba: '#ffc107',
      shop: '#ffc400'
    }
  },
  info: {
    light: {
      acom: '#e1f5fe',
      suba: '#b3e5fc',
      shop: '#e8eaf6'
    },
    medium: {
      acom: '#24cbff',
      suba: '#00adef',
      shop: '#7fabfc'
    }
  },
  grey: {
    lighter: {
      acom: '#f1f1f1',
      suba: '#eee',
      shop: '#eee'
    },
    light: {
      acom: '#ccc',
      suba: '#ccc',
      shop: '#ccc'
    },
    medium: {
      acom: '#999',
      suba: '#999',
      shop: '#999'
    },
    dark: {
      acom: '#666',
      suba: '#666',
      shop: '#666'
    },
    darker: {
      acom: '#333',
      suba: '#333',
      shop: '#333'
    }
  }
};

/***/ }),

/***/ "./src/assets/styles/elevation.js":
/*!****************************************!*\
  !*** ./src/assets/styles/elevation.js ***!
  \****************************************/
/*! exports provided: elevation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elevation", function() { return elevation; });
var elevation = {
  xxs: {
    acom: '0 2px 6px rgba(0,0,0,0.1)',
    suba: '0 2px 6px rgba(0,0,0,0.1)',
    shop: '0 2px 6px rgba(0,0,0,0.1)'
  },
  xs: {
    acom: '0 1px 5px rgba(0,0,0,0.3)',
    suba: '0 1px 5px rgba(0,0,0,0.3)',
    shop: '0 1px 5px rgba(0,0,0,0.3)'
  },
  sm: {
    acom: '0 3px 12px rgba(0,0,0,0.4)',
    suba: '0 3px 12px rgba(0,0,0,0.4)',
    shop: '0 3px 12px rgba(0,0,0,0.4)'
  },
  md: {
    acom: '0px 5px 18px rgba(0,0,0,0.5)',
    suba: '0px 5px 18px rgba(0,0,0,0.5)',
    shop: '0px 5px 18px rgba(0,0,0,0.5)'
  },
  lg: {
    acom: '0px 8px 32px rgba(0,0,0,0.5)',
    suba: '0px 8px 32px rgba(0,0,0,0.5)',
    shop: '0px 8px 32px rgba(0,0,0,0.5)'
  }
};

/***/ }),

/***/ "./src/assets/styles/font-family.js":
/*!******************************************!*\
  !*** ./src/assets/styles/font-family.js ***!
  \******************************************/
/*! exports provided: fontFamily */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
var fontFamily = {
  light: "'Lato, Helvetica Arial, sans-serif'",
  dark: "'Lato, Helvetica Arial, sans-serif'"
};

/***/ }),

/***/ "./src/assets/styles/font-size.js":
/*!****************************************!*\
  !*** ./src/assets/styles/font-size.js ***!
  \****************************************/
/*! exports provided: fontSize, getfontSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getfontSize", function() { return getfontSize; });
var fontSize = {
  xxs: {
    acom: '12px',
    suba: '12px',
    shop: '12px'
  },
  xs: {
    acom: '14px',
    suba: '14px',
    shop: '14px'
  },
  sm: {
    acom: '16px',
    suba: '16px',
    shop: '16px'
  },
  md: {
    acom: '18px',
    suba: '18px',
    shop: '18px'
  },
  lg: {
    acom: '20px',
    suba: '20px',
    shop: '20px'
  },
  xl: {
    acom: '24px',
    suba: '22px',
    shop: '24px'
  },
  xxl: {
    acom: '30px',
    suba: '28px',
    shop: '28px'
  }
};
var getfontSize = function getfontSize(brand, size) {
  switch (size) {
    case 'xxs':
      return fontSize.xxs[brand];

    case 'xs':
      return fontSize.xs[brand];

    case 'sm':
      return fontSize.sm[brand];

    case 'md':
      return fontSize.md[brand];

    case 'lg':
      return fontSize.lg[brand];

    case 'xl':
      return fontSize.xl[brand];

    case 'xxl':
      return fontSize.xxl[brand];

    default:
      return fontSize.sm[brand];
  }
};

/***/ }),

/***/ "./src/assets/styles/index.js":
/*!************************************!*\
  !*** ./src/assets/styles/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _border_radius__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./border-radius */ "./src/assets/styles/border-radius.js");
/* harmony import */ var _border_radius__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_border_radius__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _border_radius__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _border_radius__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/assets/styles/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color__WEBPACK_IMPORTED_MODULE_1__["color"]; });

/* harmony import */ var _elevation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elevation */ "./src/assets/styles/elevation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elevation", function() { return _elevation__WEBPACK_IMPORTED_MODULE_2__["elevation"]; });

/* harmony import */ var _font_family__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./font-family */ "./src/assets/styles/font-family.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return _font_family__WEBPACK_IMPORTED_MODULE_3__["fontFamily"]; });

/* harmony import */ var _font_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./font-size */ "./src/assets/styles/font-size.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return _font_size__WEBPACK_IMPORTED_MODULE_4__["fontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getfontSize", function() { return _font_size__WEBPACK_IMPORTED_MODULE_4__["getfontSize"]; });

/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spacing */ "./src/assets/styles/spacing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spacing", function() { return _spacing__WEBPACK_IMPORTED_MODULE_5__["spacing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSpacing", function() { return _spacing__WEBPACK_IMPORTED_MODULE_5__["getSpacing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spacingStyles", function() { return _spacing__WEBPACK_IMPORTED_MODULE_5__["spacingStyles"]; });

/* harmony import */ var _text_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-transform */ "./src/assets/styles/text-transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textTransform", function() { return _text_transform__WEBPACK_IMPORTED_MODULE_6__["textTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBrandName", function() { return _text_transform__WEBPACK_IMPORTED_MODULE_6__["getBrandName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextTransform", function() { return _text_transform__WEBPACK_IMPORTED_MODULE_6__["getTextTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toUpperCase", function() { return _text_transform__WEBPACK_IMPORTED_MODULE_6__["toUpperCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toLowerCase", function() { return _text_transform__WEBPACK_IMPORTED_MODULE_6__["toLowerCase"]; });

/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themes */ "./src/assets/styles/themes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return _themes__WEBPACK_IMPORTED_MODULE_7__["themes"]; });










/***/ }),

/***/ "./src/assets/styles/spacing.js":
/*!**************************************!*\
  !*** ./src/assets/styles/spacing.js ***!
  \**************************************/
/*! exports provided: spacing, getSpacing, spacingStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacing", function() { return spacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpacing", function() { return getSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacingStyles", function() { return spacingStyles; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_2__);



var spacing = {
  xxs: {
    acom: '5px;',
    suba: '5px;',
    shop: '5px;'
  },
  xs: {
    acom: '10px;',
    suba: '10px;',
    shop: '10px;'
  },
  sm: {
    acom: '15px;',
    suba: '15px;',
    shop: '15px;'
  },
  md: {
    acom: '20px;',
    suba: '20px;',
    shop: '20px;'
  },
  lg: {
    acom: '35px;',
    suba: '35px;',
    shop: '35px;'
  },
  xl: {
    acom: '45px;',
    suba: '45px;',
    shop: '45px;'
  },
  xxl: {
    acom: '65px;',
    suba: '65px;',
    shop: '65px;'
  }
};
var getSpacing = function getSpacing(brand, spacingSize) {
  switch (spacingSize) {
    case 'none':
      return 0;

    case 'xxs':
      return spacing.xxs[brand];

    case 'xs':
      return spacing.xs[brand];

    case 'sm':
      return spacing.sm[brand];

    case 'md':
      return spacing.md[brand];

    case 'lg':
      return spacing.lg[brand];

    case 'xl':
      return spacing.xl[brand];

    case 'xxl':
      return spacing.xxl[brand];

    default:
      return spacing.sm[brand];
  }
};
var spacingStyles = function spacingStyles(variant) {
  var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'padding';
  var attribute = attr;

  if (variant == 'spacingTop' || variant == 'paddingTop' || variant == 'marginTop') {
    attribute = "".concat(attr, "-top");
  }

  if (variant == 'spacingBottom' || variant == 'paddingBottom' || variant == 'marginBottom') {
    attribute = "".concat(attr, "-bottom");
  }

  if (variant == 'spacingRight' || variant == 'paddingRight' || variant == 'marginRight') {
    attribute = "".concat(attr, "-right");
  }

  if (variant == 'spacingLeft' || variant == 'paddingLeft' || variant == 'marginLeft') {
    attribute = "".concat(attr, "-left");
  }

  return styled_theming__WEBPACK_IMPORTED_MODULE_2___default()('brand', {
    acom: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", " ", " ", " ", " ", " ", " ", " ", ""], function (props) {
      return props[variant] && typeof props[variant] === 'string' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ":", ";}"], attribute, getSpacing('acom', props[variant]));
    }, function (props) {
      return props[variant].xxs && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] != 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ":", ";}"], attribute, getSpacing('acom', props[variant].xxs));
    }, function (props) {
      return props[variant].xxs && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].xxs, attribute, getSpacing('acom', props[variant].xxs));
    }, function (props) {
      return props[variant].xs && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].xs, attribute, getSpacing('acom', props[variant].xs));
    }, function (props) {
      return props[variant].sm && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].sm, attribute, getSpacing('acom', props[variant].sm));
    }, function (props) {
      return props[variant].md && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].md, attribute, getSpacing('acom', props[variant].md));
    }, function (props) {
      return props[variant].lg && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].lg, attribute, getSpacing('acom', props[variant].lg));
    }, function (props) {
      return props[variant].xl && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].xl, attribute, getSpacing('acom', props[variant].xl));
    }),
    suba: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", " ", " ", " ", " ", " ", " ", " ", ""], function (props) {
      return props[variant] && typeof props[variant] === 'string' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ":", ";};"], attribute, getSpacing('suba', props[variant]));
    }, function (props) {
      return props[variant].xxs && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] != 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ":", ";};"], attribute, getSpacing('suba', props[variant].xxs));
    }, function (props) {
      return props[variant].xxs && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].xxs, attribute, getSpacing('suba', props[variant].xxs));
    }, function (props) {
      return props[variant].xs && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].xs, attribute, getSpacing('suba', props[variant].xs));
    }, function (props) {
      return props[variant].sm && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].sm, attribute, getSpacing('suba', props[variant].sm));
    }, function (props) {
      return props[variant].md && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].md, attribute, getSpacing('suba', props[variant].md));
    }, function (props) {
      return props[variant].lg && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].lg, attribute, getSpacing('suba', props[variant].lg));
    }, function (props) {
      return props[variant].xl && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].xl, attribute, getSpacing('suba', props[variant].xl));
    }),
    shop: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", " ", " ", " ", " ", " ", " ", " ", ""], function (props) {
      return props[variant] && typeof props[variant] === 'string' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ":", ";};"], attribute, getSpacing('shop', props[variant]));
    }, function (props) {
      return props[variant].xxs && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] != 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ":", ";};"], attribute, getSpacing('shop', props[variant].xxs));
    }, function (props) {
      return props[variant].xxs && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].xxs, attribute, getSpacing('shop', props[variant].xxs));
    }, function (props) {
      return props[variant].xs && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].xs, attribute, getSpacing('shop', props[variant].xs));
    }, function (props) {
      return props[variant].sm && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].sm, attribute, getSpacing('shop', props[variant].sm));
    }, function (props) {
      return props[variant].md && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].md, attribute, getSpacing('shop', props[variant].md));
    }, function (props) {
      return props[variant].lg && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].lg, attribute, getSpacing('shop', props[variant].lg));
    }, function (props) {
      return props[variant].xl && _helpers__WEBPACK_IMPORTED_MODULE_0__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ":", ";}"], _helpers__WEBPACK_IMPORTED_MODULE_0__["medias"].xl, attribute, getSpacing('shop', props[variant].xl));
    })
  });
};

/***/ }),

/***/ "./src/assets/styles/text-transform.js":
/*!*********************************************!*\
  !*** ./src/assets/styles/text-transform.js ***!
  \*********************************************/
/*! exports provided: textTransform, getBrandName, getTextTransform, toUpperCase, toLowerCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textTransform", function() { return textTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrandName", function() { return getBrandName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextTransform", function() { return getTextTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUpperCase", function() { return toUpperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLowerCase", function() { return toLowerCase; });
var textTransform = {
  default: {
    acom: 'lowercase',
    suba: 'none',
    shop: 'uppercase'
  },
  custom: {
    acom: 'lowercase',
    suba: 'none',
    shop: 'none'
  }
};
var getBrandName = function getBrandName(brand) {
  if (brand == 'americanas') {
    brand = 'acom';
  }

  if (brand == 'submarino') {
    brand = 'suba';
  }

  if (brand == 'shoptime') {
    brand = 'shop';
  }

  return brand;
};
var getTextTransform = function getTextTransform(brand, children, custom) {
  var text = "".concat(children);
  var type = custom ? textTransform.custom[getBrandName(brand)] : textTransform.default[getBrandName(brand)];

  switch (type) {
    case 'uppercase':
      return toUpperCase(text);

    case 'lowercase':
      return toLowerCase(text);

    case 'none':
      return text;
  }
};
var toUpperCase = function toUpperCase(children) {
  return "".concat(children.toUpperCase());
};
var toLowerCase = function toLowerCase(children) {
  return "".concat(children.toLowerCase());
};

/***/ }),

/***/ "./src/assets/styles/themes.js":
/*!*************************************!*\
  !*** ./src/assets/styles/themes.js ***!
  \*************************************/
/*! exports provided: themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
var themes = ['light', 'dark'];

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: TextStyled, Text, ThemeProvider, Touchable, View, bindAll, debounce, isBrowser, medias, allMedias, getMedia, isMobile, isDesktop, getBreakpoint, defaultSizeSequence, getDefaultSource, platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./src/components/text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextStyled", function() { return _text__WEBPACK_IMPORTED_MODULE_0__["TextStyled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony import */ var _theme_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-provider */ "./src/components/theme-provider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _theme_provider__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"]; });

/* harmony import */ var _touchable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./touchable */ "./src/components/touchable/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Touchable", function() { return _touchable__WEBPACK_IMPORTED_MODULE_2__["Touchable"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./src/components/view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _view__WEBPACK_IMPORTED_MODULE_3__["View"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["bindAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["isBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "medias", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["medias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allMedias", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["allMedias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMedia", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["getMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["isMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["isDesktop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBreakpoint", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["getBreakpoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSizeSequence", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["defaultSizeSequence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultSource", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["getDefaultSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "platform", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["platform"]; });







/***/ }),

/***/ "./src/components/text/index.js":
/*!**************************************!*\
  !*** ./src/components/text/index.js ***!
  \**************************************/
/*! exports provided: TextStyled, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextStyled", function() { return TextStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/text/style.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TextStyled =
/*#__PURE__*/
function (_Component) {
  _inherits(TextStyled, _Component);

  function TextStyled() {
    _classCallCheck(this, TextStyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextStyled).apply(this, arguments));
  }

  _createClass(TextStyled, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["color", "children"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextComponent, _extends({
        colorText: color
      }, props), children);
    }
  }]);

  return TextStyled;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var TextComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "TextComponent",
  componentId: "sc-1tj31w4-0"
})(["", ""], _style__WEBPACK_IMPORTED_MODULE_2__["default"]);
var Text = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(TextStyled);
TextStyled.propTypes = {
  /** Content of the Text. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /** Color of the Text. */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Weight of the Text. */
  strong: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** Style of the Text. */
  italic: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Size of the Text. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['1', '2', '3', '4', '5']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object])
};

/***/ }),

/***/ "./src/components/text/style.js":
/*!**************************************!*\
  !*** ./src/components/text/style.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/styles */ "./src/assets/styles/index.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["margin:0;", " ", " ", " ", ""], function (props) {
  return props.colorText && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:black;"]);
}, function (props) {
  return props.weight && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-weight:", ";"], function (props) {
    return props.weight;
  });
}, function (props) {
  return props.italic && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-style:italic;"]);
}, _helpers__WEBPACK_IMPORTED_MODULE_2__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-family:", ";"], function (props) {
  return _assets_styles__WEBPACK_IMPORTED_MODULE_3__["fontFamily"][props.theme.name];
})));

/***/ }),

/***/ "./src/components/theme-provider/index.js":
/*!************************************************!*\
  !*** ./src/components/theme-provider/index.js ***!
  \************************************************/
/*! exports provided: ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "./src/components/view/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @import url('https://fonts.googleapis.com/css?family=Lato:300,700|Pacifico');\n    * {\n      box-sizing: border-box;\n    }\n    body {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: antialiased;\n    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ThemeProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    _classCallCheck(this, ThemeProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(ThemeProvider).apply(this, arguments));
  }

  _createClass(ThemeProvider, [{
    key: "renderReset",
    value: function renderReset() {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_2__["View"], null, this.renderReset(), children));
    }
  }]);

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/components/touchable/index.js":
/*!*******************************************!*\
  !*** ./src/components/touchable/index.js ***!
  \*******************************************/
/*! exports provided: Touchable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touchable", function() { return Touchable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/touchable/style.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Touchable =
/*#__PURE__*/
function (_Component) {
  _inherits(Touchable, _Component);

  function Touchable() {
    _classCallCheck(this, Touchable);

    return _possibleConstructorReturn(this, _getPrototypeOf(Touchable).apply(this, arguments));
  }

  _createClass(Touchable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onPress = _this$props.onPress,
          href = _this$props.href,
          ripple = _this$props.ripple,
          props = _objectWithoutProperties(_this$props, ["onPress", "href", "ripple"]);

      if (href) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TouchableA, _extends({
          href: href,
          ripple: ripple,
          onClick: onPress
        }, props));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TouchableDiv, _extends({
        onClick: onPress,
        ripple: ripple
      }, props));
    }
  }]);

  return Touchable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var TouchableA = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "TouchableA",
  componentId: "sc-1jn8vcr-0"
})(["", ""], _style__WEBPACK_IMPORTED_MODULE_2__["default"]);
var TouchableDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "TouchableDiv",
  componentId: "sc-1jn8vcr-1"
})(["", ""], _style__WEBPACK_IMPORTED_MODULE_2__["default"]);
Touchable.defaultProps = {
  ripple: true
};
Touchable.propTypes = {
  /** Define o conteúdo do Touchable. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /** Define se o Touchable terá ripple. */
  ripple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Define um href para Touchable, para o caso de ser um link. */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Define o onPress do Touchable. */
  onPress: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

/***/ }),

/***/ "./src/components/touchable/style.js":
/*!*******************************************!*\
  !*** ./src/components/touchable/style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["text-decoration:none;cursor:pointer;", ";"], function (props) {
  return props.ripple && _helpers__WEBPACK_IMPORTED_MODULE_1__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["position:relative;-webkit-tap-highlight-color:transparent;overflow:hidden;transform:translate3d(0,0,0);:before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:", ";background-repeat:no-repeat;background-position:50%;transform:scale(0,0);opacity:0;z-index:1;}@keyframes ripple{0%{transform:scale(0,0);opacity:.4;}50%{transform:scale(10,10);opacity:0;}100%{transform:scale(20,20);opacity:0;}}:active:before{animation-name:ripple;animation-duration:1s;}"], function (props) {
    return "radial-gradient(circle, ".concat(_helpers__WEBPACK_IMPORTED_MODULE_1__["color"].warning.medium[props.theme.brand], " 10%, transparent 10.01%)");
  });
}));

/***/ }),

/***/ "./src/components/view/index.js":
/*!**************************************!*\
  !*** ./src/components/view/index.js ***!
  \**************************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/view/style.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var View =
/*#__PURE__*/
function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
  }

  _createClass(View, [{
    key: "renderTag",
    value: function renderTag() {
      var _this$props = this.props,
          tag = _this$props.tag,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["tag", "children"]);

      switch (tag) {
        case 'article':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewArticle, props, children);

        case 'form':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewForm, props, children);

        case 'section':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewSection, props, children);

        case 'time':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewTime, props, children);

        case 'address':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewAddress, props, children);

        case 'aside':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewAside, props, children);

        default:
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewUI, props, children);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderTag();
    }
  }]);

  return View;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var ViewArticle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.article.withConfig({
  displayName: "ViewArticle",
  componentId: "sc-1xf587q-0"
})(["", ""], _style__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ViewForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "ViewForm",
  componentId: "sc-1xf587q-1"
})(["", ""], _style__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ViewSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "ViewSection",
  componentId: "sc-1xf587q-2"
})(["", ""], _style__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ViewTime = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.time.withConfig({
  displayName: "ViewTime",
  componentId: "sc-1xf587q-3"
})(["", ""], _style__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ViewAddress = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.address.withConfig({
  displayName: "ViewAddress",
  componentId: "sc-1xf587q-4"
})(["", ""], _style__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ViewAside = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "ViewAside",
  componentId: "sc-1xf587q-5"
})(["", ""], _style__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ViewUI = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewUI",
  componentId: "sc-1xf587q-6"
})(["", ""], _style__WEBPACK_IMPORTED_MODULE_2__["default"]);
View.defaultProps = {
  tag: 'div'
};
View.propTypes = {
  /** Define o conteúdo do View. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /** Define a tag do View. */
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['div', 'article', 'form', 'section', 'time', 'address', 'aside'])
};

/***/ }),

/***/ "./src/components/view/style.js":
/*!**************************************!*\
  !*** ./src/components/view/style.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;", "   flex-direction:", ";"], _helpers__WEBPACK_IMPORTED_MODULE_1__["platform"] === 'web' && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["min-height:1px;"]), function (props) {
  return props.inline ? "row;" : "column;";
}));

/***/ }),

/***/ "./src/helpers/functions.js":
/*!**********************************!*\
  !*** ./src/helpers/functions.js ***!
  \**********************************/
/*! exports provided: bindAll, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return bindAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
var bindAll = function bindAll(context, funcNames) {
  funcNames.forEach(function (name) {
    context[name] = context[name].bind(context);
  });
};
var debounce = function debounce() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (f) {
    return f;
  };
  var wait = arguments.length > 1 ? arguments[1] : undefined;
  var context = arguments.length > 2 ? arguments[2] : undefined;
  var timeout = null;
  var callbackArgs = null;

  var later = function later() {
    return callback.apply(context, callbackArgs);
  };

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callbackArgs = args;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: bindAll, debounce, isBrowser, medias, allMedias, getMedia, isMobile, isDesktop, getBreakpoint, defaultSizeSequence, getDefaultSource, platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/helpers/functions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _functions__WEBPACK_IMPORTED_MODULE_0__["bindAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _functions__WEBPACK_IMPORTED_MODULE_0__["debounce"]; });

/* harmony import */ var _is_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser */ "./src/helpers/is-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _is_browser__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]; });

/* harmony import */ var _match_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match-media */ "./src/helpers/match-media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "medias", function() { return _match_media__WEBPACK_IMPORTED_MODULE_2__["medias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allMedias", function() { return _match_media__WEBPACK_IMPORTED_MODULE_2__["allMedias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMedia", function() { return _match_media__WEBPACK_IMPORTED_MODULE_2__["getMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _match_media__WEBPACK_IMPORTED_MODULE_2__["isMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return _match_media__WEBPACK_IMPORTED_MODULE_2__["isDesktop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBreakpoint", function() { return _match_media__WEBPACK_IMPORTED_MODULE_2__["getBreakpoint"]; });

/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./picture */ "./src/helpers/picture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSizeSequence", function() { return _picture__WEBPACK_IMPORTED_MODULE_3__["defaultSizeSequence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultSource", function() { return _picture__WEBPACK_IMPORTED_MODULE_3__["getDefaultSource"]; });

/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platform */ "./src/helpers/platform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "platform", function() { return _platform__WEBPACK_IMPORTED_MODULE_4__["platform"]; });







/***/ }),

/***/ "./src/helpers/is-browser.js":
/*!***********************************!*\
  !*** ./src/helpers/is-browser.js ***!
  \***********************************/
/*! exports provided: isBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var isBrowser = function isBrowser() {
  return typeof window != 'undefined';
};

/***/ }),

/***/ "./src/helpers/match-media.js":
/*!************************************!*\
  !*** ./src/helpers/match-media.js ***!
  \************************************/
/*! exports provided: medias, allMedias, getMedia, isMobile, isDesktop, getBreakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "medias", function() { return medias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allMedias", function() { return allMedias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMedia", function() { return getMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return isDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreakpoint", function() { return getBreakpoint; });
var medias = {
  xxs: 320,
  xs: 480,
  sm: 768,
  md: 1025,
  lg: 1280,
  xl: 1360
};
var allMedias = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'];
var getMedia = function getMedia(breakpoint) {
  switch (breakpoint) {
    case 'xxs':
      return medias.xxs;

    case 'xs':
      return medias.xs;

    case 'sm':
      return medias.sm;

    case 'md':
      return medias.md;

    case 'lg':
      return medias.lg;

    case 'xl':
      return medias.xl;

    default:
      return medias.sm;
  }
};
var isMobile = function isMobile() {
  return getBreakpoint() === 'xxs' || getBreakpoint() === 'xs' || getBreakpoint() === 'sm';
};
var isDesktop = function isDesktop() {
  return getBreakpoint() === 'md' || getBreakpoint() === 'lg' || getBreakpoint() === 'xl';
};
function getBreakpoint() {
  var media = 'xxs';

  if (typeof window !== 'undefined') {
    if (window.innerWidth > medias.xxs && window.innerWidth <= medias.xs) {
      media = 'xs';
    }

    if (window.innerWidth > medias.xs && window.innerWidth <= medias.sm) {
      media = 'sm';
    }

    if (window.innerWidth > medias.sm && window.innerWidth <= medias.md) {
      media = 'md';
    }

    if (window.innerWidth > medias.md && window.innerWidth <= medias.lg) {
      media = 'lg';
    }

    if (window.innerWidth > medias.lg) {
      media = 'xl';
    }
  }

  return media;
}

/***/ }),

/***/ "./src/helpers/picture.js":
/*!********************************!*\
  !*** ./src/helpers/picture.js ***!
  \********************************/
/*! exports provided: defaultSizeSequence, getDefaultSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSizeSequence", function() { return defaultSizeSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSource", function() { return getDefaultSource; });
var defaultSizeSequence = ['medium', 'small', 'extraSmall', 'large', 'extraLarge'];
var getDefaultSource = function getDefaultSource(sources, defaultSize) {
  if (!sources) {
    return '';
  }

  if (sources[defaultSize]) {
    return sources[defaultSize];
  }

  return defaultSizeSequence.reduce(function (acc, cur) {
    if (acc) return acc;
    return sources[cur] || acc;
  }, null);
};

/***/ }),

/***/ "./src/helpers/platform.js":
/*!*********************************!*\
  !*** ./src/helpers/platform.js ***!
  \*********************************/
/*! exports provided: platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform", function() { return platform; });
var platform = 'web';

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map