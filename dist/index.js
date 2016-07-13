'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story2 = require('./components/Story');

var _Story3 = _interopRequireDefault(_Story2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Story = exports.Story = _Story3.default;

var defaultOptions = {
  inline: true,
  header: true,
  source: true
};

exports.default = {
  addWithTemplate: function addWithTemplate(storyName) {
    var info = void 0;
    var storyFn = void 0;
    var _options = void 0;

    switch (arguments.length - 1) {
      case 2:
        // function and options
        if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'function') {
          storyFn = arguments.length <= 1 ? undefined : arguments[1];
          _options = arguments.length <= 2 ? undefined : arguments[2];
        } else {
          // info and function
          info = arguments.length <= 1 ? undefined : arguments[1];
          storyFn = arguments.length <= 2 ? undefined : arguments[2];
        }
        break;
      case 3:
        info = arguments.length <= 1 ? undefined : arguments[1];
        storyFn = arguments.length <= 2 ? undefined : arguments[2];
        _options = arguments.length <= 3 ? undefined : arguments[3];
        break;
      default:
        storyFn = arguments.length <= 1 ? undefined : arguments[1];
    }
    var options = (0, _extends3.default)({}, defaultOptions, _options);

    this.add(storyName, function (context) {
      var props = {
        info: info,
        context: context,
        showInline: Boolean(options.inline),
        showHeader: Boolean(options.header),
        showSource: Boolean(options.source),
        propTables: options.propTables
      };

      return _react2.default.createElement(
        Story,
        props,
        storyFn(context)
      );
    });
  }
};