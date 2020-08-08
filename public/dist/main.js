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
/******/ 	__webpack_require__.p = "/public/dist/";
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
  gameView.drawGameBegin();
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
      this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]];
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

      if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].dist(diamond.pos, this.player.pos) > 200) {
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
    key: "checkBounds",
    value: function checkBounds(pos) {
      if (pos[0] < -100 || pos[0] > 1060 || pos[1] < -100 || pos[1] > 740) {
        this.inPlay = false;
      }
    }
  }, {
    key: "isOutOfBounds",
    value: function isOutOfBounds(pos) {
      if (pos[0] < 0) {
        return "left";
      } else if (pos[0] > 960) {
        return "right";
      } else if (pos[1] < 0) {
        return "top";
      } else if (pos[1] > 640) {
        return "bottom";
      } else {
        return null;
      }
    }
  }, {
    key: "drawOOBcircle",
    value: function drawOOBcircle(ctx, oobSpecifics) {
      var x, y, r, color;

      switch (oobSpecifics) {
        case "left":
          x = 0;
          y = this.player.pos[1];

          if (this.player.pos[0] > -50) {
            color = "#FAED27";
          } else {
            color = "#FF0000";
          }

          break;

        case "right":
          x = 960;
          y = this.player.pos[1];

          if (this.player.pos[0] < 1010) {
            color = "#FAED27";
          } else {
            color = "#FF0000";
          }

          break;

        case "top":
          x = this.player.pos[0];
          y = 0;

          if (this.player.pos[1] > -50) {
            color = "#FAED27";
          } else {
            color = "#FF0000";
          }

          break;

        case "bottom":
          x = this.player.pos[0];
          y = 640;

          if (this.player.pos[1] < 690) {
            color = "#FAED27";
          } else {
            color = "#FF0000";
          }

          break;
      }

      r = 20;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }, {
    key: "moveObjects",
    value: function moveObjects(delta) {
      this.player.move();
      this.checkBounds(this.player.pos);

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
      var oobSpecifics = this.isOutOfBounds(this.player.pos);

      if (oobSpecifics) {
        this.drawOOBcircle(ctx, oobSpecifics);
      }

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
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
    this.gate = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/gate.mp3");
    this.gate.sound.volume = .3;
    this.multi = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/multi.mp3");
    this.multi.sound.volume = .3;
    this.diamond = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/diamondspawn.mp3");
    this.diamond.sound.volume = .05;
    this.name = "Isaac is the Best";
    Object(_page__WEBPACK_IMPORTED_MODULE_2__["setUpModals"])();
  }

  _createClass(GameView, [{
    key: "animate",
    value: function animate(currentTime) {
      var _this = this;

      this.drawBackground(this.ctx);
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
        newScoreObj = [this.name, this.game.score.score];
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
      this.ctx.textAlign = "center";
      this.ctx.fillText("Click screen to play", 480, 300);
      this.toggleSoundSetup();
      var cvs = document.getElementById("mycanvas");
      var name = document.getElementsByClassName("name-input")[0];
      var nameForm = document.getElementsByClassName("name-form")[0];
      name.classList.toggle("hidden");
      name.addEventListener('change', function (e) {
        e.preventDefault();
        name.value = e.target.value;
      });
      nameForm.addEventListener("submit", function (e) {
        e.preventDefault();
        name.classList.toggle("hidden");
      });

      cvs.onclick = function () {
        if (!_this2.started) {
          if (!name.classList.contains("hidden")) {
            name.classList.toggle("hidden");
          }

          _this2.name = name.value || _this2.name;

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
      ctx.fillText("Local High Scores - Global on Top Right ", 480, 100);
      ctx.font = "small-caps bold 25px Courier New";
      ctx.fillStyle = "#0095DD";

      for (var i = 0; i < 10; i++) {
        if (topTen[i]) {
          ctx.fillText(i + 1 + "." + topTen[i][0] + ": " + topTen[i][1], 480, 120 + 30 * (i + 1));
        }
      }

      _util__WEBPACK_IMPORTED_MODULE_3__["default"].addScore({
        user: this.name,
        score: this.game.score.score
      }).then(function (res) {
        Object(_page__WEBPACK_IMPORTED_MODULE_2__["setUpModals"])();
      });
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
      var sounds = document.getElementsByTagName("audio");
      var anyMuted = false;

      for (var i = 0; i < sounds.length; i++) {
        if (sounds[i].muted) {
          anyMuted = true;
        }
      }

      for (var _i = 0; _i < sounds.length; _i++) {
        if (anyMuted) {
          sounds[_i].muted = true;
        } else {
          sounds[_i].muted = false;
        }
      }

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

          for (var _i2 = 0; _i2 < sounds.length; _i2++) {
            if (sounds[_i2].muted) {
              sounds[_i2].muted = false;
            } else {
              sounds[_i2].muted = true;
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
      }
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
  var scoreContent = document.getElementsByClassName("score-content")[0];
  var sCFK = scoreContent.firstElementChild;
  scoreContent.innerHTML = sCFK.outerHTML;
  var scoreClose = document.getElementsByClassName("close-score")[0];

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

  var getScores = function getScores() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/scores/scores");
  };

  getScores().then(function (data) {
    var hiScore;
    var hiScores = data.data;
    hiScores = hiScores.slice(0, 50);

    for (var i = 0; i < hiScores.length; i++) {
      hiScore = document.createElement('p');
      hiScore.textContent = "".concat(i + 1, ". ").concat(hiScores[i].user, "  ").concat(hiScores[i].score);
      scoreContent.appendChild(hiScore);
    }
  });
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
      ctx.beginPath();
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
    this.name = "Isaac is the Best";
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
      this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]];
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

var Util = {
  randomVec: function randomVec(length) {
    var deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
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
  getScores: function getScores() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/scores/scores").then(function (response) {
      return response.data;
    });
  },
  addScore: function addScore(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/scores/", data);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy9kaWFtb25kLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy9leHBsb3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy9zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvc2hhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9zY3JpcHRzL3NvdW5kLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJkcmF3R2FtZUJlZ2luIiwid2luZG93IiwiRGlhbW9uZCIsInBvcyIsInZlbCIsInJhZGl1cyIsIngiLCJ5IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJkZWx0YSIsInBsYXllclBvcyIsInZlbERpciIsInZlbE1hZyIsIlV0aWwiLCJub3JtIiwiRXhwbG9zaW9uIiwiY29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyIiwiYXJjIiwiUEkiLCJHYW1lIiwicGxheWVyIiwiUGxheWVyIiwiZGlhbW9uZHMiLCJkaWFtb25kU3Bhd25SYXRlIiwiZ2F0ZXMiLCJnYXRlU3Bhd25SYXRlIiwic2hhcmRzIiwiZXhwbG9zaW9ucyIsImV4cGxvc2lvbkZyYW1lcyIsImZyYW1lTnVtIiwiaW5QbGF5Iiwic2NvcmUiLCJTY29yZSIsImdhdGUiLCJTb3VuZCIsInNvdW5kIiwidm9sdW1lIiwibXVsdGkiLCJkaWFtb25kIiwiZGlzdCIsInBsYXkiLCJwdXNoIiwiR2F0ZSIsInNoYXJkIiwiU2hhcmQiLCJvb2JTcGVjaWZpY3MiLCJmaWxsU3R5bGUiLCJmaWxsIiwibW92ZSIsImNoZWNrQm91bmRzIiwiYWRkRGlhbW9uZCIsImFkZEdhdGUiLCJpIiwibGVuZ3RoIiwiYWJzIiwiaXNDb2xsaWRlZCIsImNvbGxpc2lvbkNpcmNsZXMiLCJnb25lVGhyb3VnaEdhdGUiLCJleHBsb3Npb24iLCJleHBQb3MiLCJtdWx0aXBsaWVyIiwicGF1c2VkIiwiY3VycmVudFRpbWUiLCJkaWFtb25kc1RvS2VlcCIsImFkZFNoYXJkIiwic3BsaWNlIiwiZHJhdyIsImlzT3V0T2ZCb3VuZHMiLCJkcmF3T09CY2lyY2xlIiwiZHJhd011bHQiLCJkcmF3U2NvcmUiLCJnYW1lIiwibGFzdFRpbWUiLCJhbmltYXRlIiwiYmluZCIsInN0YXJ0Iiwic3RhcnRlZCIsImJnaSIsIkltYWdlIiwic3JjIiwiYmdpWCIsImJnaVkiLCJiZ20iLCJjbGFzc0xpc3QiLCJhZGQiLCJnb20iLCJuYW1lIiwic2V0VXBNb2RhbHMiLCJkcmF3QmFja2dyb3VuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhhbmRsZU1vdmVtZW50IiwibW92ZU9iamVjdHMiLCJwbGF5QWdhaW5CdG4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidG9nZ2xlIiwib25jbGljayIsInJlc3RhcnQiLCJzdG9wIiwic2NvcmVzQXJyYXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibmV3U2NvcmVPYmoiLCJ0b3BUZW4iLCJzb3J0IiwiYSIsImIiLCJzbGljZSIsImRyYXdHYW1lT3ZlciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkcmF3SW1hZ2UiLCJjYW52YXNIZWlnaHQiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJ0b2dnbGVTb3VuZFNldHVwIiwiY3ZzIiwibmFtZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJhZGRTY29yZSIsInVzZXIiLCJ0aGVuIiwicmVzIiwic3BlZWQiLCJmaWxsUmVjdCIsImtleXMiLCJrZXlDb2RlIiwidHlwZSIsInNvdW5kcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYW55TXV0ZWQiLCJtdXRlZCIsInNvdW5kSWNvbnMiLCJtb3ZlQW5nbGUiLCJhbmdsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJyZXN0b3JlIiwicmFuZG9tVmVjIiwic2luIiwiY29zIiwiYXhpb3MiLCJzY29yZUJ0biIsInNjb3JlQ29udGVudCIsInNDRksiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlubmVySFRNTCIsIm91dGVySFRNTCIsInNjb3JlQ2xvc2UiLCJzdHlsZSIsImRpc3BsYXkiLCJldmVudCIsImdldFNjb3JlcyIsImdldCIsImRhdGEiLCJoaVNjb3JlIiwiaGlTY29yZXMiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImFib3V0IiwiYWJvdXRCdG4iLCJhYm91dENsb3NlIiwiY29sbGlzaW9uUG9zIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYmV6aWVyQ3VydmVUbyIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJwYXVzZSIsImRlZyIsInNjYWxlIiwidmVjIiwibSIsInYxIiwidjIiLCJzcXJ0Iiwib2JqMSIsIm9iajIiLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJyZXNwb25zZSIsInBvc3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLEdBQUcsU0FBUztBQUM1QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0M7QUFDaEMsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDL1dBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDL01BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBQ0Ms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LENBQXhCLENBQUosRUFBc0Q7QUFDcEQsZUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPLEtBQVA7QUFDRCxHQXRDVTtBQXdDWDBHLFdBeENXLHVCQXdDQTtBQUNULFdBQU9YLDRDQUFLLENBQUNZLEdBQU4sdUJBQWdDakMsSUFBaEMsQ0FBcUMsVUFBQWdFLFFBQVEsRUFBSTtBQUN0RCxhQUFPQSxRQUFRLENBQUM5QixJQUFoQjtBQUNELEtBRk0sQ0FBUDtBQUdELEdBNUNVO0FBOENYcEMsVUE5Q1csb0JBOENGb0MsSUE5Q0UsRUE4Q0c7QUFDWixXQUFPYiw0Q0FBSyxDQUFDNEMsSUFBTixpQkFBMkIvQixJQUEzQixDQUFQO0FBQ0Q7QUFoRFUsQ0FBYjtBQW9EZXZKLG1FQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3B1YmxpYy9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3B1YmxpYy9zcmMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG5cbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xuXG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xuXG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xuXG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7IC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG5cbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDsgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG5cblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcblxuXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG5cblxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTsgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuXG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9OyAvLyBIYW5kbGUgdGltZW91dFxuXG5cbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG5cbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTsgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cblxuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTsgLy8gQWRkIHhzcmYgaGVhZGVyXG5cblxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/IGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfSAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuXG5cbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG5cblxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH0gLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuXG5cbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG5cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH0gLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcblxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH0gLy8gU2VuZCB0aGUgcmVxdWVzdFxuXG5cbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG5cbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpOyAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTsgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG5cbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufSAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcblxuXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7IC8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuXG5heGlvcy5BeGlvcyA9IEF4aW9zOyAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5cbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59OyAvLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cblxuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTsgLy8gRXhwb3NlIGFsbC9zcHJlYWRcblxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zOyAvLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cblxuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cblxuXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5cblxuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xuXG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcblxudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cblxuXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5cblxuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpOyAvLyBTZXQgY29uZmlnLm1ldGhvZFxuXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfSAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG5cblxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTsgLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG5cblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5cblxuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuXG5cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cblxuXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xuXG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cblxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG5cbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5cblxuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTsgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcblxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9OyAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG5cbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKGNvbmZpZy5kYXRhLCBjb25maWcuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3QpOyAvLyBGbGF0dGVuIGhlYWRlcnNcblxuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSwgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sIGNvbmZpZy5oZWFkZXJzKTtcbiAgdXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSwgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gIH0pO1xuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpOyAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEocmVzcG9uc2UuZGF0YSwgcmVzcG9uc2UuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTsgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcblxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKHJlYXNvbi5yZXNwb25zZS5kYXRhLCByZWFzb24ucmVzcG9uc2UuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG5cbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIGVycm9yO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFsnYmFzZVVSTCcsICd1cmwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJywgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJywgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLCAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnXTtcbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXMuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKS5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpO1xuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0LmtleXMoY29uZmlnMikuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gIH0pO1xuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcblxuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UuY29uZmlnLCBudWxsLCByZXNwb25zZS5yZXF1ZXN0LCByZXNwb25zZSkpO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG5cbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuXG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8IHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHwgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHwgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHwgdXRpbHMuaXNGaWxlKGRhdGEpIHx8IHV0aWxzLmlzQmxvYihkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvKiBJZ25vcmUgKi9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLnJlcGxhY2UoLyU0MC9naSwgJ0AnKS5yZXBsYWNlKC8lM0EvZ2ksICc6JykucmVwbGFjZSgvJTI0L2csICckJykucmVwbGFjZSgvJTJDL2dpLCAnLCcpLnJlcGxhY2UoLyUyMC9nLCAnKycpLnJlcGxhY2UoLyU1Qi9naSwgJ1snKS5yZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcblxuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcblxuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTCA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKSA6IGJhc2VVUkw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgPyAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbmZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgcmV0dXJuIHtcbiAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICB2YXIgY29va2llID0gW107XG4gICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICB9LFxuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgIHJldHVybiBtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICB9XG4gIH07XG59KCkgOiAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG5mdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiB7XG4gICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICB9O1xufSgpOyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgPyAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3Rcbi8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdmFyIG9yaWdpblVSTDtcbiAgLyoqXG4gICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICogQHJldHVybnMge09iamVjdH1cbiAgKi9cblxuICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgfVxuXG4gICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7IC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcblxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgIHBhdGhuYW1lOiB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDogJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICB9O1xuICB9XG5cbiAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIC8qKlxuICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICovXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgdmFyIHBhcnNlZCA9IHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgcmV0dXJuIHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdDtcbiAgfTtcbn0oKSA6IC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG5mdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpOyAvLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuXG5cbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFsnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLCAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJywgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCddO1xuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHBhcnNlZDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcikgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgRm9ybURhdGE7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB2YWwgJiYgdmFsLmJ1ZmZlciAmJiB2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5cblxuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5cblxuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHwgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xufVxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuXG5cbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZXJnZSgpXG4vKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi9cbntcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSgpXG4vKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi9cbntcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5cblxuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307IC8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0KCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgfSAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXG5cbiAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gIH0gLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXG5cbiAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZHJhaW5pbmcgPSBmYWxzZTtcblxuICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICB9XG5cbiAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgIGRyYWluUXVldWUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICBpZiAoZHJhaW5pbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW4pIHtcbiAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IFtdO1xuXG4gICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcXVldWVJbmRleCA9IC0xO1xuICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgfVxuXG4gIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gIH1cblxuICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuXG4gIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgfVxufTsgLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuXG5cbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICB0aGlzLmZ1biA9IGZ1bjtcbiAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuXG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcblxucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBbXTtcbn07XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJy8nO1xufTtcblxucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAwO1xufTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9zY3JpcHRzL2dhbWVfdmlld1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcblxuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjdHgpO1xuICBnYW1lVmlldy5kcmF3R2FtZUJlZ2luKCk7XG4gIHdpbmRvdy5jdHggPSBjdHg7XG59KTtcbiIsImltcG9ydCBVdGlsIGZyb20gXCIuL3V0aWxcIjtcblxuY2xhc3MgRGlhbW9uZHtcbiAgY29uc3RydWN0b3IocG9zKSB7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy52ZWwgPSAwO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSsxNSk7XG4gICAgY3R4LmxpbmVUbyh4IC0gOCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5IC0gMTUpO1xuICAgIGN0eC5saW5lVG8oeCArIDgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSsxNSk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyM0ZGZmZmYnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIG1vdmUoZGVsdGEsIHBsYXllclBvcyl7XG4gICAgY29uc3QgdmVsRGlyID0gW3BsYXllclBvc1swXS10aGlzLnBvc1swXSwgcGxheWVyUG9zWzFdIC0gdGhpcy5wb3NbMV1dO1xuICAgIGNvbnN0IHZlbE1hZyA9IFV0aWwubm9ybSh2ZWxEaXIpO1xuICAgIGNvbnN0IHZlbCA9IFt2ZWxEaXJbMF0vKHZlbE1hZyksIHZlbERpclsxXS8odmVsTWFnKV07XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB2ZWxbMF0sIHRoaXMucG9zWzFdICsgdmVsWzFdXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFtb25kOyIsImNsYXNzIEV4cGxvc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHBvcywgcmFkaXVzKSB7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5jb2xvciA9IFtcbiAgICAgICcjRkZGRjAwJywnI0ZGRkYzMycsJyNGMkVBMDInLCcjRTZGQjA0JyxcbiAgICAgICcjRkYwMDAwJywgJyNGRDFDMDMnLCAnI0ZGMzMwMicsICcjRkY2NjAwJyxcbiAgICAgICcjMDBGRkZGJywgJyMwOTlGRkYnLCAnIzAwNjJGRicsICcjMDAzM0ZGJyxcbiAgICAgICcjRkYwMEZGJywgJyNGRjAwQ0MnLCAnI0ZGMDA5OScsICcjQ0MwMEZGJyxcbiAgICAgICcjOUQwMEZGJywgJyNDQzAwRkYnLCAnIzZFMEREMCcsICcjOTkwMEZGJyxcbiAgICBdXG4gICAgICBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApXVxuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBsZXQgeCA9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5ID0gdGhpcy5wb3NbMV07XG4gICAgbGV0IHIgPSB0aGlzLnJhZGl1cztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgseSxyLCAwICwgMipNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3Npb247IiwiaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL2dhbWVfdmlld1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBEaWFtb25kIGZyb20gXCIuL2RpYW1vbmRcIjtcbmltcG9ydCBHYXRlIGZyb20gXCIuL2dhdGVcIjtcbmltcG9ydCBTaGFyZCBmcm9tIFwiLi9zaGFyZFwiO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tIFwiLi9leHBsb3Npb25cIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBTY29yZSBmcm9tIFwiLi9zY29yZVwiO1xuaW1wb3J0IFNvdW5kIGZyb20gXCIuL3NvdW5kXCI7XG5cblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKFs0ODAsIDMyMF0pO1xuXG4gICAgdGhpcy5kaWFtb25kcyA9IFtdO1xuICAgIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA9IDEwMDtcblxuICAgIHRoaXMuZ2F0ZXMgPSBbXTtcbiAgICB0aGlzLmdhdGVTcGF3blJhdGUgPSAyNDA7XG5cbiAgICB0aGlzLnNoYXJkcyA9IFtdO1xuXG4gICAgdGhpcy5leHBsb3Npb25zID0gW107XG4gICAgdGhpcy5leHBsb3Npb25GcmFtZXMgPSAwO1xuXG4gICAgdGhpcy5mcmFtZU51bSA9IDE7XG4gICAgdGhpcy5pblBsYXkgPSB0cnVlO1xuXG4gICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSgpO1xuXG4gICAgdGhpcy5nYXRlID0gbmV3IFNvdW5kKFwiLi4vLi4vYXNzZXRzL3NvdW5kcy9nYXRlLm1wM1wiKTtcbiAgICB0aGlzLmdhdGUuc291bmQudm9sdW1lID0gLjM7XG4gICAgdGhpcy5tdWx0aSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvbXVsdGkubXAzXCIpO1xuICAgIHRoaXMubXVsdGkuc291bmQudm9sdW1lID0gLjM7XG4gICAgdGhpcy5kaWFtb25kID0gbmV3IFNvdW5kKFwiLi4vLi4vYXNzZXRzL3NvdW5kcy9kaWFtb25kc3Bhd24ubXAzXCIpO1xuICAgIHRoaXMuZGlhbW9uZC5zb3VuZC52b2x1bWUgPSAuMDU7XG5cbiAgfVxuXG4gIGFkZERpYW1vbmQoKXtcbiAgICBjb25zdCBkaWFtb25kID0gbmV3IERpYW1vbmQoW01hdGgucmFuZG9tKCkqOTYwLCBNYXRoLnJhbmRvbSgpKjY0MF0pO1xuICAgIGlmIChVdGlsLmRpc3QoZGlhbW9uZC5wb3MsIHRoaXMucGxheWVyLnBvcykgPiAyMDApe1xuICAgICAgdGhpcy5kaWFtb25kLnBsYXkoKTtcbiAgICAgIHRoaXMuZGlhbW9uZHMucHVzaChkaWFtb25kKTtcbiAgICB9XG4gIH1cblxuICBhZGRHYXRlKCl7XG4gICAgY29uc3QgZ2F0ZSA9IG5ldyBHYXRlKFtNYXRoLnJhbmRvbSgpICogOTYwLCBNYXRoLnJhbmRvbSgpICogNjQwXSwgTWF0aC5yYW5kb20oKSogTWF0aC5QSSAvIDIpO1xuICAgIHRoaXMuZ2F0ZXMucHVzaChnYXRlKTtcbiAgfVxuXG5cbiAgYWRkU2hhcmQocG9zKXtcbiAgICBjb25zdCBzaGFyZCA9IG5ldyBTaGFyZChwb3MpXG4gICAgdGhpcy5zaGFyZHMucHVzaChzaGFyZCk7XG4gIH1cblxuICBjaGVja0JvdW5kcyhwb3Mpe1xuICAgIGlmIChwb3NbMF0gPCAtMTAwIHx8IHBvc1swXSA+IDEwNjAgfHwgcG9zWzFdIDwgLTEwMCB8fCBwb3NbMV0gPiA3NDApe1xuICAgICAgdGhpcy5pblBsYXkgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpc091dE9mQm91bmRzKHBvcyl7XG4gICAgaWYgKHBvc1swXSA8IDApe1xuICAgICAgcmV0dXJuIFwibGVmdFwiO1xuICAgIH1lbHNlIGlmKHBvc1swXSA+IDk2MCl7XG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xuICAgIH1lbHNlIGlmKHBvc1sxXSA8IDApe1xuICAgICAgcmV0dXJuIFwidG9wXCI7XG4gICAgfWVsc2UgaWYocG9zWzFdID4gNjQwKXtcbiAgICAgIHJldHVybiBcImJvdHRvbVwiO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZHJhd09PQmNpcmNsZShjdHgsIG9vYlNwZWNpZmljcyl7XG4gICAgbGV0IHgsIHksIHIsIGNvbG9yO1xuICAgIHN3aXRjaCAob29iU3BlY2lmaWNzKXtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIHggPSAwO1xuICAgICAgICB5ID0gdGhpcy5wbGF5ZXIucG9zWzFdO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIucG9zWzBdID4gLTUwKXtcbiAgICAgICAgICBjb2xvciA9IFwiI0ZBRUQyN1wiXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGNvbG9yID0gXCIjRkYwMDAwXCJcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHggPSA5NjA7XG4gICAgICAgIHkgPSB0aGlzLnBsYXllci5wb3NbMV07XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5wb3NbMF0gPCAxMDEwKSB7XG4gICAgICAgICAgY29sb3IgPSBcIiNGQUVEMjdcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbG9yID0gXCIjRkYwMDAwXCJcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICB4ID0gdGhpcy5wbGF5ZXIucG9zWzBdO1xuICAgICAgICB5ID0gMDtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBvc1sxXSA+IC01MCkge1xuICAgICAgICAgIGNvbG9yID0gXCIjRkFFRDI3XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xvciA9IFwiI0ZGMDAwMFwiXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWsgXG4gICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgIHggPSB0aGlzLnBsYXllci5wb3NbMF07XG4gICAgICAgIHkgPSA2NDA7XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5wb3NbMV0gPCA2OTApIHtcbiAgICAgICAgICBjb2xvciA9IFwiI0ZBRUQyN1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sb3IgPSBcIiNGRjAwMDBcIlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrIFxuICAgIH1cbiAgICByID0gMjA7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlT2JqZWN0cyhkZWx0YSl7XG4gICAgdGhpcy5wbGF5ZXIubW92ZSgpXG4gICAgdGhpcy5jaGVja0JvdW5kcyh0aGlzLnBsYXllci5wb3MpXG5cbiAgICBpZiAodGhpcy5mcmFtZU51bSAlIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA9PT0gMCl7XG4gICAgICB0aGlzLmFkZERpYW1vbmQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnJhbWVOdW0gJSB0aGlzLmdhdGVTcGF3blJhdGUgPT09IDApe1xuICAgICAgdGhpcy5hZGRHYXRlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyYW1lTnVtICUgNjAwID09PSAwICYmIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA+IDEwKXtcbiAgICAgIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSAtPSAxMDtcbiAgICAgIHRoaXMuZ2F0ZVNwYXduUmF0ZSAtPSAxMDtcbiAgICB9XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5kaWFtb25kc1tpXS5tb3ZlKGRlbHRhLCB0aGlzLnBsYXllci5wb3MpXG4gICAgICBpZiAoKE1hdGguYWJzKHRoaXMuZGlhbW9uZHNbaV0ucG9zWzBdIC0gdGhpcy5wbGF5ZXIucG9zWzBdKSA8IDQwKSAmJlxuICAgICAgICAoTWF0aC5hYnModGhpcy5kaWFtb25kc1tpXS5wb3NbMV0gLSB0aGlzLnBsYXllci5wb3NbMV0pIDwgNDApKXtcbiAgICAgICAgaWYoVXRpbC5pc0NvbGxpZGVkKHRoaXMuZGlhbW9uZHNbaV0sIHRoaXMucGxheWVyKSl7XG4gICAgICAgICAgdGhpcy5pblBsYXkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ2F0ZXNbaV0ubW92ZSh0aGlzLmZyYW1lTnVtLCB0aGlzLnBsYXllcilcbiAgICAgIGlmICh0aGlzLmdhdGVzW2ldLmNvbGxpc2lvbkNpcmNsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmKFV0aWwuZ29uZVRocm91Z2hHYXRlKHRoaXMucGxheWVyLCB0aGlzLmdhdGVzW2ldKSl7XG5cbiAgICAgICAgICBjb25zdCBleHBsb3Npb24gPSB7cG9zOnRoaXMuZ2F0ZXNbaV0uY29sbGlzaW9uQ2lyY2xlc1szXS5wb3MsIHJhZGl1czogMTUwfVxuICAgICAgICAgIGNvbnN0IGV4cFBvcyA9IHRoaXMuZ2F0ZXNbaV0uY29sbGlzaW9uQ2lyY2xlc1szXS5wb3NcbiAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgMTY7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmV4cGxvc2lvbnMucHVzaChuZXcgRXhwbG9zaW9uKGV4cFBvcywgaSoxMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZXhwbG9zaW9uRnJhbWVzID0gMTU7XG5cbiAgICAgICAgICB0aGlzLnNjb3JlLnNjb3JlICs9IHRoaXMuc2NvcmUubXVsdGlwbGllcioxMDA7XG4gICAgICAgICAgdGhpcy5zY29yZS5tdWx0aXBsaWVyICs9IDI7XG4gICAgICAgICAgaWYgKHRoaXMuZ2F0ZS5wYXVzZWQpe1xuICAgICAgICAgICAgdGhpcy5nYXRlLnBsYXkoKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZ2F0ZS5zb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmdhdGUucGxheSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRpYW1vbmRzVG9LZWVwID0gW107XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKCFVdGlsLmlzQ29sbGlkZWQoZXhwbG9zaW9uLCB0aGlzLmRpYW1vbmRzW2ldKSl7XG4gICAgICAgICAgICAgIGRpYW1vbmRzVG9LZWVwLnB1c2godGhpcy5kaWFtb25kc1tpXSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5zY29yZS5zY29yZSArPSB0aGlzLnNjb3JlLm11bHRpcGxpZXIqNTA7XG4gICAgICAgICAgICAgIHRoaXMuYWRkU2hhcmQodGhpcy5kaWFtb25kc1tpXS5wb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRpYW1vbmRzID0gZGlhbW9uZHNUb0tlZXA7XG4gICAgICAgICAgdGhpcy5nYXRlcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKChNYXRoLmFicyh0aGlzLnNoYXJkc1tpXS5wb3NbMF0gLSB0aGlzLnBsYXllci5wb3NbMF0pIDwgNzApICYmXG4gICAgICAgICAgKE1hdGguYWJzKHRoaXMuc2hhcmRzW2ldLnBvc1sxXSAtIHRoaXMucGxheWVyLnBvc1sxXSkgPCA3MCkpIHtcbiAgICAgICAgICB0aGlzLnNoYXJkc1tpXS5tb3ZlKHRoaXMucGxheWVyLnBvcylcbiAgICAgICAgICBpZiAoVXRpbC5pc0NvbGxpZGVkKHRoaXMuc2hhcmRzW2ldLCB0aGlzLnBsYXllcikpe1xuICAgICAgICAgICAgdGhpcy5zY29yZS5tdWx0aXBsaWVyICs9IDE7XG4gICAgICAgICAgICB0aGlzLm11bHRpLnNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMubXVsdGkucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5zaGFyZHMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5mcmFtZU51bSsrO1xuICAgIGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lcyA+IDApe1xuICAgICAgdGhpcy5leHBsb3Npb25GcmFtZXMgLS07XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgdGhpcy5wbGF5ZXIuZHJhdyhjdHgpO1xuICAgIGNvbnN0IG9vYlNwZWNpZmljcyA9IHRoaXMuaXNPdXRPZkJvdW5kcyh0aGlzLnBsYXllci5wb3MpO1xuICAgIGlmKG9vYlNwZWNpZmljcyl7XG4gICAgICB0aGlzLmRyYXdPT0JjaXJjbGUoY3R4LCBvb2JTcGVjaWZpY3MpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZGlhbW9uZHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ2F0ZXNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnNoYXJkc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5leHBsb3Npb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmV4cGxvc2lvbnNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgICB0aGlzLnNjb3JlLmRyYXdNdWx0KGN0eCk7XG4gICAgdGhpcy5zY29yZS5kcmF3U2NvcmUoY3R4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi9zb3VuZFwiO1xuaW1wb3J0IHtzZXRVcE1vZGFsc30gZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jbGFzcyBHYW1lVmlld3tcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJnaSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuYmdpLnNyYyA9IFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5qcGdcIjtcbiAgICB0aGlzLmJnaVggPSAwO1xuICAgIHRoaXMuYmdpWSA9IDA7XG5cbiAgICB0aGlzLmJnbSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvYmdtLm1wM1wiKTtcbiAgICB0aGlzLmJnbS5zb3VuZC52b2x1bWUgPSAuMTU7XG4gICAgdGhpcy5iZ20uc291bmQuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmQtbXVzaWNcIik7XG5cbiAgICB0aGlzLmdvbSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvZ2FtZW92ZXIubXAzXCIpO1xuICAgIHRoaXMuZ29tLnNvdW5kLnZvbHVtZSA9IC4xNTtcblxuICAgIHRoaXMuZ2F0ZSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvZ2F0ZS5tcDNcIik7XG4gICAgdGhpcy5nYXRlLnNvdW5kLnZvbHVtZSA9IC4zO1xuXG4gICAgdGhpcy5tdWx0aSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvbXVsdGkubXAzXCIpO1xuICAgIHRoaXMubXVsdGkuc291bmQudm9sdW1lID0gLjM7XG5cbiAgICB0aGlzLmRpYW1vbmQgPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL2RpYW1vbmRzcGF3bi5tcDNcIik7XG4gICAgdGhpcy5kaWFtb25kLnNvdW5kLnZvbHVtZSA9IC4wNTtcblxuICAgIHRoaXMubmFtZSA9IFwiSXNhYWMgaXMgdGhlIEJlc3RcIjtcbiAgICBcbiAgICBzZXRVcE1vZGFscygpO1xuICB9XG5cbiAgYW5pbWF0ZShjdXJyZW50VGltZSkge1xuICAgIHRoaXMuZHJhd0JhY2tncm91bmQodGhpcy5jdHgpO1xuXG4gICAgY29uc3QgZGVsdGEgPSBjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgaWYgKHRoaXMuZ2FtZS5pblBsYXkpe1xuICAgICAgdGhpcy5iZ20ucGxheSgpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgICB0aGlzLmhhbmRsZU1vdmVtZW50KCk7XG4gICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoZGVsdGEpO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIH1lbHNle1xuICAgICAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBsYXktYWdhaW4tYnRuXCIpWzBdO1xuICAgICAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICBwbGF5QWdhaW5CdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgIHBsYXlBZ2FpbkJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5iZ20uc3RvcCgpO1xuICAgICAgdGhpcy5nb20uc291bmQuY3VycmVudFRpbWU9MDtcbiAgICAgIHRoaXMuZ29tLnBsYXkoKTtcbiAgICAgIGxldCBzY29yZXNBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZXMnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlcycpKSA6IFtdO1xuICAgICAgbGV0IG5ld1Njb3JlT2JqO1xuICAgICAgbmV3U2NvcmVPYmogPSBbdGhpcy5uYW1lLCB0aGlzLmdhbWUuc2NvcmUuc2NvcmVdO1xuICAgICAgc2NvcmVzQXJyYXkucHVzaChuZXdTY29yZU9iaik7XG4gICAgICBjb25zdCB0b3BUZW4gPSBzY29yZXNBcnJheS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSkuc2xpY2UoMCwgMTApO1xuICAgICAgdGhpcy5kcmF3R2FtZU92ZXIodG9wVGVuKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZXMnLCBKU09OLnN0cmluZ2lmeSh0b3BUZW4pKTtcblxuICAgIH1cblxuICB9XG5cbiAgZHJhd0dhbWVCZWdpbigpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJnaSwgMCwgMCk7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmdpLCB0aGlzLngsIHRoaXMueSAtIHRoaXMuY2FudmFzSGVpZ2h0KTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgYm9sZCA0MHB4IENvdXJpZXIgTmV3XCI7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDBGRjAwXCI7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIkNsaWNrIHNjcmVlbiB0byBwbGF5XCIsIDQ4MCwgMzAwKTtcbiAgICB0aGlzLnRvZ2dsZVNvdW5kU2V0dXAoKTtcbiAgICBjb25zdCBjdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYW1lLWlucHV0XCIpWzBdO1xuICAgIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hbWUtZm9ybVwiKVswXTtcblxuICAgIG5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuYW1lLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSlcbiAgICBuYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4gICAgfSlcbiAgICBjdnMub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGFydGVkKXtcbiAgICAgICAgaWYgKCFuYW1lLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSl7XG4gICAgICAgICAgbmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUudmFsdWUgfHwgdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0dhbWVPdmVyKHRvcFRlbil7XG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgYm9sZCA0MHB4IENvdXJpZXIgTmV3XCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwRkYwMFwiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgY3R4LmZpbGxUZXh0KFwiRmluYWwgU2NvcmU6IFwiICsgdGhpcy5nYW1lLnNjb3JlLnNjb3JlLCA0ODAsIDQwKTtcbiAgICBjdHguZm9udCA9IFwic21hbGwtY2FwcyAzMHB4IENvdXJpZXIgTmV3XCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGRkYwMFwiO1xuICAgIGN0eC5maWxsVGV4dChcIkxvY2FsIEhpZ2ggU2NvcmVzIC0gR2xvYmFsIG9uIFRvcCBSaWdodCBcIiwgNDgwLCAxMDApO1xuXG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgYm9sZCAyNXB4IENvdXJpZXIgTmV3XCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgIGlmICh0b3BUZW5baV0pe1xuICAgICAgICBjdHguZmlsbFRleHQoKGkrMSkgKyBcIi5cIiArIHRvcFRlbltpXVswXSArIFwiOiBcIiArIHRvcFRlbltpXVsxXSwgNDgwLCAxMjAgKyAzMCooaSsxKSlcbiAgICAgIH1cbiAgICB9XG4gICAgVXRpbC5hZGRTY29yZSh7IHVzZXI6IHRoaXMubmFtZSwgc2NvcmU6IHRoaXMuZ2FtZS5zY29yZS5zY29yZSB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldFVwTW9kYWxzKCk7XG4gICAgfSlcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIGNvbnN0IHNwZWVkID0gMC4wODtcbiAgICB0aGlzLmJnaVggKz0gc3BlZWQ7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgOTYwLCA2NDApO1xuXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmdpLCB0aGlzLmJnaVgsIHRoaXMuYmdpWSk7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmdpLCB0aGlzLmJnaVggLSA5NjAsIHRoaXMuYmdpWSk7XG5cbiAgICBpZiAodGhpcy5iZ2lYID49IDk2MCl7XG4gICAgICB0aGlzLmJnaVggPSAwO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5rZXlzID0gKHRoaXMua2V5cyB8fCBbXSk7XG4gICAgICB0aGlzLmtleXNbZS5rZXlDb2RlXSA9IChlLnR5cGUgPT0gXCJrZXlkb3duXCIpO1xuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMua2V5c1tlLmtleUNvZGVdID0gKGUudHlwZSA9PSBcImtleWRvd25cIik7XG4gICAgfSlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgfVxuXG4gIHJlc3RhcnQoKXtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIHRoaXMuZ29tLnN0b3AoKTtcbiAgICBjb25zdCBzb3VuZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImF1ZGlvXCIpO1xuICAgIGxldCBhbnlNdXRlZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc291bmRzW2ldLm11dGVkKSB7XG4gICAgICAgIGFueU11dGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbnlNdXRlZCkge1xuICAgICAgICBzb3VuZHNbaV0ubXV0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmRzW2ldLm11dGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG5cbiAgfVxuXG4gIHRvZ2dsZVNvdW5kU2V0dXAoKXtcbiAgICBjb25zdCBzb3VuZEljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvdW5kLWljb25cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VuZEljb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgIHNvdW5kSWNvbnNbaV0ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgc291bmRJY29uc1swXS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICBzb3VuZEljb25zWzFdLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnN0IHNvdW5kcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXVkaW9cIilcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNvdW5kcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgaWYgKHNvdW5kc1tpXS5tdXRlZCl7XG4gICAgICAgICAgICBzb3VuZHNbaV0ubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNvdW5kc1tpXS5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW92ZW1lbnQoKXtcbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s2NV0pIHsgIHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gLTU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s2OF0pIHsgIHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gNTsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzg3XSkgeyB0aGlzLmdhbWUucGxheWVyLnNwZWVkID0gLTQ7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s4NF0pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IDQ7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1szN10pIHsgdGhpcy5nYW1lLnBsYXllci5tb3ZlQW5nbGUgPSAtNTsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzM5XSkgeyB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IDU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1szOF0pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IC00OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNDBdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSA0OyB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYXRle1xuICBjb25zdHJ1Y3Rvcihwb3MsIGFuZ2xlKSB7IFxuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB0aGlzLnZlbCA9IFswLDBdO1xuICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcyA9IFtdXG5cbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBsZXQgeD0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHk9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKDAgKyAxMCwgMCAtIDEwKTtcbiAgICBjdHgubGluZVRvKDAgLSAxMCwgMCAtIDEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oMCwgMCArIDYwKTtcbiAgICBjdHgubGluZVRvKDAgKyAxMCwgMCArIDcwKTtcbiAgICBjdHgubGluZVRvKDAgLSAxMCwgMCArIDcwKTtcbiAgICBjdHgubGluZVRvKDAsIDAgKyA2MCk7XG5cbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ZmYTUwMCc7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBtb3ZlKGZyYW1lTnVtLCBwbGF5ZXIpe1xuICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcyA9IFtdO1xuICAgIGlmIChmcmFtZU51bSAlIDEyMCA9PT0gMCl7XG4gICAgICB0aGlzLnZlbCA9IFV0aWwucmFuZG9tVmVjKDAuMTI1KTtcbiAgICB9XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSwgdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXV07XG4gICAgaWYgKChNYXRoLmFicyhwbGF5ZXIucG9zWzBdIC0gdGhpcy5wb3NbMF0pIDwgNzApICYmIChNYXRoLmFicyhwbGF5ZXIucG9zWzFdIC0gdGhpcy5wb3NbMV0pIDwgNzApKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2OyBpKyspe1xuICAgICAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMucHVzaCh7cG9zOiBcbiAgICAgICAgICBbdGhpcy5wb3NbMF0gLSAoNSArIDEwKmkpICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgICAgICAgIHRoaXMucG9zWzFdICsgKCg1ICsgMTAqaSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSldLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXRlOyIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgc2V0VXBNb2RhbHMgPSAoKSA9PiB7XG4gIHdpbmRvdy5heGlvcyA9IGF4aW9zO1xuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVNb2RhbFwiKTtcbiAgY29uc3Qgc2NvcmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlLWJ0blwiKTtcbiAgY29uc3Qgc2NvcmVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNjb3JlLWNvbnRlbnRcIilbMF07XG4gIGNvbnN0IHNDRksgPSBzY29yZUNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIHNjb3JlQ29udGVudC5pbm5lckhUTUwgPSBzQ0ZLLm91dGVySFRNTDtcbiAgY29uc3Qgc2NvcmVDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1zY29yZVwiKVswXTtcblxuXG4gIHNjb3JlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgc2NvcmUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIHNjb3JlQ2xvc2Uub25jbGljayA9ICgpID0+IHtcbiAgICBzY29yZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gc2NvcmUpIHtcbiAgICAgIHNjb3JlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRTY29yZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9zY29yZXMvc2NvcmVzYClcbiAgfVxuXG4gIGdldFNjb3JlcygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBsZXQgaGlTY29yZTtcbiAgICBsZXQgaGlTY29yZXMgPSBkYXRhLmRhdGE7XG4gICAgaGlTY29yZXMgPSBoaVNjb3Jlcy5zbGljZSgwLDUwKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlTY29yZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhpU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIGhpU2NvcmUudGV4dENvbnRlbnQgPSBgJHtpKzF9LiAke2hpU2NvcmVzW2ldLnVzZXJ9ICAke2hpU2NvcmVzW2ldLnNjb3JlfWA7XG4gICAgICBzY29yZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGlTY29yZSk7XG4gICAgfVxuICB9KTtcblxuXG5cblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRNb2RhbFwiKTtcbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWJ0blwiKTtcbiAgY29uc3QgYWJvdXRDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1hYnRcIilbMF07XG5cbiAgYWJvdXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgYWJvdXRDbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBhYm91dCkge1xuICAgICAgYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxufVxuIiwiY2xhc3MgUGxheWVye1xuICBjb25zdHJ1Y3Rvcihwb3Mpe1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIHRoaXMubW92ZUFuZ2xlID0gMDtcbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbGxpc2lvblBvcyA9IHtcbiAgICAgIHRvcDogdGhpcy5wb3NbMV0gLSA1LFxuICAgICAgbGVmdDogdGhpcy5wb3NbMF0gLSA1LFxuICAgICAgYm90dG9tOiB0aGlzLnBvc1sxXSArIDUsXG4gICAgICByaWdodDogdGhpcy5wb3NbMF0gKyA1XG4gICAgfVxuICAgIHRoaXMucmFkaXVzID0gODtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcblxuICAgIGxldCB4ID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHkgPSB0aGlzLnBvc1sxXTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmxpbmVUbygtMTAsLTEwKVxuICAgIGN0eC5saW5lVG8oLTEwLCA1KTtcbiAgICBjdHgubGluZVRvKDAsIDE1KTtcbiAgICBjdHgubGluZVRvKDEwLCA1KTtcbiAgICBjdHgubGluZVRvKDEwLCAtMTApO1xuICAgIGN0eC5saW5lVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbygtMTAsIC0xMCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmZmZmYnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgbW92ZSgpe1xuICAgIHRoaXMuYW5nbGUgKz0gdGhpcy5tb3ZlQW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xuICAgIHRoaXMucG9zID0gW1xuICAgICAgdGhpcy5wb3NbMF0gKyB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgICB0aGlzLnBvc1sxXSAtIHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKVxuICAgIF1cbiAgICB0aGlzLmNvbGxpc2lvblBvcyA9IHtcbiAgICAgIHRvcDogdGhpcy5wb3NbMV0gLSA1LFxuICAgICAgbGVmdDogdGhpcy5wb3NbMF0gLSA1LFxuICAgICAgYm90dG9tOiB0aGlzLnBvc1sxXSArIDUsXG4gICAgICByaWdodDogdGhpcy5wb3NbMF0gKyA1XG4gICAgfVxuICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIHRoaXMubW92ZUFuZ2xlID0gMFxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNsYXNzIFNjb3Jle1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMubXVsdGlwbGllciA9IDE7XG4gICAgdGhpcy5uYW1lID0gXCJJc2FhYyBpcyB0aGUgQmVzdFwiO1xuICB9XG5cbiAgZHJhd011bHQoY3R4KSB7XG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgYm9sZCAyNXB4IENvdXJpZXIgTmV3XCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCA3NjAsIDIwKTtcblxuICB9XG5cbiAgZHJhd1Njb3JlKGN0eCkge1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgMjVweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiTXVsdGlwbGllcjogXCIgKyB0aGlzLm11bHRpcGxpZXIsIDIwLCAyMCk7XG5cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlOyIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIFNoYXJke1xuICBjb25zdHJ1Y3Rvcihwb3MpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnJhZGl1cyA9IDI1O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGxldCB4ID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHkgPSB0aGlzLnBvc1sxXTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSAtIDMsIHggKyA0LCB5IC0gMywgeCArIDUsIHkgLSAyKTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSArIDMsIHggKyA0LCB5ICsgMywgeCwgeSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyMzOWZmMTQnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIG1vdmUocGxheWVyUG9zKSB7XG4gICAgY29uc3QgdmVsRGlyID0gW3BsYXllclBvc1swXSAtIHRoaXMucG9zWzBdLCBwbGF5ZXJQb3NbMV0gLSB0aGlzLnBvc1sxXV07XG4gICAgY29uc3QgdmVsTWFnID0gVXRpbC5ub3JtKHZlbERpcik7XG4gICAgY29uc3QgdmVsID0gW3ZlbERpclswXSAvICh2ZWxNYWcvNCksIHZlbERpclsxXSAvICh2ZWxNYWcvNCldO1xuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdmVsWzBdLCB0aGlzLnBvc1sxXSArIHZlbFsxXV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcmQ7IiwiZnVuY3Rpb24gU291bmQoc3JjKSB7XG4gIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gIHRoaXMuc291bmQuc3JjID0gc3JjO1xuICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbiAgdGhpcy5zb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZCk7XG4gIHRoaXMucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgfVxuICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTb3VuZDsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBVdGlsID0ge1xuXG4gIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICBjb25zdCBkZWcgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG4gICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xuICB9LFxuICBzY2FsZSh2ZWMsIG0pIHtcbiAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXSAqIG1dO1xuICB9LFxuXG4gIGRpc3QodjEsIHYyKXtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCgodjFbMF0gLSB2MlswXSkgKiogMikrICgodjFbMV0gLSB2MlsxXSkgKiogMikpXG4gIH0sXG5cbiAgbm9ybSh2ZWMpe1xuICAgIHJldHVybiBVdGlsLmRpc3QoWzAsMF0sIHZlYylcbiAgfSxcblxuICBpc0NvbGxpZGVkKG9iajEsIG9iajIpe1xuICAgIHZhciBkeCA9IG9iajEucG9zWzBdIC0gb2JqMi5wb3NbMF07XG4gICAgdmFyIGR5ID0gb2JqMS5wb3NbMV0gLSBvYmoyLnBvc1sxXTtcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgaWYgKGRpc3RhbmNlIDwgb2JqMS5yYWRpdXMgKyBvYmoyLnJhZGl1cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIGdvbmVUaHJvdWdoR2F0ZShwbGF5ZXIsIGdhdGUpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2F0ZS5jb2xsaXNpb25DaXJjbGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmIChVdGlsLmlzQ29sbGlkZWQocGxheWVyLCBnYXRlLmNvbGxpc2lvbkNpcmNsZXNbaV0pKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgZ2V0U2NvcmVzKCl7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9zY29yZXMvc2NvcmVzYCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9KTtcbiAgfSxcblxuICBhZGRTY29yZShkYXRhKXtcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9zY29yZXMvYCwgZGF0YSk7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiXSwic291cmNlUm9vdCI6IiJ9