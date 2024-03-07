// This function is for validateing the value is an Promise
export function isPromise(v) {
    return Object.prototype.toString.call(v) === "[object Promise]";
}