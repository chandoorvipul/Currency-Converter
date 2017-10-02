// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(ical(1,2,1),65.28, 'Tested with US DOLLAR');
    assert.equal(ical(1,3,1),0.75, 'Tested with US DLLAR');
    assert.equal(ical(1,4,1),1.28, 'Tested with US DOLLAR');
    assert.equal(ical(1,1,1),1, 'Tested with US DOLLAR');

    assert.equal(ical(2,1,1),0.015, 'Tested with INDIA RUPEES');
    assert.equal(ical(2,2,1),1, 'Tested with INDIA RUPEES');
    assert.equal(ical(2,3,1),0.011, 'Tested with INDIA RUPEES');
    assert.equal(ical(2,4,1),0.020, 'Tested with INDIA RUPEES');

    assert.equal(ical(3,1,1),1.34, 'Tested with BRITISH POUND');
    assert.equal(ical(3,2,1),87.37, 'Tested with BRITISH POUND');
    assert.equal(ical(3,3,1),1, 'Tested with BRITISH POUND');
    assert.equal(ical(3,4,1),1.71, 'Tested with BRITISH POUND');

    assert.equal(ical(4,1,1),0.78, 'Tested with AUSTRALIAN DOLLAR');
    assert.equal(ical(4,2,1),51.11, 'Tested with AUSTRALIAN DOLLAR');
    assert.equal(ical(4,3,1),0.58, 'Tested with AUSTRALIAN DOLLAR');
    assert.equal(ical(4,4,1),1, 'Tested with AUSTRALIAN DOLLAR');
    

    // assert.equal(App.calculateArea(-5, -5), 1, 'Tested with two negative numbers. Any arguments less than 1 will be set to 1.');
    // assert.equal(App.calculateArea(500, 500), 10000, 'Tested with two large positive numbers. Any arguments greater than 100 will be set to 100.');
        //throws( block                                    [, expected ] [, message ] ) 
    // assert.throws(function () { App.calculateArea(null); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
    //     //throws( block                                    [, expected ] [, message ] ) 
    // assert.throws(function () { App.calculateArea("Christine","Christine"); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});

