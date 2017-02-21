webpackHotUpdate(0,{

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(102); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(102);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TitleView = __webpack_require__(236);
	
	var _TitleView2 = _interopRequireDefault(_TitleView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
		_inherits(Home, _React$Component);
	
		function Home() {
			_classCallCheck(this, Home);
	
			var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
	
			_this.state = {
				view: 'Home',
				join: 'vanish',
				new: 'vanish',
				createRoomName: '',
				joinRoomName: ''
			};
			_this.createRoomButton = _this.createRoomButton.bind(_this);
			_this.joinRoomButton = _this.joinRoomButton.bind(_this);
			_this.newButtonClick = _this.newButtonClick.bind(_this);
			_this.joinButtonClick = _this.joinButtonClick.bind(_this);
	
			return _this;
		}
	
		_createClass(Home, [{
			key: 'createRoomButton',
			value: function createRoomButton() {
				window.socket.emit('createRoom', this.state.createRoomName);
				this.setState({
					view: 'vanish'
				});
			}
		}, {
			key: 'joinRoomButton',
			value: function joinRoomButton() {
				window.socket.emit('joinRoom', this.state.joinRoomName);
				this.setState({
					view: 'vanish'
				});
			}
		}, {
			key: 'newButtonClick',
			value: function newButtonClick() {
				this.setState({
					new: 'NewView'
				});
			}
		}, {
			key: 'joinButtonClick',
			value: function joinButtonClick() {
				this.setState({
					join: 'JoinView'
				});
			}
		}, {
			key: 'handleChange',
			value: function handleChange(e) {
				this.setState(_defineProperty({}, e.target.name, e.target.value));
				console.log(this.state);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: this.state.view },
					_react2.default.createElement(_TitleView2.default, null),
					_react2.default.createElement(
						'div',
						{ className: 'NewView' },
						_react2.default.createElement(
							'button',
							{ className: 'optionsButton', onClick: this.newButtonClick },
							'New Game'
						),
						_react2.default.createElement(
							'div',
							{ className: this.state.new },
							'Room Name:',
							_react2.default.createElement('input', { onChange: this.handleChange.bind(this), name: 'createRoomName' }),
							_react2.default.createElement(
								'button',
								{ className: 'Play', onClick: this.createRoomButton },
								'Create Room'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'JoinView' },
						_react2.default.createElement(
							'button',
							{ className: 'optionsButton', onClick: this.joinButtonClick },
							'Join Game'
						),
						_react2.default.createElement(
							'div',
							{ className: this.state.join },
							'Room Name:',
							_react2.default.createElement(
								'input',
								{ onChange: this.handleChange.bind(this), name: 'joinRoomName' },
								' '
							),
							_react2.default.createElement(
								'button',
								{ className: 'Play', onClick: this.joinRoomButton },
								'Join Room'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null)
						)
					)
				);
			}
		}]);
	
		return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(232); if (makeExportsHot(module, __webpack_require__(102))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "HomeView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lVmlldy5qc3g/NTFiMiJdLCJuYW1lcyI6WyJIb21lIiwic3RhdGUiLCJ2aWV3Iiwiam9pbiIsIm5ldyIsImNyZWF0ZVJvb21OYW1lIiwiam9pblJvb21OYW1lIiwiY3JlYXRlUm9vbUJ1dHRvbiIsImJpbmQiLCJqb2luUm9vbUJ1dHRvbiIsIm5ld0J1dHRvbkNsaWNrIiwiam9pbkJ1dHRvbkNsaWNrIiwid2luZG93Iiwic29ja2V0IiwiZW1pdCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGtCQUFjO0FBQUE7O0FBQUE7O0FBRWIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU0sTUFETTtBQUVaQyxVQUFNLFFBRk07QUFHWkMsU0FBSyxRQUhPO0FBSVRDLG9CQUFnQixFQUpQO0FBS1RDLGtCQUFjO0FBTEwsSUFBYjtBQU9FLFNBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsT0FBdEI7QUFDQSxTQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JGLElBQXBCLE9BQXRCO0FBQ0EsU0FBS0csZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCSCxJQUFyQixPQUF2Qjs7QUFaVztBQWNiOzs7O3NDQUVrQjtBQUNoQkksV0FBT0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CLFlBQW5CLEVBQWlDLEtBQUtiLEtBQUwsQ0FBV0ksY0FBNUM7QUFDRixTQUFLVSxRQUFMLENBQWM7QUFDYmIsV0FBTTtBQURPLEtBQWQ7QUFHQTs7O29DQUVpQjtBQUNmVSxXQUFPQyxNQUFQLENBQWNDLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsS0FBS2IsS0FBTCxDQUFXSyxZQUExQztBQUNBLFNBQUtTLFFBQUwsQ0FBYztBQUNaYixXQUFNO0FBRE0sS0FBZDtBQUdEOzs7b0NBRWU7QUFDaEIsU0FBS2EsUUFBTCxDQUFjO0FBQ2JYLFVBQUs7QUFEUSxLQUFkO0FBR0E7OztxQ0FFaUI7QUFDakIsU0FBS1csUUFBTCxDQUFjO0FBQ2JaLFdBQU07QUFETyxLQUFkO0FBR0E7OztnQ0FFYWEsQyxFQUFHO0FBQ2QsU0FBS0QsUUFBTCxxQkFDR0MsRUFBRUMsTUFBRixDQUFTQyxJQURaLEVBQ21CRixFQUFFQyxNQUFGLENBQVNFLEtBRDVCO0FBR0FDLFlBQVFDLEdBQVIsQ0FBWSxLQUFLcEIsS0FBakI7QUFDRDs7OzRCQUVRO0FBQ1AsV0FDRTtBQUFBO0FBQUEsT0FBSyxXQUFXLEtBQUtBLEtBQUwsQ0FBV0MsSUFBM0I7QUFDQyw2REFERDtBQUVDO0FBQUE7QUFBQSxRQUFLLFdBQVUsU0FBZjtBQUNDO0FBQUE7QUFBQSxTQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLUSxjQUFoRDtBQUFBO0FBQUEsT0FERDtBQUVDO0FBQUE7QUFBQSxTQUFLLFdBQVcsS0FBS1QsS0FBTCxDQUFXRyxHQUEzQjtBQUFBO0FBRUEsZ0RBQU8sVUFBVSxLQUFLa0IsWUFBTCxDQUFrQmQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBakIsRUFBK0MsTUFBSyxnQkFBcEQsR0FGQTtBQUdBO0FBQUE7QUFBQSxVQUFRLFdBQVUsTUFBbEIsRUFBeUIsU0FBUyxLQUFLRCxnQkFBdkM7QUFBQTtBQUFBLFFBSEE7QUFJQSxnREFKQTtBQUtBO0FBTEE7QUFGRCxNQUZEO0FBWUM7QUFBQTtBQUFBLFFBQUssV0FBVSxVQUFmO0FBQ0M7QUFBQTtBQUFBLFNBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtJLGVBQWhEO0FBQUE7QUFBQSxPQUREO0FBRUM7QUFBQTtBQUFBLFNBQUssV0FBVyxLQUFLVixLQUFMLENBQVdFLElBQTNCO0FBQUE7QUFFQTtBQUFBO0FBQUEsVUFBTyxVQUFVLEtBQUttQixZQUFMLENBQWtCZCxJQUFsQixDQUF1QixJQUF2QixDQUFqQixFQUErQyxNQUFLLGNBQXBEO0FBQUE7QUFBQSxRQUZBO0FBR0E7QUFBQTtBQUFBLFVBQVEsV0FBVSxNQUFsQixFQUF5QixTQUFTLEtBQUtDLGNBQXZDO0FBQUE7QUFBQSxRQUhBO0FBSUEsZ0RBSkE7QUFLQTtBQUxBO0FBRkQ7QUFaRCxLQURGO0FBeUJEOzs7O0dBNUVnQixnQkFBTWMsUzs7bUJBK0VWdkIsSSIsImZpbGUiOiIwLmRiYWIzZWI0YmQ2MzJmMjE1YjE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZVZpZXcuanN4J1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR2aWV3OiAnSG9tZScsXHJcblx0XHRcdGpvaW46ICd2YW5pc2gnLFxyXG5cdFx0XHRuZXc6ICd2YW5pc2gnLFxyXG4gICAgICBjcmVhdGVSb29tTmFtZTogJycsXHJcbiAgICAgIGpvaW5Sb29tTmFtZTogJydcclxuXHRcdH1cclxuICAgIHRoaXMuY3JlYXRlUm9vbUJ1dHRvbiA9IHRoaXMuY3JlYXRlUm9vbUJ1dHRvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmpvaW5Sb29tQnV0dG9uID0gdGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLm5ld0J1dHRvbkNsaWNrID0gdGhpcy5uZXdCdXR0b25DbGljay5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmpvaW5CdXR0b25DbGljayA9IHRoaXMuam9pbkJ1dHRvbkNsaWNrLmJpbmQodGhpcylcclxuXHJcblx0fVxyXG5cclxuXHRjcmVhdGVSb29tQnV0dG9uKCkge1xyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0dmlldzogJ3ZhbmlzaCdcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuICBqb2luUm9vbUJ1dHRvbigpIHtcclxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB0aGlzLnN0YXRlLmpvaW5Sb29tTmFtZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlldzogJ3ZhbmlzaCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHRuZXdCdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRuZXc6ICdOZXdWaWV3J1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGpvaW5CdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRqb2luOiAnSm9pblZpZXcnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUudmlld30+XHJcbiAgICAgIFx0PFRpdGxlIC8+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJOZXdWaWV3XCI+XHJcblx0ICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbnNCdXR0b25cIiBvbkNsaWNrPXt0aGlzLm5ld0J1dHRvbkNsaWNrfT5OZXcgR2FtZTwvYnV0dG9uPlxyXG5cdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubmV3fT5cclxuXHQgICAgICBcdFJvb20gTmFtZTpcclxuXHQgICAgICBcdDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gbmFtZT1cImNyZWF0ZVJvb21OYW1lXCI+PC9pbnB1dD5cclxuXHQgICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlUm9vbUJ1dHRvbn0+Q3JlYXRlIFJvb208L2J1dHRvbj5cclxuXHQgICAgICBcdDxici8+XHJcblx0ICAgICAgXHQ8YnIvPlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJKb2luVmlld1wiPlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25zQnV0dG9uXCIgb25DbGljaz17dGhpcy5qb2luQnV0dG9uQ2xpY2t9PkpvaW4gR2FtZTwvYnV0dG9uPlxyXG5cdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuam9pbn0+XHJcblx0ICAgICAgXHRSb29tIE5hbWU6XHJcblx0ICAgICAgXHQ8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IG5hbWU9XCJqb2luUm9vbU5hbWVcIj4gPC9pbnB1dD5cclxuICAgICAgXHRcdDxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuam9pblJvb21CdXR0b259PkpvaW4gUm9vbTwvYnV0dG9uPlxyXG4gICAgICBcdFx0PGJyLz5cclxuICAgICAgXHRcdDxici8+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuICAgICAgXHQ8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZVZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==