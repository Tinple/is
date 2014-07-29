var should = require('should'),
	is = require('../is.js');

describe('is', function () {
	it('five primitive data types', function (done) {
		var Undefined;
		is.Null(null).should.equal(true);
		is.Null('').should.equal(false);
		is.Undefined(Undefined).should.equal(true);
		is.Undefined(is).should.equal(false);
		is.Boolean(false).should.equal(true);
		is.Boolean('').should.equal(false);
		is.String('').should.equal(true);
		is.String({}).should.equal(false);
		is.Number(9).should.equal(true);
		is.Number([]).should.equal(false);
		is.Number('').should.equal(false);
		done();
	});

	it('Object and Array', function (done) {
		is.Object({}).should.equal(true);
		is.Object([]).should.equal(true);
		is.Object('').should.equal(false);
		is.Array([]).should.equal(true);
		is.Array({}).should.equal(false);
		is.Function(function () {}).should.equal(true);
		is.Function(new RegExp('/./')).should.equal(false);
		done();
	});

	it('is extension', function (done) {
		(function (a) {
			is.Arguments('a').should.equal(false);
			is.Arguments(arguments).should.equal(true);
		})('a');
		is.Empty([]).should.equal(true);
		is.Empty({}).should.equal(true);
		is.Empty('').should.equal(true);
		is.Empty(undefined).should.equal(true);
		is.Finite(+999999999).should.equal(true);
		is.Finite(Infinity).should.equal(false);
		is.Equal([], []).should.equal(true);
		is.Equal({name: 'timi'}, {name: 'timi'}).should.equal(true);
		done();
	});
})