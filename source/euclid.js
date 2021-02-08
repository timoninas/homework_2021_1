'use strict';

/**
 * Находит наибольший общий делитель алгоритмом Евклида.
 * @function euclid
 * @param {...number} numbers - Переменное число параметров.
 */
const euclid = (...numbers) => {
    // Проверка на корректность входных данных
    numbers.forEach((item) => {
        if (typeof item !== 'number') {
            throw TypeError('Incorrect input')
        }
    })

    // Алгоритм Евклида
    return numbers.reduce((result, currentValue) => {
        let a = result;
        let b = currentValue;
        while (a !== b) {
            if (a > b) {
                const tmp = a;
                a = b;
                b = tmp;
            }
            b = b - a;
        }
        return a
    }, numbers[0] === undefined ? 0: numbers[0] )
}

