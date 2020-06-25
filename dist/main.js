/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");

var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js"); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");

var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports.default = axios;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
  var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  return config;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function deepMerge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./public/src/index.js":
/*!*****************************!*\
  !*** ./public/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ "./public/src/scripts/game.js");
/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ "./public/src/scripts/game_view.js");


document.addEventListener('DOMContentLoaded', function (e) {
  var canvasEl = document.getElementById("mycanvas");
  var ctx = canvasEl.getContext("2d");
  var gameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
  gameView.drawGameBegin(); // gameView.start();

  window.ctx = ctx;
});

/***/ }),

/***/ "./public/src/scripts/diamond.js":
/*!***************************************!*\
  !*** ./public/src/scripts/diamond.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./public/src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Diamond = /*#__PURE__*/function () {
  function Diamond(pos) {
    _classCallCheck(this, Diamond);

    this.pos = pos;
    this.vel = 0;
    this.radius = 10;
  }

  _createClass(Diamond, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1];
      ctx.beginPath();
      ctx.moveTo(x, y + 15);
      ctx.lineTo(x - 8, y);
      ctx.lineTo(x, y - 15);
      ctx.lineTo(x + 8, y);
      ctx.lineTo(x, y + 15);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#4dffff';
      ctx.stroke();
    }
  }, {
    key: "move",
    value: function move(delta, playerPos) {
      var velDir = [playerPos[0] - this.pos[0], playerPos[1] - this.pos[1]];
      var velMag = _util__WEBPACK_IMPORTED_MODULE_0__["default"].norm(velDir);
      var vel = [velDir[0] / velMag, velDir[1] / velMag];
      this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; // this.pos = [this.pos[0] + (velDir[0] / (velMag * 10)), velDir[1] / (velMag * 10)]
    }
  }]);

  return Diamond;
}();

/* harmony default export */ __webpack_exports__["default"] = (Diamond);

/***/ }),

/***/ "./public/src/scripts/explosion.js":
/*!*****************************************!*\
  !*** ./public/src/scripts/explosion.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Explosion = /*#__PURE__*/function () {
  function Explosion(pos, radius) {
    _classCallCheck(this, Explosion);

    this.pos = pos;
    this.radius = radius;
    this.color = ['#FFFF00', '#FFFF33', '#F2EA02', '#E6FB04', '#FF0000', '#FD1C03', '#FF3302', '#FF6600', '#00FFFF', '#099FFF', '#0062FF', '#0033FF', '#FF00FF', '#FF00CC', '#FF0099', '#CC00FF', '#9D00FF', '#CC00FF', '#6E0DD0', '#9900FF'][Math.floor(Math.random() * 20)];
  }

  _createClass(Explosion, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1];
      var r = this.radius;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.strokeStyle = this.color;
      ctx.stroke();
    }
  }]);

  return Explosion;
}();

/* harmony default export */ __webpack_exports__["default"] = (Explosion);

/***/ }),

