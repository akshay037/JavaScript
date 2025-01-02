function check8(x, y) {
    if (x == 8 || y == 8) {
        return true;
    }

    if (x + y == 8 || Math.abs(x - y) == 8) {
        return true;
    }

    return false;
}

console.log(check8(7, 8));
console.log(check8(16, 8));
console.log(check8(24, 32))