/**
 * @author markusjuopperi
 */
var app = angular.module('kauppapaikka', ['ngResource', 'angularUtils.directives.dirPagination']);
var api_url = "http://mepa-store-api.herokuapp.com/marketads/:id";

app.factory("Entry", function($resource) {
	return $resource(api_url);
});

app.controller('ResourceController', function($scope, Entry) {

	var entry = Entry.get({
		id : $scope.id
	}, function() {
		console.log(entry);
	});
	// get() returns a single entry

	$scope.ads = Entry.query(function() {
		console.log(entries);
	});
	//query() returns all the entries
	$scope.entry = new Entry();
	//You can instantiate resource class

	$scope.entry.data = 'some data';

	Entry.save($scope.entry, function() {
		//data saved. do something here.
	});
	//saves an entry. Assuming $scope.entry is the Entry object
});

app.controller('NavBarController', function($scope) {
	this.tab = 1;
	this.selectTab = function(setTab) {
		this.tab = setTab;

	};
	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};
});

app.controller('formController', function($scope) {

});



