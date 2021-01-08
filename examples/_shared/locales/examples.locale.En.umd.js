!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var a in t)("object"==typeof exports?exports:e)[a]=t[a]}}(window,(function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./examples/_shared/locales/examples.locale.En.js")}({"../Core/lib/Core/localization/En.js":
/*!*******************************************!*\
  !*** ../Core/lib/Core/localization/En.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar localeName = 'En',\n    localeDesc = 'English',\n    locale = {\n  localeName: localeName,\n  localeDesc: localeDesc,\n  // Translations for common words and phrases which are used by all classes.\n  Object: {\n    Yes: 'Yes',\n    No: 'No',\n    Cancel: 'Cancel'\n  },\n  //region Widgets\n  Combo: {\n    noResults: 'No results'\n  },\n  FilePicker: {\n    file: 'File'\n  },\n  Field: {\n    // native input ValidityState statuses\n    badInput: 'Invalid field value',\n    patternMismatch: 'Value should match a specific pattern',\n    rangeOverflow: function rangeOverflow(value) {\n      return \"Value must be less than or equal to \".concat(value.max);\n    },\n    rangeUnderflow: function rangeUnderflow(value) {\n      return \"Value must be greater than or equal to \".concat(value.min);\n    },\n    stepMismatch: 'Value should fit the step',\n    tooLong: 'Value should be shorter',\n    tooShort: 'Value should be longer',\n    typeMismatch: 'Value is required to be in a special format',\n    valueMissing: 'This field is required',\n    invalidValue: 'Invalid field value',\n    minimumValueViolation: 'Minimum value violation',\n    maximumValueViolation: 'Maximum value violation',\n    fieldRequired: 'This field is required',\n    validateFilter: 'Value must be selected from the list'\n  },\n  DateField: {\n    invalidDate: 'Invalid date input'\n  },\n  NumberFormat: {\n    locale: 'en-US',\n    currency: 'USD'\n  },\n  DurationField: {\n    invalidUnit: 'Invalid unit'\n  },\n  TimeField: {\n    invalidTime: 'Invalid time input'\n  },\n  List: {\n    loading: 'Loading...'\n  },\n  PagingToolbar: {\n    firstPage: 'Go to first page',\n    prevPage: 'Go to previous page',\n    page: 'Page',\n    nextPage: 'Go to next page',\n    lastPage: 'Go to last page',\n    reload: 'Reload current page',\n    noRecords: 'No records to display',\n    pageCountTemplate: function pageCountTemplate(data) {\n      return \"of \".concat(data.lastPage);\n    },\n    summaryTemplate: function summaryTemplate(data) {\n      return \"Displaying records \".concat(data.start, \" - \").concat(data.end, \" of \").concat(data.allCount);\n    }\n  },\n  //endregion\n  //region Others\n  DateHelper: {\n    locale: 'en-US',\n    weekStartDay: 0,\n    unitNames: [{\n      single: 'millisecond',\n      plural: 'ms',\n      abbrev: 'ms'\n    }, {\n      single: 'second',\n      plural: 'seconds',\n      abbrev: 's'\n    }, {\n      single: 'minute',\n      plural: 'minutes',\n      abbrev: 'min'\n    }, {\n      single: 'hour',\n      plural: 'hours',\n      abbrev: 'h'\n    }, {\n      single: 'day',\n      plural: 'days',\n      abbrev: 'd'\n    }, {\n      single: 'week',\n      plural: 'weeks',\n      abbrev: 'w'\n    }, {\n      single: 'month',\n      plural: 'months',\n      abbrev: 'mon'\n    }, {\n      single: 'quarter',\n      plural: 'quarters',\n      abbrev: 'q'\n    }, {\n      single: 'year',\n      plural: 'years',\n      abbrev: 'yr'\n    }],\n    // Used to build a RegExp for parsing time units.\n    // The full names from above are added into the generated Regexp.\n    // So you may type \"2 w\" or \"2 wk\" or \"2 week\" or \"2 weeks\" into a DurationField.\n    // When generating its display value though, it uses the full localized names above.\n    unitAbbreviations: [['mil'], ['s', 'sec'], ['m', 'min'], ['h', 'hr'], ['d'], ['w', 'wk'], ['mo', 'mon', 'mnt'], ['q', 'quar', 'qrt'], ['y', 'yr']],\n    parsers: {\n      L: 'MM/DD/YYYY',\n      LT: 'HH:mm A'\n    },\n    ordinalSuffix: function ordinalSuffix(number) {\n      var hasSpecialCase = ['11', '12', '13'].find(function (n) {\n        return number.endsWith(n);\n      });\n      var suffix = 'th';\n\n      if (!hasSpecialCase) {\n        var lastDigit = number[number.length - 1];\n        suffix = {\n          1: 'st',\n          2: 'nd',\n          3: 'rd'\n        }[lastDigit] || 'th';\n      }\n\n      return number + suffix;\n    }\n  } //endregion\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Core/lib/Core/localization/En.js?")},"../Core/lib/Core/localization/LocaleHelper.js":
/*!*****************************************************!*\
  !*** ../Core/lib/Core/localization/LocaleHelper.js ***!
  \*****************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocaleHelper; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @module Core/localization/LocaleHelper\n */\n\n/**\n * Provides locale management methods.\n */\nvar LocaleHelper = /*#__PURE__*/function () {\n  function LocaleHelper() {\n    _classCallCheck(this, LocaleHelper);\n  }\n\n  _createClass(LocaleHelper, null, [{\n    key: "mergeLocales",\n\n    /**\n     * Merges all properties of provided locales into new locale.\n     * Locales are merged in order they provided and locales wich go later replace same properties of previous locales.\n     * @param {...Object} locales Locales to merge\n     * @return {Object} Merged locale\n     */\n    value: function mergeLocales() {\n      var result = {};\n\n      for (var _len = arguments.length, locales = new Array(_len), _key = 0; _key < _len; _key++) {\n        locales[_key] = arguments[_key];\n      }\n\n      locales.forEach(function (locale) {\n        Object.keys(locale).forEach(function (key) {\n          if (_typeof(locale[key]) === \'object\') {\n            result[key] = _objectSpread(_objectSpread({}, result[key]), locale[key]);\n          } else {\n            result[key] = locale[key];\n          }\n        });\n      });\n      return result;\n    }\n    /**\n     * Removes all properties from `locale` that are present in the provided `trimLocale`.\n     * @param {Object} locale locales to merge\n     * @param {Object} trimLocale locales to merge\n     */\n\n  }, {\n    key: "trimLocale",\n    value: function trimLocale(locale, _trimLocale) {\n      var remove = function remove(key, subKey) {\n        if (!locale[key]) {\n          throw new Error("Key \\"".concat(key, "\\" doesn\'t exist in locale"));\n        }\n\n        if (subKey) {\n          if (!locale[key][subKey]) {\n            throw new Error("SubKey \\"".concat(key, ".").concat(subKey, "\\" doesn\'t exist in locale"));\n          }\n\n          delete locale[key][subKey];\n        } else {\n          delete locale[key];\n        }\n      };\n\n      Object.keys(_trimLocale).forEach(function (key) {\n        if (Array.isArray(_trimLocale[key])) {\n          _trimLocale[key].forEach(function (subKey) {\n            return remove(key, subKey);\n          });\n        } else {\n          remove(key);\n        }\n      });\n    }\n    /**\n     * Put the locale under `window.bryntum.locales` to make sure it can be discovered automatically\n     * @param {String} localeName Locale name\n     * @param {Object} config Locale config\n     */\n\n  }, {\n    key: "publishLocale",\n    value: function publishLocale(localeName, config) {\n      var bryntum = window.bryntum = window.bryntum || {},\n          locales = bryntum.locales = bryntum.locales || {}; // Avoid registering locales twice\n\n      locales[localeName] = !locales[localeName] ? config : this.mergeLocales(locales[localeName], config);\n    }\n  }]);\n\n  return LocaleHelper;\n}();\n\n\n\n//# sourceURL=webpack:///../Core/lib/Core/localization/LocaleHelper.js?')},"../Grid/lib/Grid/localization/En.js":
/*!*******************************************!*\
  !*** ../Grid/lib/Grid/localization/En.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Core_localization_En_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core/localization/En.js */ \"../Core/lib/Core/localization/En.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Core_localization_En_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  //region Features\n  ColumnPicker: {\n    column: 'Column',\n    columnsMenu: 'Columns',\n    hideColumn: 'Hide column',\n    hideColumnShort: 'Hide'\n  },\n  Filter: {\n    applyFilter: 'Apply filter',\n    filter: 'Filter',\n    editFilter: 'Edit filter',\n    on: 'On',\n    before: 'Before',\n    after: 'After',\n    equals: 'Equals',\n    lessThan: 'Less than',\n    moreThan: 'More than',\n    removeFilter: 'Remove filter'\n  },\n  FilterBar: {\n    enableFilterBar: 'Show filter bar',\n    disableFilterBar: 'Hide filter bar'\n  },\n  Group: {\n    group: 'Group',\n    groupAscending: 'Group ascending',\n    groupDescending: 'Group descending',\n    groupAscendingShort: 'Ascending',\n    groupDescendingShort: 'Descending',\n    stopGrouping: 'Stop grouping',\n    stopGroupingShort: 'Stop'\n  },\n  Search: {\n    searchForValue: 'Search for value'\n  },\n  Sort: {\n    sort: 'Sort',\n    sortAscending: 'Sort ascending',\n    sortDescending: 'Sort descending',\n    multiSort: 'Multi sort',\n    removeSorter: 'Remove sorter',\n    addSortAscending: 'Add ascending sorter',\n    addSortDescending: 'Add descending sorter',\n    toggleSortAscending: 'Change to ascending',\n    toggleSortDescending: 'Change to descending',\n    sortAscendingShort: 'Ascending',\n    sortDescendingShort: 'Descending',\n    removeSorterShort: 'Remove',\n    addSortAscendingShort: '+ Ascending',\n    addSortDescendingShort: '+ Descending'\n  },\n  //endregion\n  //region Grid\n  GridBase: {\n    loadFailedMessage: 'Data loading failed!',\n    syncFailedMessage: 'Data synchronization failed!',\n    unspecifiedFailure: 'Unspecified failure',\n    networkFailure: 'Network error',\n    parseFailure: 'Failed to parse server response',\n    loadMask: 'Loading...',\n    syncMask: 'Saving changes, please wait...',\n    noRows: 'No records to display',\n    moveColumnLeft: 'Move to left section',\n    moveColumnRight: 'Move to right section',\n    removeRow: 'Delete record',\n    removeRows: 'Delete records',\n    moveColumnTo: function moveColumnTo(region) {\n      return \"Move column to \".concat(region);\n    }\n  },\n  CellMenu: {\n    removeRow: 'Delete record',\n    removeRows: 'Delete records'\n  },\n  //endregion\n  //region Export\n  PdfExport: {\n    'Waiting for response from server': 'Waiting for response from server...',\n    'Export failed': 'Export failed',\n    'Server error': 'Server error',\n    'Generating pages': 'Generating pages...'\n  },\n  ExportDialog: {\n    width: '40em',\n    labelWidth: '12em',\n    exportSettings: 'Export settings',\n    \"export\": 'Export',\n    exporterType: 'Control pagination',\n    cancel: 'Cancel',\n    fileFormat: 'File format',\n    rows: 'Rows',\n    alignRows: 'Align rows',\n    columns: 'Columns',\n    paperFormat: 'Paper format',\n    orientation: 'Orientation',\n    repeatHeader: 'Repeat header'\n  },\n  ExportRowsCombo: {\n    all: 'All rows',\n    visible: 'Visible rows'\n  },\n  ExportOrientationCombo: {\n    portrait: 'Portrait',\n    landscape: 'Landscape'\n  },\n  SinglePageExporter: {\n    singlepage: 'Single page'\n  },\n  MultiPageExporter: {\n    multipage: 'Multiple pages',\n    exportingPage: function exportingPage(_ref) {\n      var currentPage = _ref.currentPage,\n          totalPages = _ref.totalPages;\n      return \"Exporting page \".concat(currentPage, \"/\").concat(totalPages);\n    }\n  },\n  MultiPageVerticalExporter: {\n    multipagevertical: 'Multiple pages (vertical)',\n    exportingPage: function exportingPage(_ref2) {\n      var currentPage = _ref2.currentPage,\n          totalPages = _ref2.totalPages;\n      return \"Exporting page \".concat(currentPage, \"/\").concat(totalPages);\n    }\n  } //endregion\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Grid/lib/Grid/localization/En.js?")},"../Scheduler/lib/Scheduler/localization/En.js":
/*!*****************************************************!*\
  !*** ../Scheduler/lib/Scheduler/localization/En.js ***!
  \*****************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Grid_localization_En_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Grid/localization/En.js */ \"../Grid/lib/Grid/localization/En.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Grid_localization_En_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  ResourceInfoColumn: {\n    eventCountText: function eventCountText(data) {\n      return data + ' event' + (data !== 1 ? 's' : '');\n    }\n  },\n  Dependencies: {\n    from: 'From',\n    to: 'To',\n    valid: 'Valid',\n    invalid: 'Invalid'\n  },\n  DependencyType: {\n    SS: 'SS',\n    SF: 'SF',\n    FS: 'FS',\n    FF: 'FF',\n    StartToStart: 'Start-to-Start',\n    StartToEnd: 'Start-to-End',\n    EndToStart: 'End-to-Start',\n    EndToEnd: 'End-to-End',\n    \"short\": ['SS', 'SF', 'FS', 'FF'],\n    \"long\": ['Start-to-Start', 'Start-to-End', 'End-to-Start', 'End-to-End']\n  },\n  DependencyEdit: {\n    From: 'From',\n    To: 'To',\n    Type: 'Type',\n    Lag: 'Lag',\n    'Edit dependency': 'Edit dependency',\n    Save: 'Save',\n    Delete: 'Delete',\n    Cancel: 'Cancel',\n    StartToStart: 'Start to Start',\n    StartToEnd: 'Start to End',\n    EndToStart: 'End to Start',\n    EndToEnd: 'End to End'\n  },\n  EventEdit: {\n    Name: 'Name',\n    Resource: 'Resource',\n    Start: 'Start',\n    End: 'End',\n    Save: 'Save',\n    Delete: 'Delete',\n    Cancel: 'Cancel',\n    'Edit event': 'Edit event',\n    Repeat: 'Repeat'\n  },\n  EventDrag: {\n    eventOverlapsExisting: 'Event overlaps existing event for this resource',\n    noDropOutsideTimeline: 'Event may not be dropped completely outside the timeline'\n  },\n  SchedulerBase: {\n    'Add event': 'Add event',\n    'Delete event': 'Delete event',\n    'Unassign event': 'Unassign event'\n  },\n  // TODO: 'headerContextMenu' is deprecated. Please see https://bryntum.com/docs/scheduler/#guides/upgrades/4.0.0.md for more information.\n  HeaderContextMenu: {\n    pickZoomLevel: 'Zoom',\n    activeDateRange: 'Date range',\n    startText: 'Start date',\n    endText: 'End date',\n    todayText: 'Today'\n  },\n  TimeAxisHeaderMenu: {\n    pickZoomLevel: 'Zoom',\n    activeDateRange: 'Date range',\n    startText: 'Start date',\n    endText: 'End date',\n    todayText: 'Today'\n  },\n  UndoRedo: {\n    UndoLastAction: 'Undo last action',\n    RedoLastAction: 'Redo last undone action'\n  },\n  EventFilter: {\n    filterEvents: 'Filter tasks',\n    byName: 'By name'\n  },\n  TimeRanges: {\n    showCurrentTimeLine: 'Show current timeline'\n  },\n  PresetManager: {\n    secondAndMinute: {\n      displayDateFormat: 'll LTS'\n    },\n    minuteAndHour: {\n      topDateFormat: 'ddd MM/DD, hA',\n      displayDateFormat: 'll LST'\n    },\n    hourAndDay: {\n      topDateFormat: 'ddd MM/DD',\n      middleDateFormat: 'LST',\n      displayDateFormat: 'll LST'\n    },\n    weekAndDay: {\n      displayDateFormat: 'll LST'\n    },\n    dayAndWeek: {\n      displayDateFormat: 'll LST'\n    }\n  },\n  RecurrenceConfirmationPopup: {\n    'delete-title': 'You are deleting an event',\n    'delete-all-message': 'Do you want to delete all occurrences of this event?',\n    'delete-further-message': 'Do you want to delete this and all future occurrences of this event, or only the selected occurrence?',\n    'delete-further-btn-text': 'Delete All Future Events',\n    'delete-only-this-btn-text': 'Delete Only This Event',\n    'update-title': 'You are changing a repeating event',\n    'update-all-message': 'Do you want to change all occurrences of this event?',\n    'update-further-message': 'Do you want to change only this occurrence of the event, or this and all future occurrences?',\n    'update-further-btn-text': 'All Future Events',\n    'update-only-this-btn-text': 'Only This Event',\n    Yes: 'Yes',\n    Cancel: 'Cancel',\n    width: 600\n  },\n  RecurrenceLegend: {\n    ' and ': ' and ',\n    // frequency patterns\n    Daily: 'Daily',\n    // Weekly on Sunday\n    // Weekly on Sun, Mon and Tue\n    'Weekly on {1}': function WeeklyOn1(_ref) {\n      var days = _ref.days;\n      return \"Weekly on \".concat(days);\n    },\n    // Monthly on 16\n    // Monthly on the last weekday\n    'Monthly on {1}': function MonthlyOn1(_ref2) {\n      var days = _ref2.days;\n      return \"Monthly on \".concat(days);\n    },\n    // Yearly on 16 of January\n    // Yearly on the last weekday of January and February\n    'Yearly on {1} of {2}': function YearlyOn1Of2(_ref3) {\n      var days = _ref3.days,\n          months = _ref3.months;\n      return \"Yearly on \".concat(days, \" of \").concat(months);\n    },\n    // Every 11 days\n    'Every {0} days': function Every0Days(_ref4) {\n      var interval = _ref4.interval;\n      return \"Every \".concat(interval, \" days\");\n    },\n    // Every 2 weeks on Sunday\n    // Every 2 weeks on Sun, Mon and Tue\n    'Every {0} weeks on {1}': function Every0WeeksOn1(_ref5) {\n      var interval = _ref5.interval,\n          days = _ref5.days;\n      return \"Every \".concat(interval, \" weeks on \").concat(days);\n    },\n    // Every 2 months on 16\n    // Every 2 months on the last weekday\n    'Every {0} months on {1}': function Every0MonthsOn1(_ref6) {\n      var interval = _ref6.interval,\n          days = _ref6.days;\n      return \"Every \".concat(interval, \" months on \").concat(days);\n    },\n    // Every 2 years on 16 of January\n    // Every 2 years on the last weekday of January and February\n    'Every {0} years on {1} of {2}': function Every0YearsOn1Of2(_ref7) {\n      var interval = _ref7.interval,\n          days = _ref7.days,\n          months = _ref7.months;\n      return \"Every \".concat(interval, \" years on \").concat(days, \" of \").concat(months);\n    },\n    // day position translations\n    position1: 'the first',\n    position2: 'the second',\n    position3: 'the third',\n    position4: 'the fourth',\n    position5: 'the fifth',\n    'position-1': 'the last',\n    // day options\n    day: 'day',\n    weekday: 'weekday',\n    'weekend day': 'weekend day',\n    // {0} - day position info (\"the last\"/\"the first\"/...)\n    // {1} - day info (\"Sunday\"/\"Monday\"/.../\"day\"/\"weekday\"/\"weekend day\")\n    // For example:\n    //  \"the last Sunday\"\n    //  \"the first weekday\"\n    //  \"the second weekend day\"\n    daysFormat: function daysFormat(_ref8) {\n      var position = _ref8.position,\n          days = _ref8.days;\n      return \"\".concat(position, \" \").concat(days);\n    }\n  },\n  RecurrenceEditor: {\n    'Repeat event': 'Repeat event',\n    Cancel: 'Cancel',\n    Save: 'Save',\n    Frequency: 'Frequency',\n    Every: 'Every',\n    DAILYintervalUnit: 'day(s)',\n    WEEKLYintervalUnit: 'week(s)',\n    MONTHLYintervalUnit: 'month(s)',\n    YEARLYintervalUnit: 'year(s)',\n    Each: 'Each',\n    'On the': 'On the',\n    'End repeat': 'End repeat',\n    'time(s)': 'time(s)'\n  },\n  RecurrenceDaysCombo: {\n    day: 'day',\n    weekday: 'weekday',\n    'weekend day': 'weekend day'\n  },\n  RecurrencePositionsCombo: {\n    position1: 'first',\n    position2: 'second',\n    position3: 'third',\n    position4: 'fourth',\n    position5: 'fifth',\n    'position-1': 'last'\n  },\n  RecurrenceStopConditionCombo: {\n    Never: 'Never',\n    After: 'After',\n    'On date': 'On date'\n  },\n  RecurrenceFrequencyCombo: {\n    Daily: 'Daily',\n    Weekly: 'Weekly',\n    Monthly: 'Monthly',\n    Yearly: 'Yearly'\n  },\n  RecurrenceCombo: {\n    None: 'None',\n    Custom: 'Custom...'\n  },\n  //region Features\n  Summary: {\n    'Summary for': function SummaryFor(date) {\n      return \"Summary for \".concat(date);\n    }\n  },\n  //endregion\n  //region Export\n  ScheduleRangeCombo: {\n    completeview: 'Complete schedule',\n    currentview: 'Visible schedule',\n    daterange: 'Date range',\n    completedata: 'Complete schedule (for all events)'\n  },\n  SchedulerExportDialog: {\n    'Schedule range': 'Schedule range',\n    'Export from': 'From',\n    'Export to': 'To'\n  },\n  ExcelExporter: {\n    'No resource assigned': 'No resource assigned'\n  },\n  //endregion\n  CrudManagerView: {\n    serverResponseLabel: 'Server response:'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Scheduler/lib/Scheduler/localization/En.js?")},"../SchedulerPro/lib/SchedulerPro/localization/En.js":
/*!***********************************************************!*\
  !*** ../SchedulerPro/lib/SchedulerPro/localization/En.js ***!
  \***********************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scheduler_localization_En_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Scheduler/localization/En.js */ \"../Scheduler/lib/Scheduler/localization/En.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Scheduler_localization_En_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  ConstraintTypePicker: {\n    none: 'None',\n    muststarton: 'Must start on',\n    mustfinishon: 'Must finish on',\n    startnoearlierthan: 'Start no earlier than',\n    startnolaterthan: 'Start no later than',\n    finishnoearlierthan: 'Finish no earlier than',\n    finishnolaterthan: 'Finish no later than'\n  },\n  CalendarField: {\n    'Default calendar': 'Default calendar'\n  },\n  TaskEditorBase: {\n    Information: 'Information',\n    Save: 'Save',\n    Cancel: 'Cancel',\n    Delete: 'Delete',\n    calculateMask: 'Calculating...',\n    saveError: 'Can\\'t save, please correct errors first'\n  },\n  TaskEdit: {\n    'Edit task': 'Edit task',\n    ConfirmDeletionTitle: 'Confirm deletion',\n    ConfirmDeletionMessage: 'Are you sure you want to delete the event?'\n  },\n  TaskEditor: {\n    editorWidth: '34em'\n  },\n  SchedulerTaskEditor: {\n    editorWidth: '32em'\n  },\n  SchedulerGeneralTab: {\n    labelWidth: '6em',\n    General: 'General',\n    Name: 'Name',\n    Resources: 'Resources',\n    '% complete': '% complete',\n    Duration: 'Duration',\n    Start: 'Start',\n    Finish: 'Finish'\n  },\n  GeneralTab: {\n    labelWidth: '6.5em',\n    General: 'General',\n    Name: 'Name',\n    '% complete': '% complete',\n    Duration: 'Duration',\n    Start: 'Start',\n    Finish: 'Finish',\n    Effort: 'Effort',\n    Dates: 'Dates'\n  },\n  SchedulerAdvancedTab: {\n    labelWidth: '13em',\n    Calendar: 'Calendar',\n    Advanced: 'Advanced',\n    'Manually scheduled': 'Manually scheduled',\n    'Constraint type': 'Constraint type',\n    'Constraint date': 'Constraint date'\n  },\n  AdvancedTab: {\n    labelWidth: '11.5em',\n    Advanced: 'Advanced',\n    Calendar: 'Calendar',\n    'Scheduling mode': 'Scheduling mode',\n    'Effort driven': 'Effort driven',\n    'Manually scheduled': 'Manually scheduled',\n    'Constraint type': 'Constraint type',\n    'Constraint date': 'Constraint date',\n    Constraint: 'Constraint',\n    Rollup: 'Rollup'\n  },\n  DependencyTab: {\n    Predecessors: 'Predecessors',\n    Successors: 'Successors',\n    ID: 'ID',\n    Name: 'Name',\n    Type: 'Type',\n    Lag: 'Lag',\n    cyclicDependency: 'Cyclic dependency has been detected',\n    invalidDependency: 'Invalid dependency'\n  },\n  NotesTab: {\n    Notes: 'Notes'\n  },\n  ResourcesTab: {\n    unitsTpl: function unitsTpl(_ref) {\n      var value = _ref.value;\n      return \"\".concat(value, \"%\");\n    },\n    Resources: 'Resources',\n    Resource: 'Resource',\n    Units: 'Units'\n  },\n  SchedulingModePicker: {\n    Normal: 'Normal',\n    'Fixed Duration': 'Fixed Duration',\n    'Fixed Units': 'Fixed Units',\n    'Fixed Effort': 'Fixed Effort'\n  },\n  ResourceHistogram: {\n    barTipInRange: '<b>{resource}</b> {startDate} - {endDate}<br>{allocated} of {available} allocated',\n    barTipOnDate: '<b>{resource}</b> on {startDate}<br>{allocated} of {available} allocated'\n  },\n  DurationColumn: {\n    Duration: 'Duration'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../SchedulerPro/lib/SchedulerPro/localization/En.js?")},"./examples/_shared/locales/examples.locale.En.js":
/*!********************************************************!*\
  !*** ./examples/_shared/locales/examples.locale.En.js ***!
  \********************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n/* harmony import */ var _lib_Gantt_localization_En_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/Gantt/localization/En.js */ \"./lib/Gantt/localization/En.js\");\n/* harmony import */ var _shared_locale_En_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.locale.En.js */ \"./examples/_shared/locales/shared.locale.En.js\");\n\n\n\nvar examplesEnLocale = _lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mergeLocales(_shared_locale_En_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  \"extends\": 'En',\n  Baselines: {\n    baseline: 'base line',\n    Complete: 'Complete',\n    'Delayed start by': 'Delayed start by',\n    Duration: 'Duration',\n    End: 'End',\n    'Overrun by': 'Overrun by',\n    Start: 'Start'\n  },\n  Button: {\n    Create: 'Create',\n    'Critical paths': 'Critical paths',\n    Edit: 'Edit',\n    'Export to PDF': 'Export to PDF',\n    Features: 'Features',\n    Settings: 'Settings'\n  },\n  DateColumn: {\n    Deadline: 'Deadline'\n  },\n  Field: {\n    'Find tasks by name': 'Find tasks by name',\n    'Project start': 'Project start'\n  },\n  GanttToolbar: {\n    'First select the task you want to edit': 'First select the task you want to edit',\n    'New task': 'New task'\n  },\n  Indicators: {\n    Indicators: 'Indicators',\n    lateDates: 'Late start/end',\n    constraintDate: 'Constraint'\n  },\n  MenuItem: {\n    'Draw dependencies': 'Draw dependencies',\n    'Enable cell editing': 'Enable cell editing',\n    'Hide schedule': 'Hide schedule',\n    'Highlight non-working time': 'Highlight non-working time',\n    'Project lines': 'Project lines',\n    'Show baselines': 'Show baselines',\n    'Show progress line': 'Show progress line',\n    'Show rollups': 'Show rollups',\n    'Task labels': 'Task labels'\n  },\n  Slider: {\n    'Animation duration ': 'Animation duration',\n    'Bar margin': 'Bar margin',\n    'Row height': 'Row height'\n  },\n  StartDateColumn: {\n    'Start date': 'Start date'\n  },\n  StatusColumn: {\n    Status: 'Status'\n  },\n  TaskTooltip: {\n    'Scheduling Mode': 'Scheduling Mode',\n    Calendar: 'Calendar',\n    Critical: 'Critical'\n  },\n  Tooltip: {\n    'Adjust settings': 'Adjust settings',\n    'Collapse all': 'Collapse all',\n    'Create new task': 'Create new task',\n    'Edit selected task': 'Edit selected task',\n    'Expand all': 'Expand all',\n    'Highlight critical paths': 'Highlight critical paths',\n    'Next time span': 'Next time span',\n    'Previous time span': 'Previous time span',\n    'Toggle features': 'Toggle features',\n    'Zoom in': 'Zoom in',\n    'Zoom out': 'Zoom out',\n    'Zoom to fit': 'Zoom to fit'\n  }\n});\n_lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publishLocale('En', _lib_Gantt_localization_En_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n_lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publishLocale('EnExamples', examplesEnLocale);\n/* harmony default export */ __webpack_exports__[\"default\"] = (examplesEnLocale);\n\n//# sourceURL=webpack:///./examples/_shared/locales/examples.locale.En.js?")},"./examples/_shared/locales/shared.locale.En.js":
/*!******************************************************!*\
  !*** ./examples/_shared/locales/shared.locale.En.js ***!
  \******************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  \"extends\": 'En',\n  Button: {\n    'Display hints': 'Display hints',\n    Apply: 'Apply'\n  },\n  Checkbox: {\n    'Auto apply': 'Auto apply',\n    Automatically: 'Automatically'\n  },\n  CodeEditor: {\n    'Code editor': 'Code editor',\n    'Download code': 'Download code'\n  },\n  Combo: {\n    'Select theme': 'Select theme',\n    'Select locale': 'Select locale',\n    'Select size': 'Select size'\n  },\n  Shared: {\n    'Full size': 'Full size',\n    'Locale changed': 'Locale changed',\n    'Phone size': 'Phone size'\n  },\n  Tooltip: {\n    'Click to show info and switch theme or locale': 'Click to show info and switch theme or locale',\n    'Click to show the built in code editor': 'Click to show the built in code editor',\n    CheckAutoHints: 'Check to automatically display hints when loading the example',\n    Fullscreen: 'Fullscreen'\n  }\n});\n\n//# sourceURL=webpack:///./examples/_shared/locales/shared.locale.En.js?")},"./lib/Gantt/localization/En.js":
/*!**************************************!*\
  !*** ./lib/Gantt/localization/En.js ***!
  \**************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SchedulerPro_localization_En_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SchedulerPro/localization/En.js */ \"../SchedulerPro/lib/SchedulerPro/localization/En.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_SchedulerPro_localization_En_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  //region Common\n  Object: {\n    Save: 'Save'\n  },\n  //endregion\n  //region Columns\n  AddNewColumn: {\n    'New Column': 'New Column'\n  },\n  CalendarColumn: {\n    Calendar: 'Calendar'\n  },\n  EarlyStartDateColumn: {\n    'Early Start': 'Early Start'\n  },\n  EarlyEndDateColumn: {\n    'Early End': 'Early End'\n  },\n  LateStartDateColumn: {\n    'Late Start': 'Late Start'\n  },\n  LateEndDateColumn: {\n    'Late End': 'Late End'\n  },\n  TotalSlackColumn: {\n    'Total Slack': 'Total Slack'\n  },\n  ConstraintDateColumn: {\n    'Constraint Date': 'Constraint Date'\n  },\n  ConstraintTypeColumn: {\n    'Constraint Type': 'Constraint Type'\n  },\n  DeadlineDateColumn: {\n    Deadline: 'Deadline'\n  },\n  DependencyColumn: {\n    'Invalid dependency': 'Invalid dependency found, change reverted'\n  },\n  DurationColumn: {\n    Duration: 'Duration'\n  },\n  EffortColumn: {\n    Effort: 'Effort'\n  },\n  EndDateColumn: {\n    Finish: 'Finish'\n  },\n  EventModeColumn: {\n    'Event mode': 'Event mode',\n    Manual: 'Manual',\n    Auto: 'Auto'\n  },\n  ManuallyScheduledColumn: {\n    'Manually scheduled': 'Manually scheduled'\n  },\n  MilestoneColumn: {\n    Milestone: 'Milestone'\n  },\n  NameColumn: {\n    Name: 'Name'\n  },\n  NoteColumn: {\n    Note: 'Note'\n  },\n  PercentDoneColumn: {\n    '% Done': '% Done'\n  },\n  PredecessorColumn: {\n    Predecessors: 'Predecessors'\n  },\n  ResourceAssignmentColumn: {\n    'Assigned Resources': 'Assigned Resources',\n    'more resources': 'more resources'\n  },\n  RollupColumn: {\n    Rollup: 'Rollup'\n  },\n  SchedulingModeColumn: {\n    'Scheduling Mode': 'Scheduling Mode'\n  },\n  SequenceColumn: {\n    Sequence: 'Sequence'\n  },\n  ShowInTimelineColumn: {\n    'Show in timeline': 'Show in timeline'\n  },\n  StartDateColumn: {\n    Start: 'Start'\n  },\n  SuccessorColumn: {\n    Successors: 'Successors'\n  },\n  WBSColumn: {\n    WBS: 'WBS',\n    renumber: 'Renumber'\n  },\n  //endregion\n  DependencyField: {\n    'invalidDependencyFormat': 'Invalid dependency format'\n  },\n  ProjectLines: {\n    'Project Start': 'Project start',\n    'Project End': 'Project end'\n  },\n  TaskTooltip: {\n    Start: 'Start',\n    End: 'End',\n    Duration: 'Duration',\n    Complete: 'Complete'\n  },\n  AssignmentGrid: {\n    Name: 'Resource name',\n    Units: 'Units',\n    unitsTpl: function unitsTpl(_ref) {\n      var value = _ref.value;\n      return value ? value + '%' : '';\n    }\n  },\n  GanttBase: {\n    propagating: 'Calculating project',\n    storePopulation: 'Loading data'\n  },\n  Gantt: {\n    Edit: 'Edit task',\n    Indent: 'Indent',\n    Outdent: 'Outdent',\n    'Convert to milestone': 'Convert to milestone',\n    Add: 'Add...',\n    'New task': 'New task',\n    'New milestone': 'New milestone',\n    'Task above': 'Task above',\n    'Task below': 'Task below',\n    'Delete task': 'Delete task',\n    Milestone: 'Milestone',\n    'Sub-task': 'Subtask',\n    Successor: 'Successor',\n    Predecessor: 'Predecessor',\n    changeRejected: 'Scheduling engine rejected the changes'\n  },\n  Indicators: {\n    earlyDates: 'Early start/end',\n    lateDates: 'Late start/end',\n    Start: 'Start',\n    End: 'End',\n    deadlineDate: 'Deadline'\n  },\n  TaskEditor: {\n    editorWidth: '44em'\n  }\n}); // Trim not used properties\n\n_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].trimLocale(locale, {\n  EventEdit: ['Repeat'],\n  RecurrenceCombo: {},\n  RecurrenceConfirmationPopup: {},\n  RecurrenceDaysCombo: {},\n  RecurrenceEditor: {},\n  RecurrenceFrequencyCombo: {},\n  RecurrenceLegend: {},\n  RecurrencePositionsCombo: {},\n  RecurrenceStopConditionCombo: {}\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///./lib/Gantt/localization/En.js?")}})}));