describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
		removeAllVowels = $filter('removeAllVowels');
	}));

	it('should remove all vowels from a string', function() {
		expect(removeAllVowels("this")).toEqual('ths');
	});

});
