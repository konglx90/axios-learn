/**
 * Created by kong90 on 17-8-13.
 */

function func1(config) {
    console.log('func 1', config);
    // throw new Error;
    return config
}

function func1Reject() {
    console.log('func 1 reject');
}

function func2(config) {
    console.log('func 2', config);
    return config
}

function func2Reject() {
    console.log('func 2 reject');
}

function func3(config) {
    console.log('func 3', config);
    return config
}

function func3Reject() {
    console.log('func 3 reject');
}

var chain = [func1, func1Reject, func2, func2Reject, func3, func3Reject];

var config = {
    timeout: 1
};

var promise = Promise.resolve(config);

while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift())
}

console.log(promise);


