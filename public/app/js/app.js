angular.module('app', []);

(function() {
/**
 * Base constructor
 */
	function BaseCtrl($scope) {
		this.name = 'baseCtrl';
		this.message = 'I am cool';

		$scope.$watch(function() {
			return this.name;
		}.bind(this), function(name) {
			console.log(name);
		})
	}
	BaseCtrl.prototype.getName = function() {
		return this.name;
	};
	BaseCtrl.prototype.getMessage = function() {
		return this.message;
	};

	angular.module('app')
		.controller('baseCtrl', BaseCtrl);



/**
 * Prototypical inheritance
 */
	function ChildCtrl($scope) {
		BaseCtrl.apply(this, arguments);
		this.name = 'child';
	}

	ChildCtrl.prototype = Object.create(BaseCtrl.prototype);

	ChildCtrl.prototype.showName = function() {
		alert(this.getName());
	};

	angular.module('app')
		.controller('childCtrl', ChildCtrl);


/**
 * Mixin type inheritance
 */
	function MixinCtrl($scope) {
		BaseCtrl.apply(this, arguments);
		this.name = 'Mixin';
	}

	MixinCtrl.prototype = angular.extend(MixinCtrl.prototype, BaseCtrl.prototype);

	MixinCtrl.prototype.showName = function() {
		alert(this.getName());
	};

	MixinCtrl.prototype.changeName = function() {
		this.name = this.getName() + Math.round(Math.random() * 10);
	};

	angular.module('app')
		.controller('mixinCtrl', MixinCtrl);

})();