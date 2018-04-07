const add = (a, b) => a + b;
const asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};
const square = x => x * x;
const asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
};
const setName = (user, fullName) => {
    const name = fullName.split(' ');
    return {
        ...user,
        firstName: name[0],
        lastName: name[1]
    };
};
module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
}