/***/ "./public/src/scripts/game.js":
/*!************************************!*\
  !*** ./public/src/scripts/game.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ "./public/src/scripts/game_view.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./public/src/scripts/player.js");
/* harmony import */ var _diamond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diamond */ "./public/src/scripts/diamond.js");
/* harmony import */ var _gate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gate */ "./public/src/scripts/gate.js");
/* harmony import */ var _shard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shard */ "./public/src/scripts/shard.js");
/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explosion */ "./public/src/scripts/explosion.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./public/src/scripts/util.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./score */ "./public/src/scripts/score.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sound */ "./public/src/scripts/sound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]([480, 320]);
    this.diamonds = [];
    this.diamondSpawnRate = 100;
    this.gates = [];
    this.gateSpawnRate = 240;
    this.shards = [];
    this.explosions = [];
    this.explosionFrames = 0;
    this.frameNum = 1;
    this.inPlay = true;
    this.score = new _score__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.gate = new _sound__WEBPACK_IMPORTED_MODULE_8__["default"]("../../assets/sounds/gate.mp3");
    this.gate.sound.volume = .3;
    this.multi = new _sound__WEBPACK_IMPORTED_MODULE_8__["default"]("../../assets/sounds/multi.mp3");
    this.multi.sound.volume = .3;
    this.diamond = new _sound__WEBPACK_IMPORTED_MODULE_8__["default"]("../../assets/sounds/diamondspawn.mp3");
    this.diamond.sound.volume = .05;
  }

  _createClass(Game, [{
    key: "addDiamond",
    value: function addDiamond() {
      var diamond = new _diamond__WEBPACK_IMPORTED_MODULE_2__["default"]([Math.random() * 960, Math.random() * 640]);

      if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].dist(diamond.pos, this.player.pos) > 150) {
        this.diamond.play();
        this.diamonds.push(diamond);
      }
    }
  }, {
    key: "addGate",
    value: function addGate() {
      var gate = new _gate__WEBPACK_IMPORTED_MODULE_3__["default"]([Math.random() * 960, Math.random() * 640], Math.random() * Math.PI / 2);
      this.gates.push(gate);
    }
  }, {
    key: "addShard",
    value: function addShard(pos) {
      var shard = new _shard__WEBPACK_IMPORTED_MODULE_4__["default"](pos);
      this.shards.push(shard);
    }
  }, {
    key: "moveObjects",
    value: function moveObjects(delta) {
      this.player.move();

      if (this.frameNum % this.diamondSpawnRate === 0) {
        this.addDiamond();
      }

      if (this.frameNum % this.gateSpawnRate === 0) {
        this.addGate();
      }

      if (this.frameNum % 600 === 0 && this.diamondSpawnRate > 10) {
        this.diamondSpawnRate -= 10;
        this.gateSpawnRate -= 10;
      }

      for (var i = 0; i < this.diamonds.length; i++) {
        this.diamonds[i].move(delta, this.player.pos);

        if (Math.abs(this.diamonds[i].pos[0] - this.player.pos[0]) < 40 && Math.abs(this.diamonds[i].pos[1] - this.player.pos[1]) < 40) {
          if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollided(this.diamonds[i], this.player)) {
            this.inPlay = false;
          }
        }
      }

      for (var _i = 0; _i < this.gates.length; _i++) {
        this.gates[_i].move(this.frameNum, this.player);

        if (this.gates[_i].collisionCircles.length !== 0) {
          if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].goneThroughGate(this.player, this.gates[_i])) {
            var explosion = {
              pos: this.gates[_i].collisionCircles[3].pos,
              radius: 150
            };
            var expPos = this.gates[_i].collisionCircles[3].pos;

            for (var _i2 = 1; _i2 < 16; _i2++) {
              this.explosions.push(new _explosion__WEBPACK_IMPORTED_MODULE_5__["default"](expPos, _i2 * 10));
            }

            this.explosionFrames = 15;
            this.score.score += this.score.multiplier * 100;
            this.score.multiplier += 2;

            if (this.gate.paused) {
              this.gate.play();
            } else {
              this.gate.sound.currentTime = 0;
              this.gate.play();
            }

            var diamondsToKeep = [];

            for (var _i3 = 0; _i3 < this.diamonds.length; _i3++) {
              if (!_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollided(explosion, this.diamonds[_i3])) {
                diamondsToKeep.push(this.diamonds[_i3]);
              } else {
                this.score.score += this.score.multiplier * 50;
                this.addShard(this.diamonds[_i3].pos);
              }
            }

            this.diamonds = diamondsToKeep;
            this.gates.splice(_i, 1);
          }
        }

        for (var _i4 = 0; _i4 < this.shards.length; _i4++) {
          if (Math.abs(this.shards[_i4].pos[0] - this.player.pos[0]) < 70 && Math.abs(this.shards[_i4].pos[1] - this.player.pos[1]) < 70) {
            this.shards[_i4].move(this.player.pos);

            if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollided(this.shards[_i4], this.player)) {
              this.score.multiplier += 1;
              this.multi.sound.currentTime = 0;
              this.multi.play();
              this.shards.splice(_i4, 1);
            }
          }
        }
      }

      this.frameNum++;

      if (this.explosionFrames > 0) {
        this.explosionFrames--;
      } else {
        this.explosions = [];
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.player.draw(ctx);

      for (var i = 0; i < this.diamonds.length; i++) {
        this.diamonds[i].draw(ctx);
      }

      for (var _i5 = 0; _i5 < this.gates.length; _i5++) {
        this.gates[_i5].draw(ctx);
      }

      for (var _i6 = 0; _i6 < this.shards.length; _i6++) {
        this.shards[_i6].draw(ctx);
      }

      for (var _i7 = 0; _i7 < this.explosions.length; _i7++) {
        this.explosions[_i7].draw(ctx);
      }

      this.score.drawMult(ctx);
      this.score.drawScore(ctx);
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./public/src/scripts/game_view.js":
/*!*****************************************!*\
  !*** ./public/src/scripts/game_view.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./public/src/scripts/game.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound */ "./public/src/scripts/sound.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./public/src/scripts/page.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./public/src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var GameView = /*#__PURE__*/function () {
  function GameView(ctx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.lastTime = 0;
    this.animate = this.animate.bind(this);
    this.start = this.start.bind(this);
    this.started = false;
    this.bgi = new Image();
    this.bgi.src = "../../assets/images/bg.jpg";
    this.bgiX = 0;
    this.bgiY = 0;
    this.bgm = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/bgm.mp3");
    this.bgm.sound.volume = .15;
    this.bgm.sound.classList.add("background-music");
    this.gom = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/gameover.mp3");
    this.gom.sound.volume = .15;
    Object(_page__WEBPACK_IMPORTED_MODULE_2__["setUpModals"])();
  }

  _createClass(GameView, [{
    key: "animate",
    value: function animate(currentTime) {
      var _this = this;

      this.drawBackground(this.ctx); // this.ctx.drawImage(this.bgi,0, 0);

      var delta = currentTime - this.lastTime;

      if (this.game.inPlay) {
        this.bgm.play();
        requestAnimationFrame(this.animate);
        this.game.draw(this.ctx);
        this.handleMovement();
        this.game.moveObjects(delta);
        this.lastTime = currentTime;
      } else {
        var playAgainBtn = document.getElementsByClassName("play-again-btn")[0];
        playAgainBtn.classList.toggle("hidden");

        playAgainBtn.onclick = function () {
          _this.restart();

          playAgainBtn.classList.toggle("hidden");
        };

        this.bgm.stop();
        this.gom.sound.currentTime = 0;
        this.gom.play();
        var scoresArray = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];
        var newScoreObj;
        newScoreObj = [this.game.score.name, this.game.score.score];
        scoresArray.push(newScoreObj);
        var topTen = scoresArray.sort(function (a, b) {
          return b[1] - a[1];
        }).slice(0, 10);
        this.drawGameOver(topTen);
        localStorage.setItem('scores', JSON.stringify(topTen));
      }
    }
  }, {
    key: "drawGameBegin",
    value: function drawGameBegin() {
      var _this2 = this;

      this.ctx.drawImage(this.bgi, 0, 0);
      this.ctx.drawImage(this.bgi, this.x, this.y - this.canvasHeight);
      this.ctx.font = "small-caps bold 40px Courier New";
      this.ctx.fillStyle = "#00FF00";
      this.ctx.fillText("Click to Play", 350, 300);
      this.toggleSoundSetup();
      var cvs = document.getElementById("mycanvas");

      cvs.onclick = function () {
        if (!_this2.started) {
          _this2.start();
        }
      };
    }
  }, {
    key: "drawGameOver",
    value: function drawGameOver(topTen) {
      ctx.font = "small-caps bold 40px Courier New";
      ctx.fillStyle = "#00FF00";
      ctx.textAlign = "center";
      ctx.fillText("Final Score: " + this.game.score.score, 480, 40);
      ctx.font = "small-caps 30px Courier New";
      ctx.fillStyle = "#FFFF00";
      ctx.fillText("High Scores", 480, 100);
      ctx.font = "small-caps bold 25px Courier New";
      ctx.fillStyle = "#0095DD";

      for (var i = 0; i < 10; i++) {
        if (topTen[i]) {
          ctx.fillText(i + 1 + "." + topTen[i][0] + ": " + topTen[i][1], 480, 120 + 30 * (i + 1));
        }
      }
    }
  }, {
    key: "drawBackground",
    value: function drawBackground() {
      var speed = 0.08;
      this.bgiX += speed;
      this.ctx.fillStyle = "#000000";
      this.ctx.fillRect(0, 0, 960, 640);
      this.ctx.drawImage(this.bgi, this.bgiX, this.bgiY);
      this.ctx.drawImage(this.bgi, this.bgiX - 960, this.bgiY);

      if (this.bgiX >= 960) {
        this.bgiX = 0;
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      this.started = true;
      window.addEventListener('keydown', function (e) {
        e.preventDefault();
        _this3.keys = _this3.keys || [];
        _this3.keys[e.keyCode] = e.type == "keydown";
      });
      window.addEventListener('keyup', function (e) {
        e.preventDefault();
        _this3.keys[e.keyCode] = e.type == "keydown";
      });
      requestAnimationFrame(this.animate);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.gom.stop();
      requestAnimationFrame(this.animate);
    }
  }, {
    key: "toggleSoundSetup",
    value: function toggleSoundSetup() {
      var soundIcons = document.getElementsByClassName("sound-icon");

      for (var i = 0; i < soundIcons.length; i++) {
        soundIcons[i].onclick = function () {
          soundIcons[0].classList.toggle("hidden");
          soundIcons[1].classList.toggle("hidden");
          var sounds = document.getElementsByTagName("audio");

          for (var _i = 0; _i < sounds.length; _i++) {
            if (sounds[_i].muted) {
              sounds[_i].muted = false;
            } else {
              sounds[_i].muted = true;
            }
          }
        };
      }
    }
  }, {
    key: "handleMovement",
    value: function handleMovement() {
      if (this.keys && this.keys[65]) {
        this.game.player.moveAngle = -5;
      }

      if (this.keys && this.keys[68]) {
        this.game.player.moveAngle = 5;
      }

      if (this.keys && this.keys[87]) {
        this.game.player.speed = -4;
      }

      if (this.keys && this.keys[84]) {
        this.game.player.speed = 4;
      }

      if (this.keys && this.keys[37]) {
        this.game.player.moveAngle = -5;
      }

      if (this.keys && this.keys[39]) {
        this.game.player.moveAngle = 5;
      }

      if (this.keys && this.keys[38]) {
        this.game.player.speed = -4;
      }

      if (this.keys && this.keys[40]) {
        this.game.player.speed = 4;
      }
    }
  }]);

  return GameView;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./public/src/scripts/gate.js":
/*!************************************!*\
  !*** ./public/src/scripts/gate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./public/src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Gate = /*#__PURE__*/function () {
  function Gate(pos, angle) {
    _classCallCheck(this, Gate);

    // (-1,0) (1, 0), (-1,60), (1,60)
    this.pos = pos;
    this.angle = angle;
    this.vel = [0, 0];
    this.collisionCircles = [];
  }

  _createClass(Gate, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1];
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(this.angle);
      ctx.beginPath();
      ctx.lineTo(0, 0);
      ctx.lineTo(0 + 10, 0 - 10);
      ctx.lineTo(0 - 10, 0 - 10);
      ctx.lineTo(0, 0);
      ctx.lineTo(0, 0 + 60);
      ctx.lineTo(0 + 10, 0 + 70);
      ctx.lineTo(0 - 10, 0 + 70);
      ctx.lineTo(0, 0 + 60);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffa500';
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "move",
    value: function move(frameNum, player) {
      this.collisionCircles = [];

      if (frameNum % 120 === 0) {
        this.vel = _util__WEBPACK_IMPORTED_MODULE_0__["default"].randomVec(0.125);
      }

      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];

      if (Math.abs(player.pos[0] - this.pos[0]) < 70 && Math.abs(player.pos[1] - this.pos[1]) < 70) {
        for (var i = 0; i < 6; i++) {
          this.collisionCircles.push({
            pos: [this.pos[0] - (5 + 10 * i) * Math.sin(this.angle), this.pos[1] + (5 + 10 * i) * Math.cos(this.angle)],
            radius: 5
          });
        }
      } // this.collisionPos = {
      //   topLeft: [(this.pos[0] - 1) * Math.cos(this.angle) + this.pos[1] * Math.sin(this.angle),
      //   this.pos[1] * Math.cos(this.angle) - ((this.pos[0] - 1) * Math.sin(this.angle))],
      //   topRight: [(this.pos[0] + 1) * Math.cos(this.angle) + this.pos[1] * Math.sin(this.angle),
      //   this.pos[1] * Math.cos(this.angle) - ((this.pos[0] + 1) * Math.sin(this.angle))],
      //   bottomLeft: [(this.pos[0] - 1) * Math.cos(this.angle) + (this.pos[1]+60) * Math.sin(this.angle),
      //   (this.pos[1]+60) * Math.cos(this.angle) - ((this.pos[0] - 1) * Math.sin(this.angle))],
      //   bottomRight: [(this.pos[0] + 1) * Math.cos(this.angle) + (this.pos[1]+60) * Math.sin(this.angle),
      //   (this.pos[1]+60) * Math.cos(this.angle) - ((this.pos[0] + 1) * Math.sin(this.angle))]
      // }

    }
  }]);

  return Gate;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gate);

