angular.module('app', [])

.factory('BaseCtrl', function() {
	function BaseCtrl() {
		this.name = 'baseCtrl';
		this.message = 'I am cool';
	}
	BaseCtrl.prototype.getName = function() {
		return this.name;
	};
	BaseCtrl.prototype.getMessage = function() {
		return this.message;
	};

	return BaseCtrl;
})
.controller('baseCtrl', function(BaseCtrl) {
	return new BaseCtrl();
})

.factory('ChildCtrl', function(BaseCtrl) {
	function ChildCtrl() {
		BaseCtrl.call(this, arguments);
		this.name = 'child';
	}

	ChildCtrl.prototype = Object.create(BaseCtrl.prototype);

	ChildCtrl.prototype.showName = function() {
		alert(this.getName());
	};

	return ChildCtrl;
})
.controller('childCtrl', function(ChildCtrl) {
	return new ChildCtrl();
})

.factory('MixinCtrl', function(BaseCtrl) {
	function MixinCtrl() {
		BaseCtrl.call(this, arguments);
		this.name = 'Mixin';
	}

	MixinCtrl.prototype = angular.extend(MixinCtrl.prototype, BaseCtrl.prototype);

	MixinCtrl.prototype.showName = function() {
		alert(this.getName());
	};

	return MixinCtrl;
})
.controller('mixinCtrl', function(MixinCtrl, BaseCtrl) {
	return new MixinCtrl();
})