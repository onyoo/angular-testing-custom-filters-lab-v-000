describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter objects via favorite food property', function() {
		var people = [{
			name: 'yu-jin',
			favoriteFood: '짱퐁'
		},{
			name: 'daejun',
			favoriteFood: '양갈비'
		},{
			name: 'onyoo',
			favoriteFood: '양갈비'
		},{
			name: 'miran',
			favoriteFood: '김밥'
		}];

		var filteredPeeps = $filter('favoriteFood')(people,'양갈비');
		expect(filteredPeeps.length).toEqual(2);
		expect(filteredPeeps[0]).toEqual({name: 'daejun', favoriteFood: '양갈비'});
	});

});

// filter an array of objects depending on the
// favoriteFood property in the object. Test that
// this filter is filtering a mocked example list of
// people correctly (create a small array of fake people
// objects with a name and favoriteFood).