/***/ }),

/***/ "./public/src/scripts/page.js":
/*!************************************!*\
  !*** ./public/src/scripts/page.js ***!
  \************************************/
/*! exports provided: setUpModals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpModals", function() { return setUpModals; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./public/src/scripts/util.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var setUpModals = function setUpModals() {
  window.axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a;
  var score = document.getElementById("scoreModal");
  var scoreBtn = document.getElementById("score-btn");
  var scoreClose = document.getElementsByClassName("close-score")[0];
  var scoreContent = document.getElementsByClassName("score-content")[0];

  scoreBtn.onclick = function () {
    score.style.display = "block";
  };

  scoreClose.onclick = function () {
    score.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == score) {
      score.style.display = "none";
    }
  };

  var hiScores = _util__WEBPACK_IMPORTED_MODULE_0__["default"].getTop100Scores();
  var hiScore;

  for (var i = 0; i < hiScores.length; i++) {
    hiScore = document.createElement('p');
    hiScore.textContent = "".concat(i, ". ").concat(hiScore[i].name, "  ").concat(hiScore[i].score);
    scoreContent.appendChild(hiScore);
  }

  var about = document.getElementById("aboutModal");
  var aboutBtn = document.getElementById("about-btn");
  var aboutClose = document.getElementsByClassName("close-abt")[0];

  aboutBtn.onclick = function () {
    about.style.display = "block";
  };

  aboutClose.onclick = function () {
    about.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == about) {
      about.style.display = "none";
    }
  };
};

/***/ }),

/***/ "./public/src/scripts/player.js":
/*!**************************************!*\
  !*** ./public/src/scripts/player.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player(pos) {
    _classCallCheck(this, Player);

    this.pos = pos;
    this.speed = 0;
    this.moveAngle = 0;
    this.angle = 0;
    this.draw = this.draw.bind(this);
    this.collisionPos = {
      top: this.pos[1] - 5,
      left: this.pos[0] - 5,
      bottom: this.pos[1] + 5,
      right: this.pos[0] + 5
    };
    this.radius = 8;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1];
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(this.angle);
      ctx.beginPath(); // ctx.moveTo(x, y);

      ctx.lineTo(-10, -10);
      ctx.lineTo(-10, 5);
      ctx.lineTo(0, 15);
      ctx.lineTo(10, 5);
      ctx.lineTo(10, -10);
      ctx.lineTo(0, 0);
      ctx.lineTo(-10, -10);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "move",
    value: function move() {
      this.angle += this.moveAngle * Math.PI / 180;
      this.pos = [this.pos[0] + this.speed * Math.sin(this.angle), this.pos[1] - this.speed * Math.cos(this.angle)];
      this.collisionPos = {
        top: this.pos[1] - 5,
        left: this.pos[0] - 5,
        bottom: this.pos[1] + 5,
        right: this.pos[0] + 5
      };
      this.speed = 0;
      this.moveAngle = 0;
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./public/src/scripts/score.js":
/*!*************************************!*\
  !*** ./public/src/scripts/score.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Score = /*#__PURE__*/function () {
  function Score() {
    _classCallCheck(this, Score);

    this.score = 0;
    this.multiplier = 1;
    this.name = "Moe Szyslak";
  }

  _createClass(Score, [{
    key: "drawMult",
    value: function drawMult(ctx) {
      ctx.font = "small-caps bold 25px Courier New";
      ctx.textAlign = "left";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Score: " + this.score, 760, 20);
    }
  }, {
    key: "drawScore",
    value: function drawScore(ctx) {
      ctx.font = "small-caps bold 25px Courier New";
      ctx.textAlign = "left";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Multiplier: " + this.multiplier, 20, 20);
    }
  }]);

  return Score;
}();

/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ }),

/***/ "./public/src/scripts/shard.js":
/*!*************************************!*\
  !*** ./public/src/scripts/shard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./public/src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Shard = /*#__PURE__*/function () {
  function Shard(pos) {
    _classCallCheck(this, Shard);

    this.pos = pos;
    this.radius = 25;
  }

  _createClass(Shard, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1];
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x + 2, y - 3, x + 4, y - 3, x + 5, y - 2);
      ctx.bezierCurveTo(x + 2, y + 3, x + 4, y + 3, x, y);
      ctx.strokeStyle = '#39ff14';
      ctx.stroke();
    }
  }, {
    key: "move",
    value: function move(playerPos) {
      var velDir = [playerPos[0] - this.pos[0], playerPos[1] - this.pos[1]];
      var velMag = _util__WEBPACK_IMPORTED_MODULE_0__["default"].norm(velDir);
      var vel = [velDir[0] / (velMag / 4), velDir[1] / (velMag / 4)];
      this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; // this.pos = [this.pos[0] + (velDir[0] / (velMag * 10)), velDir[1] / (velMag * 10)]
    }
  }]);

  return Shard;
}();

/* harmony default export */ __webpack_exports__["default"] = (Shard);

/***/ }),

/***/ "./public/src/scripts/sound.js":
/*!*************************************!*\
  !*** ./public/src/scripts/sound.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);

  this.play = function () {
    this.sound.play();
  };

  this.stop = function () {
    this.sound.pause();
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Sound);

/***/ }),

