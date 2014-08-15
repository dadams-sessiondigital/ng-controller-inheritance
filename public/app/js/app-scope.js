angular.module('app', [])

.factory('BaseCtrl', function() {
	function BaseCtrl() {
		this.name = 'baseCtrl';
		this.message = 'I am cool';

		this.getName = function() {
			return this.name;
		};
		this.getMessage = function() {
			return this.message;
		}

		this.$watch('name', function(name) {
			console.log(name);
		})
	}

	return BaseCtrl;
})
.controller('baseCtrl', function($scope, BaseCtrl) {
	BaseCtrl.call($scope);
})

.factory('ChildCtrl', function(BaseCtrl) {
	var i = 0;

	function ChildCtrl() {
		BaseCtrl.call(this);
		this.name = 'child';

		this.alertMessage = function() {
			alert(this.message);
		},
		this.changeName = function() {
			this.name = this.getName() + i++;
		}
	}

	return ChildCtrl;

})
.controller('childCtrl', function($scope, ChildCtrl) {
	ChildCtrl.call($scope);
})