'use strict';

const euclid = function(...numbers) {
    if (numbers.length === 2) {
        if (!numbers[1]) {
            return numbers[0];
        } else {
            return euclid(numbers[1], numbers[0] % numbers[1]);
        }
    } else {
        let res = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            res = euclid(res, numbers[i])
        }
        return res
    }
}