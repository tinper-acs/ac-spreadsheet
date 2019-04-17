'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _handsontable = require('handsontable');

var _handsontable2 = _interopRequireDefault(_handsontable);

var _setting = require('./setting.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// import './Spreadsheet.scss';

var propTypes = {};

var HotTable = function (_Component) {
  _inherits(HotTable, _Component);

  function HotTable(props) {
    _classCallCheck(this, HotTable);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._setHotElementRef = function (element) {
      _this.hotElementRef = element;
    };

    return _this;
  }

  HotTable.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    this.updateHot((0, _setting.getSettings)(nextProps));
    return false;
  };

  HotTable.prototype.componentDidMount = function componentDidMount() {
    var newSettings = (0, _setting.getSettings)(this.props);
    this.hotInstance = new _handsontable2["default"](this.hotElementRef, newSettings);
  };

  HotTable.prototype.componentWillUnmount = function componentWillUnmount() {
    this.hotInstance.destroy();
  };

  HotTable.prototype.updateHot = function updateHot(newSettings) {
    this.hotInstance.updateSettings(newSettings, false);
  };

  HotTable.prototype.render = function render() {
    var props = this.props;
    var randomId = 'hot-' + Math.random().toString(36).substring(5);
    var _props$id = props.id,
        id = _props$id === undefined ? randomId : _props$id,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        _props$style = props.style,
        style = _props$style === undefined ? {} : _props$style;


    return _react2["default"].createElement('div', { ref: this._setHotElementRef,
      id: id,
      className: className,
      style: style });
  };

  return HotTable;
}(_react.Component);

exports["default"] = HotTable;
module.exports = exports['default'];