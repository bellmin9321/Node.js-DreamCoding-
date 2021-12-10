'use strict'

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfiled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'))
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
    .then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
