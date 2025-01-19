# Firebase Data Access Before Promise Resolution Bug

This repository demonstrates a common issue when working with Firebase: attempting to access data from a document snapshot before the asynchronous operation has completed. This often results in unexpected `null` or `undefined` values. The solution involves properly handling promises using async/await or .then().

## Bug
The `firebaseBug.js` file shows how improperly accessing snapshot data can lead to errors.  The code attempts to access data immediately without awaiting the promise's resolution.

## Solution
The `firebaseBugSolution.js` file demonstrates the correct approach, using async/await to ensure the promise resolves before accessing the data.