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
    this.name = "Moe Szyslak";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy9kaWFtb25kLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy9leHBsb3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy9zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3NjcmlwdHMvc2hhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9zY3JpcHRzL3NvdW5kLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJkcmF3R2FtZUJlZ2luIiwid2luZG93IiwiRGlhbW9uZCIsInBvcyIsInZlbCIsInJhZGl1cyIsIngiLCJ5IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJkZWx0YSIsInBsYXllclBvcyIsInZlbERpciIsInZlbE1hZyIsIlV0aWwiLCJub3JtIiwiRXhwbG9zaW9uIiwiY29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyIiwiYXJjIiwiUEkiLCJHYW1lIiwicGxheWVyIiwiUGxheWVyIiwiZGlhbW9uZHMiLCJkaWFtb25kU3Bhd25SYXRlIiwiZ2F0ZXMiLCJnYXRlU3Bhd25SYXRlIiwic2hhcmRzIiwiZXhwbG9zaW9ucyIsImV4cGxvc2lvbkZyYW1lcyIsImZyYW1lTnVtIiwiaW5QbGF5Iiwic2NvcmUiLCJTY29yZSIsImdhdGUiLCJTb3VuZCIsInNvdW5kIiwidm9sdW1lIiwibXVsdGkiLCJkaWFtb25kIiwiZGlzdCIsInBsYXkiLCJwdXNoIiwiR2F0ZSIsInNoYXJkIiwiU2hhcmQiLCJvb2JTcGVjaWZpY3MiLCJmaWxsU3R5bGUiLCJmaWxsIiwibW92ZSIsImNoZWNrQm91bmRzIiwiYWRkRGlhbW9uZCIsImFkZEdhdGUiLCJpIiwibGVuZ3RoIiwiYWJzIiwiaXNDb2xsaWRlZCIsImNvbGxpc2lvbkNpcmNsZXMiLCJnb25lVGhyb3VnaEdhdGUiLCJleHBsb3Npb24iLCJleHBQb3MiLCJtdWx0aXBsaWVyIiwicGF1c2VkIiwiY3VycmVudFRpbWUiLCJkaWFtb25kc1RvS2VlcCIsImFkZFNoYXJkIiwic3BsaWNlIiwiZHJhdyIsImlzT3V0T2ZCb3VuZHMiLCJkcmF3T09CY2lyY2xlIiwiZHJhd011bHQiLCJkcmF3U2NvcmUiLCJnYW1lIiwibGFzdFRpbWUiLCJhbmltYXRlIiwiYmluZCIsInN0YXJ0Iiwic3RhcnRlZCIsImJnaSIsIkltYWdlIiwic3JjIiwiYmdpWCIsImJnaVkiLCJiZ20iLCJjbGFzc0xpc3QiLCJhZGQiLCJnb20iLCJuYW1lIiwic2V0VXBNb2RhbHMiLCJkcmF3QmFja2dyb3VuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhhbmRsZU1vdmVtZW50IiwibW92ZU9iamVjdHMiLCJwbGF5QWdhaW5CdG4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidG9nZ2xlIiwib25jbGljayIsInJlc3RhcnQiLCJzdG9wIiwic2NvcmVzQXJyYXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibmV3U2NvcmVPYmoiLCJ0b3BUZW4iLCJzb3J0IiwiYSIsImIiLCJzbGljZSIsImRyYXdHYW1lT3ZlciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkcmF3SW1hZ2UiLCJjYW52YXNIZWlnaHQiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJ0b2dnbGVTb3VuZFNldHVwIiwiY3ZzIiwibmFtZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJhZGRTY29yZSIsInVzZXIiLCJ0aGVuIiwicmVzIiwic3BlZWQiLCJmaWxsUmVjdCIsImtleXMiLCJrZXlDb2RlIiwidHlwZSIsInNvdW5kcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYW55TXV0ZWQiLCJtdXRlZCIsInNvdW5kSWNvbnMiLCJtb3ZlQW5nbGUiLCJhbmdsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJyZXN0b3JlIiwicmFuZG9tVmVjIiwic2luIiwiY29zIiwiYXhpb3MiLCJzY29yZUJ0biIsInNjb3JlQ29udGVudCIsInNDRksiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlubmVySFRNTCIsIm91dGVySFRNTCIsInNjb3JlQ2xvc2UiLCJzdHlsZSIsImRpc3BsYXkiLCJldmVudCIsImdldFNjb3JlcyIsImdldCIsImRhdGEiLCJoaVNjb3JlIiwiaGlTY29yZXMiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImFib3V0IiwiYWJvdXRCdG4iLCJhYm91dENsb3NlIiwiY29sbGlzaW9uUG9zIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYmV6aWVyQ3VydmVUbyIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJwYXVzZSIsImRlZyIsInNjYWxlIiwidmVjIiwibSIsInYxIiwidjIiLCJzcXJ0Iiwib2JqMSIsIm9iajIiLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJyZXNwb25zZSIsInBvc3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLEdBQUcsU0FBUztBQUM1QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0M7QUFDaEMsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDL1dBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDL01BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBQ0Ms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QUF4QixDQUFKLEVBQXNEO0FBQ3BELGVBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBTyxLQUFQO0FBQ0QsR0F0Q1U7QUF3Q1gwRyxXQXhDVyx1QkF3Q0E7QUFDVCxXQUFPWCw0Q0FBSyxDQUFDWSxHQUFOLHVCQUFnQ2pDLElBQWhDLENBQXFDLFVBQUFnRSxRQUFRLEVBQUk7QUFDdEQsYUFBT0EsUUFBUSxDQUFDOUIsSUFBaEI7QUFDRCxLQUZNLENBQVA7QUFHRCxHQTVDVTtBQThDWHBDLFVBOUNXLG9CQThDRm9DLElBOUNFLEVBOENHO0FBQ1osV0FBT2IsNENBQUssQ0FBQzRDLElBQU4saUJBQTJCL0IsSUFBM0IsQ0FBUDtBQUNEO0FBaERVLENBQWI7QUFvRGV2SixtRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wdWJsaWMvc3JjL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xuXG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcblxudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcblxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcblxudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG5cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpOyAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7IC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuXG5cbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG5cblxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTsgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuXG5cbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07IC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcblxuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7IC8vIENsZWFuIHVwIHJlcXVlc3RcblxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTsgLy8gSGFuZGxlIHRpbWVvdXRcblxuXG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuXG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpOyAvLyBDbGVhbiB1cCByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07IC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG5cblxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7IC8vIEFkZCB4c3JmIGhlYWRlclxuXG5cbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgPyBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH0gLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcblxuXG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuXG5cbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9IC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcblxuXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9IC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG5cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTsgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuXG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9IC8vIFNlbmQgdGhlIHJlcXVlc3RcblxuXG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xuXG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTsgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcblxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7IC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG4gIHJldHVybiBpbnN0YW5jZTtcbn0gLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG5cblxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpOyAvLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcblxuYXhpb3MuQXhpb3MgPSBBeGlvczsgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTsgLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5cblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7IC8vIEV4cG9zZSBhbGwvc3ByZWFkXG5cbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBheGlvczsgLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvczsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5cblxuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuXG5cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcblxudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG5cbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5cblxuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuXG5cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTsgLy8gU2V0IGNvbmZpZy5tZXRob2RcblxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH0gLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuXG5cbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07IC8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xuXG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBBeGlvczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuXG5cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cblxuXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5cblxuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcblxudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xuXG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7IC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG5cbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTsgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShjb25maWcuZGF0YSwgY29uZmlnLmhlYWRlcnMsIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0KTsgLy8gRmxhdHRlbiBoZWFkZXJzXG5cbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LCBjb25maWcuaGVhZGVycyk7XG4gIHV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICB9KTtcbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTsgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcblxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKHJlc3BvbnNlLmRhdGEsIHJlc3BvbnNlLmhlYWRlcnMsIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7IC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG5cbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShyZWFzb24ucmVzcG9uc2UuZGF0YSwgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuXG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBlcnJvcjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbJ2Jhc2VVUkwnLCAndXJsJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdtYXhDb250ZW50TGVuZ3RoJywgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLCAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ107XG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cykuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZzIpLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICB9KTtcbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIGZ1bmN0aW9uIG90aGVyS2V5c0RlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNvbmZpZztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG5cbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLmNvbmZpZywgbnVsbCwgcmVzcG9uc2UucmVxdWVzdCwgcmVzcG9uc2UpKTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuXG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cblxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fCB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8IHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8IHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8IHV0aWxzLmlzRmlsZShkYXRhKSB8fCB1dGlscy5pc0Jsb2IoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogSWdub3JlICovXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0czsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5yZXBsYWNlKC8lNDAvZ2ksICdAJykucmVwbGFjZSgvJTNBL2dpLCAnOicpLnJlcGxhY2UoLyUyNC9nLCAnJCcpLnJlcGxhY2UoLyUyQy9naSwgJywnKS5yZXBsYWNlKC8lMjAvZywgJysnKS5yZXBsYWNlKC8lNUIvZ2ksICdbJykucmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkwgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJykgOiBiYXNlVVJMO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID8gLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG5mdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiB7XG4gICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgfSxcbiAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gbWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgfVxuICB9O1xufSgpIDogLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4ge1xuICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgfTtcbn0oKTsiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID8gLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4vLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbmZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHZhciBvcmlnaW5VUkw7XG4gIC8qKlxuICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICovXG5cbiAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgIGlmIChtc2llKSB7XG4gICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgIH1cblxuICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpOyAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG5cbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICBwYXRobmFtZTogdXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6ICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgfTtcbiAgfVxuXG4gIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAvKipcbiAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAqL1xuXG4gIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgIHZhciBwYXJzZWQgPSB1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgIHJldHVybiBwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJiBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3Q7XG4gIH07XG59KCkgOiAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xufSgpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTsgLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcblxuXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJywgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLCAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXTtcbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykge1xuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwYXJzZWQ7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdmFsICYmIHZhbC5idWZmZXIgJiYgdmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuXG5cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fCBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbn1cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuXG5cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfSAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcblxuXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5cblxuZnVuY3Rpb24gbWVyZ2UoKVxuLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovXG57XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuICogdG8gb3JpZ2luYWwgb2JqZWN0cyBpcyBrZXB0LlxuICpcbiAqIEBzZWUgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cblxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UoKVxuLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovXG57XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuXG5cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59OyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9OyAvLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICB9XG59KSgpO1xuXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gIH0gLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcblxuXG4gIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICB9IC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcblxuXG4gIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRyYWluaW5nID0gZmFsc2U7XG5cbiAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgfVxuXG4gIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICBkcmFpblF1ZXVlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgaWYgKGRyYWluaW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gIGRyYWluaW5nID0gdHJ1ZTtcbiAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcblxuICB3aGlsZSAobGVuKSB7XG4gICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgcXVldWUgPSBbXTtcblxuICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIH1cblxuICBjdXJyZW50UXVldWUgPSBudWxsO1xuICBkcmFpbmluZyA9IGZhbHNlO1xuICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICB9XG5cbiAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcblxuICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gIH1cbn07IC8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcblxuXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgdGhpcy5mdW4gPSBmdW47XG4gIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cblxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5cbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gW107XG59O1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICcvJztcbn07XG5cbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gMDtcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXdcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY3R4KTtcbiAgZ2FtZVZpZXcuZHJhd0dhbWVCZWdpbigpO1xuICB3aW5kb3cuY3R4ID0gY3R4O1xufSk7XG4iLCJpbXBvcnQgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5cbmNsYXNzIERpYW1vbmR7XG4gIGNvbnN0cnVjdG9yKHBvcykge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMudmVsID0gMDtcbiAgICB0aGlzLnJhZGl1cyA9IDEwO1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGxldCB4ID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHkgPSB0aGlzLnBvc1sxXTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkrMTUpO1xuICAgIGN0eC5saW5lVG8oeCAtIDgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSAtIDE1KTtcbiAgICBjdHgubGluZVRvKHggKyA4LCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkrMTUpO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjNGRmZmZmJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBtb3ZlKGRlbHRhLCBwbGF5ZXJQb3Mpe1xuICAgIGNvbnN0IHZlbERpciA9IFtwbGF5ZXJQb3NbMF0tdGhpcy5wb3NbMF0sIHBsYXllclBvc1sxXSAtIHRoaXMucG9zWzFdXTtcbiAgICBjb25zdCB2ZWxNYWcgPSBVdGlsLm5vcm0odmVsRGlyKTtcbiAgICBjb25zdCB2ZWwgPSBbdmVsRGlyWzBdLyh2ZWxNYWcpLCB2ZWxEaXJbMV0vKHZlbE1hZyldO1xuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdmVsWzBdLCB0aGlzLnBvc1sxXSArIHZlbFsxXV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbW9uZDsiLCJjbGFzcyBFeHBsb3Npb24ge1xuICBjb25zdHJ1Y3Rvcihwb3MsIHJhZGl1cykge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMuY29sb3IgPSBbXG4gICAgICAnI0ZGRkYwMCcsJyNGRkZGMzMnLCcjRjJFQTAyJywnI0U2RkIwNCcsXG4gICAgICAnI0ZGMDAwMCcsICcjRkQxQzAzJywgJyNGRjMzMDInLCAnI0ZGNjYwMCcsXG4gICAgICAnIzAwRkZGRicsICcjMDk5RkZGJywgJyMwMDYyRkYnLCAnIzAwMzNGRicsXG4gICAgICAnI0ZGMDBGRicsICcjRkYwMENDJywgJyNGRjAwOTknLCAnI0NDMDBGRicsXG4gICAgICAnIzlEMDBGRicsICcjQ0MwMEZGJywgJyM2RTBERDAnLCAnIzk5MDBGRicsXG4gICAgXVxuICAgICAgW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKV1cbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGxldCByID0gdGhpcy5yYWRpdXM7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4LHksciwgMCAsIDIqTWF0aC5QSSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9zaW9uOyIsImltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9nYW1lX3ZpZXdcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgRGlhbW9uZCBmcm9tIFwiLi9kaWFtb25kXCI7XG5pbXBvcnQgR2F0ZSBmcm9tIFwiLi9nYXRlXCI7XG5pbXBvcnQgU2hhcmQgZnJvbSBcIi4vc2hhcmRcIjtcbmltcG9ydCBFeHBsb3Npb24gZnJvbSBcIi4vZXhwbG9zaW9uXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgU2NvcmUgZnJvbSBcIi4vc2NvcmVcIjtcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi9zb3VuZFwiO1xuXG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihbNDgwLCAzMjBdKTtcblxuICAgIHRoaXMuZGlhbW9uZHMgPSBbXTtcbiAgICB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPSAxMDA7XG5cbiAgICB0aGlzLmdhdGVzID0gW107XG4gICAgdGhpcy5nYXRlU3Bhd25SYXRlID0gMjQwO1xuXG4gICAgdGhpcy5zaGFyZHMgPSBbXTtcblxuICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xuICAgIHRoaXMuZXhwbG9zaW9uRnJhbWVzID0gMDtcblxuICAgIHRoaXMuZnJhbWVOdW0gPSAxO1xuICAgIHRoaXMuaW5QbGF5ID0gdHJ1ZTtcblxuICAgIHRoaXMuc2NvcmUgPSBuZXcgU2NvcmUoKTtcblxuICAgIHRoaXMuZ2F0ZSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvZ2F0ZS5tcDNcIik7XG4gICAgdGhpcy5nYXRlLnNvdW5kLnZvbHVtZSA9IC4zO1xuICAgIHRoaXMubXVsdGkgPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL211bHRpLm1wM1wiKTtcbiAgICB0aGlzLm11bHRpLnNvdW5kLnZvbHVtZSA9IC4zO1xuICAgIHRoaXMuZGlhbW9uZCA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvZGlhbW9uZHNwYXduLm1wM1wiKTtcbiAgICB0aGlzLmRpYW1vbmQuc291bmQudm9sdW1lID0gLjA1O1xuXG4gIH1cblxuICBhZGREaWFtb25kKCl7XG4gICAgY29uc3QgZGlhbW9uZCA9IG5ldyBEaWFtb25kKFtNYXRoLnJhbmRvbSgpKjk2MCwgTWF0aC5yYW5kb20oKSo2NDBdKTtcbiAgICBpZiAoVXRpbC5kaXN0KGRpYW1vbmQucG9zLCB0aGlzLnBsYXllci5wb3MpID4gMjAwKXtcbiAgICAgIHRoaXMuZGlhbW9uZC5wbGF5KCk7XG4gICAgICB0aGlzLmRpYW1vbmRzLnB1c2goZGlhbW9uZCk7XG4gICAgfVxuICB9XG5cbiAgYWRkR2F0ZSgpe1xuICAgIGNvbnN0IGdhdGUgPSBuZXcgR2F0ZShbTWF0aC5yYW5kb20oKSAqIDk2MCwgTWF0aC5yYW5kb20oKSAqIDY0MF0sIE1hdGgucmFuZG9tKCkqIE1hdGguUEkgLyAyKTtcbiAgICB0aGlzLmdhdGVzLnB1c2goZ2F0ZSk7XG4gIH1cblxuXG4gIGFkZFNoYXJkKHBvcyl7XG4gICAgY29uc3Qgc2hhcmQgPSBuZXcgU2hhcmQocG9zKVxuICAgIHRoaXMuc2hhcmRzLnB1c2goc2hhcmQpO1xuICB9XG5cbiAgY2hlY2tCb3VuZHMocG9zKXtcbiAgICBpZiAocG9zWzBdIDwgLTEwMCB8fCBwb3NbMF0gPiAxMDYwIHx8IHBvc1sxXSA8IC0xMDAgfHwgcG9zWzFdID4gNzQwKXtcbiAgICAgIHRoaXMuaW5QbGF5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaXNPdXRPZkJvdW5kcyhwb3Mpe1xuICAgIGlmIChwb3NbMF0gPCAwKXtcbiAgICAgIHJldHVybiBcImxlZnRcIjtcbiAgICB9ZWxzZSBpZihwb3NbMF0gPiA5NjApe1xuICAgICAgcmV0dXJuIFwicmlnaHRcIjtcbiAgICB9ZWxzZSBpZihwb3NbMV0gPCAwKXtcbiAgICAgIHJldHVybiBcInRvcFwiO1xuICAgIH1lbHNlIGlmKHBvc1sxXSA+IDY0MCl7XG4gICAgICByZXR1cm4gXCJib3R0b21cIjtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdPT0JjaXJjbGUoY3R4LCBvb2JTcGVjaWZpY3Mpe1xuICAgIGxldCB4LCB5LCByLCBjb2xvcjtcbiAgICBzd2l0Y2ggKG9vYlNwZWNpZmljcyl7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICB4ID0gMDtcbiAgICAgICAgeSA9IHRoaXMucGxheWVyLnBvc1sxXTtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBvc1swXSA+IC01MCl7XG4gICAgICAgICAgY29sb3IgPSBcIiNGQUVEMjdcIlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBjb2xvciA9IFwiI0ZGMDAwMFwiXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICB4ID0gOTYwO1xuICAgICAgICB5ID0gdGhpcy5wbGF5ZXIucG9zWzFdO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIucG9zWzBdIDwgMTAxMCkge1xuICAgICAgICAgIGNvbG9yID0gXCIjRkFFRDI3XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xvciA9IFwiI0ZGMDAwMFwiXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgeCA9IHRoaXMucGxheWVyLnBvc1swXTtcbiAgICAgICAgeSA9IDA7XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5wb3NbMV0gPiAtNTApIHtcbiAgICAgICAgICBjb2xvciA9IFwiI0ZBRUQyN1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sb3IgPSBcIiNGRjAwMDBcIlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrIFxuICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICB4ID0gdGhpcy5wbGF5ZXIucG9zWzBdO1xuICAgICAgICB5ID0gNjQwO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIucG9zWzFdIDwgNjkwKSB7XG4gICAgICAgICAgY29sb3IgPSBcIiNGQUVEMjdcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbG9yID0gXCIjRkYwMDAwXCJcbiAgICAgICAgfVxuICAgICAgICBicmVhayBcbiAgICB9XG4gICAgciA9IDIwO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgbW92ZU9iamVjdHMoZGVsdGEpe1xuICAgIHRoaXMucGxheWVyLm1vdmUoKVxuICAgIHRoaXMuY2hlY2tCb3VuZHModGhpcy5wbGF5ZXIucG9zKVxuXG4gICAgaWYgKHRoaXMuZnJhbWVOdW0gJSB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPT09IDApe1xuICAgICAgdGhpcy5hZGREaWFtb25kKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyYW1lTnVtICUgdGhpcy5nYXRlU3Bhd25SYXRlID09PSAwKXtcbiAgICAgIHRoaXMuYWRkR2F0ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmFtZU51bSAlIDYwMCA9PT0gMCAmJiB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPiAxMCl7XG4gICAgICB0aGlzLmRpYW1vbmRTcGF3blJhdGUgLT0gMTA7XG4gICAgICB0aGlzLmdhdGVTcGF3blJhdGUgLT0gMTA7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRpYW1vbmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHRoaXMuZGlhbW9uZHNbaV0ubW92ZShkZWx0YSwgdGhpcy5wbGF5ZXIucG9zKVxuICAgICAgaWYgKChNYXRoLmFicyh0aGlzLmRpYW1vbmRzW2ldLnBvc1swXSAtIHRoaXMucGxheWVyLnBvc1swXSkgPCA0MCkgJiZcbiAgICAgICAgKE1hdGguYWJzKHRoaXMuZGlhbW9uZHNbaV0ucG9zWzFdIC0gdGhpcy5wbGF5ZXIucG9zWzFdKSA8IDQwKSl7XG4gICAgICAgIGlmKFV0aWwuaXNDb2xsaWRlZCh0aGlzLmRpYW1vbmRzW2ldLCB0aGlzLnBsYXllcikpe1xuICAgICAgICAgIHRoaXMuaW5QbGF5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdhdGVzW2ldLm1vdmUodGhpcy5mcmFtZU51bSwgdGhpcy5wbGF5ZXIpXG4gICAgICBpZiAodGhpcy5nYXRlc1tpXS5jb2xsaXNpb25DaXJjbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZihVdGlsLmdvbmVUaHJvdWdoR2F0ZSh0aGlzLnBsYXllciwgdGhpcy5nYXRlc1tpXSkpe1xuXG4gICAgICAgICAgY29uc3QgZXhwbG9zaW9uID0ge3Bvczp0aGlzLmdhdGVzW2ldLmNvbGxpc2lvbkNpcmNsZXNbM10ucG9zLCByYWRpdXM6IDE1MH1cbiAgICAgICAgICBjb25zdCBleHBQb3MgPSB0aGlzLmdhdGVzW2ldLmNvbGxpc2lvbkNpcmNsZXNbM10ucG9zXG4gICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IDE2OyBpKyspe1xuICAgICAgICAgICAgdGhpcy5leHBsb3Npb25zLnB1c2gobmV3IEV4cGxvc2lvbihleHBQb3MsIGkqMTApKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmV4cGxvc2lvbkZyYW1lcyA9IDE1O1xuXG4gICAgICAgICAgdGhpcy5zY29yZS5zY29yZSArPSB0aGlzLnNjb3JlLm11bHRpcGxpZXIqMTAwO1xuICAgICAgICAgIHRoaXMuc2NvcmUubXVsdGlwbGllciArPSAyO1xuICAgICAgICAgIGlmICh0aGlzLmdhdGUucGF1c2VkKXtcbiAgICAgICAgICAgIHRoaXMuZ2F0ZS5wbGF5KCk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmdhdGUuc291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5nYXRlLnBsYXkoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkaWFtb25kc1RvS2VlcCA9IFtdO1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRpYW1vbmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmICghVXRpbC5pc0NvbGxpZGVkKGV4cGxvc2lvbiwgdGhpcy5kaWFtb25kc1tpXSkpe1xuICAgICAgICAgICAgICBkaWFtb25kc1RvS2VlcC5wdXNoKHRoaXMuZGlhbW9uZHNbaV0pO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuc2NvcmUuc2NvcmUgKz0gdGhpcy5zY29yZS5tdWx0aXBsaWVyKjUwO1xuICAgICAgICAgICAgICB0aGlzLmFkZFNoYXJkKHRoaXMuZGlhbW9uZHNbaV0ucG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kaWFtb25kcyA9IGRpYW1vbmRzVG9LZWVwO1xuICAgICAgICAgIHRoaXMuZ2F0ZXMuc3BsaWNlKGksMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXJkcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmICgoTWF0aC5hYnModGhpcy5zaGFyZHNbaV0ucG9zWzBdIC0gdGhpcy5wbGF5ZXIucG9zWzBdKSA8IDcwKSAmJlxuICAgICAgICAgIChNYXRoLmFicyh0aGlzLnNoYXJkc1tpXS5wb3NbMV0gLSB0aGlzLnBsYXllci5wb3NbMV0pIDwgNzApKSB7XG4gICAgICAgICAgdGhpcy5zaGFyZHNbaV0ubW92ZSh0aGlzLnBsYXllci5wb3MpXG4gICAgICAgICAgaWYgKFV0aWwuaXNDb2xsaWRlZCh0aGlzLnNoYXJkc1tpXSwgdGhpcy5wbGF5ZXIpKXtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUubXVsdGlwbGllciArPSAxO1xuICAgICAgICAgICAgdGhpcy5tdWx0aS5zb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLm11bHRpLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2hhcmRzLnNwbGljZShpLDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMuZnJhbWVOdW0rKztcbiAgICBpZiAodGhpcy5leHBsb3Npb25GcmFtZXMgPiAwKXtcbiAgICAgIHRoaXMuZXhwbG9zaW9uRnJhbWVzIC0tO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5leHBsb3Npb25zID0gW107XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIHRoaXMucGxheWVyLmRyYXcoY3R4KTtcbiAgICBjb25zdCBvb2JTcGVjaWZpY3MgPSB0aGlzLmlzT3V0T2ZCb3VuZHModGhpcy5wbGF5ZXIucG9zKTtcbiAgICBpZihvb2JTcGVjaWZpY3Mpe1xuICAgICAgdGhpcy5kcmF3T09CY2lyY2xlKGN0eCwgb29iU3BlY2lmaWNzKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpYW1vbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRpYW1vbmRzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdhdGVzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zaGFyZHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5leHBsb3Npb25zW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgdGhpcy5zY29yZS5kcmF3TXVsdChjdHgpO1xuICAgIHRoaXMuc2NvcmUuZHJhd1Njb3JlKGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgU291bmQgZnJvbSBcIi4vc291bmRcIjtcbmltcG9ydCB7c2V0VXBNb2RhbHN9IGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY2xhc3MgR2FtZVZpZXd7XG4gIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5iZ2kgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmJnaS5zcmMgPSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnXCI7XG4gICAgdGhpcy5iZ2lYID0gMDtcbiAgICB0aGlzLmJnaVkgPSAwO1xuXG4gICAgdGhpcy5iZ20gPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL2JnbS5tcDNcIik7XG4gICAgdGhpcy5iZ20uc291bmQudm9sdW1lID0gLjE1O1xuICAgIHRoaXMuYmdtLnNvdW5kLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kLW11c2ljXCIpO1xuXG4gICAgdGhpcy5nb20gPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL2dhbWVvdmVyLm1wM1wiKTtcbiAgICB0aGlzLmdvbS5zb3VuZC52b2x1bWUgPSAuMTU7XG5cbiAgICB0aGlzLmdhdGUgPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL2dhdGUubXAzXCIpO1xuICAgIHRoaXMuZ2F0ZS5zb3VuZC52b2x1bWUgPSAuMztcblxuICAgIHRoaXMubXVsdGkgPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL211bHRpLm1wM1wiKTtcbiAgICB0aGlzLm11bHRpLnNvdW5kLnZvbHVtZSA9IC4zO1xuXG4gICAgdGhpcy5kaWFtb25kID0gbmV3IFNvdW5kKFwiLi4vLi4vYXNzZXRzL3NvdW5kcy9kaWFtb25kc3Bhd24ubXAzXCIpO1xuICAgIHRoaXMuZGlhbW9uZC5zb3VuZC52b2x1bWUgPSAuMDU7XG5cbiAgICB0aGlzLm5hbWUgPSBcIk1vZSBTenlzbGFrXCI7XG4gICAgXG4gICAgc2V0VXBNb2RhbHMoKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3VycmVudFRpbWUpIHtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKHRoaXMuY3R4KTtcblxuICAgIGNvbnN0IGRlbHRhID0gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIGlmICh0aGlzLmdhbWUuaW5QbGF5KXtcbiAgICAgIHRoaXMuYmdtLnBsYXkoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgdGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpO1xuICAgICAgdGhpcy5oYW5kbGVNb3ZlbWVudCgpO1xuICAgICAgdGhpcy5nYW1lLm1vdmVPYmplY3RzKGRlbHRhKTtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5LWFnYWluLWJ0blwiKVswXTtcbiAgICAgIHBsYXlBZ2FpbkJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgcGxheUFnYWluQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICBwbGF5QWdhaW5CdG4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmdtLnN0b3AoKTtcbiAgICAgIHRoaXMuZ29tLnNvdW5kLmN1cnJlbnRUaW1lPTA7XG4gICAgICB0aGlzLmdvbS5wbGF5KCk7XG4gICAgICBsZXQgc2NvcmVzQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmVzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZXMnKSkgOiBbXTtcbiAgICAgIGxldCBuZXdTY29yZU9iajtcbiAgICAgIG5ld1Njb3JlT2JqID0gW3RoaXMubmFtZSwgdGhpcy5nYW1lLnNjb3JlLnNjb3JlXTtcbiAgICAgIHNjb3Jlc0FycmF5LnB1c2gobmV3U2NvcmVPYmopO1xuICAgICAgY29uc3QgdG9wVGVuID0gc2NvcmVzQXJyYXkuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pLnNsaWNlKDAsIDEwKTtcbiAgICAgIHRoaXMuZHJhd0dhbWVPdmVyKHRvcFRlbik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmVzJywgSlNPTi5zdHJpbmdpZnkodG9wVGVuKSk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIGRyYXdHYW1lQmVnaW4oKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iZ2ksIDAsIDApO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJnaSwgdGhpcy54LCB0aGlzLnkgLSB0aGlzLmNhbnZhc0hlaWdodCk7XG5cbiAgICB0aGlzLmN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgNDBweCBDb3VyaWVyIE5ld1wiO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwRkYwMFwiO1xuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJDbGljayBzY3JlZW4gdG8gcGxheVwiLCA0ODAsIDMwMCk7XG4gICAgdGhpcy50b2dnbGVTb3VuZFNldHVwKCk7XG4gICAgY29uc3QgY3ZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmFtZS1pbnB1dFwiKVswXTtcbiAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYW1lLWZvcm1cIilbMF07XG5cbiAgICBuYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmFtZS52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pXG4gICAgbmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuICAgIH0pXG4gICAgY3ZzLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhcnRlZCl7XG4gICAgICAgIGlmICghbmFtZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpe1xuICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lLnZhbHVlIHx8IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdHYW1lT3Zlcih0b3BUZW4pe1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgNDBweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMEZGMDBcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuICAgIGN0eC5maWxsVGV4dChcIkZpbmFsIFNjb3JlOiBcIiArIHRoaXMuZ2FtZS5zY29yZS5zY29yZSwgNDgwLCA0MCk7XG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgMzBweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZGMDBcIjtcbiAgICBjdHguZmlsbFRleHQoXCJMb2NhbCBIaWdoIFNjb3JlcyAtIEdsb2JhbCBvbiBUb3AgUmlnaHQgXCIsIDQ4MCwgMTAwKTtcblxuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgMjVweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICBpZiAodG9wVGVuW2ldKXtcbiAgICAgICAgY3R4LmZpbGxUZXh0KChpKzEpICsgXCIuXCIgKyB0b3BUZW5baV1bMF0gKyBcIjogXCIgKyB0b3BUZW5baV1bMV0sIDQ4MCwgMTIwICsgMzAqKGkrMSkpXG4gICAgICB9XG4gICAgfVxuICAgIFV0aWwuYWRkU2NvcmUoeyB1c2VyOiB0aGlzLm5hbWUsIHNjb3JlOiB0aGlzLmdhbWUuc2NvcmUuc2NvcmUgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRVcE1vZGFscygpO1xuICAgIH0pXG4gIH1cblxuICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICBjb25zdCBzcGVlZCA9IDAuMDg7XG4gICAgdGhpcy5iZ2lYICs9IHNwZWVkO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDk2MCwgNjQwKTtcblxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJnaSwgdGhpcy5iZ2lYLCB0aGlzLmJnaVkpO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJnaSwgdGhpcy5iZ2lYIC0gOTYwLCB0aGlzLmJnaVkpO1xuXG4gICAgaWYgKHRoaXMuYmdpWCA+PSA5NjApe1xuICAgICAgdGhpcy5iZ2lYID0gMDtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMua2V5cyA9ICh0aGlzLmtleXMgfHwgW10pO1xuICAgICAgdGhpcy5rZXlzW2Uua2V5Q29kZV0gPSAoZS50eXBlID09IFwia2V5ZG93blwiKTtcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmtleXNbZS5rZXlDb2RlXSA9IChlLnR5cGUgPT0gXCJrZXlkb3duXCIpO1xuICAgIH0pXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gIH1cblxuICByZXN0YXJ0KCl7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcbiAgICB0aGlzLmdvbS5zdG9wKCk7XG4gICAgY29uc3Qgc291bmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhdWRpb1wiKTtcbiAgICBsZXQgYW55TXV0ZWQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNvdW5kc1tpXS5tdXRlZCkge1xuICAgICAgICBhbnlNdXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYW55TXV0ZWQpIHtcbiAgICAgICAgc291bmRzW2ldLm11dGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kc1tpXS5tdXRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuXG4gIH1cblxuICB0b2dnbGVTb3VuZFNldHVwKCl7XG4gICAgY29uc3Qgc291bmRJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzb3VuZC1pY29uXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc291bmRJY29ucy5sZW5ndGg7IGkrKyl7XG4gICAgICBzb3VuZEljb25zW2ldLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNvdW5kSWNvbnNbMF0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgc291bmRJY29uc1sxXS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb25zdCBzb3VuZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImF1ZGlvXCIpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzb3VuZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIGlmIChzb3VuZHNbaV0ubXV0ZWQpe1xuICAgICAgICAgICAgc291bmRzW2ldLm11dGVkID0gZmFsc2U7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzb3VuZHNbaV0ubXV0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50KCl7XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNjVdKSB7ICB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IC01OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNjhdKSB7ICB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IDU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s4N10pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IC00OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbODRdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSA0OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbMzddKSB7IHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gLTU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1szOV0pIHsgdGhpcy5nYW1lLnBsYXllci5tb3ZlQW5nbGUgPSA1OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbMzhdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSAtNDsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzQwXSkgeyB0aGlzLmdhbWUucGxheWVyLnNwZWVkID0gNDsgfVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXc7IiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuY2xhc3MgR2F0ZXtcbiAgY29uc3RydWN0b3IocG9zLCBhbmdsZSkgeyBcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgdGhpcy52ZWwgPSBbMCwwXTtcbiAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMgPSBbXVxuXG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHg9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5PSB0aGlzLnBvc1sxXTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGN0eC5saW5lVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbygwICsgMTAsIDAgLSAxMCk7XG4gICAgY3R4LmxpbmVUbygwIC0gMTAsIDAgLSAxMCk7XG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKDAsIDAgKyA2MCk7XG4gICAgY3R4LmxpbmVUbygwICsgMTAsIDAgKyA3MCk7XG4gICAgY3R4LmxpbmVUbygwIC0gMTAsIDAgKyA3MCk7XG4gICAgY3R4LmxpbmVUbygwLCAwICsgNjApO1xuXG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmE1MDAnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgbW92ZShmcmFtZU51bSwgcGxheWVyKXtcbiAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMgPSBbXTtcbiAgICBpZiAoZnJhbWVOdW0gJSAxMjAgPT09IDApe1xuICAgICAgdGhpcy52ZWwgPSBVdGlsLnJhbmRvbVZlYygwLjEyNSk7XG4gICAgfVxuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0sIHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV1dO1xuICAgIGlmICgoTWF0aC5hYnMocGxheWVyLnBvc1swXSAtIHRoaXMucG9zWzBdKSA8IDcwKSAmJiAoTWF0aC5hYnMocGxheWVyLnBvc1sxXSAtIHRoaXMucG9zWzFdKSA8IDcwKSl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25DaXJjbGVzLnB1c2goe3BvczogXG4gICAgICAgICAgW3RoaXMucG9zWzBdIC0gKDUgKyAxMCppKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgICAgICAgICB0aGlzLnBvc1sxXSArICgoNSArIDEwKmkpICogTWF0aC5jb3ModGhpcy5hbmdsZSkpXSxcbiAgICAgICAgICByYWRpdXM6IDVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2F0ZTsiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IHNldFVwTW9kYWxzID0gKCkgPT4ge1xuICB3aW5kb3cuYXhpb3MgPSBheGlvcztcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlTW9kYWxcIik7XG4gIGNvbnN0IHNjb3JlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZS1idG5cIik7XG4gIGNvbnN0IHNjb3JlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzY29yZS1jb250ZW50XCIpWzBdO1xuICBjb25zdCBzQ0ZLID0gc2NvcmVDb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICBzY29yZUNvbnRlbnQuaW5uZXJIVE1MID0gc0NGSy5vdXRlckhUTUw7XG4gIGNvbnN0IHNjb3JlQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2Utc2NvcmVcIilbMF07XG5cblxuICBzY29yZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHNjb3JlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBzY29yZUNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgc2NvcmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHNjb3JlKSB7XG4gICAgICBzY29yZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0U2NvcmVzID0gKCkgPT4ge1xuICAgIHJldHVybiBheGlvcy5nZXQoYC9hcGkvc2NvcmVzL3Njb3Jlc2ApXG4gIH1cblxuICBnZXRTY29yZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgbGV0IGhpU2NvcmU7XG4gICAgbGV0IGhpU2NvcmVzID0gZGF0YS5kYXRhO1xuICAgIGhpU2NvcmVzID0gaGlTY29yZXMuc2xpY2UoMCw1MCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpU2NvcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoaVNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBoaVNjb3JlLnRleHRDb250ZW50ID0gYCR7aSsxfS4gJHtoaVNjb3Jlc1tpXS51c2VyfSAgJHtoaVNjb3Jlc1tpXS5zY29yZX1gO1xuICAgICAgc2NvcmVDb250ZW50LmFwcGVuZENoaWxkKGhpU2NvcmUpO1xuICAgIH1cbiAgfSk7XG5cblxuXG5cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0TW9kYWxcIik7XG4gIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1idG5cIik7XG4gIGNvbnN0IGFib3V0Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtYWJ0XCIpWzBdO1xuXG4gIGFib3V0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIGFib3V0Q2xvc2Uub25jbGljayA9ICgpID0+IHtcbiAgICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gYWJvdXQpIHtcbiAgICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH1cbn1cbiIsImNsYXNzIFBsYXllcntcbiAgY29uc3RydWN0b3IocG9zKXtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLm1vdmVBbmdsZSA9IDA7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb2xsaXNpb25Qb3MgPSB7XG4gICAgICB0b3A6IHRoaXMucG9zWzFdIC0gNSxcbiAgICAgIGxlZnQ6IHRoaXMucG9zWzBdIC0gNSxcbiAgICAgIGJvdHRvbTogdGhpcy5wb3NbMV0gKyA1LFxuICAgICAgcmlnaHQ6IHRoaXMucG9zWzBdICsgNVxuICAgIH1cbiAgICB0aGlzLnJhZGl1cyA9IDg7XG4gIH1cblxuICBkcmF3KGN0eCl7XG5cbiAgICBsZXQgeCA9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5ID0gdGhpcy5wb3NbMV07XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5saW5lVG8oLTEwLC0xMClcbiAgICBjdHgubGluZVRvKC0xMCwgNSk7XG4gICAgY3R4LmxpbmVUbygwLCAxNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgLTEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oLTEwLCAtMTApO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICB0aGlzLmFuZ2xlICs9IHRoaXMubW92ZUFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICB0aGlzLnBvcyA9IFtcbiAgICAgIHRoaXMucG9zWzBdICsgdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgICAgdGhpcy5wb3NbMV0gLSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5hbmdsZSlcbiAgICBdXG4gICAgdGhpcy5jb2xsaXNpb25Qb3MgPSB7XG4gICAgICB0b3A6IHRoaXMucG9zWzFdIC0gNSxcbiAgICAgIGxlZnQ6IHRoaXMucG9zWzBdIC0gNSxcbiAgICAgIGJvdHRvbTogdGhpcy5wb3NbMV0gKyA1LFxuICAgICAgcmlnaHQ6IHRoaXMucG9zWzBdICsgNVxuICAgIH1cbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLm1vdmVBbmdsZSA9IDBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjbGFzcyBTY29yZXtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLm11bHRpcGxpZXIgPSAxO1xuICAgIHRoaXMubmFtZSA9IFwiTW9lIFN6eXNsYWtcIjtcbiAgfVxuXG4gIGRyYXdNdWx0KGN0eCkge1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgMjVweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZSwgNzYwLCAyMCk7XG5cbiAgfVxuXG4gIGRyYXdTY29yZShjdHgpIHtcbiAgICBjdHguZm9udCA9IFwic21hbGwtY2FwcyBib2xkIDI1cHggQ291cmllciBOZXdcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIGN0eC5maWxsVGV4dChcIk11bHRpcGxpZXI6IFwiICsgdGhpcy5tdWx0aXBsaWVyLCAyMCwgMjApO1xuXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZTsiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBTaGFyZHtcbiAgY29uc3RydWN0b3IocG9zKSB7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5yYWRpdXMgPSAyNTtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBsZXQgeCA9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5ID0gdGhpcy5wb3NbMV07XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgY3R4LmJlemllckN1cnZlVG8oeCArIDIsIHkgLSAzLCB4ICsgNCwgeSAtIDMsIHggKyA1LCB5IC0gMik7XG4gICAgY3R4LmJlemllckN1cnZlVG8oeCArIDIsIHkgKyAzLCB4ICsgNCwgeSArIDMsIHgsIHkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMzlmZjE0JztcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBtb3ZlKHBsYXllclBvcykge1xuICAgIGNvbnN0IHZlbERpciA9IFtwbGF5ZXJQb3NbMF0gLSB0aGlzLnBvc1swXSwgcGxheWVyUG9zWzFdIC0gdGhpcy5wb3NbMV1dO1xuICAgIGNvbnN0IHZlbE1hZyA9IFV0aWwubm9ybSh2ZWxEaXIpO1xuICAgIGNvbnN0IHZlbCA9IFt2ZWxEaXJbMF0gLyAodmVsTWFnLzQpLCB2ZWxEaXJbMV0gLyAodmVsTWFnLzQpXTtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHZlbFswXSwgdGhpcy5wb3NbMV0gKyB2ZWxbMV1dO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJkOyIsImZ1bmN0aW9uIFNvdW5kKHNyYykge1xuICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICB0aGlzLnNvdW5kLnNyYyA9IHNyYztcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XG4gIHRoaXMuc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuICB0aGlzLnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4gIH1cbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU291bmQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgVXRpbCA9IHtcblxuICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWcpLCBNYXRoLmNvcyhkZWcpXSwgbGVuZ3RoKTtcbiAgfSxcbiAgc2NhbGUodmVjLCBtKSB7XG4gICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgfSxcblxuICBkaXN0KHYxLCB2Mil7XG4gICAgcmV0dXJuIE1hdGguc3FydCgoKHYxWzBdIC0gdjJbMF0pICoqIDIpKyAoKHYxWzFdIC0gdjJbMV0pICoqIDIpKVxuICB9LFxuXG4gIG5vcm0odmVjKXtcbiAgICByZXR1cm4gVXRpbC5kaXN0KFswLDBdLCB2ZWMpXG4gIH0sXG5cbiAgaXNDb2xsaWRlZChvYmoxLCBvYmoyKXtcbiAgICB2YXIgZHggPSBvYmoxLnBvc1swXSAtIG9iajIucG9zWzBdO1xuICAgIHZhciBkeSA9IG9iajEucG9zWzFdIC0gb2JqMi5wb3NbMV07XG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgIGlmIChkaXN0YW5jZSA8IG9iajEucmFkaXVzICsgb2JqMi5yYWRpdXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBnb25lVGhyb3VnaEdhdGUocGxheWVyLCBnYXRlKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhdGUuY29sbGlzaW9uQ2lyY2xlcy5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiAoVXRpbC5pc0NvbGxpZGVkKHBsYXllciwgZ2F0ZS5jb2xsaXNpb25DaXJjbGVzW2ldKSl7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIGdldFNjb3Jlcygpe1xuICAgIHJldHVybiBheGlvcy5nZXQoYC9hcGkvc2NvcmVzL3Njb3Jlc2ApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSk7XG4gIH0sXG5cbiAgYWRkU2NvcmUoZGF0YSl7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvc2NvcmVzL2AsIGRhdGEpO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7Il0sInNvdXJjZVJvb3QiOiIifQ==