/***/ "./public/src/scripts/util.js":
/*!************************************!*\
  !*** ./public/src/scripts/util.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// Return a randomly oriented vector with the given length.

var Util = {
  randomVec: function randomVec(length) {
    var deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale: function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  dist: function dist(v1, v2) {
    return Math.sqrt(Math.pow(v1[0] - v2[0], 2) + Math.pow(v1[1] - v2[1], 2));
  },
  norm: function norm(vec) {
    return Util.dist([0, 0], vec);
  },
  isCollided: function isCollided(obj1, obj2) {
    var dx = obj1.pos[0] - obj2.pos[0];
    var dy = obj1.pos[1] - obj2.pos[1];
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < obj1.radius + obj2.radius) {
      return true;
    } else {
      return false;
    }
  },
  goneThroughGate: function goneThroughGate(player, gate) {
    for (var i = 0; i < gate.collisionCircles.length; i++) {
      if (Util.isCollided(player, gate.collisionCircles[i])) {
        return true;
      }
    }

    return false;
  },
  getTop100Scores: function getTop100Scores() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:5000/api/scores/scores").then(function (scores) {
      console.log(scores);
    });
  },
  addScore: function addScore(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://localhost:5000/api/scores/", data);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy9kaWFtb25kLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy9leHBsb3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy9zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvc2hhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9zY3JpcHRzL3NvdW5kLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJkcmF3R2FtZUJlZ2luIiwid2luZG93IiwiRGlhbW9uZCIsInBvcyIsInZlbCIsInJhZGl1cyIsIngiLCJ5IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJkZWx0YSIsInBsYXllclBvcyIsInZlbERpciIsInZlbE1hZyIsIlV0aWwiLCJub3JtIiwiRXhwbG9zaW9uIiwiY29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyIiwiYXJjIiwiUEkiLCJHYW1lIiwicGxheWVyIiwiUGxheWVyIiwiZGlhbW9uZHMiLCJkaWFtb25kU3Bhd25SYXRlIiwiZ2F0ZXMiLCJnYXRlU3Bhd25SYXRlIiwic2hhcmRzIiwiZXhwbG9zaW9ucyIsImV4cGxvc2lvbkZyYW1lcyIsImZyYW1lTnVtIiwiaW5QbGF5Iiwic2NvcmUiLCJTY29yZSIsImdhdGUiLCJTb3VuZCIsInNvdW5kIiwidm9sdW1lIiwibXVsdGkiLCJkaWFtb25kIiwiZGlzdCIsInBsYXkiLCJwdXNoIiwiR2F0ZSIsInNoYXJkIiwiU2hhcmQiLCJtb3ZlIiwiYWRkRGlhbW9uZCIsImFkZEdhdGUiLCJpIiwibGVuZ3RoIiwiYWJzIiwiaXNDb2xsaWRlZCIsImNvbGxpc2lvbkNpcmNsZXMiLCJnb25lVGhyb3VnaEdhdGUiLCJleHBsb3Npb24iLCJleHBQb3MiLCJtdWx0aXBsaWVyIiwicGF1c2VkIiwiY3VycmVudFRpbWUiLCJkaWFtb25kc1RvS2VlcCIsImFkZFNoYXJkIiwic3BsaWNlIiwiZHJhdyIsImRyYXdNdWx0IiwiZHJhd1Njb3JlIiwiZ2FtZSIsImxhc3RUaW1lIiwiYW5pbWF0ZSIsImJpbmQiLCJzdGFydCIsInN0YXJ0ZWQiLCJiZ2kiLCJJbWFnZSIsInNyYyIsImJnaVgiLCJiZ2lZIiwiYmdtIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ29tIiwic2V0VXBNb2RhbHMiLCJkcmF3QmFja2dyb3VuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhhbmRsZU1vdmVtZW50IiwibW92ZU9iamVjdHMiLCJwbGF5QWdhaW5CdG4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidG9nZ2xlIiwib25jbGljayIsInJlc3RhcnQiLCJzdG9wIiwic2NvcmVzQXJyYXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibmV3U2NvcmVPYmoiLCJuYW1lIiwidG9wVGVuIiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJkcmF3R2FtZU92ZXIiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZHJhd0ltYWdlIiwiY2FudmFzSGVpZ2h0IiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwidG9nZ2xlU291bmRTZXR1cCIsImN2cyIsInRleHRBbGlnbiIsInNwZWVkIiwiZmlsbFJlY3QiLCJwcmV2ZW50RGVmYXVsdCIsImtleXMiLCJrZXlDb2RlIiwidHlwZSIsInNvdW5kSWNvbnMiLCJzb3VuZHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm11dGVkIiwibW92ZUFuZ2xlIiwiYW5nbGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicmVzdG9yZSIsInJhbmRvbVZlYyIsInNpbiIsImNvcyIsImF4aW9zIiwic2NvcmVCdG4iLCJzY29yZUNsb3NlIiwic2NvcmVDb250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiZXZlbnQiLCJ0YXJnZXQiLCJoaVNjb3JlcyIsImdldFRvcDEwMFNjb3JlcyIsImhpU2NvcmUiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImFib3V0IiwiYWJvdXRCdG4iLCJhYm91dENsb3NlIiwiY29sbGlzaW9uUG9zIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYmV6aWVyQ3VydmVUbyIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJwYXVzZSIsImRlZyIsInNjYWxlIiwidmVjIiwibSIsInYxIiwidjIiLCJzcXJ0Iiwib2JqMSIsIm9iajIiLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJnZXQiLCJ0aGVuIiwic2NvcmVzIiwiY29uc29sZSIsImxvZyIsImFkZFNjb3JlIiwiZGF0YSIsInBvc3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDMUJhOztBQUViLFdBQVcsbUJBQU8sQ0FBQyxnRUFBZ0I7QUFDbkM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIs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LENBQXZCO0FBQ0EsUUFBSWdMLFFBQVEsR0FBRzdKLElBQUksQ0FBQ3dKLElBQUwsQ0FBVUcsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBZjs7QUFFQSxRQUFJQyxRQUFRLEdBQUdKLElBQUksQ0FBQzFLLE1BQUwsR0FBYzJLLElBQUksQ0FBQzNLLE1BQWxDLEVBQTBDO0FBQ3hDLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFSztBQUNILGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0E3QlU7QUErQlh5RCxpQkEvQlcsMkJBK0JLakMsTUEvQkwsRUErQmFhLElBL0JiLEVBK0JrQjtBQUMzQixTQUFLLElBQUllLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdmLElBQUksQ0FBQ21CLGdCQUFMLENBQXNCSCxNQUExQyxFQUFrREQsQ0FBQyxFQUFuRCxFQUFzRDtBQUNwRCxVQUFJdkMsSUFBSSxDQUFDMEMsVUFBTCxDQUFnQi9CLE1BQWhCLEVBQXdCYSxJQUFJLENBQUNtQixnQkFBTCxDQUFzQkosQ0FBdEIsQ0FBeEIsQ0FBSixFQUFzRDtBQUNwRCxlQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFdBQU8sS0FBUDtBQUNELEdBdkNVO0FBeUNYOEYsaUJBekNXLDZCQXlDTTtBQUNmLFdBQU9ULDRDQUFLLENBQUNzQyxHQUFOLDRDQUFxREMsSUFBckQsQ0FBMEQsVUFBQUMsTUFBTSxFQUFJO0FBQ3pFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNELEtBRk0sQ0FBUDtBQUdELEdBN0NVO0FBK0NYRyxVQS9DVyxvQkErQ0ZDLElBL0NFLEVBK0NHO0FBQ1osV0FBTzVDLDRDQUFLLENBQUM2QyxJQUFOLHNDQUFnREQsSUFBaEQsQ0FBUDtBQUNEO0FBakRVLENBQWI7QUFxRGV4SyxtRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3B1YmxpYy9zcmMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG5cbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xuXG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xuXG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xuXG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7IC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG5cbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDsgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG5cblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcblxuXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG5cblxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTsgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuXG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBIYW5kbGUgdGltZW91dFxuXG5cbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG5cbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTsgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cblxuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTsgLy8gQWRkIHhzcmYgaGVhZGVyXG5cblxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/IGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfSAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuXG5cbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG5cblxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH0gLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuXG5cbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG5cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH0gLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcblxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH0gLy8gU2VuZCB0aGUgcmVxdWVzdFxuXG5cbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG5cbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpOyAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTsgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG5cbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufSAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcblxuXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7IC8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuXG5heGlvcy5BeGlvcyA9IEF4aW9zOyAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5cbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59OyAvLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cblxuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTsgLy8gRXhwb3NlIGFsbC9zcHJlYWRcblxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zOyAvLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cblxuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cblxuXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5cblxuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xuXG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcblxudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cblxuXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5cblxuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpOyAvLyBTZXQgY29uZmlnLm1ldGhvZFxuXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfSAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG5cblxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTsgLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG5cblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5cblxuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuXG5cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cblxuXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xuXG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cblxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG5cbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5cblxuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTsgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcblxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9OyAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG5cbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKGNvbmZpZy5kYXRhLCBjb25maWcuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3QpOyAvLyBGbGF0dGVuIGhlYWRlcnNcblxuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSwgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sIGNvbmZpZy5oZWFkZXJzKTtcbiAgdXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSwgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gIH0pO1xuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpOyAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEocmVzcG9uc2UuZGF0YSwgcmVzcG9uc2UuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTsgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcblxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKHJlYXNvbi5yZXNwb25zZS5kYXRhLCByZWFzb24ucmVzcG9uc2UuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG5cbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIGVycm9yO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFsnYmFzZVVSTCcsICd1cmwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJywgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJywgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLCAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnXTtcbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXMuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKS5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpO1xuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0LmtleXMoY29uZmlnMikuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcblxuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UuY29uZmlnLCBudWxsLCByZXNwb25zZS5yZXF1ZXN0LCByZXNwb25zZSkpO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG5cbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuXG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8IHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHwgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHwgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHwgdXRpbHMuaXNGaWxlKGRhdGEpIHx8IHV0aWxzLmlzQmxvYihkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvKiBJZ25vcmUgKi9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLnJlcGxhY2UoLyU0MC9naSwgJ0AnKS5yZXBsYWNlKC8lM0EvZ2ksICc6JykucmVwbGFjZSgvJTI0L2csICckJykucmVwbGFjZSgvJTJDL2dpLCAnLCcpLnJlcGxhY2UoLyUyMC9nLCAnKycpLnJlcGxhY2UoLyU1Qi9naSwgJ1snKS5yZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcblxuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcblxuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTCA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKSA6IGJhc2VVUkw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgPyAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbmZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgcmV0dXJuIHtcbiAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICB2YXIgY29va2llID0gW107XG4gICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICB9LFxuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgIHJldHVybiBtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICB9XG4gIH07XG59KCkgOiAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG5mdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiB7XG4gICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICB9O1xufSgpOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgPyAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3Rcbi8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdmFyIG9yaWdpblVSTDtcbiAgLyoqXG4gICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICogQHJldHVybnMge09iamVjdH1cbiAgKi9cblxuICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgfVxuXG4gICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7IC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcblxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgIHBhdGhuYW1lOiB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDogJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICB9O1xuICB9XG5cbiAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIC8qKlxuICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICovXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgdmFyIHBhcnNlZCA9IHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgcmV0dXJuIHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdDtcbiAgfTtcbn0oKSA6IC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG5mdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpOyAvLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuXG5cbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFsnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLCAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJywgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCddO1xuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHBhcnNlZDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcikgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgRm9ybURhdGE7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB2YWwgJiYgdmFsLmJ1ZmZlciAmJiB2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5cblxuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5cblxuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHwgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xufVxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuXG5cbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZXJnZSgpXG4vKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi9cbntcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSgpXG4vKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi9cbntcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5cblxuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307IC8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0KCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgfSAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXG5cbiAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gIH0gLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXG5cbiAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZHJhaW5pbmcgPSBmYWxzZTtcblxuICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICB9XG5cbiAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgIGRyYWluUXVldWUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICBpZiAoZHJhaW5pbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW4pIHtcbiAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IFtdO1xuXG4gICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcXVldWVJbmRleCA9IC0xO1xuICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgfVxuXG4gIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gIH1cblxuICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuXG4gIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgfVxufTsgLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuXG5cbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICB0aGlzLmZ1biA9IGZ1bjtcbiAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuXG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcblxucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBbXTtcbn07XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJy8nO1xufTtcblxucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAwO1xufTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9zY3JpcHRzL2dhbWVfdmlld1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcblxuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjdHgpO1xuICBnYW1lVmlldy5kcmF3R2FtZUJlZ2luKCk7XG4gIC8vIGdhbWVWaWV3LnN0YXJ0KCk7XG4gIHdpbmRvdy5jdHggPSBjdHg7XG59KTtcbiIsImltcG9ydCBVdGlsIGZyb20gXCIuL3V0aWxcIjtcblxuY2xhc3MgRGlhbW9uZHtcbiAgY29uc3RydWN0b3IocG9zKSB7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy52ZWwgPSAwO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSsxNSk7XG4gICAgY3R4LmxpbmVUbyh4IC0gOCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5IC0gMTUpO1xuICAgIGN0eC5saW5lVG8oeCArIDgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSsxNSk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyM0ZGZmZmYnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIG1vdmUoZGVsdGEsIHBsYXllclBvcyl7XG4gICAgY29uc3QgdmVsRGlyID0gW3BsYXllclBvc1swXS10aGlzLnBvc1swXSwgcGxheWVyUG9zWzFdIC0gdGhpcy5wb3NbMV1dO1xuICAgIGNvbnN0IHZlbE1hZyA9IFV0aWwubm9ybSh2ZWxEaXIpO1xuICAgIGNvbnN0IHZlbCA9IFt2ZWxEaXJbMF0vKHZlbE1hZyksIHZlbERpclsxXS8odmVsTWFnKV07XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB2ZWxbMF0sIHRoaXMucG9zWzFdICsgdmVsWzFdXTtcbiAgICAvLyB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArICh2ZWxEaXJbMF0gLyAodmVsTWFnICogMTApKSwgdmVsRGlyWzFdIC8gKHZlbE1hZyAqIDEwKV1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFtb25kOyIsImNsYXNzIEV4cGxvc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHBvcywgcmFkaXVzKSB7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5jb2xvciA9IFtcbiAgICAgICcjRkZGRjAwJywnI0ZGRkYzMycsJyNGMkVBMDInLCcjRTZGQjA0JyxcbiAgICAgICcjRkYwMDAwJywgJyNGRDFDMDMnLCAnI0ZGMzMwMicsICcjRkY2NjAwJyxcbiAgICAgICcjMDBGRkZGJywgJyMwOTlGRkYnLCAnIzAwNjJGRicsICcjMDAzM0ZGJyxcbiAgICAgICcjRkYwMEZGJywgJyNGRjAwQ0MnLCAnI0ZGMDA5OScsICcjQ0MwMEZGJyxcbiAgICAgICcjOUQwMEZGJywgJyNDQzAwRkYnLCAnIzZFMEREMCcsICcjOTkwMEZGJyxcbiAgICBdXG4gICAgICBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApXVxuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBsZXQgeCA9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5ID0gdGhpcy5wb3NbMV07XG4gICAgbGV0IHIgPSB0aGlzLnJhZGl1cztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgseSxyLCAwICwgMipNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3Npb247IiwiaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL2dhbWVfdmlld1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBEaWFtb25kIGZyb20gXCIuL2RpYW1vbmRcIjtcbmltcG9ydCBHYXRlIGZyb20gXCIuL2dhdGVcIjtcbmltcG9ydCBTaGFyZCBmcm9tIFwiLi9zaGFyZFwiO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tIFwiLi9leHBsb3Npb25cIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBTY29yZSBmcm9tIFwiLi9zY29yZVwiO1xuaW1wb3J0IFNvdW5kIGZyb20gXCIuL3NvdW5kXCI7XG5cblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKFs0ODAsIDMyMF0pO1xuXG4gICAgdGhpcy5kaWFtb25kcyA9IFtdO1xuICAgIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA9IDEwMDtcblxuICAgIHRoaXMuZ2F0ZXMgPSBbXTtcbiAgICB0aGlzLmdhdGVTcGF3blJhdGUgPSAyNDA7XG5cbiAgICB0aGlzLnNoYXJkcyA9IFtdO1xuXG4gICAgdGhpcy5leHBsb3Npb25zID0gW107XG4gICAgdGhpcy5leHBsb3Npb25GcmFtZXMgPSAwO1xuXG4gICAgdGhpcy5mcmFtZU51bSA9IDE7XG4gICAgdGhpcy5pblBsYXkgPSB0cnVlO1xuXG4gICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSgpO1xuXG4gICAgdGhpcy5nYXRlID0gbmV3IFNvdW5kKFwiLi4vLi4vYXNzZXRzL3NvdW5kcy9nYXRlLm1wM1wiKTtcbiAgICB0aGlzLmdhdGUuc291bmQudm9sdW1lID0gLjM7XG4gICAgdGhpcy5tdWx0aSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvbXVsdGkubXAzXCIpO1xuICAgIHRoaXMubXVsdGkuc291bmQudm9sdW1lID0gLjM7XG4gICAgdGhpcy5kaWFtb25kID0gbmV3IFNvdW5kKFwiLi4vLi4vYXNzZXRzL3NvdW5kcy9kaWFtb25kc3Bhd24ubXAzXCIpO1xuICAgIHRoaXMuZGlhbW9uZC5zb3VuZC52b2x1bWUgPSAuMDU7XG5cbiAgfVxuXG4gIGFkZERpYW1vbmQoKXtcbiAgICBjb25zdCBkaWFtb25kID0gbmV3IERpYW1vbmQoW01hdGgucmFuZG9tKCkqOTYwLCBNYXRoLnJhbmRvbSgpKjY0MF0pO1xuICAgIGlmKFV0aWwuZGlzdChkaWFtb25kLnBvcywgdGhpcy5wbGF5ZXIucG9zKSA+IDE1MCl7XG4gICAgICB0aGlzLmRpYW1vbmQucGxheSgpO1xuICAgICAgdGhpcy5kaWFtb25kcy5wdXNoKGRpYW1vbmQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEdhdGUoKXtcbiAgICBjb25zdCBnYXRlID0gbmV3IEdhdGUoW01hdGgucmFuZG9tKCkgKiA5NjAsIE1hdGgucmFuZG9tKCkgKiA2NDBdLCBNYXRoLnJhbmRvbSgpKiBNYXRoLlBJIC8gMik7XG4gICAgdGhpcy5nYXRlcy5wdXNoKGdhdGUpO1xuICB9XG5cblxuICBhZGRTaGFyZChwb3Mpe1xuICAgIGNvbnN0IHNoYXJkID0gbmV3IFNoYXJkKHBvcylcbiAgICB0aGlzLnNoYXJkcy5wdXNoKHNoYXJkKTtcbiAgfVxuXG4gIG1vdmVPYmplY3RzKGRlbHRhKXtcbiAgICB0aGlzLnBsYXllci5tb3ZlKClcbiAgICBpZiAodGhpcy5mcmFtZU51bSAlIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA9PT0gMCl7XG4gICAgICB0aGlzLmFkZERpYW1vbmQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnJhbWVOdW0gJSB0aGlzLmdhdGVTcGF3blJhdGUgPT09IDApe1xuICAgICAgdGhpcy5hZGRHYXRlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyYW1lTnVtICUgNjAwID09PSAwICYmIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA+IDEwKXtcbiAgICAgIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSAtPSAxMDtcbiAgICAgIHRoaXMuZ2F0ZVNwYXduUmF0ZSAtPSAxMDtcbiAgICB9XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5kaWFtb25kc1tpXS5tb3ZlKGRlbHRhLCB0aGlzLnBsYXllci5wb3MpXG4gICAgICBpZiAoKE1hdGguYWJzKHRoaXMuZGlhbW9uZHNbaV0ucG9zWzBdIC0gdGhpcy5wbGF5ZXIucG9zWzBdKSA8IDQwKSAmJlxuICAgICAgICAoTWF0aC5hYnModGhpcy5kaWFtb25kc1tpXS5wb3NbMV0gLSB0aGlzLnBsYXllci5wb3NbMV0pIDwgNDApKXtcbiAgICAgICAgaWYoVXRpbC5pc0NvbGxpZGVkKHRoaXMuZGlhbW9uZHNbaV0sIHRoaXMucGxheWVyKSl7XG4gICAgICAgICAgdGhpcy5pblBsYXkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ2F0ZXNbaV0ubW92ZSh0aGlzLmZyYW1lTnVtLCB0aGlzLnBsYXllcilcbiAgICAgIGlmICh0aGlzLmdhdGVzW2ldLmNvbGxpc2lvbkNpcmNsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmKFV0aWwuZ29uZVRocm91Z2hHYXRlKHRoaXMucGxheWVyLCB0aGlzLmdhdGVzW2ldKSl7XG5cbiAgICAgICAgICBjb25zdCBleHBsb3Npb24gPSB7cG9zOnRoaXMuZ2F0ZXNbaV0uY29sbGlzaW9uQ2lyY2xlc1szXS5wb3MsIHJhZGl1czogMTUwfVxuICAgICAgICAgIGNvbnN0IGV4cFBvcyA9IHRoaXMuZ2F0ZXNbaV0uY29sbGlzaW9uQ2lyY2xlc1szXS5wb3NcbiAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgMTY7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKGV4cFBvcywgaSoxMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uRnJhbWVzID0gMTU7XG5cbiAgICAgICAgICB0aGlzLnNjb3JlLnNjb3JlICs9IHRoaXMuc2NvcmUubXVsdGlwbGllcioxMDA7XG4gICAgICAgICAgdGhpcy5zY29yZS5tdWx0aXBsaWVyICs9IDI7XG4gICAgICAgICAgaWYgKHRoaXMuZ2F0ZS5wYXVzZWQpe1xuICAgICAgICAgICAgdGhpcy5nYXRlLnBsYXkoKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZ2F0ZS5zb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmdhdGUucGxheSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRpYW1vbmRzVG9LZWVwID0gW107XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKCFVdGlsLmlzQ29sbGlkZWQoZXhwbG9zaW9uLCB0aGlzLmRpYW1vbmRzW2ldKSl7XG4gICAgICAgICAgICAgIGRpYW1vbmRzVG9LZWVwLnB1c2godGhpcy5kaWFtb25kc1tpXSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5zY29yZS5zY29yZSArPSB0aGlzLnNjb3JlLm11bHRpcGxpZXIqNTA7XG4gICAgICAgICAgICAgIHRoaXMuYWRkU2hhcmQodGhpcy5kaWFtb25kc1tpXS5wb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRpYW1vbmRzID0gZGlhbW9uZHNUb0tlZXA7XG4gICAgICAgICAgdGhpcy5nYXRlcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKChNYXRoLmFicyh0aGlzLnNoYXJkc1tpXS5wb3NbMF0gLSB0aGlzLnBsYXllci5wb3NbMF0pIDwgNzApICYmXG4gICAgICAgICAgKE1hdGguYWJzKHRoaXMuc2hhcmRzW2ldLnBvc1sxXSAtIHRoaXMucGxheWVyLnBvc1sxXSkgPCA3MCkpIHtcbiAgICAgICAgICB0aGlzLnNoYXJkc1tpXS5tb3ZlKHRoaXMucGxheWVyLnBvcylcbiAgICAgICAgICBpZiAoVXRpbC5pc0NvbGxpZGVkKHRoaXMuc2hhcmRzW2ldLCB0aGlzLnBsYXllcikpe1xuICAgICAgICAgICAgdGhpcy5zY29yZS5tdWx0aXBsaWVyICs9IDE7XG4gICAgICAgICAgICB0aGlzLm11bHRpLnNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMubXVsdGkucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zaGFyZHMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5mcmFtZU51bSsrO1xuICAgIGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lcyA+IDApe1xuICAgICAgdGhpcy5leHBsb3Npb25GcmFtZXMgLS07XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgdGhpcy5wbGF5ZXIuZHJhdyhjdHgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaWFtb25kcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kaWFtb25kc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5nYXRlc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc2hhcmRzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV4cGxvc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZXhwbG9zaW9uc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuICAgIHRoaXMuc2NvcmUuZHJhd011bHQoY3R4KTtcbiAgICB0aGlzLnNjb3JlLmRyYXdTY29yZShjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IFNvdW5kIGZyb20gXCIuL3NvdW5kXCI7XG5pbXBvcnQge3NldFVwTW9kYWxzfSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5cbmNsYXNzIEdhbWVWaWV3e1xuICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKClcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuYmdpID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5iZ2kuc3JjID0gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JnLmpwZ1wiO1xuICAgIHRoaXMuYmdpWCA9IDA7XG4gICAgdGhpcy5iZ2lZID0gMDtcblxuICAgIHRoaXMuYmdtID0gbmV3IFNvdW5kKFwiLi4vLi4vYXNzZXRzL3NvdW5kcy9iZ20ubXAzXCIpO1xuICAgIHRoaXMuYmdtLnNvdW5kLnZvbHVtZSA9IC4xNTtcbiAgICB0aGlzLmJnbS5zb3VuZC5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZC1tdXNpY1wiKTtcbiAgICB0aGlzLmdvbSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvZ2FtZW92ZXIubXAzXCIpO1xuICAgIHRoaXMuZ29tLnNvdW5kLnZvbHVtZSA9IC4xNTtcbiAgICBzZXRVcE1vZGFscygpO1xuICB9XG5cbiAgYW5pbWF0ZShjdXJyZW50VGltZSkge1xuICAgIHRoaXMuZHJhd0JhY2tncm91bmQodGhpcy5jdHgpO1xuICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJnaSwwLCAwKTtcblxuICAgIGNvbnN0IGRlbHRhID0gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIGlmICh0aGlzLmdhbWUuaW5QbGF5KXtcbiAgICAgIHRoaXMuYmdtLnBsYXkoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgdGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpO1xuICAgICAgdGhpcy5oYW5kbGVNb3ZlbWVudCgpO1xuICAgICAgdGhpcy5nYW1lLm1vdmVPYmplY3RzKGRlbHRhKTtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5LWFnYWluLWJ0blwiKVswXTtcbiAgICAgIHBsYXlBZ2FpbkJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgcGxheUFnYWluQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICBwbGF5QWdhaW5CdG4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmdtLnN0b3AoKTtcbiAgICAgIHRoaXMuZ29tLnNvdW5kLmN1cnJlbnRUaW1lPTA7XG4gICAgICB0aGlzLmdvbS5wbGF5KCk7XG4gICAgICBsZXQgc2NvcmVzQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmVzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZXMnKSkgOiBbXTtcbiAgICAgIGxldCBuZXdTY29yZU9iajtcbiAgICAgIG5ld1Njb3JlT2JqID0gW3RoaXMuZ2FtZS5zY29yZS5uYW1lLCB0aGlzLmdhbWUuc2NvcmUuc2NvcmVdO1xuICAgICAgc2NvcmVzQXJyYXkucHVzaChuZXdTY29yZU9iaik7XG4gICAgICBjb25zdCB0b3BUZW4gPSBzY29yZXNBcnJheS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSkuc2xpY2UoMCwgMTApO1xuICAgICAgdGhpcy5kcmF3R2FtZU92ZXIodG9wVGVuKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZXMnLCBKU09OLnN0cmluZ2lmeSh0b3BUZW4pKTtcblxuICAgIH1cblxuICB9XG5cbiAgZHJhd0dhbWVCZWdpbigpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJnaSwgMCwgMCk7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmdpLCB0aGlzLngsIHRoaXMueSAtIHRoaXMuY2FudmFzSGVpZ2h0KTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgYm9sZCA0MHB4IENvdXJpZXIgTmV3XCI7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDBGRjAwXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJDbGljayB0byBQbGF5XCIsIDM1MCwgMzAwKTtcbiAgICB0aGlzLnRvZ2dsZVNvdW5kU2V0dXAoKTtcbiAgICBjb25zdCBjdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpXG4gICAgY3ZzLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhcnRlZCl7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3R2FtZU92ZXIodG9wVGVuKXtcbiAgICBjdHguZm9udCA9IFwic21hbGwtY2FwcyBib2xkIDQwcHggQ291cmllciBOZXdcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDBGRjAwXCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgICBjdHguZmlsbFRleHQoXCJGaW5hbCBTY29yZTogXCIgKyB0aGlzLmdhbWUuc2NvcmUuc2NvcmUsIDQ4MCwgNDApO1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIDMwcHggQ291cmllciBOZXdcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkZGRjAwXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSGlnaCBTY29yZXNcIiwgNDgwLCAxMDApO1xuXG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgYm9sZCAyNXB4IENvdXJpZXIgTmV3XCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgIGlmICh0b3BUZW5baV0pe1xuICAgICAgICBjdHguZmlsbFRleHQoKGkrMSkgKyBcIi5cIiArIHRvcFRlbltpXVswXSArIFwiOiBcIiArIHRvcFRlbltpXVsxXSwgNDgwLCAxMjAgKyAzMCooaSsxKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICBjb25zdCBzcGVlZCA9IDAuMDg7XG4gICAgdGhpcy5iZ2lYICs9IHNwZWVkO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDk2MCwgNjQwKTtcblxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJnaSwgdGhpcy5iZ2lYLCB0aGlzLmJnaVkpO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJnaSwgdGhpcy5iZ2lYIC0gOTYwLCB0aGlzLmJnaVkpO1xuXG4gICAgaWYgKHRoaXMuYmdpWCA+PSA5NjApe1xuICAgICAgdGhpcy5iZ2lYID0gMDtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMua2V5cyA9ICh0aGlzLmtleXMgfHwgW10pO1xuICAgICAgdGhpcy5rZXlzW2Uua2V5Q29kZV0gPSAoZS50eXBlID09IFwia2V5ZG93blwiKTtcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmtleXNbZS5rZXlDb2RlXSA9IChlLnR5cGUgPT0gXCJrZXlkb3duXCIpO1xuICAgIH0pXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gIH1cblxuICByZXN0YXJ0KCl7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcbiAgICB0aGlzLmdvbS5zdG9wKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG5cbiAgfVxuXG4gIHRvZ2dsZVNvdW5kU2V0dXAoKXtcbiAgICBjb25zdCBzb3VuZEljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvdW5kLWljb25cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VuZEljb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgIHNvdW5kSWNvbnNbaV0ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgc291bmRJY29uc1swXS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICBzb3VuZEljb25zWzFdLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnN0IHNvdW5kcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXVkaW9cIilcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNvdW5kcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgaWYgKHNvdW5kc1tpXS5tdXRlZCl7XG4gICAgICAgICAgICBzb3VuZHNbaV0ubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNvdW5kc1tpXS5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW92ZW1lbnQoKXtcbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s2NV0pIHsgIHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gLTU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s2OF0pIHsgIHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gNTsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzg3XSkgeyB0aGlzLmdhbWUucGxheWVyLnNwZWVkID0gLTQ7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s4NF0pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IDQ7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1szN10pIHsgdGhpcy5nYW1lLnBsYXllci5tb3ZlQW5nbGUgPSAtNTsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzM5XSkgeyB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IDU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1szOF0pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IC00OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNDBdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSA0OyB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYXRle1xuICBjb25zdHJ1Y3Rvcihwb3MsIGFuZ2xlKSB7IC8vICgtMSwwKSAoMSwgMCksICgtMSw2MCksICgxLDYwKVxuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB0aGlzLnZlbCA9IFswLDBdO1xuICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcyA9IFtdXG5cbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBsZXQgeD0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHk9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKDAgKyAxMCwgMCAtIDEwKTtcbiAgICBjdHgubGluZVRvKDAgLSAxMCwgMCAtIDEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oMCwgMCArIDYwKTtcbiAgICBjdHgubGluZVRvKDAgKyAxMCwgMCArIDcwKTtcbiAgICBjdHgubGluZVRvKDAgLSAxMCwgMCArIDcwKTtcbiAgICBjdHgubGluZVRvKDAsIDAgKyA2MCk7XG5cbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ZmYTUwMCc7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBtb3ZlKGZyYW1lTnVtLCBwbGF5ZXIpe1xuICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcyA9IFtdO1xuICAgIGlmIChmcmFtZU51bSAlIDEyMCA9PT0gMCl7XG4gICAgICB0aGlzLnZlbCA9IFV0aWwucmFuZG9tVmVjKDAuMTI1KTtcbiAgICB9XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSwgdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXV07XG4gICAgaWYgKChNYXRoLmFicyhwbGF5ZXIucG9zWzBdIC0gdGhpcy5wb3NbMF0pIDwgNzApICYmIChNYXRoLmFicyhwbGF5ZXIucG9zWzFdIC0gdGhpcy5wb3NbMV0pIDwgNzApKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2OyBpKyspe1xuICAgICAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMucHVzaCh7cG9zOiBcbiAgICAgICAgICBbdGhpcy5wb3NbMF0gLSAoNSArIDEwKmkpICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgICAgICAgIHRoaXMucG9zWzFdICsgKCg1ICsgMTAqaSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSldLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLmNvbGxpc2lvblBvcyA9IHtcblxuICAgIC8vICAgdG9wTGVmdDogWyh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5jb3ModGhpcy5hbmdsZSkgKyB0aGlzLnBvc1sxXSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgdGhpcy5wb3NbMV0gKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV0sXG4gICAgLy8gICB0b3BSaWdodDogWyh0aGlzLnBvc1swXSArIDEpICogTWF0aC5jb3ModGhpcy5hbmdsZSkgKyB0aGlzLnBvc1sxXSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgdGhpcy5wb3NbMV0gKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gKyAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV0sXG4gICAgLy8gICBib3R0b21MZWZ0OiBbKHRoaXMucG9zWzBdIC0gMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAvLyAgICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV0sXG4gICAgLy8gICBib3R0b21SaWdodDogWyh0aGlzLnBvc1swXSArIDEpICogTWF0aC5jb3ModGhpcy5hbmdsZSkgKyAodGhpcy5wb3NbMV0rNjApICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICAodGhpcy5wb3NbMV0rNjApICogTWF0aC5jb3ModGhpcy5hbmdsZSkgLSAoKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSldXG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhdGU7IiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBzZXRVcE1vZGFscyA9ICgpID0+IHtcbiAgd2luZG93LmF4aW9zID0gYXhpb3M7XG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZU1vZGFsXCIpO1xuICBjb25zdCBzY29yZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmUtYnRuXCIpO1xuICBjb25zdCBzY29yZUNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLXNjb3JlXCIpWzBdO1xuICBjb25zdCBzY29yZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2NvcmUtY29udGVudFwiKVswXTtcblxuICBzY29yZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHNjb3JlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBzY29yZUNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgc2NvcmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHNjb3JlKSB7XG4gICAgICBzY29yZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGlTY29yZXMgPSBVdGlsLmdldFRvcDEwMFNjb3JlcygpO1xuXG4gIGxldCBoaVNjb3JlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGlTY29yZXMubGVuZ3RoOyBpKyspe1xuICAgIGhpU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBoaVNjb3JlLnRleHRDb250ZW50ID0gYCR7aX0uICR7aGlTY29yZVtpXS5uYW1lfSAgJHtoaVNjb3JlW2ldLnNjb3JlfWA7XG4gICAgc2NvcmVDb250ZW50LmFwcGVuZENoaWxkKGhpU2NvcmUpO1xuICB9XG5cblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRNb2RhbFwiKTtcbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWJ0blwiKTtcbiAgY29uc3QgYWJvdXRDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1hYnRcIilbMF07XG5cbiAgYWJvdXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgYWJvdXRDbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBhYm91dCkge1xuICAgICAgYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxufVxuIiwiY2xhc3MgUGxheWVye1xuICBjb25zdHJ1Y3Rvcihwb3Mpe1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIHRoaXMubW92ZUFuZ2xlID0gMDtcbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbGxpc2lvblBvcyA9IHtcbiAgICAgIHRvcDogdGhpcy5wb3NbMV0gLSA1LFxuICAgICAgbGVmdDogdGhpcy5wb3NbMF0gLSA1LFxuICAgICAgYm90dG9tOiB0aGlzLnBvc1sxXSArIDUsXG4gICAgICByaWdodDogdGhpcy5wb3NbMF0gKyA1XG4gICAgfVxuICAgIHRoaXMucmFkaXVzID0gODtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcblxuICAgIGxldCB4ID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHkgPSB0aGlzLnBvc1sxXTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKC0xMCwtMTApXG4gICAgY3R4LmxpbmVUbygtMTAsIDUpO1xuICAgIGN0eC5saW5lVG8oMCwgMTUpO1xuICAgIGN0eC5saW5lVG8oMTAsIDUpO1xuICAgIGN0eC5saW5lVG8oMTAsIC0xMCk7XG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKC0xMCwgLTEwKTtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBtb3ZlKCl7XG4gICAgdGhpcy5hbmdsZSArPSB0aGlzLm1vdmVBbmdsZSAqIE1hdGguUEkgLyAxODA7XG4gICAgdGhpcy5wb3MgPSBbXG4gICAgICB0aGlzLnBvc1swXSArIHRoaXMuc3BlZWQgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAgIHRoaXMucG9zWzFdIC0gdGhpcy5zcGVlZCAqIE1hdGguY29zKHRoaXMuYW5nbGUpXG4gICAgXVxuICAgIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuICAgICAgdG9wOiB0aGlzLnBvc1sxXSAtIDUsXG4gICAgICBsZWZ0OiB0aGlzLnBvc1swXSAtIDUsXG4gICAgICBib3R0b206IHRoaXMucG9zWzFdICsgNSxcbiAgICAgIHJpZ2h0OiB0aGlzLnBvc1swXSArIDVcbiAgICB9XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5tb3ZlQW5nbGUgPSAwXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY2xhc3MgU2NvcmV7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5tdWx0aXBsaWVyID0gMTtcbiAgICB0aGlzLm5hbWUgPSBcIk1vZSBTenlzbGFrXCI7XG4gIH1cblxuICBkcmF3TXVsdChjdHgpIHtcbiAgICBjdHguZm9udCA9IFwic21hbGwtY2FwcyBib2xkIDI1cHggQ291cmllciBOZXdcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIGN0eC5maWxsVGV4dChcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmUsIDc2MCwgMjApO1xuXG4gIH1cblxuICBkcmF3U2NvcmUoY3R4KSB7XG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgYm9sZCAyNXB4IENvdXJpZXIgTmV3XCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbFRleHQoXCJNdWx0aXBsaWVyOiBcIiArIHRoaXMubXVsdGlwbGllciwgMjAsIDIwKTtcblxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7IiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuY2xhc3MgU2hhcmR7XG4gIGNvbnN0cnVjdG9yKHBvcykge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMucmFkaXVzID0gMjU7XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyAyLCB5IC0gMywgeCArIDQsIHkgLSAzLCB4ICsgNSwgeSAtIDIpO1xuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyAyLCB5ICsgMywgeCArIDQsIHkgKyAzLCB4LCB5KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzM5ZmYxNCc7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgbW92ZShwbGF5ZXJQb3MpIHtcbiAgICBjb25zdCB2ZWxEaXIgPSBbcGxheWVyUG9zWzBdIC0gdGhpcy5wb3NbMF0sIHBsYXllclBvc1sxXSAtIHRoaXMucG9zWzFdXTtcbiAgICBjb25zdCB2ZWxNYWcgPSBVdGlsLm5vcm0odmVsRGlyKTtcbiAgICBjb25zdCB2ZWwgPSBbdmVsRGlyWzBdIC8gKHZlbE1hZy80KSwgdmVsRGlyWzFdIC8gKHZlbE1hZy80KV07XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB2ZWxbMF0sIHRoaXMucG9zWzFdICsgdmVsWzFdXTtcbiAgICAvLyB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArICh2ZWxEaXJbMF0gLyAodmVsTWFnICogMTApKSwgdmVsRGlyWzFdIC8gKHZlbE1hZyAqIDEwKV1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZDsiLCJmdW5jdGlvbiBTb3VuZChzcmMpIHtcbiAgdGhpcy5zb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgdGhpcy5zb3VuZC5zcmMgPSBzcmM7XG4gIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XG4gIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xuICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kKTtcbiAgdGhpcy5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc291bmQucGxheSgpO1xuICB9XG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNvdW5kOyIsIi8vIFJldHVybiBhIHJhbmRvbWx5IG9yaWVudGVkIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBsZW5ndGguXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBVdGlsID0ge1xuXG4gIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICBjb25zdCBkZWcgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG4gICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xuICB9LFxuICAvLyBTY2FsZSB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIGJ5IHRoZSBnaXZlbiBhbW91bnQuXG4gIHNjYWxlKHZlYywgbSkge1xuICAgIHJldHVybiBbdmVjWzBdICogbSwgdmVjWzFdICogbV07XG4gIH0sXG5cbiAgZGlzdCh2MSwgdjIpe1xuICAgIHJldHVybiBNYXRoLnNxcnQoKCh2MVswXSAtIHYyWzBdKSAqKiAyKSsgKCh2MVsxXSAtIHYyWzFdKSAqKiAyKSlcbiAgfSxcblxuICBub3JtKHZlYyl7XG4gICAgcmV0dXJuIFV0aWwuZGlzdChbMCwwXSwgdmVjKVxuICB9LFxuXG4gIGlzQ29sbGlkZWQob2JqMSwgb2JqMil7XG4gICAgdmFyIGR4ID0gb2JqMS5wb3NbMF0gLSBvYmoyLnBvc1swXTtcbiAgICB2YXIgZHkgPSBvYmoxLnBvc1sxXSAtIG9iajIucG9zWzFdO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICBpZiAoZGlzdGFuY2UgPCBvYmoxLnJhZGl1cyArIG9iajIucmFkaXVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgZ29uZVRocm91Z2hHYXRlKHBsYXllciwgZ2F0ZSl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYXRlLmNvbGxpc2lvbkNpcmNsZXMubGVuZ3RoOyBpKyspe1xuICAgICAgaWYgKFV0aWwuaXNDb2xsaWRlZChwbGF5ZXIsIGdhdGUuY29sbGlzaW9uQ2lyY2xlc1tpXSkpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICBnZXRUb3AxMDBTY29yZXMoKXtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Njb3Jlcy9zY29yZXNgKS50aGVuKHNjb3JlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzY29yZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGFkZFNjb3JlKGRhdGEpe1xuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Njb3Jlcy9gLCBkYXRhKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsOyJdLCJzb3VyY2VSb290IjoiIn0=