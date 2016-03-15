(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LightStep"] = factory();
	else
		root["LightStep"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(1);
	
	var _globals2 = _interopRequireDefault(_globals);
	
	var _constants = __webpack_require__(2);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _tracer_imp = __webpack_require__(3);
	
	var _tracer_imp2 = _interopRequireDefault(_tracer_imp);
	
	var _platform_abstraction_layer = __webpack_require__(7);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	__webpack_require__(26);
	
	var Library = function () {
	    function Library() {
	        _classCallCheck(this, Library);
	
	        this._singleton = null;
	
	        // Make the constants accessible off the LightStep object
	        for (var key in Constants) {
	            this[key] = this[key] || Constants[key];
	        }
	    }
	
	    /**
	     * Creates a new OpenTracing-compatible tracer implementation object.
	     */
	
	
	    _createClass(Library, [{
	        key: 'tracer',
	        value: function tracer(opts) {
	            var tracerImp = new _tracer_imp2.default(opts);
	            if (!this._singleton) {
	                _globals2.default.setOptions(opts);
	                this._singleton = tracerImp;
	            }
	            return tracerImp;
	        }
	    }]);
	
	    return Library;
	}();
	
	var library = new Library();
	_platform_abstraction_layer.Platform.initLibrary(library);
	module.exports = library;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PackageGlobals = function () {
	    function PackageGlobals() {
	        _classCallCheck(this, PackageGlobals);
	
	        this.options = {};
	    }
	
	    _createClass(PackageGlobals, [{
	        key: "setOptions",
	        value: function setOptions(opts) {
	            for (var key in opts) {
	                this.options[key] = opts[key];
	            }
	        }
	    }]);
	
	    return PackageGlobals;
	}();
	
	module.exports = new PackageGlobals();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var LOG_INFO = exports.LOG_INFO = 0;
	var LOG_WARN = exports.LOG_WARN = 1;
	var LOG_ERROR = exports.LOG_ERROR = 2;
	var LOG_FATAL = exports.LOG_FATAL = 3;
	
	var LOG_LEVEL_TO_STRING = exports.LOG_LEVEL_TO_STRING = {
	    LOG_INFO: 'I',
	    LOG_WARN: 'W',
	    LOG_ERROR: 'E',
	    LOG_FATAL: 'F'
	};
	var LOG_STRING_TO_LEVEL = exports.LOG_STRING_TO_LEVEL = {
	    'I': LOG_INFO,
	    'W': LOG_WARN,
	    'E': LOG_ERROR,
	    'F': LOG_FATAL
	};
	
	// The report interval for empty reports used to sample the clock skew
	var CLOCK_STATE_REFRESH_INTERVAL_MS = exports.CLOCK_STATE_REFRESH_INTERVAL_MS = 350;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _opentracing = __webpack_require__(4);
	
	var _opentracing2 = _interopRequireDefault(_opentracing);
	
	var _sprintfJs = __webpack_require__(5);
	
	var _eventemitter = __webpack_require__(6);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	var _platform_abstraction_layer = __webpack_require__(7);
	
	var _exceptions = __webpack_require__(17);
	
	var _span_imp = __webpack_require__(18);
	
	var _span_imp2 = _interopRequireDefault(_span_imp);
	
	var _constants = __webpack_require__(2);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _globals = __webpack_require__(1);
	
	var _globals2 = _interopRequireDefault(_globals);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //============================================================================//
	// Imports
	//============================================================================//
	
	var _ = __webpack_require__(20);
	var constants = __webpack_require__(2);
	var coerce = __webpack_require__(19);
	var util = __webpack_require__(21);
	var LogBuilder = __webpack_require__(22);
	var ClockState = __webpack_require__(23);
	var packageObject = __webpack_require__(24);
	
	var CARRIER_TRACER_STATE_PREFIX = 'ot-tracer-';
	var CARRIER_BAGGAGE_PREFIX = 'ot-baggage-';
	
	var DEFAULT_SERVICE_PORT_SECURE = 443;
	var DEFAULT_SERVICE_PORT_INSECURE = 80;
	
	var TracerImp = function (_EventEmitter) {
	    _inherits(TracerImp, _EventEmitter);
	
	    function TracerImp(opts) {
	        _classCallCheck(this, TracerImp);
	
	        // Platform abstraction layer
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TracerImp).call(this));
	
	        _this._platform = new _platform_abstraction_layer.Platform(_this);
	        _this._runtimeGUID = _this.override_runtime_guid || null; // Set once the group name is set
	        _this._pluginNames = {};
	        _this._options = {};
	        _this._optionDescs = [];
	
	        // Core options
	        //
	        _this.addOption('access_token', { type: 'string', defaultValue: '' });
	        _this.addOption('group_name', { type: 'string', defaultValue: '' });
	        _this.addOption('disabled', { type: 'bool', defaultValue: false });
	        _this.addOption('service_host', { type: 'string', defaultValue: 'collector.lightstep.com' });
	        _this.addOption('service_port', { type: 'int', defaultValue: DEFAULT_SERVICE_PORT_SECURE });
	        _this.addOption('secure', { type: 'bool', defaultValue: true });
	        _this.addOption('report_period_millis', { type: 'int', defaultValue: 2500 });
	        _this.addOption('max_log_records', { type: 'int', defaultValue: 4096 });
	        _this.addOption('max_span_records', { type: 'int', defaultValue: 4096 });
	        _this.addOption('join_ids', { type: 'any', defaultValue: {} });
	
	        // Debugging options
	        //
	        // If false, SSL certificate verification is skipped. Useful for testing.
	        _this.addOption('certificate_verification', { type: 'bool', defaultValue: true });
	        // If true, internal logs will be included in the reports
	        _this.addOption('debug', { type: 'bool', defaultValue: false });
	        // I.e. report only on explicit calls to flush()
	        _this.addOption('disable_reporting_loop', { type: 'bool', defaultValue: false });
	        // Log verbosity level
	        _this.addOption('verbosity', { type: 'int', min: 0, max: 2, defaultValue: 0 });
	
	        // Unit testing options
	        _this.addOption('override_transport', { type: 'any', defaultValue: null });
	
	        // Hard upper limits to protect against worst-case scenarios
	        _this.addOption('log_message_length_hard_limit', { type: 'int', defaultValue: 512 * 1024 });
	        _this.addOption('log_payload_length_hard_limit', { type: 'int', defaultValue: 512 * 1024 });
	
	        var now = _this._platform.nowMicros();
	
	        // The thrift authentication and runtime struct are created as soon as
	        // the necessary initialization options are available.
	        _this._startMicros = now;
	        _this._thriftAuth = null;
	        _this._thriftRuntime = null;
	        _this._transport = (opts ? opts.override_transport : null) || new _platform_abstraction_layer.Transport();
	
	        _this._reportingLoopActive = false;
	        _this._reportYoungestMicros = now;
	        _this._reportTimer = null;
	        _this._reportErrorStreak = 0; // Number of consecuetive errors
	
	        // Set addActiveRootSpan() for detail
	        _this._activeRootSpanSet = {};
	        _this._activeRootSpan = null;
	
	        // For clock skew adjustment.
	        _this._useClockState = true;
	        _this._clockState = new ClockState({
	            nowMicros: function nowMicros() {
	                return _this._platform.nowMicros();
	            },
	            localStoreGet: function localStoreGet() {
	                var key = 'clock_state/' + _this._options.service_host;
	                return _this._platform.localStoreGet(key);
	            },
	            localStoreSet: function localStoreSet(value) {
	                var key = 'clock_state/' + _this._options.service_host;
	                return _this._platform.localStoreSet(key, value);
	            }
	        });
	
	        // Report buffers and per-report data
	        // These data are reset on every successful report.
	        _this._logRecords = [];
	        _this._spanRecords = [];
	        _this._counters = {
	            dropped_logs: 0,
	            dropped_spans: 0,
	            flush_with_no_data: 0,
	            flush_errors: 0,
	            flush_exceptions: 0
	        };
	
	        // Current runtime state / status
	        _this._flushIsActive = false;
	
	        // Built-in plugins
	        _this.addPlugin(__webpack_require__(25));
	
	        // Initialize the platform options after the built-in plugins in
	        // case any of those options affect the built-ins.
	        _this.addPlatformPlugins();
	        _this.setPlatformOptions();
	
	        // Set constructor arguments
	        if (opts) {
	            _this.options(opts);
	        }
	        return _this;
	    }
	
	    // ---------------------------------------------------------------------- //
	    // OpenTracing API
	    // ---------------------------------------------------------------------- //
	
	    _createClass(TracerImp, [{
	        key: 'newTracer',
	        value: function newTracer(opts) {
	            // Inherit all options of the global tracer unless explicitly specified
	            // otherwise
	            opts = opts || {};
	            for (var key in _globals2.default.options) {
	                if (opts[key] === undefined) {
	                    opts[key] = _globals2.default.options[key];
	                }
	            }
	            return new TracerImp(opts);
	        }
	    }, {
	        key: 'startSpan',
	        value: function startSpan(fields) {
	            var spanImp = new _span_imp2.default(this);
	            spanImp.setFields(fields);
	
	            this.emit('start_trace', spanImp);
	            return spanImp;
	        }
	    }, {
	        key: 'inject',
	        value: function inject(span, format, carrier) {
	            var baggage = span.getBaggage();
	            var traceGUID = span.traceGUID();
	            var parentGUID = span.parentGUID();
	
	            switch (format) {
	
	                case _opentracing2.default.FORMAT_SPLIT_TEXT:
	
	                    carrier.tracerState[CARRIER_TRACER_STATE_PREFIX + 'spanid'] = span.guid();
	                    if (traceGUID) {
	                        carrier.tracerState[CARRIER_TRACER_STATE_PREFIX + 'traceid'] = traceGUID;
	                    }
	                    carrier.tracerState[CARRIER_TRACER_STATE_PREFIX + 'sampled'] = "true";
	                    for (var key in baggage) {
	                        carrier.baggage[CARRIER_BAGGAGE_PREFIX + key] = baggage[key];
	                    }
	                    break;
	
	                // The binary encoding here is optimized for correctness and uniformity
	                // across platforms: it is not efficient.
	                case _opentracing2.default.FORMAT_SPLIT_BINARY:
	                    var temp = {
	                        tracerState: {},
	                        baggage: {}
	                    };
	
	                    temp.tracerState[CARRIER_TRACER_STATE_PREFIX + 'spanid'] = span.guid();
	                    if (traceGUID) {
	                        carrier.tracerState[CARRIER_TRACER_STATE_PREFIX + 'traceid'] = traceGUID;
	                    }
	                    temp.tracerState[CARRIER_TRACER_STATE_PREFIX + 'sampled'] = "true";
	                    for (var _key in baggage) {
	                        temp.baggage[CARRIER_BAGGAGE_PREFIX + _key] = baggage[_key];
	                    }
	
	                    carrier.tracerState = this._objectToUint8Array(temp.tracerState);
	                    carrier.baggage = this._objectToUint8Array(temp.baggage);
	                    break;
	                default:
	                    this._internalErrorf('Unknown format: %s', format);
	                    break;
	            }
	        }
	    }, {
	        key: 'join',
	        value: function join(operationName, format, carrier) {
	            // Simplify the logic by converting the binary carrier to a split text
	            // carrier.
	            if (format === _opentracing2.default.FORMAT_SPLIT_BINARY) {
	                var splitText = new _opentracing2.default.SplitTextCarrier();
	                splitText.tracerState = this._uint8ArrayToObject(carrier.tracerState);
	                splitText.baggage = this._uint8ArrayToObject(carrier.baggage);
	                format = _opentracing2.default.FORMAT_SPLIT_TEXT;
	                carrier = splitText;
	            }
	
	            // Create the empty, raw span
	            var span = new _span_imp2.default(this);
	            span.setOperationName(operationName);
	
	            switch (format) {
	
	                // Iterate over the contents of the carrier and set the properties
	                // accordingly.
	                case _opentracing2.default.FORMAT_SPLIT_TEXT:
	                    for (var key in carrier.tracerState) {
	                        var value = carrier.tracerState[key];
	                        if (key.substr(0, CARRIER_TRACER_STATE_PREFIX.length) !== CARRIER_TRACER_STATE_PREFIX) {
	                            continue;
	                        }
	                        var suffix = key.substr(CARRIER_TRACER_STATE_PREFIX.length);
	
	                        switch (suffix) {
	                            case 'traceid':
	                                span.setFields({ trace_guid: value });
	                                break;
	                            case 'spanid':
	                                // Transfer the carrier's "span_guid" to be the parent of this
	                                // new span
	                                span.setFields({ parent_guid: value });
	                                break;
	                            default:
	                                this._internalErrorf('Unrecognized carrier key with recognized prefix. Ignoring.');
	                                break;
	                        }
	                    }
	                    for (var _key2 in carrier.baggage) {
	                        var _value = carrier.baggage[_key2];
	                        if (_key2.substr(0, CARRIER_BAGGAGE_PREFIX.length) !== CARRIER_BAGGAGE_PREFIX) {
	                            continue;
	                        }
	                        var _suffix = _key2.substr(CARRIER_BAGGAGE_PREFIX.length);
	                        span.setBaggageItem(_suffix, _value);
	                    }
	                    break;
	
	                default:
	                    this._internalErrorf('Unknown format: %s', format);
	                    break;
	            }
	
	            return span;
	        }
	    }, {
	        key: 'flush',
	        value: function flush(done) {
	            if (arguments.length === 0) {
	                done = function done() {};
	            }
	            this._flushReport(false, done);
	        }
	
	        //-----------------------------------------------------------------------//
	        // Options
	        //-----------------------------------------------------------------------//
	
	    }, {
	        key: 'guid',
	        value: function guid() {
	            return this._runtimeGUID;
	        }
	
	        // Call to generate a new Trace GUID
	
	    }, {
	        key: 'generateTraceGUIDForRootSpan',
	        value: function generateTraceGUIDForRootSpan() {
	            var guid = this._platform.generateUUID();
	            if (this._activeRootSpan) {
	                guid = this._activeRootSpan.traceGUID();
	            }
	            return guid;
	        }
	
	        // TODO: deprecated
	
	    }, {
	        key: 'initialize',
	        value: function initialize(opts) {
	            this.options(opts || {});
	        }
	    }, {
	        key: 'setPlatformOptions',
	        value: function setPlatformOptions() {
	            this.options(this._platform.options(this));
	        }
	
	        // Register a new option.  Used by plug-ins.
	
	    }, {
	        key: 'addOption',
	        value: function addOption(name, desc) {
	            this._internalInfofV2('Adding options ' + name + ' with value = ' + desc.defaultValue);
	
	            desc.name = name;
	            this._optionDescs.push(desc);
	            this._options[desc.name] = desc.defaultValue;
	        }
	    }, {
	        key: 'options',
	        value: function options(opts) {
	            if (arguments.length === 0) {
	                console.assert(_typeof(this._options) === "object", "Internal error: _options field incorrect");
	                return this._options;
	            }
	            if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) !== 'object') {
	                throw new _exceptions.UserException('options() must be called with an object: type was ' + (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)));
	            }
	
	            // 'secure' is an alias for the common cases of 'service_port'
	            if (opts.secure !== undefined && opts.service_port === undefined) {
	                opts.service_port = opts.secure ? DEFAULT_SERVICE_PORT_SECURE : DEFAULT_SERVICE_PORT_INSECURE;
	            }
	
	            // Track what options have been modified
	            var modified = {};
	            var unchanged = {};
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this._optionDescs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var desc = _step.value;
	
	                    this._setOptionInternal(modified, unchanged, opts, desc);
	                }
	
	                // Check for any invalid options: is there a key in the specified operation
	                // that didn't result either in a change or a reset to the existing value?
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            for (var key in opts) {
	                if (modified[key] === undefined && unchanged[key] === undefined) {
	                    throw new _exceptions.UserException("Invalid option '%s'", key);
	                }
	            }
	
	            //
	            // Update the state information based on the changes
	            //
	            this._initReportingDataIfNeeded(modified);
	
	            if (!this._reportingLoopActive) {
	                this._startReportingLoop();
	            }
	
	            if (this._options.debug) {
	                var optionsString = _.map(modified, function (val, key) {
	                    return "\t" + JSON.stringify(key) + " : " + JSON.stringify(val);
	                }).join("\n");
	                this._internalInfofV2("Options modified:\n%s", optionsString);
	            }
	            this.emit('options', modified, this._options);
	        }
	    }, {
	        key: '_setOptionInternal',
	        value: function _setOptionInternal(modified, unchanged, opts, desc) {
	            var name = desc.name;
	            var value = opts[name];
	            var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	            if (value === undefined) {
	                return;
	            }
	
	            // Parse the option (and check constraints)
	            switch (desc.type) {
	
	                case "any":
	                    break;
	
	                case "bool":
	                    if (value !== true && value !== false) {
	                        this._internalWarnf("Invalid boolean option '%s' '%j'", name, value);
	                        return;
	                    }
	                    break;
	
	                case "int":
	                    if (valueType !== "number" || Math.floor(value) != value) {
	                        this._internalWarnf("Invalid int option '%s' '%j'", name, value);
	                        return;
	                    }
	                    if (desc.min !== undefined && desc.max !== undefined) {
	                        if (!(value >= desc.min && value <= desc.max)) {
	                            this._internalWarnf("Option '%s' out of range '%j' is not between %j and %j", name, value, min, max);
	                            return;
	                        }
	                    }
	                    break;
	
	                case "string":
	                    switch (valueType) {
	                        case "string":
	                            break;
	                        case "number":
	                            value = coerce.toString(value);
	                            break;
	                        default:
	                            this._internalWarnf("Invalid string option '%s' '%j'", name, value);
	                            return;
	                    }
	                    break;
	
	                default:
	                    this._internalWarnf('Unknown option type \'' + desc.type + '\'');
	                    return;
	            }
	
	            // Set the new value, recording any modifications
	            var oldValue = this._options[name];
	            if (oldValue === undefined) {
	                throw this._internalException("Attempt to set unknown option '%s'", name);
	            }
	
	            // Ignore no-op changes for types that can be checked quickly
	            if (valueType !== 'object' && oldValue === value) {
	                unchanged[name] = true;
	                return;
	            }
	
	            modified[name] = {
	                oldValue: oldValue,
	                newValue: value
	            };
	            this._options[name] = value;
	        }
	
	        // The Thrift authorization and runtime information is initializaed as soon
	        // as it is available.  This allows logs and spans to be buffered before
	        // the library is initialized, which can be helpul in a complex setup with
	        // many subsystems.
	        //
	
	    }, {
	        key: '_initReportingDataIfNeeded',
	        value: function _initReportingDataIfNeeded(modified) {
	            // Ignore redundant initialization; complaint on inconsistencies
	            if (this._thriftAuth !== null) {
	
	                if (!this._thriftRuntime) {
	                    return this._internalErrorf("Inconsistent state: thrift auth initialized without runtime.");
	                }
	                if (modified.access_token) {
	                    throw new _exceptions.UserException("Cannot change access_token after it has been set.");
	                }
	                if (modified.group_name) {
	                    throw new _exceptions.UserException("Cannot change group_name after it has been set.");
	                }
	                if (modified.service_host) {
	                    throw new _exceptions.UserException("Cannot change service_host after the connection is established");
	                }
	                if (modified.service_port) {
	                    throw new _exceptions.UserException("Cannot change service_host after the connection is established");
	                }
	                if (modified.secure) {
	                    throw new _exceptions.UserException("Cannot change service_host after the connection is established");
	                }
	                return;
	            }
	
	            // See if the Thrift data can be initialized
	            if (this._options.access_token.length > 0 && this._options.group_name.length > 0) {
	                this._internalInfofV2("Initializing thrift reporting data");
	
	                this._runtimeGUID = this._platform.runtimeGUID(this._options.group_name);
	
	                this._thriftAuth = new _platform_abstraction_layer.crouton_thrift.Auth({
	                    access_token: this._options.access_token
	                });
	
	                var attrs = {
	                    cruntime_name: packageObject.name,
	                    cruntime_version: packageObject.version
	                };
	                var platformAttrs = this._platform.runtimeAttributes();
	                for (var key in platformAttrs) {
	                    attrs[key] = platformAttrs[key];
	                }
	
	                var thriftAttrs = [];
	                for (var _key3 in attrs) {
	                    thriftAttrs.push(new _platform_abstraction_layer.crouton_thrift.KeyValue({
	                        Key: coerce.toString(_key3),
	                        Value: coerce.toString(attrs[_key3])
	                    }));
	                }
	                this._thriftRuntime = new _platform_abstraction_layer.crouton_thrift.Runtime({
	                    guid: this._runtimeGUID,
	                    start_micros: this._startMicros,
	                    group_name: this._options.group_name,
	                    attrs: thriftAttrs
	                });
	
	                this.emit('reporting_initialized');
	            }
	        }
	
	        //-----------------------------------------------------------------------//
	        // Plugins
	        //-----------------------------------------------------------------------//
	
	    }, {
	        key: 'addPlatformPlugins',
	        value: function addPlatformPlugins() {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = this._platform.plugins()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var plugin = _step2.value;
	
	                    this.addPlugin(plugin);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'addPlugin',
	        value: function addPlugin(plugin) {
	            var name = plugin.name();
	            if (this._pluginNames[name]) {
	                return;
	            }
	            this._pluginNames[name] = true;
	
	            plugin.start(this);
	        }
	
	        //-----------------------------------------------------------------------//
	        // Spans
	        //-----------------------------------------------------------------------//
	
	        // This is a LightStep-specific feature that should be sparingly. It sets
	        // a "global" root span such that spans that would *otherwise* be root span
	        // instead inherit the trace GUID of the active root span. This is best
	        // clarified by example:
	        //
	        // On document load in the browser, an "active root span" is created for
	        // the page load process. Any spans started without an explicit parent
	        // will the document load trace GUID instead of starting a trace GUID.
	        // This implicit root remains active only until the page is done loading.
	        //
	        // Any span adding itself as a root span *must* remove itself along with
	        // calling finish(). This will *not* be done automatically.
	        //
	        // NOTE: currently, only the trace GUID is transferred; it may or may not
	        // make sure to make this a proper parent.
	        //
	        // NOTE: the root span tracking is handled as a set rather than a single
	        // global to avoid conflicts between libraries.
	
	    }, {
	        key: 'addActiveRootSpan',
	        value: function addActiveRootSpan(span) {
	            this._activeRootSpanSet[span._guid] = span;
	            this._setActiveRootSpanToYoungest();
	        }
	    }, {
	        key: 'removeActiveRootSpan',
	        value: function removeActiveRootSpan(span) {
	            delete this._activeRootSpanSet[span._guid];
	            this._setActiveRootSpanToYoungest();
	        }
	    }, {
	        key: '_setActiveRootSpanToYoungest',
	        value: function _setActiveRootSpanToYoungest() {
	            // Set the _activeRootSpan to the youngest of the roots in case of
	            // multiple.
	            this._activeRootSpan = null;
	            for (var guid in this._activeRootSpanSet) {
	                var span = this._activeRootSpanSet[guid];
	                if (!this._activeRootSpan || span._beginMicros > this._activeRootSpan._beginMicros) {
	                    this._activeRootSpan = span;
	                }
	            }
	        }
	
	        // TODO: Remove once this is no longer used.
	
	    }, {
	        key: 'span',
	        value: function span(name) {
	            var handle = new _span_imp2.default(this);
	            handle.setOperationName(name);
	
	            this.emit('span_started', handle);
	
	            return handle;
	        }
	
	        //-----------------------------------------------------------------------//
	        // Encoding / decoding
	        //-----------------------------------------------------------------------//
	
	    }, {
	        key: '_objectToUint8Array',
	        value: function _objectToUint8Array(obj) {
	            var jsonString = void 0;
	            try {
	                // encodeURIComponent() is a *very* inefficient, but simple and
	                // well-supported way to avoid having to think about Unicode in
	                // in the conversion to a UInt8Array.
	                //
	                // Writing multiple bytes for String.charCodeAt and
	                // String.codePointAt would be an alternate approach; again,
	                // simplicitly is being preferred over efficiency for the moment.
	                jsonString = encodeURIComponent(JSON.stringify(obj));
	            } catch (e) {
	                this._internalErrorf('Could not binary encode carrier data.');
	                return null;
	            }
	
	            var buffer = new ArrayBuffer(jsonString.length);
	            var view = new Uint8Array(buffer);
	            for (var i = 0; i < jsonString.length; i++) {
	                var code = jsonString.charCodeAt(i);
	                if (!(code >= 0 && code <= 255)) {
	                    this._internalErrorf('Unexpected character code');
	                    return null;
	                }
	                view[i] = code;
	            }
	            return view;
	        }
	    }, {
	        key: '_uint8ArrayToObject',
	        value: function _uint8ArrayToObject(arr) {
	            if (!arr) {
	                this._internalErrorf('Array is null');
	                return null;
	            }
	
	            var jsonString = '';
	            for (var i = 0; i < arr.length; i++) {
	                jsonString += String.fromCharCode(arr[i]);
	            }
	            try {
	                return JSON.parse(decodeURIComponent(jsonString));
	            } catch (e) {
	                this._internalErrorf('Could not decode binary data.');
	                return null;
	            }
	        }
	
	        //-----------------------------------------------------------------------//
	        // Logging
	        //-----------------------------------------------------------------------//
	
	    }, {
	        key: 'log',
	        value: function log() {
	            var b = new LogBuilder(this);
	            return b;
	        }
	    }, {
	        key: 'logStable',
	        value: function logStable(stableName, payload) {
	            this.log().name(stableName).payload(payload).end();
	        }
	
	        // Create a thrift log record and add it to the internal buffer
	
	    }, {
	        key: 'logFmt',
	        value: function logFmt(level, spanGUID, fmt) {
	            for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key4 = 3; _key4 < _len; _key4++) {
	                args[_key4 - 3] = arguments[_key4];
	            }
	
	            var _log$level$span;
	
	            var log = (_log$level$span = this.log().level(level).span(spanGUID)).logf.apply(_log$level$span, [fmt].concat(args));
	            if (args.length > 0) {
	                log.payload({
	                    "arguments": args
	                });
	            }
	            log.end();
	        }
	
	        //-----------------------------------------------------------------------//
	        // Buffers
	        //-----------------------------------------------------------------------//
	
	    }, {
	        key: '_clearBuffers',
	        value: function _clearBuffers() {
	            this._logRecords = [];
	            this._spanRecords = [];
	
	            for (var key in this._counters) {
	                this._counters[key] = 0;
	            }
	        }
	    }, {
	        key: '_buffersAreEmpty',
	        value: function _buffersAreEmpty() {
	            if (this._logRecords.length > 0) {
	                return false;
	            }
	            if (this._spanRecords.length > 0) {
	                return false;
	            }
	
	            // `let <value> of <object>` is problematic in Node v4.1.
	            // https://github.com/babel/babel-loader/issues/84
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = Object.entries(this._counters)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var value = _step3.value;
	
	                    if (value > 0) {
	                        return false;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            return true;
	        }
	
	        // Adds a completed record into the log buffer
	
	    }, {
	        key: '_addLogRecord',
	        value: function _addLogRecord(record) {
	            // Check record content against the hard-limits
	            if (record.message && record.message.length > this._options.log_message_length_hard_limit) {
	                record.message = record.message.substr(0, this._options.log_message_length_hard_limit - 1) + "…";
	            }
	            if (record.payload_json && record.payload_json.length > this._options.log_payload_length_hard_limit) {
	                record.payload_json = '{"error":"payload exceeded maximum size"}';
	            }
	
	            this._internalAddLogRecord(record);
	            this.emit('log_added', record);
	
	            if (record.level === constants.LOG_FATAL) {
	                this._platform.fatal(message);
	            }
	        }
	
	        // Internal worker for adding the log record to the buffer.
	        //
	        // Note: this is also used when a failed report needs to restores records
	        // back to the buffer, therefore it should not do things like echo the
	        // log message to the console with the assumption this is a new record.
	
	    }, {
	        key: '_internalAddLogRecord',
	        value: function _internalAddLogRecord(record) {
	            if (!record) {
	                this._internalErrorf("Attempt to add null record to buffer");
	                return;
	            }
	
	            if (this._logRecords.length >= this._options.max_log_records) {
	                var index = Math.floor(this._logRecords.length * Math.random());
	                this._logRecords[index] = record;
	                this._counters.dropped_logs++;
	            } else {
	                this._logRecords.push(record);
	            }
	        }
	    }, {
	        key: '_addSpanRecord',
	        value: function _addSpanRecord(record) {
	            this._internalAddSpanRecord(record);
	            this.emit('span_added', record);
	        }
	    }, {
	        key: '_internalAddSpanRecord',
	        value: function _internalAddSpanRecord(record) {
	            if (!record) {
	                this._internalErrorf("Attempt to add null record to buffer");
	                return;
	            }
	
	            if (this._spanRecords.length >= this._options.max_span_records) {
	                var index = Math.floor(this._spanRecords.length * Math.random());
	                this._spanRecords[index] = record;
	                this._counters.dropped_spans++;
	            } else {
	                this._spanRecords.push(record);
	            }
	        }
	    }, {
	        key: '_restoreRecords',
	        value: function _restoreRecords(logs, spans, counters) {
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = logs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var record = _step4.value;
	
	                    this._internalAddLogRecord(record);
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;
	
	            try {
	                for (var _iterator5 = spans[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var _record = _step5.value;
	
	                    this._internalAddSpanRecord(_record);
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;
	
	            try {
	                for (var _iterator6 = counters[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var _record2 = _step6.value;
	
	                    if (this._counters[_record2.Name]) {
	                        this._counters[_record2.Name] += _record2.Value;
	                    } else {
	                        this._internalErrorf("Bad counter name: '%s'", _record2.Name);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError6 = true;
	                _iteratorError6 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                        _iterator6.return();
	                    }
	                } finally {
	                    if (_didIteratorError6) {
	                        throw _iteratorError6;
	                    }
	                }
	            }
	        }
	
	        //-----------------------------------------------------------------------//
	        // Reporting loop
	        //-----------------------------------------------------------------------//
	
	        // flush()
	        //
	        // detached bool - indicates the report should assume the script is about
	        //      to exit or otherwise wants the report to be sent as quickly and
	        //      low-overhead as possible.
	        //
	
	    }, {
	        key: '_flush',
	        value: function _flush(detached) {
	            detached = detached || false;
	
	            if (this._options.disabled) {
	                return;
	            }
	            this._flushReport(detached, function (err) {});
	        }
	    }, {
	        key: '_startReportingLoop',
	        value: function _startReportingLoop() {
	            var _this2 = this;
	
	            if (this._options.disabled) {
	                this._internalInfof("Not starting reporting loop: instrumentation is disabled.");
	                return;
	            }
	            if (this._options.disable_reporting_loop) {
	                this._internalInfof("Not starting reporting loop: reporting loop is disabled.");
	                return;
	            }
	            if (this._thriftAuth === null) {
	                // Don't start the loop until the thrift data necessary to do the
	                // report is set up.
	                return;
	            }
	            if (this._reportingLoopActive) {
	                this._internalErrorf("Reporting loop already started!");
	                return;
	            }
	
	            this._internalInfofV1("Starting reporting loop: %j", this._thriftRuntime);
	            this._reportingLoopActive = true;
	
	            // Set up the script exit clean-up: stop the reporting loop (so it does
	            // not turn a Node process into a zombie) and do a final explicit flush.
	            // Note that the final flush may enqueue asynchronous callbacks that cause
	            // the 'beforeExit' event to be re-emitted when those callbacks finish.
	            var finalFlush = function finalFlush() {
	                _this2._internalInfof("Final flush before exit.");
	                _this2._flushReport(true);
	            };
	            var stopReporting = function stopReporting() {
	                _this2._stopReportingLoop();
	            };
	            this._platform.onBeforeExit(_.once(stopReporting));
	            this._platform.onBeforeExit(_.once(finalFlush));
	
	            // Begin the asynchronous reporting loop
	            var loop = function loop() {
	                _this2._enqueueNextReport(function (err) {
	                    if (_this2._reportingLoopActive) {
	                        loop();
	                    }
	                });
	            };
	            loop();
	        }
	    }, {
	        key: '_stopReportingLoop',
	        value: function _stopReportingLoop() {
	            this._internalInfofV2("Stopping reporting loop");
	
	            this._reportingLoopActive = false;
	            clearTimeout(this._reportTimer);
	            this._reportTimer = null;
	        }
	    }, {
	        key: '_enqueueNextReport',
	        value: function _enqueueNextReport(done) {
	            var _this3 = this;
	
	            // If there's already a report request enqueued, ignore this new
	            // request.
	            if (this._reportTimer) {
	                return;
	            }
	
	            // If the clock state is still being primed, potentially use the
	            // shorted report interval
	            var reportPeriod = this._options.report_period_millis;
	            if (!this._clockState.isReady()) {
	                reportPeriod = Math.min(constants.CLOCK_STATE_REFRESH_INTERVAL_MS, reportPeriod);
	            }
	
	            // After 3 consecutive errors, expand the retry delay up to 8x the
	            // normal interval. Also, jitter the delay by +/- 10%
	            var backOff = 1 + Math.min(7, Math.max(0, this._reportErrorStreak - 3));
	            var basis = backOff * reportPeriod;
	            var jitter = 1.0 + (Math.random() * 0.2 - 0.1);
	            var delay = Math.floor(Math.max(0, jitter * basis));
	
	            this._internalInfofV2("Delaying next flush for %dms", delay);
	            this._reportTimer = util.detachedTimeout(function () {
	                _this3._reportTimer = null;
	                _this3._flushReport(false, done);
	            }, delay);
	        }
	    }, {
	        key: '_flushReport',
	        value: function _flushReport(detached, done) {
	            var _this4 = this;
	
	            done = done || function (err) {};
	
	            var clockReady = this._clockState.isReady();
	            var clockOffsetMicros = this._clockState.offsetMicros();
	
	            // Diagnostic information on the clock correction
	            this.logStable("cr/time_correction_state", {
	                offset_micros: clockOffsetMicros,
	                active_samples: this._clockState.activeSampleCount(),
	                ready: clockReady
	            });
	
	            var logRecords = this._logRecords;
	            var spanRecords = this._spanRecords;
	            var counters = this._counters;
	
	            // If the clock is not ready, do an "empty" flush to build more clock
	            // samples before the real data is reported.
	            // A detached flush (i.e. one intended to fire at exit or other "last
	            // ditch effort" event) should always use the real data.
	            if (this._useClockState && !clockReady && !detached) {
	                this._internalInfofV2("Flushing empty report to prime clock state");
	                logRecords = [];
	                spanRecords = [];
	                counters = {};
	            } else {
	                // Early out if we can.
	                if (this._buffersAreEmpty()) {
	                    this._internalInfofV2("Skipping empty report");
	                    return done(null);;
	                }
	
	                // Clear the object buffers as the data is now in the local
	                // variables
	                this._clearBuffers();
	
	                this._internalInfofV2("Flushing report (%d logs, %d spans)", logRecords.length, spanRecords.length);
	            }
	
	            this._transport.ensureConnection(this._options);
	
	            // Ensure the runtime GUID is set as it is possible buffer logs and
	            // spans before the GUID is necessarily set.
	            console.assert(this._runtimeGUID !== null, "No runtime GUID for Tracer");
	
	            var _iteratorNormalCompletion7 = true;
	            var _didIteratorError7 = false;
	            var _iteratorError7 = undefined;
	
	            try {
	                for (var _iterator7 = logRecords[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                    var record = _step7.value;
	
	                    record.runtime_guid = this._runtimeGUID;
	                }
	            } catch (err) {
	                _didIteratorError7 = true;
	                _iteratorError7 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                        _iterator7.return();
	                    }
	                } finally {
	                    if (_didIteratorError7) {
	                        throw _iteratorError7;
	                    }
	                }
	            }
	
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;
	
	            try {
	                for (var _iterator8 = spanRecords[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                    var _record3 = _step8.value;
	
	                    _record3.runtime_guid = this._runtimeGUID;
	                }
	            } catch (err) {
	                _didIteratorError8 = true;
	                _iteratorError8 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                        _iterator8.return();
	                    }
	                } finally {
	                    if (_didIteratorError8) {
	                        throw _iteratorError8;
	                    }
	                }
	            }
	
	            var thriftCounters = [];
	            for (var key in counters) {
	                var value = counters[key];
	                if (value === 0) {
	                    continue;
	                }
	                thriftCounters.push(new _platform_abstraction_layer.crouton_thrift.NamedCounter({
	                    Name: coerce.toString(key),
	                    Value: coerce.toNumber(value)
	                }));
	            }
	
	            var timestampOffset = this._useClockState ? clockOffsetMicros : 0;
	            var now = this._platform.nowMicros();
	            var report = new _platform_abstraction_layer.crouton_thrift.ReportRequest({
	                runtime: this._thriftRuntime,
	                oldest_micros: this._reportYoungestMicros,
	                youngest_micros: now,
	                log_records: logRecords,
	                span_records: spanRecords,
	                counters: thriftCounters,
	                timestamp_offset_micros: timestampOffset
	            });
	
	            this.emit("prereport", report);
	            var originMicros = this._platform.nowMicros();
	
	            this._transport.report(detached, this._thriftAuth, report, function (err, res) {
	
	                var destinationMicros = _this4._platform.nowMicros();
	                if (err) {
	                    // How many errors in a row?
	                    _this4._reportErrorStreak++;
	
	                    // On a failed report, re-enqueue the data that was going to be
	                    // sent.
	                    if (err.message) {
	                        _this4._internalErrorf("Error in report: %s (%j)", err.message, err);
	                    } else {
	                        _this4._internalErrorf("Error in report: %j", err);
	                    }
	                    _this4._restoreRecords(report.log_records, report.span_records, report.counters);
	
	                    _this4.emit('report_error', err, {
	                        error: err,
	                        streak: _this4._reportErrorStreak,
	                        detached: detached
	                    });
	                } else {
	
	                    if (_this4._options.debug) {
	                        var reportWindowSeconds = (now - report.oldest_micros) / 1e6;
	                        _this4._internalInfof("Report flushed for last %0.3f seconds", reportWindowSeconds);
	                    }
	
	                    // Update internal data after the successful report
	                    _this4._reportErrorStreak = 0;
	                    _this4._reportYoungestMicros = now;
	
	                    // Update the clock state if there's info from the report
	                    if (res && res.timing && res.timing.receive_micros && res.timing.transmit_micros) {
	                        _this4._clockState.addSample(originMicros, res.timing.receive_micros, res.timing.transmit_micros, destinationMicros);
	                    } else {
	                        // The response does not have timing information. Disable
	                        // the clock state assuming there'll never be timing data
	                        //to use.
	                        _this4._useClockState = false;
	                    }
	
	                    _this4.emit('report', report, res);
	                }
	                return done(err);
	            });
	        }
	
	        //-----------------------------------------------------------------------//
	        // Internal logging & errors
	        //-----------------------------------------------------------------------//
	
	    }, {
	        key: '_internalInfofV2',
	        value: function _internalInfofV2(fmt) {
	            if (this._options.verbosity < 2) {
	                return;
	            }
	
	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key5 = 1; _key5 < _len2; _key5++) {
	                args[_key5 - 1] = arguments[_key5];
	            }
	
	            this._internalLog.apply(this, ["[LightStep:V2] ", constants.LOG_INFO, fmt].concat(args));
	        }
	    }, {
	        key: '_internalInfofV1',
	        value: function _internalInfofV1(fmt) {
	            if (this._options.verbosity < 1) {
	                return;
	            }
	
	            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key6 = 1; _key6 < _len3; _key6++) {
	                args[_key6 - 1] = arguments[_key6];
	            }
	
	            this._internalLog.apply(this, ["[LightStep:V1] ", constants.LOG_INFO, fmt].concat(args));
	        }
	    }, {
	        key: '_internalInfof',
	        value: function _internalInfof(fmt) {
	            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key7 = 1; _key7 < _len4; _key7++) {
	                args[_key7 - 1] = arguments[_key7];
	            }
	
	            this._internalLog.apply(this, ["[LightStep:I] ", constants.LOG_INFO, fmt].concat(args));
	        }
	    }, {
	        key: '_internalWarnf',
	        value: function _internalWarnf(fmt) {
	            for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key8 = 1; _key8 < _len5; _key8++) {
	                args[_key8 - 1] = arguments[_key8];
	            }
	
	            this._internalLog.apply(this, ["[LightStep:W] ", constants.LOG_WARN, fmt].concat(args));
	        }
	    }, {
	        key: '_internalErrorf',
	        value: function _internalErrorf(fmt) {
	            for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key9 = 1; _key9 < _len6; _key9++) {
	                args[_key9 - 1] = arguments[_key9];
	            }
	
	            this._internalLog.apply(this, ["[LightStep:E] ", constants.LOG_ERROR, fmt].concat(args));
	        }
	    }, {
	        key: '_internalLog',
	        value: function _internalLog(prefix, level, fmt) {
	            if (this._options.debug) {
	                for (var _len7 = arguments.length, args = Array(_len7 > 3 ? _len7 - 3 : 0), _key10 = 3; _key10 < _len7; _key10++) {
	                    args[_key10 - 3] = arguments[_key10];
	                }
	
	                this.logFmt.apply(this, [level, null, prefix + fmt].concat(args));
	            }
	        }
	    }]);
	
	    return TracerImp;
	}(_eventemitter2.default);

	exports.default = TracerImp;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";t.exports=n(1)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=n(2),o=r(i);t.exports=new o["default"]},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(3),s=i(l),c=n(7),p=i(c),y=n(6),h=i(y),d=n(5),m=r(d),_=function(t){function e(){o(this,e);var t=u(this,Object.getPrototypeOf(e).call(this));for(var n in m)t[n]=m[n];return t.SplitTextCarrier=h["default"],t.BinaryCarrier=p["default"],t}return a(e,t),f(e,[{key:"initGlobalTracer",value:function(t){this._imp=t.newTracer()}},{key:"initNewTracer",value:function(t){return new s["default"](t)}}]),e}(s["default"]);e["default"]=_,t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),u=n(4),a=r(u),f=n(5),l=(r(f),n(6)),s=(r(l),n(7)),c=(r(s),function(){function t(e){i(this,t),this._imp=e||null}return o(t,[{key:"startSpan",value:function(t,e){var n=null;return this._imp&&(1===arguments.length?e="string"==typeof t?{operationName:t}:t:e.operationName=t,n=this._imp.startSpan(e)),new a["default"](n)}},{key:"inject",value:function(t,e,n){this._imp&&this._imp.inject(t._imp,e,n)}},{key:"join",value:function(t,e,n){var r=null;return this._imp&&(r=this._imp.join(t,e,n)),new a["default"](r)}},{key:"flush",value:function(t){return this._imp?void this._imp.flush(t):void t(null)}}]),o(t,[{key:"imp",value:function(){return this._imp}}]),t}());e["default"]=c,t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),a=n(3),f=r(a),l=n(1),s=(new RegExp(/^[a-z0-9][-a-z0-9]*/),function(){function t(e){o(this,t),this._imp=e}return u(t,[{key:"tracer",value:function(){return this._imp?new f["default"](this._imp.tracer()):l}},{key:"setOperationName",value:function(t){return this._imp&&this._imp.setOperationName(t),this}},{key:"setTag",value:function(t,e){return this.addTags(i({},t,e)),this}},{key:"addTags",value:function(t){return this._imp?(this._imp.addTags(t),this):void 0}},{key:"setBaggageItem",value:function(t,e){return this._imp&&this._imp.setBaggageItem(t,e),this}},{key:"getBaggageItem",value:function(t){return this._imp?this._imp.getBaggageItem(t):void 0}},{key:"log",value:function(t){return this._imp?(this._imp.log(t),this):void 0}},{key:"logEvent",value:function(t,e){return this.log({event:t,payload:e})}},{key:"finish",value:function(t){this._imp&&this._imp.finish(t)}}]),u(t,[{key:"imp",value:function(){return this._imp}}]),t}());e["default"]=s,t.exports=e["default"]},function(t,e){"use strict";t.exports={FORMAT_SPLIT_BINARY:"split_binary",FORMAT_SPLIT_TEXT:"split_text"}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function i(){n(this,i),this.tracerState={},this.baggage={}};e["default"]=r,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function i(){n(this,i),this.tracerState=new Uint8Array(0),this.baggage=new Uint8Array(0)};e["default"]=r,t.exports=e["default"]}]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	(function (window) {
	    var re = {
	        not_string: /[^s]/,
	        number: /[diefg]/,
	        json: /[j]/,
	        not_json: /[^j]/,
	        text: /^[^\x25]+/,
	        modulo: /^\x25{2}/,
	        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
	        key: /^([a-z_][a-z_\d]*)/i,
	        key_access: /^\.([a-z_][a-z_\d]*)/i,
	        index_access: /^\[(\d+)\]/,
	        sign: /^[\+\-]/
	    };
	
	    function sprintf() {
	        var key = arguments[0],
	            cache = sprintf.cache;
	        if (!(cache[key] && cache.hasOwnProperty(key))) {
	            cache[key] = sprintf.parse(key);
	        }
	        return sprintf.format.call(null, cache[key], arguments);
	    }
	
	    sprintf.format = function (parse_tree, argv) {
	        var cursor = 1,
	            tree_length = parse_tree.length,
	            node_type = "",
	            arg,
	            output = [],
	            i,
	            k,
	            match,
	            pad,
	            pad_character,
	            pad_length,
	            is_positive = true,
	            sign = "";
	        for (i = 0; i < tree_length; i++) {
	            node_type = get_type(parse_tree[i]);
	            if (node_type === "string") {
	                output[output.length] = parse_tree[i];
	            } else if (node_type === "array") {
	                match = parse_tree[i]; // convenience purposes only
	                if (match[2]) {
	                    // keyword argument
	                    arg = argv[cursor];
	                    for (k = 0; k < match[2].length; k++) {
	                        if (!arg.hasOwnProperty(match[2][k])) {
	                            throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]));
	                        }
	                        arg = arg[match[2][k]];
	                    }
	                } else if (match[1]) {
	                    // positional argument (explicit)
	                    arg = argv[match[1]];
	                } else {
	                    // positional argument (implicit)
	                    arg = argv[cursor++];
	                }
	
	                if (get_type(arg) == "function") {
	                    arg = arg();
	                }
	
	                if (re.not_string.test(match[8]) && re.not_json.test(match[8]) && get_type(arg) != "number" && isNaN(arg)) {
	                    throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)));
	                }
	
	                if (re.number.test(match[8])) {
	                    is_positive = arg >= 0;
	                }
	
	                switch (match[8]) {
	                    case "b":
	                        arg = arg.toString(2);
	                        break;
	                    case "c":
	                        arg = String.fromCharCode(arg);
	                        break;
	                    case "d":
	                    case "i":
	                        arg = parseInt(arg, 10);
	                        break;
	                    case "j":
	                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0);
	                        break;
	                    case "e":
	                        arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential();
	                        break;
	                    case "f":
	                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
	                        break;
	                    case "g":
	                        arg = match[7] ? parseFloat(arg).toPrecision(match[7]) : parseFloat(arg);
	                        break;
	                    case "o":
	                        arg = arg.toString(8);
	                        break;
	                    case "s":
	                        arg = (arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg;
	                        break;
	                    case "u":
	                        arg = arg >>> 0;
	                        break;
	                    case "x":
	                        arg = arg.toString(16);
	                        break;
	                    case "X":
	                        arg = arg.toString(16).toUpperCase();
	                        break;
	                }
	                if (re.json.test(match[8])) {
	                    output[output.length] = arg;
	                } else {
	                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
	                        sign = is_positive ? "+" : "-";
	                        arg = arg.toString().replace(re.sign, "");
	                    } else {
	                        sign = "";
	                    }
	                    pad_character = match[4] ? match[4] === "0" ? "0" : match[4].charAt(1) : " ";
	                    pad_length = match[6] - (sign + arg).length;
	                    pad = match[6] ? pad_length > 0 ? str_repeat(pad_character, pad_length) : "" : "";
	                    output[output.length] = match[5] ? sign + arg + pad : pad_character === "0" ? sign + pad + arg : pad + sign + arg;
	                }
	            }
	        }
	        return output.join("");
	    };
	
	    sprintf.cache = {};
	
	    sprintf.parse = function (fmt) {
	        var _fmt = fmt,
	            match = [],
	            parse_tree = [],
	            arg_names = 0;
	        while (_fmt) {
	            if ((match = re.text.exec(_fmt)) !== null) {
	                parse_tree[parse_tree.length] = match[0];
	            } else if ((match = re.modulo.exec(_fmt)) !== null) {
	                parse_tree[parse_tree.length] = "%";
	            } else if ((match = re.placeholder.exec(_fmt)) !== null) {
	                if (match[2]) {
	                    arg_names |= 1;
	                    var field_list = [],
	                        replacement_field = match[2],
	                        field_match = [];
	                    if ((field_match = re.key.exec(replacement_field)) !== null) {
	                        field_list[field_list.length] = field_match[1];
	                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
	                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
	                                field_list[field_list.length] = field_match[1];
	                            } else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
	                                field_list[field_list.length] = field_match[1];
	                            } else {
	                                throw new SyntaxError("[sprintf] failed to parse named argument key");
	                            }
	                        }
	                    } else {
	                        throw new SyntaxError("[sprintf] failed to parse named argument key");
	                    }
	                    match[2] = field_list;
	                } else {
	                    arg_names |= 2;
	                }
	                if (arg_names === 3) {
	                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
	                }
	                parse_tree[parse_tree.length] = match;
	            } else {
	                throw new SyntaxError("[sprintf] unexpected placeholder");
	            }
	            _fmt = _fmt.substring(match[0].length);
	        }
	        return parse_tree;
	    };
	
	    var vsprintf = function vsprintf(fmt, argv, _argv) {
	        _argv = (argv || []).slice(0);
	        _argv.splice(0, 0, fmt);
	        return sprintf.apply(null, _argv);
	    };
	
	    /**
	     * helpers
	     */
	    function get_type(variable) {
	        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
	    }
	
	    function str_repeat(input, multiplier) {
	        return Array(multiplier + 1).join(input);
	    }
	
	    /**
	     * export to either browser or node.js
	     */
	    if (true) {
	        exports.sprintf = sprintf;
	        exports.vsprintf = vsprintf;
	    } else {
	        window.sprintf = sprintf;
	        window.vsprintf = vsprintf;
	
	        if (typeof define === "function" && define.amd) {
	            define(function () {
	                return {
	                    sprintf: sprintf,
	                    vsprintf: vsprintf
	                };
	            });
	        }
	    }
	})(typeof window === "undefined" ? undefined : window);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//
	// Hide the differences in how the Thrift compiler generates code for the
	// different platforms as well as expose a Platform class to abstract a few
	// general differences in the platforms.
	//
	if (false) {
	    module.exports = {
	        Platform: require('./imp/platform/node/platform_node.js'),
	        Transport: require('./imp/platform/node/transport_node.js'),
	        thrift: require('thrift'),
	        crouton_thrift: require('./imp/platform/node/crouton_thrift.js')
	    };
	} else if (true) {
	    module.exports = {
	        Platform: __webpack_require__(8),
	        Transport: __webpack_require__(13),
	        thrift: __webpack_require__(14),
	        crouton_thrift: __webpack_require__(16)
	    };
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var optionsParser = __webpack_require__(9);
	var util = __webpack_require__(10);
	
	var kRuntimeGUIDCookiePrefix = 'lightstep_guid';
	var kSessionIDCookieKey = 'lightstep_session_id';
	var kCookieTimeToLiveSeconds = 7 * 24 * 60 * 60;
	
	var nowMicrosImp = function () {
	    // Is a hi-res timer available?
	    if (performance && performance.now && performance.timing && performance.timing.navigationStart) {
	
	        var start = performance.timing.navigationStart;
	        return function () {
	            return Math.floor((start + performance.now()) * 1000.0);
	        };
	    } else {
	        // The low-res timer is the best we can do
	        return function () {
	            return Date.now() * 1000.0;
	        };
	    }
	}();
	
	var PlatformBrowser = function () {
	    function PlatformBrowser(imp) {
	        _classCallCheck(this, PlatformBrowser);
	    }
	
	    _createClass(PlatformBrowser, [{
	        key: 'name',
	        value: function name() {
	            return 'browser';
	        }
	    }, {
	        key: 'nowMicros',
	        value: function nowMicros() {
	            return nowMicrosImp();
	        }
	
	        // Return the GUID to use for the runtime. The intention is to reuse the
	        // GUID so that logically a single browser session looks like a single
	        // runtime.
	
	    }, {
	        key: 'runtimeGUID',
	        value: function runtimeGUID(groupName) {
	            // Account for the groupName in the same that multiple apps or services
	            // are running on the same domain (and should not share the same
	            // runtime GUID).
	            var cookieKey = kRuntimeGUIDCookiePrefix + '/' + groupName;
	            var uuid = util.cookie(cookieKey) || this._generateLongUUID();
	            util.cookie(cookieKey, uuid, kCookieTimeToLiveSeconds, '/');
	
	            // Also create a session ID as well to give the server more information
	            // to coordinate with.
	            var sessionID = util.cookie(kSessionIDCookieKey) || this._generateLongUUID();
	            util.cookie(kSessionIDCookieKey, sessionID, kCookieTimeToLiveSeconds, '/');
	
	            return uuid;
	        }
	
	        // A low-quality UUID: this is just a 53-bit random integer! (53 bits since the
	        // backing store for the number is a 64-bit float).
	
	    }, {
	        key: 'generateUUID',
	        value: function generateUUID() {
	            return Math.floor(Math.random() * 9e15).toString(16);
	        }
	    }, {
	        key: '_generateLongUUID',
	        value: function _generateLongUUID() {
	            var a = Math.floor(Math.random() * 0xFFFFFFFF).toString(16);
	            var b = Math.floor(Math.random() * 0xFFFFFFFF).toString(16);
	            while (b.length < 8) {
	                b = '0' + b;
	            }
	            return a + b;
	        }
	    }, {
	        key: 'onBeforeExit',
	        value: function onBeforeExit() {
	            if (window) {
	                var _window;
	
	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }
	
	                (_window = window).addEventListener.apply(_window, ['beforeunload'].concat(args));
	            }
	        }
	    }, {
	        key: 'plugins',
	        value: function plugins() {
	            return [__webpack_require__(11), __webpack_require__(12)];
	        }
	    }, {
	        key: 'options',
	        value: function options(imp) {
	            var tracerOpts = {};
	            var browserOpts = {};
	            optionsParser.parseScriptElementOptions(tracerOpts, browserOpts);
	            optionsParser.parseURLQueryOptions(tracerOpts, browserOpts);
	            return tracerOpts;
	        }
	    }, {
	        key: 'runtimeAttributes',
	        value: function runtimeAttributes() {
	            return {
	                cruntime_platform: 'browser'
	            };
	        }
	
	        // There's no way to truly "fatal" on the browser; the best approximation
	        // is an Error exception.
	
	    }, {
	        key: 'fatal',
	        value: function fatal(message) {
	            throw new Error(message);
	        }
	    }, {
	        key: 'localStoreGet',
	        value: function localStoreGet(key) {
	            if (!window.sessionStorage) {
	                return null;
	            }
	            try {
	                return JSON.parse(sessionStorage.getItem('lightstep/' + key));
	            } catch (_ignored) {
	                return null;
	            }
	        }
	    }, {
	        key: 'localStoreSet',
	        value: function localStoreSet(key, value) {
	            if (!window.sessionStorage) {
	                return;
	            }
	            try {
	                sessionStorage.setItem('lightstep/' + key, JSON.stringify(value));
	            } catch (_ignored) {}
	        }
	    }], [{
	        key: 'initLibrary',
	        value: function initLibrary(lib) {
	            var tracerOpts = {};
	            var browserOpts = {};
	            optionsParser.parseScriptElementOptions(tracerOpts, browserOpts);
	
	            if (browserOpts.init_global_tracer) {
	                PlatformBrowser.initGlobalTracer(lib, tracerOpts);
	            }
	        }
	    }, {
	        key: 'initGlobalTracer',
	        value: function initGlobalTracer(lib, opts) {
	            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object') {
	                return;
	            }
	            if (_typeof(window.Tracer) !== 'object') {
	                return;
	            }
	            Tracer.initGlobalTracer(lib.tracer(opts));
	        }
	    }]);
	
	    return PlatformBrowser;
	}();
	
	module.exports = PlatformBrowser;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(10);
	
	// Find the HTML element that included the tracing library (if there is one).
	// This relies on the fact that scripts are executed as soon as they are
	// included -- thus "this" script is the last one in the array at the time
	// this is run.
	var hostScriptElement = function () {
	    var scripts = document.getElementsByTagName("SCRIPT");
	    if (!(scripts.length > 0)) {
	        return null;
	    }
	    return scripts[scripts.length - 1];
	}();
	
	function urlQueryParameters(defaults) {
	    var vars = {};
	    var qi = window.location.href.indexOf('?');
	    if (qi < 0) {
	        return vars;
	    }
	    var slice = window.location.href.slice(qi + 1);
	    if (slice.indexOf("#") >= 0) {
	        slice = slice.slice(0, slice.indexOf("#"));
	    }
	    var hashes = slice.replace(/\+/, "%20").split('&');
	    for (var i = 0; i < hashes.length; i++) {
	        var hash = hashes[i].split('=');
	        vars[decodeURIComponent(hash[0])] = decodeURIComponent(hash[1]);
	    }
	    return vars;
	}
	
	// Parses options out of the host <script> element. Allows for easy configuration
	// via the HTML element. Example:
	//
	// <script src="lightstep.min.js"
	//      access_token="{my_access_token}"
	//      group_name="my_group"></script>
	//
	// Note: relies on the global hostScriptElement variable defined above.
	//
	module.exports.parseScriptElementOptions = function (opts, browserOpts) {
	    if (!hostScriptElement) {
	        return;
	    }
	
	    var dataset = hostScriptElement.dataset;
	
	    var accessToken = dataset.access_token;
	    if (typeof accessToken === "string" && accessToken.length > 0) {
	        opts.access_token = accessToken;
	    }
	    var groupName = dataset.group_name;
	    if (typeof groupName === "string" && groupName.length > 0) {
	        opts.group_name = groupName;
	    }
	    var serviceHost = dataset.service_host;
	    if (typeof serviceHost === "string" && serviceHost.length > 0) {
	        opts.service_host = serviceHost;
	    }
	    var servicePort = dataset.service_port;
	    if (servicePort) {
	        opts.service_port = parseInt(servicePort);
	    }
	    var joinIds = dataset.join_ids;
	    if (joinIds) {
	        try {
	            opts.join_ids = JSON.parse(joinIds);
	        } catch (e) {
	            console.error("Could not parse join_ids string:", joinIds);
	        }
	    }
	
	    // Special case the "end_user_id" since that is by far the most likely
	    // join ID to be set globally by browser instrumentation
	    var endUserId = dataset.end_user_id;
	    if (endUserId) {
	        opts.join_ids = opts.join_ids || {};
	        opts.join_ids.end_user_id = endUserId;
	    }
	
	    var enable = dataset.enable;
	    if (typeof enable == "string") {
	        if (enable == "true") {
	            opts.enable = true;
	        } else if (enable == "false") {
	            opts.enable = false;
	        }
	    }
	    var debug = dataset.debug;
	    if (typeof debug == "string" && debug == "true") {
	        opts.debug = true;
	    }
	    var verbosity = dataset.verbosity;
	    if (typeof verbosity === "string") {
	        opts.verbosity = parseInt(verbosity);
	    }
	
	    var init = dataset.init_global_tracer;
	    if (typeof init == "string") {
	        if (init == "true") {
	            browserOpts.init_global_tracer = true;
	        } else if (init == "false") {
	            browserOpts.init_global_tracer = false;
	        }
	    }
	};
	
	// Parses options out of the current URL query string. The query parameters use
	// the "lightstep_" prefix to reduce the chance of collision with
	// application-specific query parameters.
	//
	// This mechanism is particularly useful for debugging purposes as it does not
	// require any code or configuration changes.
	//
	module.exports.parseURLQueryOptions = function (opts) {
	    if (!window) {
	        return;
	    }
	
	    var params = urlQueryParameters();
	    if (params.lightstep_debug) {
	        opts.debug = true;
	    }
	    if (params.lightstep_verbosity) {
	        try {
	            opts.verbosity = parseInt(params.lightstep_verbosity);
	        } catch (_ignored) {}
	    }
	    if (params.lightstep_log_to_console) {
	        opts.log_to_console = true;
	    }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	// This function is copied directly from https://github.com/litejs/browser-cookie-lite.
	// It is licensed under the MIT License and authored by Lauri Rooden.
	function cookie(name, value, ttl, path, domain, secure) {
	    if (arguments.length > 1) {
	        var newCookie = name + "=" + encodeURIComponent(value) + (ttl ? "; expires=" + new Date(+new Date() + ttl * 1000).toUTCString() : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "");
	        document.cookie = newCookie;
	        return newCookie;
	    }
	    return decodeURIComponent((("; " + document.cookie).split("; " + name + "=")[1] || "").split(";")[0]);
	}
	
	module.exports = {
	    cookie: cookie
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Capture the proxied values as soon as possible in case there are
	// multiple layers of instrumentation.
	var proxied = {};
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && typeof window.XMLHttpRequest !== "undefined") {
	    proxied = {
	        XMLHttpRequest: XMLHttpRequest,
	        open: XMLHttpRequest.prototype.open,
	        send: XMLHttpRequest.prototype.send,
	        setRequestHeader: XMLHttpRequest.prototype.setRequestHeader
	    };
	}
	
	// Automatically create spans for all XMLHttpRequest objects.
	//
	// NOTE: this code currently works only with a single Tracer.
	//
	
	var InstrumentXHR = function () {
	    function InstrumentXHR() {
	        _classCallCheck(this, InstrumentXHR);
	
	        this._enabled = this._isValidContext();
	        this._tracer = null;
	        this._handleOptions = this._handleOptions.bind(this);
	
	        if (!this._enabled) {
	            return;
	        }
	    }
	
	    _createClass(InstrumentXHR, [{
	        key: "name",
	        value: function name() {
	            return "instrument_xhr";
	        }
	    }, {
	        key: "start",
	        value: function start(tracer) {
	            if (!this._enabled) {
	                return;
	            }
	            this._tracer = tracer;
	
	            var proto = proxied.XMLHttpRequest.prototype;
	            proto.setRequestHeader = this._instrumentSetRequestHeader();
	            proto.open = this._instrumentOpen();
	            proto.send = this._instrumentSend();
	
	            tracer.addOption("xhr_url_exclusion_patterns", { type: "any", defaultValue: [] });
	            this._addServiceHostToExclusions(tracer.options());
	            tracer.on('options', this._handleOptions);
	        }
	    }, {
	        key: "stop",
	        value: function stop(tracer) {
	            if (!this._enabled) {
	                return;
	            }
	            var proto = proxied.XMLHttpRequest.prototype;
	            proto.open = proxied.open;
	            proto.send = proxied.send;
	        }
	    }, {
	        key: "_handleOptions",
	        value: function _handleOptions(modified, current) {
	            // Automatically add the service host itself to the list of exclusions
	            // to avoid reporting on the reports themselves
	            var serviceHost = modified.service_host;
	            if (serviceHost) {
	                this._addServiceHostToExclusions(current);
	            }
	        }
	    }, {
	        key: "_addServiceHostToExclusions",
	        value: function _addServiceHostToExclusions(opts) {
	            if (opts.service_host.length === 0) {
	                return;
	            }
	
	            // http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
	            function escapeRegExp(str) {
	                return ('' + str).replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	            }
	
	            // Check against the hostname without the port as well as the canonicalized
	            // URL may drop the standard port.
	            var host = escapeRegExp(opts.service_host);
	            var port = escapeRegExp(opts.service_port);
	            var set = [new RegExp('^https?://' + host + ':' + port)];
	            if (port == "80") {
	                set.push(new RegExp('^http://' + host));
	            } else if (port == "443") {
	                set.push(new RegExp('^https://' + host));
	            }
	            var patterns = opts.xhr_url_exclusion_patterns.concat(set);
	            this._tracer.options({ xhr_url_exclusion_patterns: patterns });
	        }
	    }, {
	        key: "_isValidContext",
	        value: function _isValidContext() {
	            if (typeof window === "undefined") {
	                return false;
	            }
	            if (!window.XMLHttpRequest) {
	                return false;
	            }
	            if (!window.XMLHttpRequest.prototype) {
	                return false;
	            }
	            return true;
	        }
	    }, {
	        key: "_instrumentSetRequestHeader",
	        value: function _instrumentSetRequestHeader() {
	            return function (header, value) {
	                this.__requestHeaders = this.__requestHeaders || {};
	                this.__requestHeaders[header] = value;
	                return proxied.setRequestHeader.apply(this, arguments);
	            };
	        }
	    }, {
	        key: "_instrumentOpen",
	        value: function _instrumentOpen() {
	            var self = this;
	            var tracer = this._tracer;
	
	            return function (method, url, asyncArg, user, password) {
	                if (!self._shouldTrace(tracer, this, url)) {
	                    return proxied.open.apply(this, arguments);
	                }
	
	                this.__tracer_url = url;
	
	                var tags = {
	                    method: method,
	                    url: url,
	                    async: asyncArg,
	                    user: user
	                };
	                if (url) {
	                    tags.url_pathname = url.split('?')[0];
	                }
	
	                var openPayload = {};
	                for (var key in tags) {
	                    openPayload[key] = tags[key];
	                }
	                openPayload.cookies = getCookies();
	
	                // Note: async defaults to true
	                var async = asyncArg === undefined ? true : asyncArg;
	                var syncSpan = undefined;
	                if (async) {
	                    this.addEventListener('readystatechange', function () {
	                        if (this.readyState == 0) {
	                            // Do nothing (the XHR span will not be ready yet)
	                        } else if (this.readyState == 1) {
	                                // Do nothing (the XHR span will not be ready yet)
	                            } else if (this.readyState == 2) {
	                                    var _span = self._getXHRSpan(this);
	                                    _span.info("XMLHttpRequest: " + method + " " + url, openPayload);
	                                    _span.addTags(tags);
	                                    _span.info('XMLHttpRequest headers received (readyState=2)', {
	                                        headers: getResponseHeaders(this)
	                                    });
	                                } else if (this.readyState == 3) {
	                                    self._getXHRSpan(this).info('XMLHttpRequest loading (readyState=3)');
	                                } else if (this.readyState == 4) {
	                                    var responseType = this.responseType;
	                                    var payload = {
	                                        url: url,
	                                        method: method,
	                                        headers: getResponseHeaders(this),
	                                        status: this.status,
	                                        statusText: this.statusText,
	                                        responseType: responseType
	                                    };
	
	                                    // The responseText property is only valid if the responseType is
	                                    // '' or 'text'.  There are other types like 'arraybuffer' for which
	                                    // attempting to read responseText will throw an exception.
	                                    var validResponseType = responseType === '' || responseType == 'text';
	                                    if (validResponseType && this.responseText) {
	                                        // Display the payload as JSON if it's parseable as such
	                                        try {
	                                            payload.responseJSON = JSON.parse(this.responseText);
	                                        } catch (e) {
	                                            payload.responseText = this.responseText;
	                                        }
	                                    } else {
	                                        payload.response = this.response;
	                                    }
	
	                                    var prefix = "XMLHttpRequest " + tags.method + " done (readyState=4), status " + this.status;
	                                    var _span2 = self._getXHRSpan(this);
	                                    if (!(this.status > 99)) {
	                                        _span2.error(prefix + " (unknown)", payload);
	                                    } else if (this.status < 199) {
	                                        _span2.info(prefix + " (informational)", payload);
	                                    } else if (this.status < 299) {
	                                        _span2.info(prefix + " (successful)", payload);
	                                    } else if (this.status < 399) {
	                                        _span2.info(prefix + " (redirection)", payload);
	                                    } else if (this.status < 499) {
	                                        _span2.error(prefix + " (client error)", payload);
	                                    } else if (this.status < 599) {
	                                        _span2.error(prefix + " (server error)", payload);
	                                    } else {
	                                        _span2.error(prefix + " (unknown)", payload);
	                                    }
	                                    _span2.end();
	                                } else {
	                                    span.info("XMLHttpRequest readyState=" + this.readyState);
	                                }
	                    });
	                } else {
	                    syncSpan = self._getXHRSpan(this);
	                }
	
	                var result = proxied.open.apply(this, arguments);
	                if (!async) {
	                    syncSpan.end();
	                }
	                return result;
	            };
	        }
	    }, {
	        key: "_instrumentSend",
	        value: function _instrumentSend() {
	            var self = this;
	            var tracer = this._tracer;
	            return function () {
	                var url = this.__tracer_url;
	                if (!self._shouldTrace(tracer, this, this.__tracer_url)) {
	                    return proxied.send.apply(this, arguments);
	                }
	
	                var span = self._getXHRSpan(this);
	                if (!span) {
	                    return proxied.send.apply(this, arguments);
	                }
	
	                var data = Array.prototype.slice.call(arguments);
	                var len = undefined;
	                if (data.length == 1) {
	                    if (data[0] && data[0].length) {
	                        len = data[0].length;
	                    }
	                    try {
	                        data = JSON.parse(data[0]);
	                    } catch (e) {
	                        // Ignore the error
	                    }
	                }
	                var lenStr = len === undefined ? '' : ", data length=" + len;
	                span.info("XMLHttpRequest send" + lenStr, { data: data });
	                return proxied.send.apply(this, arguments);
	            };
	        }
	    }, {
	        key: "_getXHRSpan",
	        value: function _getXHRSpan(xhr) {
	            var self = this;
	
	            // Check if we've already joined successfully; if so, return early.
	            if (xhr.__xhr_span) {
	                return xhr.__xhr_span;
	            }
	
	            // Join via the recorded request headers.
	            //
	            // NOTE: we would like to re-inject `span` into the headers (swapping
	            // out the ones we joined with) but CORS restrictions prevent us from
	            // doing so.
	            var splitTextCarrier = new Tracer.SplitTextCarrier();
	            splitTextCarrier.tracerState = xhr.__requestHeaders;
	            splitTextCarrier.baggage = xhr.__requestHeaders;
	            var span = self._tracer.join('XMLHttpRequest', Tracer.FORMAT_SPLIT_TEXT, splitTextCarrier);
	            if (span) {
	                xhr.__xhr_span = span;
	            }
	            return span;
	        }
	    }, {
	        key: "_shouldTrace",
	        value: function _shouldTrace(tracer, xhr, url) {
	            var opts = tracer.options();
	            if (opts.disabled) {
	                return false;
	            }
	            if (!url) {
	                return false;
	            }
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = opts.xhr_url_exclusion_patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var ex = _step.value;
	
	                    if (ex.test(url)) {
	                        return false;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return true;
	        }
	    }]);
	
	    return InstrumentXHR;
	}();
	
	function getCookies() {
	    if (typeof document === "undefined" || !document.cookie) {
	        return null;
	    }
	
	    var cookies = document.cookie.split(";");
	    var data = {};
	    var count = 0;
	    for (var i = 0; i < cookies.length; i++) {
	        var parts = cookies[i].split("=", 2);
	        if (parts.length === 2) {
	            var key = parts[0].replace(/^\s+/, "").replace(/\s+$/, "");
	            data[key] = decodeURIComponent(parts[1]);
	            try {
	                data[key] = JSON.parse(data[key]);
	            } catch (_ignored) {}
	            count++;
	        }
	    }
	    if (count > 0) {
	        return data;
	    }
	    return null;
	}
	
	// Normalize the getAllResponseHeaders output
	function getResponseHeaders(xhr) {
	    var raw = xhr.getAllResponseHeaders();
	    var parts = raw.replace(/\s+$/, "").split(/\n/);
	    for (var i in parts) {
	        parts[i] = parts[i].replace(/\r/g, "").replace(/^\s+/, "").replace(/\s+$/, "");
	    }
	    return parts;
	}
	
	module.exports = new InstrumentXHR();

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InstrumentPageLoad = function () {
	    function InstrumentPageLoad() {
	        _classCallCheck(this, InstrumentPageLoad);
	
	        this._inited = false;
	        this._span = null;
	    }
	
	    _createClass(InstrumentPageLoad, [{
	        key: 'name',
	        value: function name() {
	            return 'instrument_page_load';
	        }
	    }, {
	        key: 'start',
	        value: function start() {
	            if (this._inited) {
	                return;
	            }
	            this._inited = true;
	
	            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || (typeof document === 'undefined' ? 'undefined' : _typeof(document)) !== 'object') {
	                return;
	            }
	            if (_typeof(window.Tracer) !== 'object') {
	                return;
	            }
	
	            document.addEventListener('readystatechange', this._handleReadyStateChange.bind(this));
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {}
	    }, {
	        key: '_handleReadyStateChange',
	        value: function _handleReadyStateChange() {
	            // TODO: LightStep plug-in initialization should be better defined. This
	            // "lazy" initialization of the span should be more well-defined.
	            if (!Tracer.imp()) {
	                // The Tracer implementation has not yet been set up. Can't record
	                // the span yet.
	                return;
	            }
	
	            if (!this._span) {
	                this._span = Tracer.startSpan('document/load');
	                Tracer.imp().addActiveRootSpan(this._span.imp());
	            }
	
	            var span = this._span;
	            var state = document.readyState;
	            var payload = undefined;
	            if (state === 'complete') {
	                payload = {};
	                if (window.performance && performance.timing) {
	                    this._addTimingSpans(span, performance.timing);
	                    payload['window.performance.timing'] = performance.timing;
	                }
	            }
	
	            span.logEvent('document.readystatechange ' + state, payload);
	
	            if (state === 'complete') {
	                Tracer.imp().removeActiveRootSpan(span.imp());
	                span.finish();
	            }
	        }
	    }, {
	        key: '_copyNavigatorProperties',
	        value: function _copyNavigatorProperties(nav) {
	            var dst = {};
	            for (var key in nav) {
	                try {
	                    var value = nav[key];
	                    switch (key) {
	
	                        case "plugins":
	                            {
	                                var p = [];
	                                for (var i = 0; i < value.length; i++) {
	                                    var item = value.item(i);
	                                    p.push({
	                                        name: item.name,
	                                        description: item.description
	                                    });
	                                }
	                                dst[key] = p;
	                            }break;
	
	                        case "mimeTypes":
	                            {
	                                var _p = [];
	                                for (var _i = 0; _i < value.length; _i++) {
	                                    var _item = value.item(_i);
	                                    _p.push({
	                                        type: _item.type,
	                                        description: _item.description,
	                                        suffixes: _item.suffixes
	                                    });
	                                }
	                                dst[key] = _p;
	                            }break;
	
	                        default:
	                            dst[key] = value;
	                            break;
	                    }
	                } catch (e) {
	                    // Skip, just in case
	                }
	            }
	            return dst;
	        }
	
	        // Retroactively create the appropriate spans and logs
	
	    }, {
	        key: '_addTimingSpans',
	        value: function _addTimingSpans(parent, timing) {
	            // NOTE: this currently relies on LightStep-specific APIs
	            var parentImp = parent.imp();
	            if (!parentImp) {
	                console.error("Could not get span implementation object", parent);
	                return;
	            }
	
	            parent.setTag('user_agent', navigator.userAgent);
	
	            for (var key in timing) {
	                var value = timing[key];
	
	                // e.g. secureConnectionStart is not always set
	                if (typeof value !== 'number' || value === 0) {
	                    continue;
	                }
	
	                var micros = value * 1000.0;
	                var payload = undefined;
	
	                if (key === 'navigationStart' && (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object') {
	                    payload = {
	                        navigator: this._copyNavigatorProperties(navigator)
	                    };
	                }
	                parentImp.log({
	                    message: 'document ' + key,
	                    timestamp_micros: micros,
	                    payload: payload
	                });
	            }
	
	            if (window.chrome && window.chrome.loadTimes) {
	                var chromeTimes = window.chrome.loadTimes();
	                if (chromeTimes) {
	                    parentImp.log({
	                        message: 'window.chrome.loadTimes()',
	                        timestamp_micros: timing.domComplete * 1000.0,
	                        payload: chromeTimes
	                    });
	                }
	            }
	
	            parentImp.modify({
	                begin_micros: timing.navigationStart * 1000.0
	            });
	            parent.tracer().startSpan('document/time_to_first_byte', { parent: parent }).imp().modify({
	                begin_micros: timing.requestStart * 1000.0,
	                end_micros: timing.responseStart * 1000.0
	            }).finish();
	            parent.tracer().startSpan('document/response_transfer', { parent: parent }).imp().modify({
	                begin_micros: timing.responseStart * 1000.0,
	                end_micros: timing.responseEnd * 1000.0
	            }).finish();
	            parent.tracer().startSpan('document/dom_load', { parent: parent }).imp().modify({
	                begin_micros: timing.domLoading * 1000.0,
	                end_micros: timing.domInteractive * 1000.0
	            }).finish();
	        }
	    }]);
	
	    return InstrumentPageLoad;
	}();
	
	module.exports = new InstrumentPageLoad();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _thrift = __webpack_require__(14);
	
	var _thrift2 = _interopRequireDefault(_thrift);
	
	var _crouton_thrift = __webpack_require__(16);
	
	var _crouton_thrift2 = _interopRequireDefault(_crouton_thrift);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TransportBrowser = function () {
	    function TransportBrowser() {
	        _classCallCheck(this, TransportBrowser);
	
	        this._hostport = null;
	        this._transport = null;
	        this._protocol = null;
	        this._client = null;
	    }
	
	    _createClass(TransportBrowser, [{
	        key: 'ensureConnection',
	        value: function ensureConnection(opts) {
	            // Already set up
	            if (this._client) {
	                return;
	            }
	
	            var host = opts.service_host;
	            var port = opts.service_port;
	            var scheme = opts.secure ? "https" : "http";
	            this._hostport = scheme + '://' + host + ':' + port;
	
	            // Currently the only support Thrift browser protocol is JSON.
	            var serviceUrl = this._hostport + '/_rpc/v1/reports/json';
	            this._transport = new _thrift2.default.Transport(serviceUrl);
	            this._protocol = new _thrift2.default.Protocol(this._transport);
	            this._client = new _crouton_thrift2.default.ReportingServiceClient(this._protocol);
	        }
	    }, {
	        key: 'report',
	        value: function report(detached, auth, _report, done) {
	            try {
	                if (!detached) {
	                    this._reportThriftRPC(auth, _report, done);
	                } else {
	                    this._reportAsyncScript(auth, _report, done);
	                }
	            } catch (e) {
	                return done(e, null);
	            }
	        }
	    }, {
	        key: '_reportThriftRPC',
	        value: function _reportThriftRPC(auth, report, done) {
	            this._client.Report(auth, report, function (res) {
	                // The Thrift browser-side convention here is non-standard. Valid
	                // responses and errors are overloaded into the same variable and
	                // need to be differentiated by a type-check.
	                if (!(res instanceof _crouton_thrift2.default.ReportResponse)) {
	                    done(res, null);
	                } else {
	                    done(null, res);
	                }
	            });
	        }
	
	        // Do a "tail flush" using an async browser script load.  This does not get
	        // interrupted as a normal Thirft RPC would when navigating away from
	        // the page.
	
	    }, {
	        key: '_reportAsyncScript',
	        value: function _reportAsyncScript(auth, report, done) {
	            var authJSON = JSON.stringify(auth);
	            var reportJSON = JSON.stringify(report);
	
	            var url = this._hostport + '/_rpc/v1/reports/uri_encoded' + "?auth=" + encodeURIComponent(authJSON) + "&report=" + encodeURIComponent(reportJSON);
	
	            var elem = document.createElement("script");
	            elem.async = true;
	            elem.defer = true;
	            elem.src = url;
	            elem.type = "text/javascript";
	
	            var hostElem = document.getElementsByTagName("head")[0];
	            if (hostElem) {
	                hostElem.appendChild(elem);
	            }
	            return done(null, null);
	        }
	    }]);
	
	    return TransportBrowser;
	}();

	exports.default = TransportBrowser;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(15).Thrift;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	//
	// GENERATED FILE - DO NOT EDIT DIRECTLY
	//
	// See scripts/build_browser_thrift_lib.js
	//
	//
	(function () {
	  var crouton_thrift = {};
	  //
	  // Autogenerated by Thrift Compiler (0.9.2)
	  //
	  // DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
	  //
	
	  if (typeof crouton_thrift === 'undefined') {
	    crouton_thrift = {};
	  }
	  crouton_thrift.KeyValue = function (args) {
	    this.Key = null;
	    this.Value = null;
	    if (args) {
	      if (args.Key !== undefined) {
	        this.Key = args.Key;
	      } else {
	        throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field Key is unset!');
	      }
	      if (args.Value !== undefined) {
	        this.Value = args.Value;
	      } else {
	        throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field Value is unset!');
	      }
	    }
	  };
	  crouton_thrift.KeyValue.prototype = {};
	  crouton_thrift.KeyValue.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.STRING) {
	            this.Key = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 2:
	          if (ftype == Thrift.Type.STRING) {
	            this.Value = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.KeyValue.prototype.write = function (output) {
	    output.writeStructBegin('KeyValue');
	    if (this.Key !== null && this.Key !== undefined) {
	      output.writeFieldBegin('Key', Thrift.Type.STRING, 1);
	      output.writeString(this.Key);
	      output.writeFieldEnd();
	    }
	    if (this.Value !== null && this.Value !== undefined) {
	      output.writeFieldBegin('Value', Thrift.Type.STRING, 2);
	      output.writeString(this.Value);
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.NamedCounter = function (args) {
	    this.Name = null;
	    this.Value = null;
	    if (args) {
	      if (args.Name !== undefined) {
	        this.Name = args.Name;
	      } else {
	        throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field Name is unset!');
	      }
	      if (args.Value !== undefined) {
	        this.Value = args.Value;
	      } else {
	        throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field Value is unset!');
	      }
	    }
	  };
	  crouton_thrift.NamedCounter.prototype = {};
	  crouton_thrift.NamedCounter.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.STRING) {
	            this.Name = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 2:
	          if (ftype == Thrift.Type.I64) {
	            this.Value = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.NamedCounter.prototype.write = function (output) {
	    output.writeStructBegin('NamedCounter');
	    if (this.Name !== null && this.Name !== undefined) {
	      output.writeFieldBegin('Name', Thrift.Type.STRING, 1);
	      output.writeString(this.Name);
	      output.writeFieldEnd();
	    }
	    if (this.Value !== null && this.Value !== undefined) {
	      output.writeFieldBegin('Value', Thrift.Type.I64, 2);
	      output.writeI64(this.Value);
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.Runtime = function (args) {
	    this.guid = null;
	    this.start_micros = null;
	    this.group_name = null;
	    this.attrs = null;
	    if (args) {
	      if (args.guid !== undefined) {
	        this.guid = args.guid;
	      }
	      if (args.start_micros !== undefined) {
	        this.start_micros = args.start_micros;
	      }
	      if (args.group_name !== undefined) {
	        this.group_name = args.group_name;
	      }
	      if (args.attrs !== undefined) {
	        this.attrs = args.attrs;
	      }
	    }
	  };
	  crouton_thrift.Runtime.prototype = {};
	  crouton_thrift.Runtime.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.STRING) {
	            this.guid = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 2:
	          if (ftype == Thrift.Type.I64) {
	            this.start_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 3:
	          if (ftype == Thrift.Type.STRING) {
	            this.group_name = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 4:
	          if (ftype == Thrift.Type.LIST) {
	            var _size0 = 0;
	            var _rtmp34;
	            this.attrs = [];
	            var _etype3 = 0;
	            _rtmp34 = input.readListBegin();
	            _etype3 = _rtmp34.etype;
	            _size0 = _rtmp34.size;
	            for (var _i5 = 0; _i5 < _size0; ++_i5) {
	              var elem6 = null;
	              elem6 = new crouton_thrift.KeyValue();
	              elem6.read(input);
	              this.attrs.push(elem6);
	            }
	            input.readListEnd();
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.Runtime.prototype.write = function (output) {
	    output.writeStructBegin('Runtime');
	    if (this.guid !== null && this.guid !== undefined) {
	      output.writeFieldBegin('guid', Thrift.Type.STRING, 1);
	      output.writeString(this.guid);
	      output.writeFieldEnd();
	    }
	    if (this.start_micros !== null && this.start_micros !== undefined) {
	      output.writeFieldBegin('start_micros', Thrift.Type.I64, 2);
	      output.writeI64(this.start_micros);
	      output.writeFieldEnd();
	    }
	    if (this.group_name !== null && this.group_name !== undefined) {
	      output.writeFieldBegin('group_name', Thrift.Type.STRING, 3);
	      output.writeString(this.group_name);
	      output.writeFieldEnd();
	    }
	    if (this.attrs !== null && this.attrs !== undefined) {
	      output.writeFieldBegin('attrs', Thrift.Type.LIST, 4);
	      output.writeListBegin(Thrift.Type.STRUCT, this.attrs.length);
	      for (var iter7 in this.attrs) {
	        if (this.attrs.hasOwnProperty(iter7)) {
	          iter7 = this.attrs[iter7];
	          iter7.write(output);
	        }
	      }
	      output.writeListEnd();
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.LogRecord = function (args) {
	    this.timestamp_micros = null;
	    this.runtime_guid = null;
	    this.span_guid = null;
	    this.stable_name = null;
	    this.message = null;
	    this.level = null;
	    this.thread_id = null;
	    this.filename = null;
	    this.line_number = null;
	    this.stack_frames = null;
	    this.payload_json = null;
	    this.error_flag = null;
	    if (args) {
	      if (args.timestamp_micros !== undefined) {
	        this.timestamp_micros = args.timestamp_micros;
	      }
	      if (args.runtime_guid !== undefined) {
	        this.runtime_guid = args.runtime_guid;
	      }
	      if (args.span_guid !== undefined) {
	        this.span_guid = args.span_guid;
	      }
	      if (args.stable_name !== undefined) {
	        this.stable_name = args.stable_name;
	      }
	      if (args.message !== undefined) {
	        this.message = args.message;
	      }
	      if (args.level !== undefined) {
	        this.level = args.level;
	      }
	      if (args.thread_id !== undefined) {
	        this.thread_id = args.thread_id;
	      }
	      if (args.filename !== undefined) {
	        this.filename = args.filename;
	      }
	      if (args.line_number !== undefined) {
	        this.line_number = args.line_number;
	      }
	      if (args.stack_frames !== undefined) {
	        this.stack_frames = args.stack_frames;
	      }
	      if (args.payload_json !== undefined) {
	        this.payload_json = args.payload_json;
	      }
	      if (args.error_flag !== undefined) {
	        this.error_flag = args.error_flag;
	      }
	    }
	  };
	  crouton_thrift.LogRecord.prototype = {};
	  crouton_thrift.LogRecord.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.I64) {
	            this.timestamp_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 2:
	          if (ftype == Thrift.Type.STRING) {
	            this.runtime_guid = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 3:
	          if (ftype == Thrift.Type.STRING) {
	            this.span_guid = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 4:
	          if (ftype == Thrift.Type.STRING) {
	            this.stable_name = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 5:
	          if (ftype == Thrift.Type.STRING) {
	            this.message = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 6:
	          if (ftype == Thrift.Type.STRING) {
	            this.level = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 7:
	          if (ftype == Thrift.Type.I64) {
	            this.thread_id = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 8:
	          if (ftype == Thrift.Type.STRING) {
	            this.filename = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 9:
	          if (ftype == Thrift.Type.I64) {
	            this.line_number = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 10:
	          if (ftype == Thrift.Type.LIST) {
	            var _size8 = 0;
	            var _rtmp312;
	            this.stack_frames = [];
	            var _etype11 = 0;
	            _rtmp312 = input.readListBegin();
	            _etype11 = _rtmp312.etype;
	            _size8 = _rtmp312.size;
	            for (var _i13 = 0; _i13 < _size8; ++_i13) {
	              var elem14 = null;
	              elem14 = input.readString().value;
	              this.stack_frames.push(elem14);
	            }
	            input.readListEnd();
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 11:
	          if (ftype == Thrift.Type.STRING) {
	            this.payload_json = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 12:
	          if (ftype == Thrift.Type.BOOL) {
	            this.error_flag = input.readBool().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.LogRecord.prototype.write = function (output) {
	    output.writeStructBegin('LogRecord');
	    if (this.timestamp_micros !== null && this.timestamp_micros !== undefined) {
	      output.writeFieldBegin('timestamp_micros', Thrift.Type.I64, 1);
	      output.writeI64(this.timestamp_micros);
	      output.writeFieldEnd();
	    }
	    if (this.runtime_guid !== null && this.runtime_guid !== undefined) {
	      output.writeFieldBegin('runtime_guid', Thrift.Type.STRING, 2);
	      output.writeString(this.runtime_guid);
	      output.writeFieldEnd();
	    }
	    if (this.span_guid !== null && this.span_guid !== undefined) {
	      output.writeFieldBegin('span_guid', Thrift.Type.STRING, 3);
	      output.writeString(this.span_guid);
	      output.writeFieldEnd();
	    }
	    if (this.stable_name !== null && this.stable_name !== undefined) {
	      output.writeFieldBegin('stable_name', Thrift.Type.STRING, 4);
	      output.writeString(this.stable_name);
	      output.writeFieldEnd();
	    }
	    if (this.message !== null && this.message !== undefined) {
	      output.writeFieldBegin('message', Thrift.Type.STRING, 5);
	      output.writeString(this.message);
	      output.writeFieldEnd();
	    }
	    if (this.level !== null && this.level !== undefined) {
	      output.writeFieldBegin('level', Thrift.Type.STRING, 6);
	      output.writeString(this.level);
	      output.writeFieldEnd();
	    }
	    if (this.thread_id !== null && this.thread_id !== undefined) {
	      output.writeFieldBegin('thread_id', Thrift.Type.I64, 7);
	      output.writeI64(this.thread_id);
	      output.writeFieldEnd();
	    }
	    if (this.filename !== null && this.filename !== undefined) {
	      output.writeFieldBegin('filename', Thrift.Type.STRING, 8);
	      output.writeString(this.filename);
	      output.writeFieldEnd();
	    }
	    if (this.line_number !== null && this.line_number !== undefined) {
	      output.writeFieldBegin('line_number', Thrift.Type.I64, 9);
	      output.writeI64(this.line_number);
	      output.writeFieldEnd();
	    }
	    if (this.stack_frames !== null && this.stack_frames !== undefined) {
	      output.writeFieldBegin('stack_frames', Thrift.Type.LIST, 10);
	      output.writeListBegin(Thrift.Type.STRING, this.stack_frames.length);
	      for (var iter15 in this.stack_frames) {
	        if (this.stack_frames.hasOwnProperty(iter15)) {
	          iter15 = this.stack_frames[iter15];
	          output.writeString(iter15);
	        }
	      }
	      output.writeListEnd();
	      output.writeFieldEnd();
	    }
	    if (this.payload_json !== null && this.payload_json !== undefined) {
	      output.writeFieldBegin('payload_json', Thrift.Type.STRING, 11);
	      output.writeString(this.payload_json);
	      output.writeFieldEnd();
	    }
	    if (this.error_flag !== null && this.error_flag !== undefined) {
	      output.writeFieldBegin('error_flag', Thrift.Type.BOOL, 12);
	      output.writeBool(this.error_flag);
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.TraceJoinId = function (args) {
	    this.TraceKey = null;
	    this.Value = null;
	    if (args) {
	      if (args.TraceKey !== undefined) {
	        this.TraceKey = args.TraceKey;
	      } else {
	        throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field TraceKey is unset!');
	      }
	      if (args.Value !== undefined) {
	        this.Value = args.Value;
	      } else {
	        throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field Value is unset!');
	      }
	    }
	  };
	  crouton_thrift.TraceJoinId.prototype = {};
	  crouton_thrift.TraceJoinId.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.STRING) {
	            this.TraceKey = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 2:
	          if (ftype == Thrift.Type.STRING) {
	            this.Value = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.TraceJoinId.prototype.write = function (output) {
	    output.writeStructBegin('TraceJoinId');
	    if (this.TraceKey !== null && this.TraceKey !== undefined) {
	      output.writeFieldBegin('TraceKey', Thrift.Type.STRING, 1);
	      output.writeString(this.TraceKey);
	      output.writeFieldEnd();
	    }
	    if (this.Value !== null && this.Value !== undefined) {
	      output.writeFieldBegin('Value', Thrift.Type.STRING, 2);
	      output.writeString(this.Value);
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.SpanRecord = function (args) {
	    this.span_guid = null;
	    this.runtime_guid = null;
	    this.span_name = null;
	    this.join_ids = null;
	    this.oldest_micros = null;
	    this.youngest_micros = null;
	    this.attributes = null;
	    this.error_flag = null;
	    this.log_records = null;
	    if (args) {
	      if (args.span_guid !== undefined) {
	        this.span_guid = args.span_guid;
	      }
	      if (args.runtime_guid !== undefined) {
	        this.runtime_guid = args.runtime_guid;
	      }
	      if (args.span_name !== undefined) {
	        this.span_name = args.span_name;
	      }
	      if (args.join_ids !== undefined) {
	        this.join_ids = args.join_ids;
	      }
	      if (args.oldest_micros !== undefined) {
	        this.oldest_micros = args.oldest_micros;
	      }
	      if (args.youngest_micros !== undefined) {
	        this.youngest_micros = args.youngest_micros;
	      }
	      if (args.attributes !== undefined) {
	        this.attributes = args.attributes;
	      }
	      if (args.error_flag !== undefined) {
	        this.error_flag = args.error_flag;
	      }
	      if (args.log_records !== undefined) {
	        this.log_records = args.log_records;
	      }
	    }
	  };
	  crouton_thrift.SpanRecord.prototype = {};
	  crouton_thrift.SpanRecord.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.STRING) {
	            this.span_guid = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 2:
	          if (ftype == Thrift.Type.STRING) {
	            this.runtime_guid = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 3:
	          if (ftype == Thrift.Type.STRING) {
	            this.span_name = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 4:
	          if (ftype == Thrift.Type.LIST) {
	            var _size16 = 0;
	            var _rtmp320;
	            this.join_ids = [];
	            var _etype19 = 0;
	            _rtmp320 = input.readListBegin();
	            _etype19 = _rtmp320.etype;
	            _size16 = _rtmp320.size;
	            for (var _i21 = 0; _i21 < _size16; ++_i21) {
	              var elem22 = null;
	              elem22 = new crouton_thrift.TraceJoinId();
	              elem22.read(input);
	              this.join_ids.push(elem22);
	            }
	            input.readListEnd();
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 5:
	          if (ftype == Thrift.Type.I64) {
	            this.oldest_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 6:
	          if (ftype == Thrift.Type.I64) {
	            this.youngest_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 8:
	          if (ftype == Thrift.Type.LIST) {
	            var _size23 = 0;
	            var _rtmp327;
	            this.attributes = [];
	            var _etype26 = 0;
	            _rtmp327 = input.readListBegin();
	            _etype26 = _rtmp327.etype;
	            _size23 = _rtmp327.size;
	            for (var _i28 = 0; _i28 < _size23; ++_i28) {
	              var elem29 = null;
	              elem29 = new crouton_thrift.KeyValue();
	              elem29.read(input);
	              this.attributes.push(elem29);
	            }
	            input.readListEnd();
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 9:
	          if (ftype == Thrift.Type.BOOL) {
	            this.error_flag = input.readBool().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 10:
	          if (ftype == Thrift.Type.LIST) {
	            var _size30 = 0;
	            var _rtmp334;
	            this.log_records = [];
	            var _etype33 = 0;
	            _rtmp334 = input.readListBegin();
	            _etype33 = _rtmp334.etype;
	            _size30 = _rtmp334.size;
	            for (var _i35 = 0; _i35 < _size30; ++_i35) {
	              var elem36 = null;
	              elem36 = new crouton_thrift.LogRecord();
	              elem36.read(input);
	              this.log_records.push(elem36);
	            }
	            input.readListEnd();
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.SpanRecord.prototype.write = function (output) {
	    output.writeStructBegin('SpanRecord');
	    if (this.span_guid !== null && this.span_guid !== undefined) {
	      output.writeFieldBegin('span_guid', Thrift.Type.STRING, 1);
	      output.writeString(this.span_guid);
	      output.writeFieldEnd();
	    }
	    if (this.runtime_guid !== null && this.runtime_guid !== undefined) {
	      output.writeFieldBegin('runtime_guid', Thrift.Type.STRING, 2);
	      output.writeString(this.runtime_guid);
	      output.writeFieldEnd();
	    }
	    if (this.span_name !== null && this.span_name !== undefined) {
	      output.writeFieldBegin('span_name', Thrift.Type.STRING, 3);
	      output.writeString(this.span_name);
	      output.writeFieldEnd();
	    }
	    if (this.join_ids !== null && this.join_ids !== undefined) {
	      output.writeFieldBegin('join_ids', Thrift.Type.LIST, 4);
	      output.writeListBegin(Thrift.Type.STRUCT, this.join_ids.length);
	      for (var iter37 in this.join_ids) {
	        if (this.join_ids.hasOwnProperty(iter37)) {
	          iter37 = this.join_ids[iter37];
	          iter37.write(output);
	        }
	      }
	      output.writeListEnd();
	      output.writeFieldEnd();
	    }
	    if (this.oldest_micros !== null && this.oldest_micros !== undefined) {
	      output.writeFieldBegin('oldest_micros', Thrift.Type.I64, 5);
	      output.writeI64(this.oldest_micros);
	      output.writeFieldEnd();
	    }
	    if (this.youngest_micros !== null && this.youngest_micros !== undefined) {
	      output.writeFieldBegin('youngest_micros', Thrift.Type.I64, 6);
	      output.writeI64(this.youngest_micros);
	      output.writeFieldEnd();
	    }
	    if (this.attributes !== null && this.attributes !== undefined) {
	      output.writeFieldBegin('attributes', Thrift.Type.LIST, 8);
	      output.writeListBegin(Thrift.Type.STRUCT, this.attributes.length);
	      for (var iter38 in this.attributes) {
	        if (this.attributes.hasOwnProperty(iter38)) {
	          iter38 = this.attributes[iter38];
	          iter38.write(output);
	        }
	      }
	      output.writeListEnd();
	      output.writeFieldEnd();
	    }
	    if (this.error_flag !== null && this.error_flag !== undefined) {
	      output.writeFieldBegin('error_flag', Thrift.Type.BOOL, 9);
	      output.writeBool(this.error_flag);
	      output.writeFieldEnd();
	    }
	    if (this.log_records !== null && this.log_records !== undefined) {
	      output.writeFieldBegin('log_records', Thrift.Type.LIST, 10);
	      output.writeListBegin(Thrift.Type.STRUCT, this.log_records.length);
	      for (var iter39 in this.log_records) {
	        if (this.log_records.hasOwnProperty(iter39)) {
	          iter39 = this.log_records[iter39];
	          iter39.write(output);
	        }
	      }
	      output.writeListEnd();
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.Auth = function (args) {
	    this.access_token = null;
	    if (args) {
	      if (args.access_token !== undefined) {
	        this.access_token = args.access_token;
	      }
	    }
	  };
	  crouton_thrift.Auth.prototype = {};
	  crouton_thrift.Auth.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.STRING) {
	            this.access_token = input.readString().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 0:
	          input.skip(ftype);
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.Auth.prototype.write = function (output) {
	    output.writeStructBegin('Auth');
	    if (this.access_token !== null && this.access_token !== undefined) {
	      output.writeFieldBegin('access_token', Thrift.Type.STRING, 1);
	      output.writeString(this.access_token);
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.Timing = function (args) {
	    this.receive_micros = null;
	    this.transmit_micros = null;
	    if (args) {
	      if (args.receive_micros !== undefined) {
	        this.receive_micros = args.receive_micros;
	      }
	      if (args.transmit_micros !== undefined) {
	        this.transmit_micros = args.transmit_micros;
	      }
	    }
	  };
	  crouton_thrift.Timing.prototype = {};
	  crouton_thrift.Timing.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.I64) {
	            this.receive_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 2:
	          if (ftype == Thrift.Type.I64) {
	            this.transmit_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.Timing.prototype.write = function (output) {
	    output.writeStructBegin('Timing');
	    if (this.receive_micros !== null && this.receive_micros !== undefined) {
	      output.writeFieldBegin('receive_micros', Thrift.Type.I64, 1);
	      output.writeI64(this.receive_micros);
	      output.writeFieldEnd();
	    }
	    if (this.transmit_micros !== null && this.transmit_micros !== undefined) {
	      output.writeFieldBegin('transmit_micros', Thrift.Type.I64, 2);
	      output.writeI64(this.transmit_micros);
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.SampleCount = function (args) {
	    this.oldest_micros = null;
	    this.youngest_micros = null;
	    this.count = null;
	    if (args) {
	      if (args.oldest_micros !== undefined) {
	        this.oldest_micros = args.oldest_micros;
	      }
	      if (args.youngest_micros !== undefined) {
	        this.youngest_micros = args.youngest_micros;
	      }
	      if (args.count !== undefined) {
	        this.count = args.count;
	      }
	    }
	  };
	  crouton_thrift.SampleCount.prototype = {};
	  crouton_thrift.SampleCount.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.I64) {
	            this.oldest_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 2:
	          if (ftype == Thrift.Type.I64) {
	            this.youngest_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 3:
	          if (ftype == Thrift.Type.I64) {
	            this.count = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.SampleCount.prototype.write = function (output) {
	    output.writeStructBegin('SampleCount');
	    if (this.oldest_micros !== null && this.oldest_micros !== undefined) {
	      output.writeFieldBegin('oldest_micros', Thrift.Type.I64, 1);
	      output.writeI64(this.oldest_micros);
	      output.writeFieldEnd();
	    }
	    if (this.youngest_micros !== null && this.youngest_micros !== undefined) {
	      output.writeFieldBegin('youngest_micros', Thrift.Type.I64, 2);
	      output.writeI64(this.youngest_micros);
	      output.writeFieldEnd();
	    }
	    if (this.count !== null && this.count !== undefined) {
	      output.writeFieldBegin('count', Thrift.Type.I64, 3);
	      output.writeI64(this.count);
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.ReportRequest = function (args) {
	    this.runtime = null;
	    this.span_records = null;
	    this.log_records = null;
	    this.timestamp_offset_micros = null;
	    this.oldest_micros = null;
	    this.youngest_micros = null;
	    this.counters = null;
	    if (args) {
	      if (args.runtime !== undefined) {
	        this.runtime = args.runtime;
	      }
	      if (args.span_records !== undefined) {
	        this.span_records = args.span_records;
	      }
	      if (args.log_records !== undefined) {
	        this.log_records = args.log_records;
	      }
	      if (args.timestamp_offset_micros !== undefined) {
	        this.timestamp_offset_micros = args.timestamp_offset_micros;
	      }
	      if (args.oldest_micros !== undefined) {
	        this.oldest_micros = args.oldest_micros;
	      }
	      if (args.youngest_micros !== undefined) {
	        this.youngest_micros = args.youngest_micros;
	      }
	      if (args.counters !== undefined) {
	        this.counters = args.counters;
	      }
	    }
	  };
	  crouton_thrift.ReportRequest.prototype = {};
	  crouton_thrift.ReportRequest.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.STRUCT) {
	            this.runtime = new crouton_thrift.Runtime();
	            this.runtime.read(input);
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 3:
	          if (ftype == Thrift.Type.LIST) {
	            var _size40 = 0;
	            var _rtmp344;
	            this.span_records = [];
	            var _etype43 = 0;
	            _rtmp344 = input.readListBegin();
	            _etype43 = _rtmp344.etype;
	            _size40 = _rtmp344.size;
	            for (var _i45 = 0; _i45 < _size40; ++_i45) {
	              var elem46 = null;
	              elem46 = new crouton_thrift.SpanRecord();
	              elem46.read(input);
	              this.span_records.push(elem46);
	            }
	            input.readListEnd();
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 4:
	          if (ftype == Thrift.Type.LIST) {
	            var _size47 = 0;
	            var _rtmp351;
	            this.log_records = [];
	            var _etype50 = 0;
	            _rtmp351 = input.readListBegin();
	            _etype50 = _rtmp351.etype;
	            _size47 = _rtmp351.size;
	            for (var _i52 = 0; _i52 < _size47; ++_i52) {
	              var elem53 = null;
	              elem53 = new crouton_thrift.LogRecord();
	              elem53.read(input);
	              this.log_records.push(elem53);
	            }
	            input.readListEnd();
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 5:
	          if (ftype == Thrift.Type.I64) {
	            this.timestamp_offset_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 7:
	          if (ftype == Thrift.Type.I64) {
	            this.oldest_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 8:
	          if (ftype == Thrift.Type.I64) {
	            this.youngest_micros = input.readI64().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 9:
	          if (ftype == Thrift.Type.LIST) {
	            var _size54 = 0;
	            var _rtmp358;
	            this.counters = [];
	            var _etype57 = 0;
	            _rtmp358 = input.readListBegin();
	            _etype57 = _rtmp358.etype;
	            _size54 = _rtmp358.size;
	            for (var _i59 = 0; _i59 < _size54; ++_i59) {
	              var elem60 = null;
	              elem60 = new crouton_thrift.NamedCounter();
	              elem60.read(input);
	              this.counters.push(elem60);
	            }
	            input.readListEnd();
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.ReportRequest.prototype.write = function (output) {
	    output.writeStructBegin('ReportRequest');
	    if (this.runtime !== null && this.runtime !== undefined) {
	      output.writeFieldBegin('runtime', Thrift.Type.STRUCT, 1);
	      this.runtime.write(output);
	      output.writeFieldEnd();
	    }
	    if (this.span_records !== null && this.span_records !== undefined) {
	      output.writeFieldBegin('span_records', Thrift.Type.LIST, 3);
	      output.writeListBegin(Thrift.Type.STRUCT, this.span_records.length);
	      for (var iter61 in this.span_records) {
	        if (this.span_records.hasOwnProperty(iter61)) {
	          iter61 = this.span_records[iter61];
	          iter61.write(output);
	        }
	      }
	      output.writeListEnd();
	      output.writeFieldEnd();
	    }
	    if (this.log_records !== null && this.log_records !== undefined) {
	      output.writeFieldBegin('log_records', Thrift.Type.LIST, 4);
	      output.writeListBegin(Thrift.Type.STRUCT, this.log_records.length);
	      for (var iter62 in this.log_records) {
	        if (this.log_records.hasOwnProperty(iter62)) {
	          iter62 = this.log_records[iter62];
	          iter62.write(output);
	        }
	      }
	      output.writeListEnd();
	      output.writeFieldEnd();
	    }
	    if (this.timestamp_offset_micros !== null && this.timestamp_offset_micros !== undefined) {
	      output.writeFieldBegin('timestamp_offset_micros', Thrift.Type.I64, 5);
	      output.writeI64(this.timestamp_offset_micros);
	      output.writeFieldEnd();
	    }
	    if (this.oldest_micros !== null && this.oldest_micros !== undefined) {
	      output.writeFieldBegin('oldest_micros', Thrift.Type.I64, 7);
	      output.writeI64(this.oldest_micros);
	      output.writeFieldEnd();
	    }
	    if (this.youngest_micros !== null && this.youngest_micros !== undefined) {
	      output.writeFieldBegin('youngest_micros', Thrift.Type.I64, 8);
	      output.writeI64(this.youngest_micros);
	      output.writeFieldEnd();
	    }
	    if (this.counters !== null && this.counters !== undefined) {
	      output.writeFieldBegin('counters', Thrift.Type.LIST, 9);
	      output.writeListBegin(Thrift.Type.STRUCT, this.counters.length);
	      for (var iter63 in this.counters) {
	        if (this.counters.hasOwnProperty(iter63)) {
	          iter63 = this.counters[iter63];
	          iter63.write(output);
	        }
	      }
	      output.writeListEnd();
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.Command = function (args) {
	    this.disable = null;
	    if (args) {
	      if (args.disable !== undefined) {
	        this.disable = args.disable;
	      }
	    }
	  };
	  crouton_thrift.Command.prototype = {};
	  crouton_thrift.Command.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.BOOL) {
	            this.disable = input.readBool().value;
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 0:
	          input.skip(ftype);
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.Command.prototype.write = function (output) {
	    output.writeStructBegin('Command');
	    if (this.disable !== null && this.disable !== undefined) {
	      output.writeFieldBegin('disable', Thrift.Type.BOOL, 1);
	      output.writeBool(this.disable);
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.ReportResponse = function (args) {
	    this.commands = null;
	    this.timing = null;
	    this.errors = null;
	    if (args) {
	      if (args.commands !== undefined) {
	        this.commands = args.commands;
	      }
	      if (args.timing !== undefined) {
	        this.timing = args.timing;
	      }
	      if (args.errors !== undefined) {
	        this.errors = args.errors;
	      }
	    }
	  };
	  crouton_thrift.ReportResponse.prototype = {};
	  crouton_thrift.ReportResponse.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.LIST) {
	            var _size64 = 0;
	            var _rtmp368;
	            this.commands = [];
	            var _etype67 = 0;
	            _rtmp368 = input.readListBegin();
	            _etype67 = _rtmp368.etype;
	            _size64 = _rtmp368.size;
	            for (var _i69 = 0; _i69 < _size64; ++_i69) {
	              var elem70 = null;
	              elem70 = new crouton_thrift.Command();
	              elem70.read(input);
	              this.commands.push(elem70);
	            }
	            input.readListEnd();
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 2:
	          if (ftype == Thrift.Type.STRUCT) {
	            this.timing = new crouton_thrift.Timing();
	            this.timing.read(input);
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 3:
	          if (ftype == Thrift.Type.LIST) {
	            var _size71 = 0;
	            var _rtmp375;
	            this.errors = [];
	            var _etype74 = 0;
	            _rtmp375 = input.readListBegin();
	            _etype74 = _rtmp375.etype;
	            _size71 = _rtmp375.size;
	            for (var _i76 = 0; _i76 < _size71; ++_i76) {
	              var elem77 = null;
	              elem77 = input.readString().value;
	              this.errors.push(elem77);
	            }
	            input.readListEnd();
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.ReportResponse.prototype.write = function (output) {
	    output.writeStructBegin('ReportResponse');
	    if (this.commands !== null && this.commands !== undefined) {
	      output.writeFieldBegin('commands', Thrift.Type.LIST, 1);
	      output.writeListBegin(Thrift.Type.STRUCT, this.commands.length);
	      for (var iter78 in this.commands) {
	        if (this.commands.hasOwnProperty(iter78)) {
	          iter78 = this.commands[iter78];
	          iter78.write(output);
	        }
	      }
	      output.writeListEnd();
	      output.writeFieldEnd();
	    }
	    if (this.timing !== null && this.timing !== undefined) {
	      output.writeFieldBegin('timing', Thrift.Type.STRUCT, 2);
	      this.timing.write(output);
	      output.writeFieldEnd();
	    }
	    if (this.errors !== null && this.errors !== undefined) {
	      output.writeFieldBegin('errors', Thrift.Type.LIST, 3);
	      output.writeListBegin(Thrift.Type.STRING, this.errors.length);
	      for (var iter79 in this.errors) {
	        if (this.errors.hasOwnProperty(iter79)) {
	          iter79 = this.errors[iter79];
	          output.writeString(iter79);
	        }
	      }
	      output.writeListEnd();
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  //
	  // Autogenerated by Thrift Compiler (0.9.2)
	  //
	  // DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
	  //
	
	  //HELPER FUNCTIONS AND STRUCTURES
	
	  crouton_thrift.ReportingService_Report_args = function (args) {
	    this.auth = null;
	    this.request = null;
	    if (args) {
	      if (args.auth !== undefined) {
	        this.auth = args.auth;
	      }
	      if (args.request !== undefined) {
	        this.request = args.request;
	      }
	    }
	  };
	  crouton_thrift.ReportingService_Report_args.prototype = {};
	  crouton_thrift.ReportingService_Report_args.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 1:
	          if (ftype == Thrift.Type.STRUCT) {
	            this.auth = new crouton_thrift.Auth();
	            this.auth.read(input);
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 2:
	          if (ftype == Thrift.Type.STRUCT) {
	            this.request = new crouton_thrift.ReportRequest();
	            this.request.read(input);
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.ReportingService_Report_args.prototype.write = function (output) {
	    output.writeStructBegin('ReportingService_Report_args');
	    if (this.auth !== null && this.auth !== undefined) {
	      output.writeFieldBegin('auth', Thrift.Type.STRUCT, 1);
	      this.auth.write(output);
	      output.writeFieldEnd();
	    }
	    if (this.request !== null && this.request !== undefined) {
	      output.writeFieldBegin('request', Thrift.Type.STRUCT, 2);
	      this.request.write(output);
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.ReportingService_Report_result = function (args) {
	    this.success = null;
	    if (args) {
	      if (args.success !== undefined) {
	        this.success = args.success;
	      }
	    }
	  };
	  crouton_thrift.ReportingService_Report_result.prototype = {};
	  crouton_thrift.ReportingService_Report_result.prototype.read = function (input) {
	    input.readStructBegin();
	    while (true) {
	      var ret = input.readFieldBegin();
	      var fname = ret.fname;
	      var ftype = ret.ftype;
	      var fid = ret.fid;
	      if (ftype == Thrift.Type.STOP) {
	        break;
	      }
	      switch (fid) {
	        case 0:
	          if (ftype == Thrift.Type.STRUCT) {
	            this.success = new crouton_thrift.ReportResponse();
	            this.success.read(input);
	          } else {
	            input.skip(ftype);
	          }
	          break;
	        case 0:
	          input.skip(ftype);
	          break;
	        default:
	          input.skip(ftype);
	      }
	      input.readFieldEnd();
	    }
	    input.readStructEnd();
	    return;
	  };
	
	  crouton_thrift.ReportingService_Report_result.prototype.write = function (output) {
	    output.writeStructBegin('ReportingService_Report_result');
	    if (this.success !== null && this.success !== undefined) {
	      output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
	      this.success.write(output);
	      output.writeFieldEnd();
	    }
	    output.writeFieldStop();
	    output.writeStructEnd();
	    return;
	  };
	
	  crouton_thrift.ReportingServiceClient = function (input, output) {
	    this.input = input;
	    this.output = !output ? input : output;
	    this.seqid = 0;
	  };
	  crouton_thrift.ReportingServiceClient.prototype = {};
	  crouton_thrift.ReportingServiceClient.prototype.Report = function (auth, request, callback) {
	    this.send_Report(auth, request, callback);
	    if (!callback) {
	      return this.recv_Report();
	    }
	  };
	
	  crouton_thrift.ReportingServiceClient.prototype.send_Report = function (auth, request, callback) {
	    this.output.writeMessageBegin('Report', Thrift.MessageType.CALL, this.seqid);
	    var args = new crouton_thrift.ReportingService_Report_args();
	    args.auth = auth;
	    args.request = request;
	    args.write(this.output);
	    this.output.writeMessageEnd();
	    if (callback) {
	      var self = this;
	      this.output.getTransport().flush(true, function () {
	        var result = null;
	        try {
	          result = self.recv_Report();
	        } catch (e) {
	          result = e;
	        }
	        callback(result);
	      });
	    } else {
	      return this.output.getTransport().flush();
	    }
	  };
	
	  crouton_thrift.ReportingServiceClient.prototype.recv_Report = function () {
	    var ret = this.input.readMessageBegin();
	    var fname = ret.fname;
	    var mtype = ret.mtype;
	    var rseqid = ret.rseqid;
	    if (mtype == Thrift.MessageType.EXCEPTION) {
	      var x = new Thrift.TApplicationException();
	      x.read(this.input);
	      this.input.readMessageEnd();
	      throw x;
	    }
	    var result = new crouton_thrift.ReportingService_Report_result();
	    result.read(this.input);
	    this.input.readMessageEnd();
	
	    if (null !== result.success) {
	      return result.success;
	    }
	    throw 'Report failed: unknown result';
	  };
	
	  /*
	   * Licensed to the Apache Software Foundation (ASF) under one
	   * or more contributor license agreements. See the NOTICE file
	   * distributed with this work for additional information
	   * regarding copyright ownership. The ASF licenses this file
	   * to you under the Apache License, Version 2.0 (the
	   * "License"); you may not use this file except in compliance
	   * with the License. You may obtain a copy of the License at
	   *
	   *   http://www.apache.org/licenses/LICENSE-2.0
	   *
	   * Unless required by applicable law or agreed to in writing,
	   * software distributed under the License is distributed on an
	   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	   * KIND, either express or implied. See the License for the
	   * specific language governing permissions and limitations
	   * under the License.
	   */
	
	  /*jshint evil:true*/
	
	  /**
	   * The Thrift namespace houses the Apache Thrift JavaScript library 
	   * elements providing JavaScript bindings for the Apache Thrift RPC 
	   * system. End users will typically only directly make use of the 
	   * Transport (TXHRTransport/TWebSocketTransport) and Protocol 
	   * (TJSONPRotocol/TBinaryProtocol) constructors.
	   * 
	   * Object methods beginning with a __ (e.g. __onOpen()) are internal 
	   * and should not be called outside of the object's own methods.
	   * 
	   * This library creates one global object: Thrift
	   * Code in this library must never create additional global identifiers,
	   * all features must be scoped within the Thrift namespace.
	   * @namespace
	   * @example
	   *     var transport = new Thrift.Transport("http://localhost:8585");
	   *     var protocol  = new Thrift.Protocol(transport);
	   *     var client = new MyThriftSvcClient(protocol);
	   *     var result = client.MyMethod();
	   */
	  var Thrift = {
	    /**
	     * Thrift JavaScript library version.
	     * @readonly
	     * @const {string} Version
	     * @memberof Thrift
	     */
	    Version: '1.0.0-dev',
	
	    /**
	     * Thrift IDL type string to Id mapping.
	     * @readonly
	     * @property {number}  STOP   - End of a set of fields.
	     * @property {number}  VOID   - No value (only legal for return types).
	     * @property {number}  BOOL   - True/False integer.
	     * @property {number}  BYTE   - Signed 8 bit integer.
	     * @property {number}  I08    - Signed 8 bit integer.     
	     * @property {number}  DOUBLE - 64 bit IEEE 854 floating point.
	     * @property {number}  I16    - Signed 16 bit integer.
	     * @property {number}  I32    - Signed 32 bit integer.
	     * @property {number}  I64    - Signed 64 bit integer.
	     * @property {number}  STRING - Array of bytes representing a string of characters.
	     * @property {number}  UTF7   - Array of bytes representing a string of UTF7 encoded characters.
	     * @property {number}  STRUCT - A multifield type.
	     * @property {number}  MAP    - A collection type (map/associative-array/dictionary).
	     * @property {number}  SET    - A collection type (unordered and without repeated values).
	     * @property {number}  LIST   - A collection type (unordered).
	     * @property {number}  UTF8   - Array of bytes representing a string of UTF8 encoded characters.
	     * @property {number}  UTF16  - Array of bytes representing a string of UTF16 encoded characters.
	     */
	    Type: {
	      'STOP': 0,
	      'VOID': 1,
	      'BOOL': 2,
	      'BYTE': 3,
	      'I08': 3,
	      'DOUBLE': 4,
	      'I16': 6,
	      'I32': 8,
	      'I64': 10,
	      'STRING': 11,
	      'UTF7': 11,
	      'STRUCT': 12,
	      'MAP': 13,
	      'SET': 14,
	      'LIST': 15,
	      'UTF8': 16,
	      'UTF16': 17
	    },
	
	    /**
	     * Thrift RPC message type string to Id mapping.
	     * @readonly
	     * @property {number}  CALL      - RPC call sent from client to server.
	     * @property {number}  REPLY     - RPC call normal response from server to client.
	     * @property {number}  EXCEPTION - RPC call exception response from server to client.
	     * @property {number}  ONEWAY    - Oneway RPC call from client to server with no response.
	     */
	    MessageType: {
	      'CALL': 1,
	      'REPLY': 2,
	      'EXCEPTION': 3,
	      'ONEWAY': 4
	    },
	
	    /**
	     * Utility function returning the count of an object's own properties.
	     * @param {object} obj - Object to test.
	     * @returns {number} number of object's own properties
	     */
	    objectLength: function objectLength(obj) {
	      var length = 0;
	      for (var k in obj) {
	        if (obj.hasOwnProperty(k)) {
	          length++;
	        }
	      }
	      return length;
	    },
	
	    /**
	     * Utility function to establish prototype inheritance.
	     * @see {@link http://javascript.crockford.com/prototypal.html|Prototypal Inheritance}
	     * @param {function} constructor - Contstructor function to set as derived.
	     * @param {function} superConstructor - Contstructor function to set as base.
	     * @param {string} [name] - Type name to set as name property in derived prototype.
	     */
	    inherits: function inherits(constructor, superConstructor, name) {
	      function F() {}
	      F.prototype = superConstructor.prototype;
	      constructor.prototype = new F();
	      constructor.prototype.name = name || "";
	    }
	  };
	
	  /**
	   * Initializes a Thrift TException instance.
	   * @constructor
	   * @augments Error
	   * @param {string} message - The TException message (distinct from the Error message).
	   * @classdesc TException is the base class for all Thrift exceptions types.
	   */
	  Thrift.TException = function (message) {
	    this.message = message;
	  };
	  Thrift.inherits(Thrift.TException, Error, 'TException');
	
	  /**
	   * Returns the message set on the exception.
	   * @readonly
	   * @returns {string} exception message
	   */
	  Thrift.TException.prototype.getMessage = function () {
	    return this.message;
	  };
	
	  /**
	   * Thrift Application Exception type string to Id mapping.
	   * @readonly
	   * @property {number}  UNKNOWN                 - Unknown/undefined.
	   * @property {number}  UNKNOWN_METHOD          - Client attempted to call a method unknown to the server.
	   * @property {number}  INVALID_MESSAGE_TYPE    - Client passed an unknown/unsupported MessageType.
	   * @property {number}  WRONG_METHOD_NAME       - Unused.
	   * @property {number}  BAD_SEQUENCE_ID         - Unused in Thrift RPC, used to flag proprietary sequence number errors.
	   * @property {number}  MISSING_RESULT          - Raised by a server processor if a handler fails to supply the required return result.
	   * @property {number}  INTERNAL_ERROR          - Something bad happened.
	   * @property {number}  PROTOCOL_ERROR          - The protocol layer failed to serialize or deserialize data.
	   * @property {number}  INVALID_TRANSFORM       - Unused.
	   * @property {number}  INVALID_PROTOCOL        - The protocol (or version) is not supported.
	   * @property {number}  UNSUPPORTED_CLIENT_TYPE - Unused.
	   */
	  Thrift.TApplicationExceptionType = {
	    'UNKNOWN': 0,
	    'UNKNOWN_METHOD': 1,
	    'INVALID_MESSAGE_TYPE': 2,
	    'WRONG_METHOD_NAME': 3,
	    'BAD_SEQUENCE_ID': 4,
	    'MISSING_RESULT': 5,
	    'INTERNAL_ERROR': 6,
	    'PROTOCOL_ERROR': 7,
	    'INVALID_TRANSFORM': 8,
	    'INVALID_PROTOCOL': 9,
	    'UNSUPPORTED_CLIENT_TYPE': 10
	  };
	
	  /**
	   * Initializes a Thrift TApplicationException instance.
	   * @constructor
	   * @augments Thrift.TException
	   * @param {string} message - The TApplicationException message (distinct from the Error message).
	   * @param {Thrift.TApplicationExceptionType} [code] - The TApplicationExceptionType code.
	   * @classdesc TApplicationException is the exception class used to propagate exceptions from an RPC server back to a calling client.
	  */
	  Thrift.TApplicationException = function (message, code) {
	    this.message = message;
	    this.code = typeof code === "number" ? code : 0;
	  };
	  Thrift.inherits(Thrift.TApplicationException, Thrift.TException, 'TApplicationException');
	
	  /**
	   * Read a TApplicationException from the supplied protocol.
	   * @param {object} input - The input protocol to read from.
	   */
	  Thrift.TApplicationException.prototype.read = function (input) {
	    while (1) {
	      var ret = input.readFieldBegin();
	
	      if (ret.ftype == Thrift.Type.STOP) {
	        break;
	      }
	
	      var fid = ret.fid;
	
	      switch (fid) {
	        case 1:
	          if (ret.ftype == Thrift.Type.STRING) {
	            ret = input.readString();
	            this.message = ret.value;
	          } else {
	            ret = input.skip(ret.ftype);
	          }
	          break;
	        case 2:
	          if (ret.ftype == Thrift.Type.I32) {
	            ret = input.readI32();
	            this.code = ret.value;
	          } else {
	            ret = input.skip(ret.ftype);
	          }
	          break;
	        default:
	          ret = input.skip(ret.ftype);
	          break;
	      }
	
	      input.readFieldEnd();
	    }
	
	    input.readStructEnd();
	  };
	
	  /**
	   * Wite a TApplicationException to the supplied protocol.
	   * @param {object} output - The output protocol to write to.
	   */
	  Thrift.TApplicationException.prototype.write = function (output) {
	    output.writeStructBegin('TApplicationException');
	
	    if (this.message) {
	      output.writeFieldBegin('message', Thrift.Type.STRING, 1);
	      output.writeString(this.getMessage());
	      output.writeFieldEnd();
	    }
	
	    if (this.code) {
	      output.writeFieldBegin('type', Thrift.Type.I32, 2);
	      output.writeI32(this.code);
	      output.writeFieldEnd();
	    }
	
	    output.writeFieldStop();
	    output.writeStructEnd();
	  };
	
	  /**
	   * Returns the application exception code set on the exception.
	   * @readonly
	   * @returns {Thrift.TApplicationExceptionType} exception code
	   */
	  Thrift.TApplicationException.prototype.getCode = function () {
	    return this.code;
	  };
	
	  /**
	   * Constructor Function for the XHR transport.
	   * If you do not specify a url then you must handle XHR operations on
	   * your own. This type can also be constructed using the Transport alias
	   * for backward compatibility.
	   * @constructor
	   * @param {string} [url] - The URL to connect to.
	   * @classdesc The Apache Thrift Transport layer performs byte level I/O 
	   * between RPC clients and servers. The JavaScript TXHRTransport object 
	   * uses Http[s]/XHR. Target servers must implement the http[s] transport
	   * (see: node.js example server_http.js).
	   * @example
	   *     var transport = new Thrift.TXHRTransport("http://localhost:8585");
	   */
	  Thrift.Transport = Thrift.TXHRTransport = function (url, options) {
	    this.url = url;
	    this.wpos = 0;
	    this.rpos = 0;
	    this.useCORS = options && options.useCORS;
	    this.send_buf = '';
	    this.recv_buf = '';
	  };
	
	  Thrift.TXHRTransport.prototype = {
	    /**
	     * Gets the browser specific XmlHttpRequest Object.
	     * @returns {object} the browser XHR interface object
	     */
	    getXmlHttpRequestObject: function getXmlHttpRequestObject() {
	      try {
	        return new XMLHttpRequest();
	      } catch (e1) {}
	      try {
	        return new ActiveXObject('Msxml2.XMLHTTP');
	      } catch (e2) {}
	      try {
	        return new ActiveXObject('Microsoft.XMLHTTP');
	      } catch (e3) {}
	
	      throw "Your browser doesn't support XHR.";
	    },
	
	    /**
	     * Sends the current XRH request if the transport was created with a URL 
	     * and the async parameter is false. If the transport was not created with
	     * a URL, or the async parameter is True and no callback is provided, or 
	     * the URL is an empty string, the current send buffer is returned.
	     * @param {object} async - If true the current send buffer is returned.
	     * @param {object} callback - Optional async completion callback 
	     * @returns {undefined|string} Nothing or the current send buffer.
	     * @throws {string} If XHR fails.
	     */
	    flush: function flush(async, callback) {
	      var self = this;
	      if (async && !callback || this.url === undefined || this.url === '') {
	        return this.send_buf;
	      }
	
	      var xreq = this.getXmlHttpRequestObject();
	
	      if (xreq.overrideMimeType) {
	        xreq.overrideMimeType('application/json');
	      }
	
	      if (callback) {
	        //Ignore XHR callbacks until the data arrives, then call the
	        //  client's callback
	        xreq.onreadystatechange = function () {
	          var clientCallback = callback;
	          return function () {
	            if (this.readyState == 4 && this.status == 200) {
	              self.setRecvBuffer(this.responseText);
	              clientCallback();
	            }
	          };
	        }();
	      }
	
	      xreq.open('POST', this.url, !!async);
	      xreq.send(this.send_buf);
	      if (async && callback) {
	        return;
	      }
	
	      if (xreq.readyState != 4) {
	        throw 'encountered an unknown ajax ready state: ' + xreq.readyState;
	      }
	
	      if (xreq.status != 200) {
	        throw 'encountered a unknown request status: ' + xreq.status;
	      }
	
	      this.recv_buf = xreq.responseText;
	      this.recv_buf_sz = this.recv_buf.length;
	      this.wpos = this.recv_buf.length;
	      this.rpos = 0;
	    },
	
	    /**
	     * Creates a jQuery XHR object to be used for a Thrift server call.
	     * @param {object} client - The Thrift Service client object generated by the IDL compiler.
	     * @param {object} postData - The message to send to the server.
	     * @param {function} args - The original call arguments with the success call back at the end.
	     * @param {function} recv_method - The Thrift Service Client receive method for the call.
	     * @returns {object} A new jQuery XHR object.
	     * @throws {string} If the jQuery version is prior to 1.5 or if jQuery is not found.
	     */
	    jqRequest: function jqRequest(client, postData, args, recv_method) {
	      if (typeof jQuery === 'undefined' || typeof jQuery.Deferred === 'undefined') {
	        throw 'Thrift.js requires jQuery 1.5+ to use asynchronous requests';
	      }
	
	      var thriftTransport = this;
	
	      var jqXHR = jQuery.ajax({
	        url: this.url,
	        data: postData,
	        type: 'POST',
	        cache: false,
	        contentType: 'application/json',
	        dataType: 'text thrift',
	        converters: {
	          'text thrift': function textThrift(responseData) {
	            thriftTransport.setRecvBuffer(responseData);
	            var value = recv_method.call(client);
	            return value;
	          }
	        },
	        context: client,
	        success: jQuery.makeArray(args).pop()
	      });
	
	      return jqXHR;
	    },
	
	    /**
	     * Sets the buffer to provide the protocol when deserializing.
	     * @param {string} buf - The buffer to supply the protocol.
	     */
	    setRecvBuffer: function setRecvBuffer(buf) {
	      this.recv_buf = buf;
	      this.recv_buf_sz = this.recv_buf.length;
	      this.wpos = this.recv_buf.length;
	      this.rpos = 0;
	    },
	
	    /**
	     * Returns true if the transport is open, XHR always returns true.
	     * @readonly
	     * @returns {boolean} Always True.
	     */
	    isOpen: function isOpen() {
	      return true;
	    },
	
	    /**
	     * Opens the transport connection, with XHR this is a nop.
	     */
	    open: function open() {},
	
	    /**
	     * Closes the transport connection, with XHR this is a nop.
	     */
	    close: function close() {},
	
	    /**
	     * Returns the specified number of characters from the response
	     * buffer.
	     * @param {number} len - The number of characters to return.
	     * @returns {string} Characters sent by the server.
	     */
	    read: function read(len) {
	      var avail = this.wpos - this.rpos;
	
	      if (avail === 0) {
	        return '';
	      }
	
	      var give = len;
	
	      if (avail < len) {
	        give = avail;
	      }
	
	      var ret = this.read_buf.substr(this.rpos, give);
	      this.rpos += give;
	
	      //clear buf when complete?
	      return ret;
	    },
	
	    /**
	     * Returns the entire response buffer.
	     * @returns {string} Characters sent by the server.
	     */
	    readAll: function readAll() {
	      return this.recv_buf;
	    },
	
	    /**
	     * Sets the send buffer to buf.
	     * @param {string} buf - The buffer to send.
	     */
	    write: function write(buf) {
	      this.send_buf = buf;
	    },
	
	    /**
	     * Returns the send buffer.
	     * @readonly
	     * @returns {string} The send buffer.
	     */
	    getSendBuffer: function getSendBuffer() {
	      return this.send_buf;
	    }
	
	  };
	
	  /**
	   * Constructor Function for the WebSocket transport.
	   * @constructor
	   * @param {string} [url] - The URL to connect to.
	   * @classdesc The Apache Thrift Transport layer performs byte level I/O 
	   * between RPC clients and servers. The JavaScript TWebSocketTransport object 
	   * uses the WebSocket protocol. Target servers must implement WebSocket.
	   * (see: node.js example server_http.js).
	   * @example
	   *   var transport = new Thrift.TWebSocketTransport("http://localhost:8585");
	   */
	  Thrift.TWebSocketTransport = function (url) {
	    this.__reset(url);
	  };
	
	  Thrift.TWebSocketTransport.prototype = {
	    __reset: function __reset(url) {
	      this.url = url; //Where to connect
	      this.socket = null; //The web socket
	      this.callbacks = []; //Pending callbacks
	      this.send_pending = []; //Buffers/Callback pairs waiting to be sent
	      this.send_buf = ''; //Outbound data, immutable until sent
	      this.recv_buf = ''; //Inbound data
	      this.rb_wpos = 0; //Network write position in receive buffer
	      this.rb_rpos = 0; //Client read position in receive buffer
	    },
	
	    /**
	     * Sends the current WS request and registers callback. The async 
	     * parameter is ignored (WS flush is always async) and the callback 
	     * function parameter is required.
	     * @param {object} async - Ignored.
	     * @param {object} callback - The client completion callback.
	     * @returns {undefined|string} Nothing (undefined) 
	     */
	    flush: function flush(async, callback) {
	      var self = this;
	      if (this.isOpen()) {
	        //Send data and register a callback to invoke the client callback
	        this.socket.send(this.send_buf);
	        this.callbacks.push(function () {
	          var clientCallback = callback;
	          return function (msg) {
	            self.setRecvBuffer(msg);
	            clientCallback();
	          };
	        }());
	      } else {
	        //Queue the send to go out __onOpen
	        this.send_pending.push({
	          buf: this.send_buf,
	          cb: callback
	        });
	      }
	    },
	
	    __onOpen: function __onOpen() {
	      var self = this;
	      if (this.send_pending.length > 0) {
	        //If the user made calls before the connection was fully
	        //open, send them now
	        this.send_pending.forEach(function (elem) {
	          this.socket.send(elem.buf);
	          this.callbacks.push(function () {
	            var clientCallback = elem.cb;
	            return function (msg) {
	              self.setRecvBuffer(msg);
	              clientCallback();
	            };
	          }());
	        });
	        this.send_pending = [];
	      }
	    },
	
	    __onClose: function __onClose(evt) {
	      this.__reset(this.url);
	    },
	
	    __onMessage: function __onMessage(evt) {
	      if (this.callbacks.length) {
	        this.callbacks.shift()(evt.data);
	      }
	    },
	
	    __onError: function __onError(evt) {
	      console.log("Thrift WebSocket Error: " + evt.toString());
	      this.socket.close();
	    },
	
	    /**
	     * Sets the buffer to use when receiving server responses.
	     * @param {string} buf - The buffer to receive server responses.
	     */
	    setRecvBuffer: function setRecvBuffer(buf) {
	      this.recv_buf = buf;
	      this.recv_buf_sz = this.recv_buf.length;
	      this.wpos = this.recv_buf.length;
	      this.rpos = 0;
	    },
	
	    /**
	     * Returns true if the transport is open
	     * @readonly
	     * @returns {boolean} 
	     */
	    isOpen: function isOpen() {
	      return this.socket && this.socket.readyState == this.socket.OPEN;
	    },
	
	    /**
	     * Opens the transport connection
	     */
	    open: function open() {
	      //If OPEN/CONNECTING/CLOSING ignore additional opens
	      if (this.socket && this.socket.readyState != this.socket.CLOSED) {
	        return;
	      }
	      //If there is no socket or the socket is closed:
	      this.socket = new WebSocket(this.url);
	      this.socket.onopen = this.__onOpen.bind(this);
	      this.socket.onmessage = this.__onMessage.bind(this);
	      this.socket.onerror = this.__onError.bind(this);
	      this.socket.onclose = this.__onClose.bind(this);
	    },
	
	    /**
	     * Closes the transport connection
	     */
	    close: function close() {
	      this.socket.close();
	    },
	
	    /**
	     * Returns the specified number of characters from the response
	     * buffer.
	     * @param {number} len - The number of characters to return.
	     * @returns {string} Characters sent by the server.
	     */
	    read: function read(len) {
	      var avail = this.wpos - this.rpos;
	
	      if (avail === 0) {
	        return '';
	      }
	
	      var give = len;
	
	      if (avail < len) {
	        give = avail;
	      }
	
	      var ret = this.read_buf.substr(this.rpos, give);
	      this.rpos += give;
	
	      //clear buf when complete?
	      return ret;
	    },
	
	    /**
	     * Returns the entire response buffer.
	     * @returns {string} Characters sent by the server.
	     */
	    readAll: function readAll() {
	      return this.recv_buf;
	    },
	
	    /**
	     * Sets the send buffer to buf.
	     * @param {string} buf - The buffer to send.
	     */
	    write: function write(buf) {
	      this.send_buf = buf;
	    },
	
	    /**
	     * Returns the send buffer.
	     * @readonly
	     * @returns {string} The send buffer.
	     */
	    getSendBuffer: function getSendBuffer() {
	      return this.send_buf;
	    }
	
	  };
	
	  /**
	   * Initializes a Thrift JSON protocol instance.
	   * @constructor
	   * @param {Thrift.Transport} transport - The transport to serialize to/from.
	   * @classdesc Apache Thrift Protocols perform serialization which enables cross 
	   * language RPC. The Protocol type is the JavaScript browser implementation 
	   * of the Apache Thrift TJSONProtocol.
	   * @example
	   *     var protocol  = new Thrift.Protocol(transport);
	   */
	  Thrift.TJSONProtocol = Thrift.Protocol = function (transport) {
	    this.tstack = [];
	    this.tpos = [];
	    this.transport = transport;
	  };
	
	  /**
	   * Thrift IDL type Id to string mapping.
	   * @readonly
	   * @see {@link Thrift.Type}
	   */
	  Thrift.Protocol.Type = {};
	  Thrift.Protocol.Type[Thrift.Type.BOOL] = '"tf"';
	  Thrift.Protocol.Type[Thrift.Type.BYTE] = '"i8"';
	  Thrift.Protocol.Type[Thrift.Type.I16] = '"i16"';
	  Thrift.Protocol.Type[Thrift.Type.I32] = '"i32"';
	  Thrift.Protocol.Type[Thrift.Type.I64] = '"i64"';
	  Thrift.Protocol.Type[Thrift.Type.DOUBLE] = '"dbl"';
	  Thrift.Protocol.Type[Thrift.Type.STRUCT] = '"rec"';
	  Thrift.Protocol.Type[Thrift.Type.STRING] = '"str"';
	  Thrift.Protocol.Type[Thrift.Type.MAP] = '"map"';
	  Thrift.Protocol.Type[Thrift.Type.LIST] = '"lst"';
	  Thrift.Protocol.Type[Thrift.Type.SET] = '"set"';
	
	  /**
	   * Thrift IDL type string to Id mapping.
	   * @readonly
	   * @see {@link Thrift.Type}
	   */
	  Thrift.Protocol.RType = {};
	  Thrift.Protocol.RType.tf = Thrift.Type.BOOL;
	  Thrift.Protocol.RType.i8 = Thrift.Type.BYTE;
	  Thrift.Protocol.RType.i16 = Thrift.Type.I16;
	  Thrift.Protocol.RType.i32 = Thrift.Type.I32;
	  Thrift.Protocol.RType.i64 = Thrift.Type.I64;
	  Thrift.Protocol.RType.dbl = Thrift.Type.DOUBLE;
	  Thrift.Protocol.RType.rec = Thrift.Type.STRUCT;
	  Thrift.Protocol.RType.str = Thrift.Type.STRING;
	  Thrift.Protocol.RType.map = Thrift.Type.MAP;
	  Thrift.Protocol.RType.lst = Thrift.Type.LIST;
	  Thrift.Protocol.RType.set = Thrift.Type.SET;
	
	  /**
	   * The TJSONProtocol version number.
	   * @readonly
	   * @const {number} Version
	   * @memberof Thrift.Protocol
	   */
	  Thrift.Protocol.Version = 1;
	
	  Thrift.Protocol.prototype = {
	    /**
	     * Returns the underlying transport.
	     * @readonly
	     * @returns {Thrift.Transport} The underlying transport.
	     */
	    getTransport: function getTransport() {
	      return this.transport;
	    },
	
	    /**
	     * Serializes the beginning of a Thrift RPC message.
	     * @param {string} name - The service method to call.
	     * @param {Thrift.MessageType} messageType - The type of method call.
	     * @param {number} seqid - The sequence number of this call (always 0 in Apache Thrift).
	     */
	    writeMessageBegin: function writeMessageBegin(name, messageType, seqid) {
	      this.tstack = [];
	      this.tpos = [];
	
	      this.tstack.push([Thrift.Protocol.Version, '"' + name + '"', messageType, seqid]);
	    },
	
	    /**
	     * Serializes the end of a Thrift RPC message.
	     */
	    writeMessageEnd: function writeMessageEnd() {
	      var obj = this.tstack.pop();
	
	      this.wobj = this.tstack.pop();
	      this.wobj.push(obj);
	
	      this.wbuf = '[' + this.wobj.join(',') + ']';
	
	      this.transport.write(this.wbuf);
	    },
	
	    /**
	     * Serializes the beginning of a struct.
	     * @param {string} name - The name of the struct.
	     */
	    writeStructBegin: function writeStructBegin(name) {
	      this.tpos.push(this.tstack.length);
	      this.tstack.push({});
	    },
	
	    /**
	     * Serializes the end of a struct.
	     */
	    writeStructEnd: function writeStructEnd() {
	
	      var p = this.tpos.pop();
	      var struct = this.tstack[p];
	      var str = '{';
	      var first = true;
	      for (var key in struct) {
	        if (first) {
	          first = false;
	        } else {
	          str += ',';
	        }
	
	        str += key + ':' + struct[key];
	      }
	
	      str += '}';
	      this.tstack[p] = str;
	    },
	
	    /**
	     * Serializes the beginning of a struct field.
	     * @param {string} name - The name of the field.
	     * @param {Thrift.Protocol.Type} fieldType - The data type of the field.
	     * @param {number} fieldId - The field's unique identifier.
	     */
	    writeFieldBegin: function writeFieldBegin(name, fieldType, fieldId) {
	      this.tpos.push(this.tstack.length);
	      this.tstack.push({ 'fieldId': '"' + fieldId + '"', 'fieldType': Thrift.Protocol.Type[fieldType]
	      });
	    },
	
	    /**
	     * Serializes the end of a field.
	     */
	    writeFieldEnd: function writeFieldEnd() {
	      var value = this.tstack.pop();
	      var fieldInfo = this.tstack.pop();
	
	      this.tstack[this.tstack.length - 1][fieldInfo.fieldId] = '{' + fieldInfo.fieldType + ':' + value + '}';
	      this.tpos.pop();
	    },
	
	    /**
	     * Serializes the end of the set of fields for a struct.
	     */
	    writeFieldStop: function writeFieldStop() {
	      //na
	    },
	
	    /**
	     * Serializes the beginning of a map collection.
	     * @param {Thrift.Type} keyType - The data type of the key.
	     * @param {Thrift.Type} valType - The data type of the value.
	     * @param {number} [size] - The number of elements in the map (ignored).
	     */
	    writeMapBegin: function writeMapBegin(keyType, valType, size) {
	      this.tpos.push(this.tstack.length);
	      this.tstack.push([Thrift.Protocol.Type[keyType], Thrift.Protocol.Type[valType], 0]);
	    },
	
	    /**
	     * Serializes the end of a map.
	     */
	    writeMapEnd: function writeMapEnd() {
	      var p = this.tpos.pop();
	
	      if (p == this.tstack.length) {
	        return;
	      }
	
	      if ((this.tstack.length - p - 1) % 2 !== 0) {
	        this.tstack.push('');
	      }
	
	      var size = (this.tstack.length - p - 1) / 2;
	
	      this.tstack[p][this.tstack[p].length - 1] = size;
	
	      var map = '}';
	      var first = true;
	      while (this.tstack.length > p + 1) {
	        var v = this.tstack.pop();
	        var k = this.tstack.pop();
	        if (first) {
	          first = false;
	        } else {
	          map = ',' + map;
	        }
	
	        if (!isNaN(k)) {
	          k = '"' + k + '"';
	        } //json "keys" need to be strings
	        map = k + ':' + v + map;
	      }
	      map = '{' + map;
	
	      this.tstack[p].push(map);
	      this.tstack[p] = '[' + this.tstack[p].join(',') + ']';
	    },
	
	    /**
	     * Serializes the beginning of a list collection.
	     * @param {Thrift.Type} elemType - The data type of the elements.
	     * @param {number} size - The number of elements in the list.
	     */
	    writeListBegin: function writeListBegin(elemType, size) {
	      this.tpos.push(this.tstack.length);
	      this.tstack.push([Thrift.Protocol.Type[elemType], size]);
	    },
	
	    /**
	     * Serializes the end of a list.
	     */
	    writeListEnd: function writeListEnd() {
	      var p = this.tpos.pop();
	
	      while (this.tstack.length > p + 1) {
	        var tmpVal = this.tstack[p + 1];
	        this.tstack.splice(p + 1, 1);
	        this.tstack[p].push(tmpVal);
	      }
	
	      this.tstack[p] = '[' + this.tstack[p].join(',') + ']';
	    },
	
	    /**
	     * Serializes the beginning of a set collection.
	     * @param {Thrift.Type} elemType - The data type of the elements.
	     * @param {number} size - The number of elements in the list.
	     */
	    writeSetBegin: function writeSetBegin(elemType, size) {
	      this.tpos.push(this.tstack.length);
	      this.tstack.push([Thrift.Protocol.Type[elemType], size]);
	    },
	
	    /**
	     * Serializes the end of a set.
	     */
	    writeSetEnd: function writeSetEnd() {
	      var p = this.tpos.pop();
	
	      while (this.tstack.length > p + 1) {
	        var tmpVal = this.tstack[p + 1];
	        this.tstack.splice(p + 1, 1);
	        this.tstack[p].push(tmpVal);
	      }
	
	      this.tstack[p] = '[' + this.tstack[p].join(',') + ']';
	    },
	
	    /** Serializes a boolean */
	    writeBool: function writeBool(value) {
	      this.tstack.push(value ? 1 : 0);
	    },
	
	    /** Serializes a number */
	    writeByte: function writeByte(i8) {
	      this.tstack.push(i8);
	    },
	
	    /** Serializes a number */
	    writeI16: function writeI16(i16) {
	      this.tstack.push(i16);
	    },
	
	    /** Serializes a number */
	    writeI32: function writeI32(i32) {
	      this.tstack.push(i32);
	    },
	
	    /** Serializes a number */
	    writeI64: function writeI64(i64) {
	      this.tstack.push(i64);
	    },
	
	    /** Serializes a number */
	    writeDouble: function writeDouble(dbl) {
	      this.tstack.push(dbl);
	    },
	
	    /** Serializes a string */
	    writeString: function writeString(str) {
	      // We do not encode uri components for wire transfer:
	      if (str === null) {
	        this.tstack.push(null);
	      } else {
	        // concat may be slower than building a byte buffer
	        var escapedString = '';
	        for (var i = 0; i < str.length; i++) {
	          var ch = str.charAt(i); // a single double quote: "
	          if (ch === '\"') {
	            escapedString += '\\\"'; // write out as: \"
	          } else if (ch === '\\') {
	              // a single backslash
	              escapedString += '\\\\'; // write out as double backslash
	            } else if (ch === '\b') {
	                // a single backspace: invisible
	                escapedString += '\\b'; // write out as: \b"
	              } else if (ch === '\f') {
	                  // a single formfeed: invisible
	                  escapedString += '\\f'; // write out as: \f"
	                } else if (ch === '\n') {
	                    // a single newline: invisible
	                    escapedString += '\\n'; // write out as: \n"
	                  } else if (ch === '\r') {
	                      // a single return: invisible
	                      escapedString += '\\r'; // write out as: \r"
	                    } else if (ch === '\t') {
	                        // a single tab: invisible
	                        escapedString += '\\t'; // write out as: \t"
	                      } else {
	                          escapedString += ch; // Else it need not be escaped
	                        }
	        }
	        this.tstack.push('"' + escapedString + '"');
	      }
	    },
	
	    /** Serializes a string */
	    writeBinary: function writeBinary(str) {
	      this.writeString(str);
	    },
	
	    /**
	       @class
	       @name AnonReadMessageBeginReturn
	       @property {string} fname - The name of the service method.
	       @property {Thrift.MessageType} mtype - The type of message call.
	       @property {number} rseqid - The sequence number of the message (0 in Thrift RPC).
	     */
	    /** 
	     * Deserializes the beginning of a message. 
	     * @returns {AnonReadMessageBeginReturn}
	     */
	    readMessageBegin: function readMessageBegin() {
	      this.rstack = [];
	      this.rpos = [];
	
	      if (typeof JSON !== 'undefined' && typeof JSON.parse === 'function') {
	        this.robj = JSON.parse(this.transport.readAll());
	      } else if (typeof jQuery !== 'undefined') {
	        this.robj = jQuery.parseJSON(this.transport.readAll());
	      } else {
	        this.robj = eval(this.transport.readAll());
	      }
	
	      var r = {};
	      var version = this.robj.shift();
	
	      if (version != Thrift.Protocol.Version) {
	        throw 'Wrong thrift protocol version: ' + version;
	      }
	
	      r.fname = this.robj.shift();
	      r.mtype = this.robj.shift();
	      r.rseqid = this.robj.shift();
	
	      //get to the main obj
	      this.rstack.push(this.robj.shift());
	
	      return r;
	    },
	
	    /** Deserializes the end of a message. */
	    readMessageEnd: function readMessageEnd() {},
	
	    /** 
	     * Deserializes the beginning of a struct. 
	     * @param {string} [name] - The name of the struct (ignored)
	     * @returns {object} - An object with an empty string fname property
	     */
	    readStructBegin: function readStructBegin(name) {
	      var r = {};
	      r.fname = '';
	
	      //incase this is an array of structs
	      if (this.rstack[this.rstack.length - 1] instanceof Array) {
	        this.rstack.push(this.rstack[this.rstack.length - 1].shift());
	      }
	
	      return r;
	    },
	
	    /** Deserializes the end of a struct. */
	    readStructEnd: function readStructEnd() {
	      if (this.rstack[this.rstack.length - 2] instanceof Array) {
	        this.rstack.pop();
	      }
	    },
	
	    /**
	       @class
	       @name AnonReadFieldBeginReturn
	       @property {string} fname - The name of the field (always '').
	       @property {Thrift.Type} ftype - The data type of the field.
	       @property {number} fid - The unique identifier of the field.
	     */
	    /** 
	     * Deserializes the beginning of a field. 
	     * @returns {AnonReadFieldBeginReturn}
	     */
	    readFieldBegin: function readFieldBegin() {
	      var r = {};
	
	      var fid = -1;
	      var ftype = Thrift.Type.STOP;
	
	      //get a fieldId
	      for (var f in this.rstack[this.rstack.length - 1]) {
	        if (f === null) {
	          continue;
	        }
	
	        fid = parseInt(f, 10);
	        this.rpos.push(this.rstack.length);
	
	        var field = this.rstack[this.rstack.length - 1][fid];
	
	        //remove so we don't see it again
	        delete this.rstack[this.rstack.length - 1][fid];
	
	        this.rstack.push(field);
	
	        break;
	      }
	
	      if (fid != -1) {
	
	        //should only be 1 of these but this is the only
	        //way to match a key
	        for (var i in this.rstack[this.rstack.length - 1]) {
	          if (Thrift.Protocol.RType[i] === null) {
	            continue;
	          }
	
	          ftype = Thrift.Protocol.RType[i];
	          this.rstack[this.rstack.length - 1] = this.rstack[this.rstack.length - 1][i];
	        }
	      }
	
	      r.fname = '';
	      r.ftype = ftype;
	      r.fid = fid;
	
	      return r;
	    },
	
	    /** Deserializes the end of a field. */
	    readFieldEnd: function readFieldEnd() {
	      var pos = this.rpos.pop();
	
	      //get back to the right place in the stack
	      while (this.rstack.length > pos) {
	        this.rstack.pop();
	      }
	    },
	
	    /**
	       @class
	       @name AnonReadMapBeginReturn
	       @property {Thrift.Type} ktype - The data type of the key.
	       @property {Thrift.Type} vtype - The data type of the value.
	       @property {number} size - The number of elements in the map.
	     */
	    /** 
	     * Deserializes the beginning of a map. 
	     * @returns {AnonReadMapBeginReturn}
	     */
	    readMapBegin: function readMapBegin() {
	      var map = this.rstack.pop();
	      var first = map.shift();
	      if (first instanceof Array) {
	        this.rstack.push(map);
	        map = first;
	        first = map.shift();
	      }
	
	      var r = {};
	      r.ktype = Thrift.Protocol.RType[first];
	      r.vtype = Thrift.Protocol.RType[map.shift()];
	      r.size = map.shift();
	
	      this.rpos.push(this.rstack.length);
	      this.rstack.push(map.shift());
	
	      return r;
	    },
	
	    /** Deserializes the end of a map. */
	    readMapEnd: function readMapEnd() {
	      this.readFieldEnd();
	    },
	
	    /**
	       @class
	       @name AnonReadColBeginReturn
	       @property {Thrift.Type} etype - The data type of the element.
	       @property {number} size - The number of elements in the collection.
	     */
	    /** 
	     * Deserializes the beginning of a list. 
	     * @returns {AnonReadColBeginReturn}
	     */
	    readListBegin: function readListBegin() {
	      var list = this.rstack[this.rstack.length - 1];
	
	      var r = {};
	      r.etype = Thrift.Protocol.RType[list.shift()];
	      r.size = list.shift();
	
	      this.rpos.push(this.rstack.length);
	      this.rstack.push(list);
	
	      return r;
	    },
	
	    /** Deserializes the end of a list. */
	    readListEnd: function readListEnd() {
	      this.readFieldEnd();
	    },
	
	    /** 
	     * Deserializes the beginning of a set. 
	     * @returns {AnonReadColBeginReturn}
	     */
	    readSetBegin: function readSetBegin(elemType, size) {
	      return this.readListBegin(elemType, size);
	    },
	
	    /** Deserializes the end of a set. */
	    readSetEnd: function readSetEnd() {
	      return this.readListEnd();
	    },
	
	    /** Returns an object with a value property set to 
	     *  False unless the next number in the protocol buffer 
	     *  is 1, in which case the value property is True */
	    readBool: function readBool() {
	      var r = this.readI32();
	
	      if (r !== null && r.value == '1') {
	        r.value = true;
	      } else {
	        r.value = false;
	      }
	
	      return r;
	    },
	
	    /** Returns the an object with a value property set to the 
	        next value found in the protocol buffer */
	    readByte: function readByte() {
	      return this.readI32();
	    },
	
	    /** Returns the an object with a value property set to the 
	        next value found in the protocol buffer */
	    readI16: function readI16() {
	      return this.readI32();
	    },
	
	    /** Returns the an object with a value property set to the 
	        next value found in the protocol buffer */
	    readI32: function readI32(f) {
	      if (f === undefined) {
	        f = this.rstack[this.rstack.length - 1];
	      }
	
	      var r = {};
	
	      if (f instanceof Array) {
	        if (f.length === 0) {
	          r.value = undefined;
	        } else {
	          r.value = f.shift();
	        }
	      } else if (f instanceof Object) {
	        for (var i in f) {
	          if (i === null) {
	            continue;
	          }
	          this.rstack.push(f[i]);
	          delete f[i];
	
	          r.value = i;
	          break;
	        }
	      } else {
	        r.value = f;
	        this.rstack.pop();
	      }
	
	      return r;
	    },
	
	    /** Returns the an object with a value property set to the 
	        next value found in the protocol buffer */
	    readI64: function readI64() {
	      return this.readI32();
	    },
	
	    /** Returns the an object with a value property set to the 
	        next value found in the protocol buffer */
	    readDouble: function readDouble() {
	      return this.readI32();
	    },
	
	    /** Returns the an object with a value property set to the 
	        next value found in the protocol buffer */
	    readString: function readString() {
	      var r = this.readI32();
	      return r;
	    },
	
	    /** Returns the an object with a value property set to the 
	        next value found in the protocol buffer */
	    readBinary: function readBinary() {
	      return this.readString();
	    },
	
	    /** 
	     * Method to arbitrarily skip over data */
	    skip: function skip(type) {
	      var ret, i;
	      switch (type) {
	        case Thrift.Type.STOP:
	          return null;
	
	        case Thrift.Type.BOOL:
	          return this.readBool();
	
	        case Thrift.Type.BYTE:
	          return this.readByte();
	
	        case Thrift.Type.I16:
	          return this.readI16();
	
	        case Thrift.Type.I32:
	          return this.readI32();
	
	        case Thrift.Type.I64:
	          return this.readI64();
	
	        case Thrift.Type.DOUBLE:
	          return this.readDouble();
	
	        case Thrift.Type.STRING:
	          return this.readString();
	
	        case Thrift.Type.STRUCT:
	          this.readStructBegin();
	          while (true) {
	            ret = this.readFieldBegin();
	            if (ret.ftype == Thrift.Type.STOP) {
	              break;
	            }
	            this.skip(ret.ftype);
	            this.readFieldEnd();
	          }
	          this.readStructEnd();
	          return null;
	
	        case Thrift.Type.MAP:
	          ret = this.readMapBegin();
	          for (i = 0; i < ret.size; i++) {
	            if (i > 0) {
	              if (this.rstack.length > this.rpos[this.rpos.length - 1] + 1) {
	                this.rstack.pop();
	              }
	            }
	            this.skip(ret.ktype);
	            this.skip(ret.vtype);
	          }
	          this.readMapEnd();
	          return null;
	
	        case Thrift.Type.SET:
	          ret = this.readSetBegin();
	          for (i = 0; i < ret.size; i++) {
	            this.skip(ret.etype);
	          }
	          this.readSetEnd();
	          return null;
	
	        case Thrift.Type.LIST:
	          ret = this.readListBegin();
	          for (i = 0; i < ret.size; i++) {
	            this.skip(ret.etype);
	          }
	          this.readListEnd();
	          return null;
	      }
	    }
	  };
	
	  /**
	   * Initializes a MutilplexProtocol Implementation as a Wrapper for Thrift.Protocol
	   * @constructor
	   */
	  Thrift.MultiplexProtocol = function (srvName, trans, strictRead, strictWrite) {
	    Thrift.Protocol.call(this, trans, strictRead, strictWrite);
	    this.serviceName = srvName;
	  };
	  Thrift.inherits(Thrift.MultiplexProtocol, Thrift.Protocol, 'multiplexProtocol');
	
	  /** Override writeMessageBegin method of prototype*/
	  Thrift.MultiplexProtocol.prototype.writeMessageBegin = function (name, type, seqid) {
	
	    if (type === Thrift.MessageType.CALL || type === Thrift.MessageType.ONEWAY) {
	      Thrift.Protocol.prototype.writeMessageBegin.call(this, this.serviceName + ":" + name, type, seqid);
	    } else {
	      Thrift.Protocol.prototype.writeMessageBegin.call(this, name, type, seqid);
	    }
	  };
	
	  Thrift.Multiplexer = function () {
	    this.seqid = 0;
	  };
	
	  /** Instantiates a multiplexed client for a specific service
	   * @constructor
	   * @param {String} serviceName - The transport to serialize to/from.
	   * @param {Thrift.ServiceClient} SCl - The Service Client Class
	   * @param {Thrift.Transport} transport - Thrift.Transport instance which provides remote host:port
	   * @example
	   *    var mp = new Thrift.Multiplexer();
	   *    var transport = new Thrift.Transport("http://localhost:9090/foo.thrift");
	   *    var protocol = new Thrift.Protocol(transport);
	   *    var client = mp.createClient('AuthService', AuthServiceClient, transport);
	  */
	  Thrift.Multiplexer.prototype.createClient = function (serviceName, SCl, transport) {
	    if (SCl.Client) {
	      SCl = SCl.Client;
	    }
	    var self = this;
	    SCl.prototype.new_seqid = function () {
	      self.seqid += 1;
	      return self.seqid;
	    };
	    var client = new SCl(new Thrift.MultiplexProtocol(serviceName, transport));
	
	    return client;
	  };
	
	  // Override TXHRTransport.flush
	  //
	  // The 0.9.2 transport flush() method implementation only calls the callback on
	  // status 200 and never invokes the client callback on HTTP status errors. This
	  // replaces the implementation with one that always calls the callback,
	  // including on errors and exceptions.
	
	  Thrift.TXHRTransport.prototype.flush = function (async, callback) {
	    var self = this;
	    if (async && !callback || this.url === undefined || this.url === '') {
	      return this.send_buf;
	    }
	
	    var xreq = this.getXmlHttpRequestObject();
	
	    if (xreq.overrideMimeType) {
	      xreq.overrideMimeType('application/json');
	    }
	
	    if (callback) {
	      //Ignore XHR callbacks until the data arrives, then call the
	      //  client's callback
	      //========
	      // BEGIN CODE PATCH
	      //========
	      /*
	        xreq.onreadystatechange =
	        (function() {
	          var clientCallback = callback;
	          return function() {
	            if (this.readyState == 4 && this.status == 200) {
	              self.setRecvBuffer(this.responseText);
	              clientCallback();
	            }
	          };
	        }());
	      */
	      //========
	      // MODIFIED CODE
	      //========
	      xreq.onreadystatechange = function () {
	        if (this.readyState == 4) {
	          //
	          // The incoming callback doesn't actually take an error object
	          // (another limitation of the thrift code) so there's no way
	          // to properly move the status code error back to client callback.
	          //
	          // To workaround this, short of making signficant patches to the
	          // Thrift library, we *rely on the fact that we're using a JSON
	          // protocol* and set the buffer to invalid JSON.  The true error
	          // gets lost, but at least the client is informed of *a* failure
	          // rather than radio silence.
	          //
	          var err = this.status == 200 ? false : true;
	          self.setRecvBuffer(err ? "http_status_not_200" : this.responseText);
	          callback();
	        }
	      };
	      //========
	      // END CODE PATCH
	      //========
	    }
	
	    xreq.open('POST', this.url, !!async);
	    xreq.send(this.send_buf);
	    if (async && callback) {
	      return;
	    }
	
	    if (xreq.readyState != 4) {
	      throw 'encountered an unknown ajax ready state: ' + xreq.readyState;
	    }
	
	    if (xreq.status != 200) {
	      throw 'encountered a unknown request status: ' + xreq.status;
	    }
	
	    this.recv_buf = xreq.responseText;
	    this.recv_buf_sz = this.recv_buf.length;
	    this.wpos = this.recv_buf.length;
	    this.rpos = 0;
	  };
	
	  module.exports.crouton_thrift = crouton_thrift;
	  module.exports.Thrift = Thrift;
	})();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(15).crouton_thrift;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NotImplementedException = exports.InternalException = exports.UserException = undefined;
	
	var _sprintfJs = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserException = exports.UserException = function (_Error) {
	    _inherits(UserException, _Error);
	
	    function UserException(fmt) {
	        _classCallCheck(this, UserException);
	
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(UserException).call(this, _sprintfJs.sprintf.apply(undefined, [fmt].concat(args))));
	    }
	
	    return UserException;
	}(Error);
	
	var InternalException = exports.InternalException = function (_Error2) {
	    _inherits(InternalException, _Error2);
	
	    function InternalException(fmt) {
	        _classCallCheck(this, InternalException);
	
	        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            args[_key2 - 1] = arguments[_key2];
	        }
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InternalException).call(this, _sprintfJs.sprintf.apply(undefined, [fmt].concat(args))));
	    }
	
	    return InternalException;
	}(Error);
	
	var NotImplementedException = exports.NotImplementedException = function (_Error3) {
	    _inherits(NotImplementedException, _Error3);
	
	    function NotImplementedException(fmt) {
	        _classCallCheck(this, NotImplementedException);
	
	        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	            args[_key3 - 1] = arguments[_key3];
	        }
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(NotImplementedException).call(this, _sprintfJs.sprintf.apply(undefined, [fmt].concat(args))));
	    }
	
	    return NotImplementedException;
	}(Error);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _coerce = __webpack_require__(19);
	
	var coerce = _interopRequireWildcard(_coerce);
	
	var _constants = __webpack_require__(2);
	
	var constants = _interopRequireWildcard(_constants);
	
	var _platform_abstraction_layer = __webpack_require__(7);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SpanImp = function () {
	    _createClass(SpanImp, [{
	        key: 'tracer',
	
	
	        // ---------------------------------------------------------------------- //
	        // OpenTracing Implementation
	        // ---------------------------------------------------------------------- //
	
	        value: function tracer() {
	            return this._tracer;
	        }
	    }, {
	        key: 'setOperationName',
	        value: function setOperationName(name) {
	            return this._operation = name;
	        }
	    }, {
	        key: 'addTags',
	        value: function addTags(keyValuePairs) {
	            for (var key in keyValuePairs) {
	                this._tags[key] = keyValuePairs[key];
	            }
	        }
	    }, {
	        key: 'setBaggageItem',
	        value: function setBaggageItem(key, value) {
	            this._baggage[key] = value;
	        }
	    }, {
	        key: 'getBaggageItem',
	        value: function getBaggageItem(key) {
	            return this._baggage[key];
	        }
	
	        /**
	         * The set of OpenTracing fields is:
	         * - 'event'
	         * - 'timestamp'
	         * - 'payload'
	         */
	        // Log record specified by fields
	
	    }, {
	        key: 'log',
	        value: function log(fields) {
	            var rec = this._tracer.log().span(this._guid).level(constants.LOG_STRING_TO_LEVEL[fields.level] || constants.LOG_INFO);
	
	            //
	            // OpenTracing attributes
	            //
	            if (fields.event !== undefined) {
	                rec.name(fields.event);
	            }
	            if (fields.timestamp !== undefined) {
	                // The incoming 'timestamp' field is in milliseconds. The internal
	                // timestamp is in microseconds.
	                rec.timestamp(fields.timestamp * 1000);
	            }
	            if (fields.payload !== undefined) {
	                rec.payload(fields.payload);
	            }
	
	            //
	            // LightStep-specific attributes
	            //
	            if (fields.message !== undefined) {
	                rec.message(fields.message);
	            }
	            if (fields.timestamp_micros !== undefined) {
	                rec.timestamp(fields.timestamp_micros);
	            }
	            rec.end();
	        }
	    }, {
	        key: 'finish',
	        value: function finish(finishTime) {
	            return this.end(finishTime);
	        }
	
	        // ---------------------------------------------------------------------- //
	        // Private methods
	        // ---------------------------------------------------------------------- //
	
	    }]);
	
	    function SpanImp(tracer) {
	        _classCallCheck(this, SpanImp);
	
	        console.assert((typeof tracer === 'undefined' ? 'undefined' : _typeof(tracer)) === 'object', "Invalid runtime");
	
	        this._tracer = tracer;
	        this._ended = false;
	
	        this._guid = tracer._platform.generateUUID();
	        this._traceGUID = tracer.generateTraceGUIDForRootSpan();
	        this._operation = '';
	        this._tags = {};
	        this._baggage = {};
	        this._joinIDs = {};
	        this._beginMicros = tracer._platform.nowMicros();
	        this._endMicros = 0;
	        this._errorFlag = false;
	    }
	
	    // ---------------------------------------------------------------------- //
	    // LightStep Extensions
	    // ---------------------------------------------------------------------- //
	
	    _createClass(SpanImp, [{
	        key: 'getOperationName',
	        value: function getOperationName() {
	            return this._operation;
	        }
	
	        // Getter only. The GUID is immutable once set internally.
	
	    }, {
	        key: 'guid',
	        value: function guid() {
	            return this._guid;
	        }
	    }, {
	        key: 'traceGUID',
	        value: function traceGUID() {
	            return this._traceGUID;
	        }
	    }, {
	        key: 'parentGUID',
	        value: function parentGUID() {
	            return this._tags['parent_span_guid'];
	        }
	    }, {
	        key: 'setParentGUID',
	        value: function setParentGUID(guid) {
	            this._tags['parent_span_guid'] = coerce.toString(guid);
	        }
	    }, {
	        key: 'getTags',
	        value: function getTags() {
	            return this._tags;
	        }
	    }, {
	        key: 'getBaggage',
	        value: function getBaggage() {
	            return this._baggage;
	        }
	    }, {
	        key: 'setFields',
	        value: function setFields(fields) {
	            for (var key in fields) {
	                var value = fields[key];
	                switch (key) {
	                    case 'operationName':
	                        this._operation = value;
	                        break;
	                    case 'startTime':
	                        // startTime is in milliseconds
	                        this._beginMicros = value * 1000;
	                        break;
	                    case 'tags':
	                        this.addTags(value);
	                        break;
	                    case 'span_guid':
	                        this._guid = coerce.toString(value);
	                        break;
	                    case 'trace_guid':
	                        this._traceGUID = coerce.toString(value);
	                        break;
	                    case 'parent':
	                        if (value) {
	                            this.parent(value.imp());
	                        }
	                        break;
	                    case 'parent_guid':
	                        this.setParentGUID(value);
	                        break;
	                    default:
	                        this._tracer._internalWarnf('Ignoring unknown field %s', key);
	                        break;
	                }
	            }
	        }
	
	        // TODO: deprecate this and combine with setFields
	
	    }, {
	        key: 'modify',
	        value: function modify(fields) {
	            if (!fields) {
	                return this;
	            }
	            if (fields.begin_micros) {
	                this._beginMicros = fields.begin_micros;
	            }
	            if (fields.end_micros) {
	                this._endMicros = fields.end_micros;
	            }
	            return this;
	        }
	    }, {
	        key: 'setJoinID',
	        value: function setJoinID(key, value) {
	            this._tags[key] = value;
	            this._joinIDs[key] = true;
	        }
	    }, {
	        key: 'parent',
	        value: function parent(parentSpan) {
	            if (!parentSpan) {
	                return;
	            }
	            this.setParentGUID(parentSpan.guid());
	            this._traceGUID = parentSpan.traceGUID();
	        }
	    }, {
	        key: 'span',
	        value: function span(operation) {
	            var child = new SpanImp(this._tracer);
	            child.operation(operation);
	
	            // TODO: what is the expected behavior on OpenTracing tags on
	            // child spans? The legacy Traceguide behavior relies (?) on the
	            // child spans inheriting the join IDs of the parent.
	            for (var key in this._tags) {
	                child._tags[key] = this._tags[key];
	                if (this._joinIDs[key]) {
	                    child._joinIDs[key] = true;
	                }
	            }
	            child.parent(this);
	            return child;
	        }
	
	        // Used by the OpenTracing adapter layer ????
	
	    }, {
	        key: 'newEmptySpan',
	        value: function newEmptySpan() {
	            return new SpanImp(this._tracer);
	        }
	
	        /**
	         * Finishes the span.
	         *
	         * @param  {Number} finishTime
	         *         	Optional Unix timestamp in milliseconds setting an explicit
	         *         	finish time for the span.
	         */
	
	    }, {
	        key: 'end',
	        value: function end(finishTime) {
	            // Ensure a single span is not recorded multiple times
	            if (this._ended) {
	                return;
	            }
	            this._ended = true;
	
	            if (finishTime !== undefined) {
	                this._endMicros = finishTime * 1000;
	            }
	
	            // Do not set endMicros if it has already been set. This accounts for
	            // the case of a span that has had it's times set manually (i.e. allows
	            // for retroactively created spans that might not be possible to create
	            // in real-time).
	            if (this._endMicros === 0) {
	                this._endMicros = this._tracer._platform.nowMicros();
	            }
	            this._tracer._addSpanRecord(this._toThrift());
	        }
	
	        // Info log record with an optional payload
	
	    }, {
	        key: 'info',
	        value: function info(msg, payload) {
	            this._tracer.log().span(this._guid).level(constants.LOG_INFO).message(msg).payload(payload).end();
	        }
	    }, {
	        key: 'warn',
	        value: function warn(msg, payload) {
	            this._tracer.log().span(this._guid).level(constants.LOG_WARN).message(msg).payload(payload).end();
	        }
	    }, {
	        key: 'error',
	        value: function error(msg, payload) {
	            this._tracer.log().span(this._guid).level(constants.LOG_ERROR).message(msg).payload(payload).end();
	        }
	    }, {
	        key: 'fatal',
	        value: function fatal(msg, payload) {
	            this._tracer.log().span(this._guid).level(constants.LOG_FATAL).message(msg).payload(payload).end();
	        }
	    }, {
	        key: 'infof',
	        value: function infof(fmt) {
	            var _tracer;
	
	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	            }
	
	            (_tracer = this._tracer).logFmt.apply(_tracer, [constants.LOG_INFO, this._guid, fmt].concat(args));
	            return this;
	        }
	    }, {
	        key: 'warnf',
	        value: function warnf(fmt) {
	            var _tracer2;
	
	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	            }
	
	            (_tracer2 = this._tracer).logFmt.apply(_tracer2, [constants.LOG_WARN, this._guid, fmt].concat(args));
	            return this;
	        }
	    }, {
	        key: 'errorf',
	        value: function errorf(fmt) {
	            var _tracer3;
	
	            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	            }
	
	            (_tracer3 = this._tracer).logFmt.apply(_tracer3, [constants.LOG_ERROR, this._guid, fmt].concat(args));
	            return this;
	        }
	    }, {
	        key: 'fatalf',
	        value: function fatalf(fmt) {
	            var _tracer4;
	
	            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                args[_key4 - 1] = arguments[_key4];
	            }
	
	            (_tracer4 = this._tracer).logFmt.apply(_tracer4, [constants.LOG_FATAL, this._guid, fmt].concat(args));
	            return this;
	        }
	    }, {
	        key: '_toThrift',
	        value: function _toThrift() {
	            // TODO: the backend understands join IDs and attributes.  The outer API
	            // understands trace context attributes and tags.  The mapping is a
	            // little confusing at the moment...
	
	            var joinIDs = [];
	            var attributes = [];
	            for (var key in this._tags) {
	                if (key in this._joinIDs) {
	                    this._addTagAsJoinID(joinIDs, key);
	                } else {
	                    attributes.push(new _platform_abstraction_layer.crouton_thrift.KeyValue({
	                        Key: coerce.toString(key),
	                        Value: coerce.toString(this._tags[key])
	                    }));
	                }
	            }
	            this._addTagAsJoinID(joinIDs, 'end_user_id');
	
	            // Explicitly set the trace GUID as a join ID
	            if (this._traceGUID) {
	                joinIDs.push(new _platform_abstraction_layer.crouton_thrift.TraceJoinId({
	                    TraceKey: 'join:trace_guid',
	                    Value: coerce.toString(this._traceGUID)
	                }));
	            }
	
	            // Add any runtime global join IDs (give preference to local tags,
	            // though).
	            var globalJoinIDs = this._tracer._options.join_ids;
	            for (var _key5 in globalJoinIDs) {
	                if (this._tags[_key5] !== undefined) {
	                    continue;
	                }
	                var value = globalJoinIDs[_key5];
	                joinIDs.push(new _platform_abstraction_layer.crouton_thrift.TraceJoinId({
	                    TraceKey: coerce.toString(_key5),
	                    Value: coerce.toString(value)
	                }));
	            }
	
	            var record = new _platform_abstraction_layer.crouton_thrift.SpanRecord({
	                span_guid: this._guid,
	                runtime_guid: this._tracer.guid(),
	                span_name: this._operation,
	                join_ids: joinIDs,
	                oldest_micros: this._beginMicros,
	                youngest_micros: this._endMicros,
	                attributes: attributes,
	                error_flag: this._errorFlag
	            });
	            return record;
	        }
	
	        // Helper to reduce duplicated code
	
	    }, {
	        key: '_addTagAsJoinID',
	        value: function _addTagAsJoinID(joinIDs, key) {
	            var value = this._tags[key];
	            if (value === undefined) {
	                return;
	            }
	            joinIDs.push(new _platform_abstraction_layer.crouton_thrift.TraceJoinId({
	                TraceKey: coerce.toString(key),
	                Value: coerce.toString(value)
	            }));
	        }
	    }]);
	
	    return SpanImp;
	}();

	exports.default = SpanImp;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toString = toString;
	exports.toNumber = toNumber;
	exports.toBoolean = toBoolean;
	function toString(value) {
	    return "" + value;
	}
	
	function toNumber(value) {
	    return Number(value);
	}
	
	function toBoolean(value) {
	    return !!value;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Util = function () {
	    function Util() {
	        _classCallCheck(this, Util);
	    }
	
	    _createClass(Util, [{
	        key: "detachedTimeout",
	
	
	        // Similar to a regular setTimeout() call, but dereferences the timer so the
	        // program execution will not be held up by this timer.
	        value: function detachedTimeout(callback, delay) {
	            var timer = setTimeout(callback, delay);
	            if (timer.unref) {
	                timer.unref();
	            }
	            return timer;
	        }
	    }]);
	
	    return Util;
	}();
	
	exports.default = new Util();
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _platform_abstraction_layer = __webpack_require__(7);
	
	var _sprintfJs = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var constants = __webpack_require__(2);
	var coerce = __webpack_require__(19);
	
	// Facade on the thrift log data structure to make constructing log records more
	// convenient.
	
	var LogBuilder = function () {
	    function LogBuilder(runtime) {
	        _classCallCheck(this, LogBuilder);
	
	        this._runtime = runtime;
	        this._record = new _platform_abstraction_layer.crouton_thrift.LogRecord({
	            timestamp_micros: runtime._platform.nowMicros(),
	            runtime_guid: null,
	            span_guid: null,
	            stable_name: null,
	            message: null,
	            level: null,
	            thread_id: null,
	            filename: null,
	            line_number: null,
	            stack_frames: null,
	            payload_json: null,
	            error_flag: null
	        });
	    }
	
	    _createClass(LogBuilder, [{
	        key: 'end',
	        value: function end() {
	            this._runtime._addLogRecord(this._record);
	        }
	    }, {
	        key: 'timestamp',
	        value: function timestamp(micros) {
	            this._record.timestamp_micros = coerce.toNumber(micros);
	            return this;
	        }
	    }, {
	        key: 'message',
	        value: function message(msg) {
	            this._record.message = coerce.toString(msg);
	            return this;
	        }
	    }, {
	        key: 'level',
	        value: function level(num) {
	            this._record.level = constants.LOG_LEVEL_TO_STRING[num] || null;
	            if (num >= constants.LOG_ERROR) {
	                this.error(true);
	            }
	            return this;
	        }
	    }, {
	        key: 'span',
	        value: function span(guid) {
	            if (guid !== undefined) {
	                this._record.span_guid = coerce.toString(guid);
	            }
	            return this;
	        }
	    }, {
	        key: 'name',
	        value: function name(stableName) {
	            this._record.stable_name = coerce.toString(stableName);
	            return this;
	        }
	    }, {
	        key: 'logf',
	        value: function logf(fmt) {
	            // It's necessary to catch exceptions on the string format for cases
	            // such as circular data structure being passed in as a %j argument.
	            try {
	                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                    args[_key - 1] = arguments[_key];
	                }
	
	                this._record.message = _sprintfJs.sprintf.apply(undefined, [fmt].concat(args));
	            } catch (e) {
	                this._record.message = "[FORMAT ERROR]: " + fmt;
	            }
	            return this;
	        }
	    }, {
	        key: 'infof',
	        value: function infof(fmt) {
	            var _level;
	
	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	            }
	
	            return (_level = this.level(constants.LOG_INFO)).logf.apply(_level, [fmt].concat(args));
	        }
	    }, {
	        key: 'warnf',
	        value: function warnf(fmt) {
	            var _level2;
	
	            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	            }
	
	            return (_level2 = this.level(constants.LOG_WARN)).logf.apply(_level2, [fmt].concat(args));
	        }
	    }, {
	        key: 'errorf',
	        value: function errorf(fmt) {
	            var _level3;
	
	            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                args[_key4 - 1] = arguments[_key4];
	            }
	
	            return (_level3 = this.level(constants.LOG_ERROR)).logf.apply(_level3, [fmt].concat(args));
	        }
	    }, {
	        key: 'error',
	        value: function error(flag) {
	            this._record.error_flag = coerce.toBoolean(flag);
	            return this;
	        }
	    }, {
	        key: 'payload',
	        value: function payload(data) {
	            if (data !== undefined) {
	                this._record.payload_json = this._encodePayload(data);
	            }
	            return this;
	        }
	    }, {
	        key: '_encodePayload',
	        value: function _encodePayload(data) {
	            var payloadJSON = null;
	            try {
	                payloadJSON = JSON.stringify(data);
	            } catch (_ignored) {
	                return null;
	            }
	            return payloadJSON;
	        }
	    }]);
	
	    return LogBuilder;
	}();
	
	module.exports = LogBuilder;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// How many updates before a sample is considered old. This happens to
	// be one less than the number of samples in our buffer but that's
	// somewhat arbitrary.
	var kMaxOffsetAge = 7;
	
	var kStoredSamplesTTLMicros = 60 * 60 * 1000 * 1000; // 1 hour
	
	var ClockState = function () {
	    function ClockState(opts) {
	        _classCallCheck(this, ClockState);
	
	        this._nowMicros = opts.nowMicros;
	        this._localStoreGet = opts.localStoreGet;
	        this._localStoreSet = opts.localStoreSet;
	
	        // The last eight samples, computed from timing information in
	        // RPCs.
	        this._samples = [];
	        this._currentOffsetMicros = 0;
	
	        // How many updates since we've updated currentOffsetMicros.
	        this._currentOffsetAge = kMaxOffsetAge + 1;
	
	        // Try to load samples from the local store.
	        // Only use the data if it's recent.
	        var storedData = this._localStoreGet();
	        if (storedData && storedData.timestamp_micros && storedData.timestamp_micros > this._nowMicros() - kStoredSamplesTTLMicros) {
	            // Make sure there are no more than (kMaxOffsetAge+1) elements
	            this._samples = storedData.samples.slice(-(kMaxOffsetAge + 1));
	        }
	        // Update the current offset based on these data.
	        this.update();
	    }
	
	    // Add a new timing sample and update the offset.
	
	
	    _createClass(ClockState, [{
	        key: "addSample",
	        value: function addSample(originMicros, receiveMicros, transmitMicros, destinationMicros) {
	            var latestDelayMicros = Number.MAX_NUMBER;
	            var latestOffsetMicros = 0;
	            // Ensure that all of the data are valid before using them. If
	            // not, we'll push a {0, MAX} record into the queue.
	            if (originMicros > 0 && receiveMicros > 0 && transmitMicros > 0 && destinationMicros > 0) {
	                latestDelayMicros = destinationMicros - originMicros - (transmitMicros - receiveMicros);
	                latestOffsetMicros = (receiveMicros - originMicros + (transmitMicros - destinationMicros)) / 2;
	            }
	
	            // Discard the oldest sample and push the new one.
	            if (this._samples.length === kMaxOffsetAge + 1) {
	                this._samples.shift();
	            }
	            this._samples.push({
	                delayMicros: latestDelayMicros,
	                offsetMicros: latestOffsetMicros
	            });
	            this._currentOffsetAge++;
	
	            // Update the local store with this new sample.
	            this._localStoreSet({
	                timestamp_micros: this._nowMicros(),
	                samples: this._samples
	            });
	            this.update();
	        }
	
	        // Update the time offset based on the current samples.
	
	    }, {
	        key: "update",
	        value: function update() {
	            // This is simplified version of the clock filtering in Simple
	            // NTP. It ignores precision and dispersion (frequency error). In
	            // brief, it keeps the 8 (kMaxOffsetAge+1) most recent
	            // delay-offset pairs, and considers the offset with the smallest
	            // delay to be the best one. However, it only uses this new offset
	            // if the change (relative to the last offset) is small compared
	            // to the estimated error.
	            //
	            // See:
	            // https://tools.ietf.org/html/rfc5905#appendix-A.5.2
	            // http://books.google.com/books?id=pdTcJBfnbq8C
	            //   esp. section 3.5
	            // http://www.eecis.udel.edu/~mills/ntp/html/filter.html
	            // http://www.eecis.udel.edu/~mills/database/brief/algor/algor.pdf
	            // http://www.eecis.udel.edu/~mills/ntp/html/stats.html
	
	            // TODO: Consider huff-n'-puff if the delays are highly asymmetric.
	            // http://www.eecis.udel.edu/~mills/ntp/html/huffpuff.html
	
	            // Find the sample with the smallest delay; the corresponding
	            // offset is the "best" one.
	            var minDelayMicros = Number.MAX_VALUE;
	            var bestOffsetMicros = 0;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this._samples[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var sample = _step.value;
	
	                    if (sample.delayMicros < minDelayMicros) {
	                        minDelayMicros = sample.delayMicros;
	                        bestOffsetMicros = sample.offsetMicros;
	                    }
	                }
	
	                // No update.
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            if (bestOffsetMicros == this._currentOffsetMicros) {
	                return;
	            }
	
	            // Now compute the jitter, i.e. the error relative to the new
	            // offset were we to use it.
	            var jitter = 0;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = this._samples[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _sample = _step2.value;
	
	                    jitter += Math.pow(bestOffsetMicros - _sample.offsetMicros, 2);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            jitter = Math.sqrt(jitter / this._samples.length);
	
	            // Ignore spikes: only use the new offset if the change is not too
	            // large... unless the current offset is too old. The "too old"
	            // condition is also triggered when update() is called from the
	            // constructor.
	            var kSGATE = 3; // See RFC 5905
	            if (this._currentOffsetAge > kMaxOffsetAge || Math.abs(this._currentOffsetMicros - bestOffsetMicros) < kSGATE * jitter) {
	                this._currentOffsetMicros = bestOffsetMicros;
	                this._currentOffsetAge = 0;
	            }
	        }
	
	        // Returns the difference in microseconds between the server's clock
	        // and our clock. This should be added to any local timestamps before
	        // sending them to the server. Note that a negative offset means that
	        // the local clock is ahead of the server's.
	
	    }, {
	        key: "offsetMicros",
	        value: function offsetMicros() {
	            return Math.floor(this._currentOffsetMicros);
	        }
	
	        // Returns true if we've performed enough measurements to be confident
	        // in the current offset.
	
	    }, {
	        key: "isReady",
	        value: function isReady() {
	            return this._samples.length > 3;
	        }
	    }, {
	        key: "activeSampleCount",
	        value: function activeSampleCount() {
	            return this._samples.length;
	        }
	    }]);
	
	    return ClockState;
	}();
	
	module.exports = ClockState;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
		"name": "lightstep-tracer",
		"version": "0.9.15",
		"main": "dist/lightstep-tracer-node.js",
		"engines": {
			"node": ">=0.12.0"
		},
		"scripts": {
			"thrift-browser": "node ./scripts/build_browser_thrift_lib.js",
			"thrift-node": "node ./scripts/build_node_thrift_lib.js",
			"webpack": "npm run thrift-browser && npm run thrift-node && npm run webpack-node-debug && npm run webpack-node-prod && npm run webpack-browser-debug && npm run webpack-browser-prod",
			"webpack-node-debug": "BUILD_PLATFORM=node BUILD_CONFIG=debug webpack --display-error-details",
			"webpack-node-prod": "BUILD_PLATFORM=node BUILD_CONFIG=prod webpack --display-error-details",
			"webpack-browser-debug": "BUILD_PLATFORM=browser BUILD_CONFIG=debug webpack --display-error-details",
			"webpack-browser-prod": "BUILD_PLATFORM=browser BUILD_CONFIG=prod webpack --display-error-details",
			"test": "rm -f test/results/*.json && node node_modules/mocha/bin/mocha -c test/unittest_node.js"
		},
		"license": "MIT",
		"repository": {
			"type": "git",
			"url": "http://github.com/lightstep/lightstep-tracer-javascript.git"
		},
		"dependencies": {
			"async": "^1.5.0",
			"eventemitter3": "^1.1.1",
			"source-map-support": "^0.3.3",
			"sprintf-js": "^1.0.3",
			"thrift": "0.9.2",
			"underscore": "^1.8.3",
			"opentracing": "^0.9.12"
		},
		"devDependencies": {
			"babel-core": "^6.3.26",
			"babel-loader": "^6.2.0",
			"babel-plugin-add-module-exports": "^0.1.2",
			"babel-polyfill": "^6.3.14",
			"babel-preset-es2015": "^6.3.13",
			"chai": "^3.4.1",
			"clone": "^1.0.2",
			"colors": "^1.1.2",
			"json-loader": "^0.5.4",
			"mocha": "^2.3.4",
			"shelljs": "^0.5.3",
			"webpack": "^1.12.9"
		}
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var constants = __webpack_require__(2);
	
	var LogToConsole = function () {
	    function LogToConsole() {
	        _classCallCheck(this, LogToConsole);
	
	        this._enabled = false;
	        this._runtime = null;
	        this._optionsCb = this._handleOptions.bind(this);
	        this._logAddedCb = this._handleLogAdded.bind(this);
	    }
	
	    _createClass(LogToConsole, [{
	        key: "name",
	        value: function name() {
	            return "log_to_console";
	        }
	    }, {
	        key: "start",
	        value: function start(runtime) {
	            this._runtime = runtime;
	            this._runtime.addOption("log_to_console", {
	                type: "bool",
	                defaultValue: false
	            });
	            this._runtime.on('options', this._optionsCb);
	        }
	    }, {
	        key: "stop",
	        value: function stop(runtime) {
	            this._runtime.removeListener('options', this._optionsCb);
	        }
	    }, {
	        key: "_handleOptions",
	        value: function _handleOptions(modified, current) {
	            var enabled = current.log_to_console;
	            if (this._enabled == enabled) {
	                return;
	            }
	            this._enabled = enabled;
	            if (this._enabled) {
	                this._runtime.on('log_added', this._logAddedCb);
	            } else {
	                this._runtime.removeListener('log_added', this._logAddedCb);
	            }
	        }
	    }, {
	        key: "_handleLogAdded",
	        value: function _handleLogAdded(record) {
	            var level = constants.LOG_STRING_TO_LEVEL[record.level];
	            var message = record.message;
	
	            // Ignore records without a message (e.g. a stable_name log record)
	            if (!message) {
	                return;
	            }
	
	            switch (level) {
	                case constants.LOG_ERROR:
	                case constants.LOG_FATAL:
	                    console.error(message);
	                    break;
	                case constants.LOG_WARN:
	                    console.warn(message);
	                    break;
	                case constants.LOG_INFO:
	                default:
	                    console.log(message);
	                    break;
	            }
	        }
	    }]);
	
	    return LogToConsole;
	}();
	
	module.exports = new LogToConsole();

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* eslint max-len: 0 */
	
	"use strict";
	
	var _Object$defineProperty = __webpack_require__(27)["default"];
	
	__webpack_require__(30);
	
	__webpack_require__(314);
	
	// Should be removed in the next major release:
	
	__webpack_require__(316);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	function define(O, key, value) {
	  O[key] || _Object$defineProperty(O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(28), __esModule: true };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(29);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(83);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(96);
	__webpack_require__(98);
	__webpack_require__(100);
	__webpack_require__(102);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(115);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(163);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(186);
	__webpack_require__(187);
	__webpack_require__(192);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(196);
	__webpack_require__(197);
	__webpack_require__(200);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(209);
	__webpack_require__(212);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(216);
	__webpack_require__(218);
	__webpack_require__(220);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(235);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(296);
	__webpack_require__(297);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(309);
	__webpack_require__(312);
	__webpack_require__(313);
	module.exports = __webpack_require__(33);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(32)
	  , core           = __webpack_require__(33)
	  , has            = __webpack_require__(34)
	  , DESCRIPTORS    = __webpack_require__(35)
	  , $export        = __webpack_require__(37)
	  , redefine       = __webpack_require__(46)
	  , META           = __webpack_require__(50).KEY
	  , $fails         = __webpack_require__(36)
	  , shared         = __webpack_require__(51)
	  , setToStringTag = __webpack_require__(52)
	  , uid            = __webpack_require__(47)
	  , wks            = __webpack_require__(53)
	  , keyOf          = __webpack_require__(54)
	  , enumKeys       = __webpack_require__(67)
	  , isArray        = __webpack_require__(70)
	  , anObject       = __webpack_require__(40)
	  , toIObject      = __webpack_require__(57)
	  , toPrimitive    = __webpack_require__(44)
	  , createDesc     = __webpack_require__(45)
	  , _create        = __webpack_require__(71)
	  , gOPNExt        = __webpack_require__(74)
	  , $GOPD          = __webpack_require__(76)
	  , $DP            = __webpack_require__(39)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , replacer, $replacer;
	  while(arguments.length > i)args.push(arguments[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var BUGGY_JSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(69).f  = $propertyIsEnumerable
	  __webpack_require__(68).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(77)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	for(var symbols = (
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; ){
	  var key     = symbols[i++]
	    , Wrapper = core.Symbol
	    , sym     = wks(key);
	  if(!(key in Wrapper))dP(Wrapper, key, {value: USE_NATIVE ? sym : wrap(sym)});
	};
	
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	if(!QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild)setter = true;
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(38)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 32 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 33 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 34 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(36)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(32)
	  , core      = __webpack_require__(33)
	  , hide      = __webpack_require__(38)
	  , redefine  = __webpack_require__(46)
	  , ctx       = __webpack_require__(48)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(39)
	  , createDesc = __webpack_require__(45);
	module.exports = __webpack_require__(35) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(40)
	  , IE8_DOM_DEFINE = __webpack_require__(42)
	  , toPrimitive    = __webpack_require__(44)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(35) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(35) && !__webpack_require__(36)(function(){
	  return Object.defineProperty(__webpack_require__(43)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41)
	  , document = __webpack_require__(32).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(41);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(32)
	  , hide      = __webpack_require__(38)
	  , has       = __webpack_require__(34)
	  , SRC       = __webpack_require__(47)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(33).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 47 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(49);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(47)('meta')
	  , isObject = __webpack_require__(41)
	  , has      = __webpack_require__(34)
	  , setDesc  = __webpack_require__(39).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(36)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(32)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(39).f
	  , has = __webpack_require__(34)
	  , TAG = __webpack_require__(53)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(51)('wks')
	  , uid        = __webpack_require__(47)
	  , Symbol     = __webpack_require__(32).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(55)
	  , toIObject = __webpack_require__(57);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(56)
	  , enumBugKeys = __webpack_require__(66);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(34)
	  , toIObject    = __webpack_require__(57)
	  , arrayIndexOf = __webpack_require__(61)(false)
	  , IE_PROTO     = __webpack_require__(65)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(58)
	  , defined = __webpack_require__(60);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(59);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(57)
	  , toLength  = __webpack_require__(62)
	  , toIndex   = __webpack_require__(64);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(63)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(63)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(51)('keys')
	  , uid    = __webpack_require__(47);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(55)
	  , gOPS    = __webpack_require__(68)
	  , pIE     = __webpack_require__(69);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 69 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(59);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(40)
	  , dPs         = __webpack_require__(72)
	  , enumBugKeys = __webpack_require__(66)
	  , IE_PROTO    = __webpack_require__(65)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(43)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(73).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(39)
	  , anObject = __webpack_require__(40)
	  , getKeys  = __webpack_require__(55);
	
	module.exports = __webpack_require__(35) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32).document && document.documentElement;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(57)
	  , gOPN      = __webpack_require__(75).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN.f(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(56)
	  , hiddenKeys = __webpack_require__(66).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(69)
	  , createDesc     = __webpack_require__(45)
	  , toIObject      = __webpack_require__(57)
	  , toPrimitive    = __webpack_require__(44)
	  , has            = __webpack_require__(34)
	  , IE8_DOM_DEFINE = __webpack_require__(42)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(35) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(37)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(71)});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(37);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(35), 'Object', {defineProperty: __webpack_require__(39).f});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(37);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(35), 'Object', {defineProperties: __webpack_require__(72)});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(57)
	  , $getOwnPropertyDescriptor = __webpack_require__(76).f;
	
	__webpack_require__(82)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(37)
	  , core    = __webpack_require__(33)
	  , fails   = __webpack_require__(36);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(84)
	  , $getPrototypeOf = __webpack_require__(85);
	
	__webpack_require__(82)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(60);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(34)
	  , toObject    = __webpack_require__(84)
	  , IE_PROTO    = __webpack_require__(65)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(84)
	  , $keys    = __webpack_require__(55);
	
	__webpack_require__(82)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(82)('getOwnPropertyNames', function(){
	  return __webpack_require__(74).f;
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(41)
	  , meta     = __webpack_require__(50).onFreeze;
	
	__webpack_require__(82)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(41)
	  , meta     = __webpack_require__(50).onFreeze;
	
	__webpack_require__(82)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(41)
	  , meta     = __webpack_require__(50).onFreeze;
	
	__webpack_require__(82)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(41);
	
	__webpack_require__(82)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(41);
	
	__webpack_require__(82)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(41);
	
	__webpack_require__(82)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(37);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(95)});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(55)
	  , gOPS     = __webpack_require__(68)
	  , pIE      = __webpack_require__(69)
	  , toObject = __webpack_require__(84)
	  , IObject  = __webpack_require__(58)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(36)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(37);
	$export($export.S, 'Object', {is: __webpack_require__(97)});

/***/ },
/* 97 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(37);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(99).set});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(41)
	  , anObject = __webpack_require__(40);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(48)(Function.call, __webpack_require__(76).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(101)
	  , test    = {};
	test[__webpack_require__(53)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(46)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(59)
	  , TAG = __webpack_require__(53)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(37);
	
	$export($export.P, 'Function', {bind: __webpack_require__(103)});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(49)
	  , isObject   = __webpack_require__(41)
	  , invoke     = __webpack_require__(104)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(39).f
	  , createDesc = __webpack_require__(45)
	  , has        = __webpack_require__(34)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(35) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || dP(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(41)
	  , getPrototypeOf = __webpack_require__(85)
	  , HAS_INSTANCE   = __webpack_require__(53)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(39).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(37)
	  , $parseInt = __webpack_require__(108);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(32).parseInt
	  , $trim     = __webpack_require__(109).trim
	  , ws        = __webpack_require__(110)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(37)
	  , defined = __webpack_require__(60)
	  , fails   = __webpack_require__(36)
	  , spaces  = __webpack_require__(110)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(37)
	  , $parseFloat = __webpack_require__(112);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(32).parseFloat
	  , $trim       = __webpack_require__(109).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(110) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(32)
	  , has               = __webpack_require__(34)
	  , cof               = __webpack_require__(59)
	  , inheritIfRequired = __webpack_require__(114)
	  , toPrimitive       = __webpack_require__(44)
	  , fails             = __webpack_require__(36)
	  , gOPN              = __webpack_require__(75).f
	  , gOPD              = __webpack_require__(76).f
	  , dP                = __webpack_require__(39).f
	  , $trim             = __webpack_require__(109).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(71)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(35) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(46)(global, NUMBER, $Number);
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(41)
	  , setPrototypeOf = __webpack_require__(99).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(37)
	  , anInstance   = __webpack_require__(116)
	  , toInteger    = __webpack_require__(63)
	  , aNumberValue = __webpack_require__(117)
	  , repeat       = __webpack_require__(118)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(36)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(59);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(63)
	  , defined   = __webpack_require__(60);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(37)
	  , $fails       = __webpack_require__(36)
	  , aNumberValue = __webpack_require__(117)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(37)
	  , _isFinite = __webpack_require__(32).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(123)});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(41)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(37)
	  , isInteger = __webpack_require__(123)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(37)
	  , $parseFloat = __webpack_require__(112);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(37)
	  , $parseInt = __webpack_require__(108);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(37)
	  , log1p   = __webpack_require__(131)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 131 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(37);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(37)
	  , sign    = __webpack_require__(135);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 135 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(37)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {expm1: __webpack_require__(139)});

/***/ },
/* 139 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(37)
	  , sign      = __webpack_require__(135)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(37)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(37)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(36)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(131)});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {sign: __webpack_require__(135)});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(37)
	  , expm1   = __webpack_require__(139)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(36)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(37)
	  , expm1   = __webpack_require__(139)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(37)
	  , toIndex        = __webpack_require__(64)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(37)
	  , toIObject = __webpack_require__(57)
	  , toLength  = __webpack_require__(62);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(109)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(154)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(155)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(63)
	  , defined   = __webpack_require__(60);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(77)
	  , $export        = __webpack_require__(37)
	  , redefine       = __webpack_require__(46)
	  , hide           = __webpack_require__(38)
	  , has            = __webpack_require__(34)
	  , Iterators      = __webpack_require__(156)
	  , $iterCreate    = __webpack_require__(157)
	  , setToStringTag = __webpack_require__(52)
	  , getPrototypeOf = __webpack_require__(85)
	  , ITERATOR       = __webpack_require__(53)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(71)
	  , descriptor     = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(52)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(38)(IteratorPrototype, __webpack_require__(53)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(37)
	  , $at     = __webpack_require__(154)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(37)
	  , toLength  = __webpack_require__(62)
	  , context   = __webpack_require__(160)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(162)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(161)
	  , defined  = __webpack_require__(60);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(41)
	  , cof      = __webpack_require__(59)
	  , MATCH    = __webpack_require__(53)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(53)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(37)
	  , context  = __webpack_require__(160)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(162)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(37);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(118)
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(37)
	  , toLength    = __webpack_require__(62)
	  , context     = __webpack_require__(160)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(162)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(167)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(37)
	  , fails   = __webpack_require__(36)
	  , defined = __webpack_require__(60)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(167)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(167)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(167)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(167)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(167)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(167)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(167)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(167)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(167)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(167)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(167)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(167)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(37)
	  , toObject    = __webpack_require__(84)
	  , toPrimitive = __webpack_require__(44);
	
	$export($export.P + $export.F * __webpack_require__(36)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(37)
	  , fails   = __webpack_require__(36)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(46)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(53)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(38)(proto, TO_PRIMITIVE, __webpack_require__(185));

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(40)
	  , toPrimitive = __webpack_require__(44)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(70)});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(48)
	  , $export     = __webpack_require__(37)
	  , toObject    = __webpack_require__(84)
	  , call        = __webpack_require__(188)
	  , isArrayIter = __webpack_require__(189)
	  , toLength    = __webpack_require__(62)
	  , getIterFn   = __webpack_require__(190);
	$export($export.S + $export.F * !__webpack_require__(191)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(40);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(156)
	  , ITERATOR   = __webpack_require__(53)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(101)
	  , ITERATOR  = __webpack_require__(53)('iterator')
	  , Iterators = __webpack_require__(156);
	module.exports = __webpack_require__(33).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(53)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(37);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(36)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)result[index] = arguments[index++];
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(37)
	  , toIObject = __webpack_require__(57)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(58) != Object || !__webpack_require__(194)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(36);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(37)
	  , html       = __webpack_require__(73)
	  , cof        = __webpack_require__(59)
	  , toIndex    = __webpack_require__(64)
	  , toLength   = __webpack_require__(62)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(36)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(37)
	  , aFunction = __webpack_require__(49)
	  , toObject  = __webpack_require__(84)
	  , fails     = __webpack_require__(36)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(194)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(37)
	  , $forEach = __webpack_require__(198)(0)
	  , STRICT   = __webpack_require__(194)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(48)
	  , IObject  = __webpack_require__(58)
	  , toObject = __webpack_require__(84)
	  , toLength = __webpack_require__(62)
	  , asc      = __webpack_require__(199);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(41)
	  , isArray  = __webpack_require__(70)
	  , SPECIES  = __webpack_require__(53)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(37)
	  , $map    = __webpack_require__(198)(1);
	
	$export($export.P + $export.F * !__webpack_require__(194)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(37)
	  , $filter = __webpack_require__(198)(2);
	
	$export($export.P + $export.F * !__webpack_require__(194)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(37)
	  , $some   = __webpack_require__(198)(3);
	
	$export($export.P + $export.F * !__webpack_require__(194)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(37)
	  , $every  = __webpack_require__(198)(4);
	
	$export($export.P + $export.F * !__webpack_require__(194)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(37)
	  , $reduce = __webpack_require__(205);
	
	$export($export.P + $export.F * !__webpack_require__(194)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(49)
	  , toObject  = __webpack_require__(84)
	  , IObject   = __webpack_require__(58)
	  , toLength  = __webpack_require__(62);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(37)
	  , $reduce = __webpack_require__(205);
	
	$export($export.P + $export.F * !__webpack_require__(194)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(37)
	  , $indexOf = __webpack_require__(61)(false);
	
	$export($export.P + $export.F * !__webpack_require__(194)([].indexOf), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(37)
	  , toIObject = __webpack_require__(57)
	  , toInteger = __webpack_require__(63)
	  , toLength  = __webpack_require__(62);
	
	$export($export.P + $export.F * !__webpack_require__(194)([].lastIndexOf), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index;
	    return -1;
	  }
	});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(37);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(210)});
	
	__webpack_require__(211)('copyWithin');

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(84)
	  , toIndex  = __webpack_require__(64)
	  , toLength = __webpack_require__(62);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(53)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(38)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(37);
	
	$export($export.P, 'Array', {fill: __webpack_require__(213)});
	
	__webpack_require__(211)('fill');

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(84)
	  , toIndex  = __webpack_require__(64)
	  , toLength = __webpack_require__(62);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(37)
	  , $find   = __webpack_require__(198)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(211)(KEY);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(37)
	  , $find   = __webpack_require__(198)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(211)(KEY);

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(217)('Array');

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(32)
	  , dP          = __webpack_require__(39)
	  , DESCRIPTORS = __webpack_require__(35)
	  , SPECIES     = __webpack_require__(53)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(211)
	  , step             = __webpack_require__(219)
	  , Iterators        = __webpack_require__(156)
	  , toIObject        = __webpack_require__(57);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(155)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(32)
	  , inheritIfRequired = __webpack_require__(114)
	  , dP                = __webpack_require__(39).f
	  , gOPN              = __webpack_require__(75).f
	  , isRegExp          = __webpack_require__(161)
	  , $flags            = __webpack_require__(221)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(35) && (!CORRECT_NEW || __webpack_require__(36)(function(){
	  re2[__webpack_require__(53)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(46)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(217)('RegExp');

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(40);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(223);
	var anObject    = __webpack_require__(40)
	  , $flags      = __webpack_require__(221)
	  , DESCRIPTORS = __webpack_require__(35)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(46)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(36)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(35) && /./g.flags != 'g')__webpack_require__(39).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(221)
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(225)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(38)
	  , redefine = __webpack_require__(46)
	  , fails    = __webpack_require__(36)
	  , defined  = __webpack_require__(60)
	  , wks      = __webpack_require__(53);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(225)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(225)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(225)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(161)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(77)
	  , global             = __webpack_require__(32)
	  , ctx                = __webpack_require__(48)
	  , classof            = __webpack_require__(101)
	  , $export            = __webpack_require__(37)
	  , isObject           = __webpack_require__(41)
	  , anObject           = __webpack_require__(40)
	  , aFunction          = __webpack_require__(49)
	  , anInstance         = __webpack_require__(116)
	  , forOf              = __webpack_require__(230)
	  , setProto           = __webpack_require__(99).set
	  , speciesConstructor = __webpack_require__(231)
	  , task               = __webpack_require__(232).set
	  , microtask          = __webpack_require__(233)
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(53)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(234)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(52)($Promise, PROMISE);
	__webpack_require__(217)(PROMISE);
	Wrapper = __webpack_require__(33)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(191)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(48)
	  , call        = __webpack_require__(188)
	  , isArrayIter = __webpack_require__(189)
	  , anObject    = __webpack_require__(40)
	  , toLength    = __webpack_require__(62)
	  , getIterFn   = __webpack_require__(190);
	module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(40)
	  , aFunction = __webpack_require__(49)
	  , SPECIES   = __webpack_require__(53)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(48)
	  , invoke             = __webpack_require__(104)
	  , html               = __webpack_require__(73)
	  , cel                = __webpack_require__(43)
	  , global             = __webpack_require__(32)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(59)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(32)
	  , macrotask = __webpack_require__(232).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(59)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, fn;
	  if(isNode && (parent = process.domain))parent.exit();
	  while(head){
	    fn = head.fn;
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = true
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = !toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function(fn){
	  var task = {fn: fn, next: undefined};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(46);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(236);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(237)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(39).f
	  , create      = __webpack_require__(71)
	  , hide        = __webpack_require__(38)
	  , redefineAll = __webpack_require__(234)
	  , ctx         = __webpack_require__(48)
	  , anInstance  = __webpack_require__(116)
	  , defined     = __webpack_require__(60)
	  , forOf       = __webpack_require__(230)
	  , $iterDefine = __webpack_require__(155)
	  , step        = __webpack_require__(219)
	  , setSpecies  = __webpack_require__(217)
	  , DESCRIPTORS = __webpack_require__(35)
	  , fastKey     = __webpack_require__(50).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(32)
	  , $export           = __webpack_require__(37)
	  , redefine          = __webpack_require__(46)
	  , redefineAll       = __webpack_require__(234)
	  , meta              = __webpack_require__(50)
	  , forOf             = __webpack_require__(230)
	  , anInstance        = __webpack_require__(116)
	  , isObject          = __webpack_require__(41)
	  , fails             = __webpack_require__(36)
	  , $iterDetect       = __webpack_require__(191)
	  , setToStringTag    = __webpack_require__(52)
	  , inheritIfRequired = __webpack_require__(114);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(236);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(237)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(198)(0)
	  , redefine     = __webpack_require__(46)
	  , meta         = __webpack_require__(50)
	  , assign       = __webpack_require__(95)
	  , weak         = __webpack_require__(240)
	  , isObject     = __webpack_require__(41)
	  , has          = __webpack_require__(34)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(237)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(234)
	  , getWeak           = __webpack_require__(50).getWeak
	  , anObject          = __webpack_require__(40)
	  , isObject          = __webpack_require__(41)
	  , anInstance        = __webpack_require__(116)
	  , forOf             = __webpack_require__(230)
	  , createArrayMethod = __webpack_require__(198)
	  , $has              = __webpack_require__(34)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(240);
	
	// 23.4 WeakSet Objects
	__webpack_require__(237)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(37)
	  , $typed       = __webpack_require__(243)
	  , buffer       = __webpack_require__(244)
	  , anObject     = __webpack_require__(40)
	  , toIndex      = __webpack_require__(64)
	  , toLength     = __webpack_require__(62)
	  , isObject     = __webpack_require__(41)
	  , TYPED_ARRAY  = __webpack_require__(53)('typed_array')
	  , ArrayBuffer  = __webpack_require__(32).ArrayBuffer
	  , speciesConstructor = __webpack_require__(231)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(36)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(217)(ARRAY_BUFFER);

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(32)
	  , hide   = __webpack_require__(38)
	  , uid    = __webpack_require__(47)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(32)
	  , DESCRIPTORS    = __webpack_require__(35)
	  , LIBRARY        = __webpack_require__(77)
	  , $typed         = __webpack_require__(243)
	  , hide           = __webpack_require__(38)
	  , redefineAll    = __webpack_require__(234)
	  , fails          = __webpack_require__(36)
	  , anInstance     = __webpack_require__(116)
	  , toInteger      = __webpack_require__(63)
	  , toLength       = __webpack_require__(62)
	  , gOPN           = __webpack_require__(75).f
	  , dP             = __webpack_require__(39).f
	  , arrayFill      = __webpack_require__(213)
	  , setToStringTag = __webpack_require__(52)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , parseInt       = global.parseInt
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , min            = Math.min
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(37);
	$export($export.G + $export.W + $export.F * !__webpack_require__(243).ABV, {
	  DataView: __webpack_require__(244).DataView
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(35)){
	  var LIBRARY             = __webpack_require__(77)
	    , global              = __webpack_require__(32)
	    , fails               = __webpack_require__(36)
	    , $export             = __webpack_require__(37)
	    , $typed              = __webpack_require__(243)
	    , $buffer             = __webpack_require__(244)
	    , ctx                 = __webpack_require__(48)
	    , anInstance          = __webpack_require__(116)
	    , propertyDesc        = __webpack_require__(45)
	    , hide                = __webpack_require__(38)
	    , redefineAll         = __webpack_require__(234)
	    , isInteger           = __webpack_require__(123)
	    , toInteger           = __webpack_require__(63)
	    , toLength            = __webpack_require__(62)
	    , toIndex             = __webpack_require__(64)
	    , toPrimitive         = __webpack_require__(44)
	    , has                 = __webpack_require__(34)
	    , same                = __webpack_require__(97)
	    , classof             = __webpack_require__(101)
	    , isObject            = __webpack_require__(41)
	    , toObject            = __webpack_require__(84)
	    , isArrayIter         = __webpack_require__(189)
	    , create              = __webpack_require__(71)
	    , getPrototypeOf      = __webpack_require__(85)
	    , gOPN                = __webpack_require__(75).f
	    , isIterable          = __webpack_require__(248)
	    , getIterFn           = __webpack_require__(190)
	    , uid                 = __webpack_require__(47)
	    , wks                 = __webpack_require__(53)
	    , createArrayMethod   = __webpack_require__(198)
	    , createArrayIncludes = __webpack_require__(61)
	    , speciesConstructor  = __webpack_require__(231)
	    , ArrayIterators      = __webpack_require__(218)
	    , Iterators           = __webpack_require__(156)
	    , $iterDetect         = __webpack_require__(191)
	    , setSpecies          = __webpack_require__(217)
	    , arrayFill           = __webpack_require__(213)
	    , arrayCopyWithin     = __webpack_require__(210)
	    , $DP                 = __webpack_require__(39)
	    , $GOPD               = __webpack_require__(76)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(101)
	  , ITERATOR  = __webpack_require__(53)('iterator')
	  , Iterators = __webpack_require__(156);
	module.exports = __webpack_require__(33).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(37)
	  , _apply  = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export   = __webpack_require__(37)
	  , create    = __webpack_require__(71)
	  , aFunction = __webpack_require__(49)
	  , anObject  = __webpack_require__(40)
	  , isObject  = __webpack_require__(41)
	  , bind      = __webpack_require__(103);
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(36)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(39)
	  , $export     = __webpack_require__(37)
	  , anObject    = __webpack_require__(40)
	  , toPrimitive = __webpack_require__(44);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(36)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(37)
	  , gOPD     = __webpack_require__(76).f
	  , anObject = __webpack_require__(40);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(37)
	  , anObject = __webpack_require__(40);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(157)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(76)
	  , getPrototypeOf = __webpack_require__(85)
	  , has            = __webpack_require__(34)
	  , $export        = __webpack_require__(37)
	  , isObject       = __webpack_require__(41)
	  , anObject       = __webpack_require__(40);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(76)
	  , $export  = __webpack_require__(37)
	  , anObject = __webpack_require__(40);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(37)
	  , getProto = __webpack_require__(85)
	  , anObject = __webpack_require__(40);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(37)
	  , anObject      = __webpack_require__(40)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(268)});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(75)
	  , gOPS     = __webpack_require__(68)
	  , anObject = __webpack_require__(40)
	  , Reflect  = __webpack_require__(32).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(37)
	  , anObject           = __webpack_require__(40)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(39)
	  , gOPD           = __webpack_require__(76)
	  , getPrototypeOf = __webpack_require__(85)
	  , has            = __webpack_require__(34)
	  , $export        = __webpack_require__(37)
	  , createDesc     = __webpack_require__(45)
	  , anObject       = __webpack_require__(40)
	  , isObject       = __webpack_require__(41);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(37)
	  , setProto = __webpack_require__(99);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(37)
	  , $includes = __webpack_require__(61)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(211)('includes');

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(37)
	  , $at     = __webpack_require__(154)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(37)
	  , $pad    = __webpack_require__(275);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(62)
	  , repeat   = __webpack_require__(118)
	  , defined  = __webpack_require__(60);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(37)
	  , $pad    = __webpack_require__(275);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(109)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(109)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(37)
	  , defined     = __webpack_require__(60)
	  , toLength    = __webpack_require__(62)
	  , isRegExp    = __webpack_require__(161)
	  , getFlags    = __webpack_require__(221)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(157)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export    = __webpack_require__(37)
	  , ownKeys    = __webpack_require__(268)
	  , toIObject  = __webpack_require__(57)
	  , createDesc = __webpack_require__(45)
	  , gOPD       = __webpack_require__(76)
	  , dP         = __webpack_require__(39);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)dP.f(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(37)
	  , $values = __webpack_require__(282)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(55)
	  , toIObject = __webpack_require__(57)
	  , isEnum    = __webpack_require__(69).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(37)
	  , $entries = __webpack_require__(282)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(37)
	  , toObject        = __webpack_require__(84)
	  , aFunction       = __webpack_require__(49)
	  , $defineProperty = __webpack_require__(39);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(35) && $export($export.P + __webpack_require__(285), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(77)|| !__webpack_require__(36)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(32)[K];
	});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(37)
	  , toObject        = __webpack_require__(84)
	  , aFunction       = __webpack_require__(49)
	  , $defineProperty = __webpack_require__(39);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(35) && $export($export.P + __webpack_require__(285), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(37)
	  , toObject                 = __webpack_require__(84)
	  , toPrimitive              = __webpack_require__(44)
	  , getPrototypeOf           = __webpack_require__(85)
	  , getOwnPropertyDescriptor = __webpack_require__(76).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(35) && $export($export.P + __webpack_require__(285), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(37)
	  , toObject                 = __webpack_require__(84)
	  , toPrimitive              = __webpack_require__(44)
	  , getPrototypeOf           = __webpack_require__(85)
	  , getOwnPropertyDescriptor = __webpack_require__(76).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(35) && $export($export.P + __webpack_require__(285), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(37);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(290)('Map')});

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(101)
	  , from    = __webpack_require__(291);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(230);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(37);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(290)('Set')});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(37);
	
	$export($export.S, 'System', {global: __webpack_require__(32)});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(37)
	  , cof     = __webpack_require__(59);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(37);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(300)
	  , anObject                  = __webpack_require__(40)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(235)
	  , $export = __webpack_require__(37)
	  , shared  = __webpack_require__(51)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(239)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(300)
	  , anObject               = __webpack_require__(40)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(300)
	  , anObject               = __webpack_require__(40)
	  , getPrototypeOf         = __webpack_require__(85)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(238)
	  , from                    = __webpack_require__(291)
	  , metadata                = __webpack_require__(300)
	  , anObject                = __webpack_require__(40)
	  , getPrototypeOf          = __webpack_require__(85)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(300)
	  , anObject               = __webpack_require__(40)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(300)
	  , anObject                = __webpack_require__(40)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(300)
	  , anObject               = __webpack_require__(40)
	  , getPrototypeOf         = __webpack_require__(85)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(300)
	  , anObject               = __webpack_require__(40)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(300)
	  , anObject                  = __webpack_require__(40)
	  , aFunction                 = __webpack_require__(49)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(32)
	  , $export    = __webpack_require__(37)
	  , invoke     = __webpack_require__(104)
	  , partial    = __webpack_require__(310)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(311)
	  , invoke    = __webpack_require__(104)
	  , aFunction = __webpack_require__(49);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(37)
	  , $task   = __webpack_require__(232);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(218)
	  , redefine      = __webpack_require__(46)
	  , global        = __webpack_require__(32)
	  , hide          = __webpack_require__(38)
	  , Iterators     = __webpack_require__(156)
	  , wks           = __webpack_require__(53)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          context._sent = arg;
	
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(315)))

/***/ },
/* 315 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(317);
	module.exports = __webpack_require__(33).RegExp.escape;

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(37)
	  , $re     = __webpack_require__(318)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 318 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=lightstep-tracer.js.map